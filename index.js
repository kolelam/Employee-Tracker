// Packages
const inquirer = require('inquirer');
const db = require('./config');


console.log(`
====================================================

                   Employee Manager

====================================================
`)


const promptQuestions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'answer',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ]
    }
];

const viewAllEmployees = function(){
    const sqlQuery = `SELECT * FROM employee`;
    let params = [];
    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log('\n');
        console.table(result);
        console.log('\n');
        prompt();
    });
}
const addEmployee = function(){
    let sqlQuery = `SELECT id, CONCAT(first_name, ' ', last_name) as 'name' FROM employee`;
    let params = [];
    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        const managerNames = ['None'];
        const managerObj = {None: null};
        result.forEach((manager) => {
            managerNames.push(manager.name);
            managerObj[manager.name] = manager.id
        });
        let sqlQuery = `SELECT * FROM role`;
        let params = [];
        db.query(sqlQuery, params, (err, result) => {
            if (err) {
                console.log(err);
                return err;
            }
            const roleNames = [];
            const roleObj = {};
            result.forEach((role) => {
                roleNames.push(role.title);
                roleObj[role.title] = role.id
            });
            inquirer.prompt([
                {
                    message: "What is the employee's first name?",
                    name: 'firstName',
                },
                {
                    message: "What is the employee's last name?",
                    name: 'lastName',
                },
                {
                    type: 'list',
                    message: "What is the employee's role?",
                    name: 'role',
                    choices: roleNames
                },
                {
                    type: 'list',
                    message: "Who is the employee's manager?",
                    name: 'manager',
                    choices: managerNames
                }, 
            ]).then((data) => {
                const sqlQuery = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`;
                let params = [data.firstName, data.lastName, roleObj[data.role], managerObj[data.manager]];
                db.query(sqlQuery, params, (err, result) => {
                    if (err) {
                        console.log(err);
                        return err;
                    }
                    console.log('\n');
                    console.log(`Added ${data.firstName} ${data.lastName} to the database`);
                    console.log('\n');
                    prompt();
                });
            });
        });
    });
}
const updateEmployeeRole = function(){
    let sqlQuery = `SELECT id, CONCAT(first_name, ' ', last_name) as 'name' FROM employee`;
    let params = [];
    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        const employeeNames = [];
        const employeeObj = {};
        result.forEach((employee) => {
            employeeNames.push(employee.name);
            employeeObj[employee.name] = employee.id
        });
        let sqlQuery = `SELECT * FROM role`;
        let params = [];
        db.query(sqlQuery, params, (err, result) => {
            if (err) {
                console.log(err);
                return err;
            }
            const roleNames = [];
            const roleObj = {};
            result.forEach((role) => {
                roleNames.push(role.title);
                roleObj[role.title] = role.id
            });
            inquirer.prompt([
                {
                    type: 'list',
                    message: "Which employee's role do you want to update?",
                    name: 'employee',
                    choices: employeeNames
                }, 
                {
                    type: 'list',
                    message: "Which role do you want to assign to the selected employee?",
                    name: 'role',
                    choices: roleNames
                },
            ]).then((data) => {
                const sqlQuery = `UPDATE employee SET role_id = ? WHERE id = ?`;
                let params = [roleObj[data.role], employeeObj[data.employee]];
                db.query(sqlQuery, params, (err, result) => {
                    if (err) {
                        console.log(err);
                        return err;
                    }
                    console.log('\n');
                    console.log(`Updated employee's role`);
                    console.log('\n');
                    prompt();
                });
            });
        });
    });
}
const viewAllRoles = function(){
    const sqlQuery = `SELECT * FROM role`;
    let params = [];
    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log('\n');
        console.table(result);
        console.log('\n');
        prompt();
    });
}