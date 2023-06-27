## Employee Tracker

This command-line application that allows you to manage employees, roles, and departments in a database. It provides various functionalities such as viewing employees, adding employees, updating employee roles, viewing roles, adding roles, viewing departments, and adding departments.

## Installation

To use the Employee Manager application, follow these steps:

1. Clone the repository or download the code files.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

```
npm install
```

4. Set up your database configuration in the `.env.EXAMPLE` file.
> Note: Be sure to remove the '.EXAMPLE' from the file name
5. Run the application using the following command:

```
node index.js
```

## Usage

Upon running the application, you will be presented with a menu of options to choose from. Simply select the desired action by using the arrow keys and pressing Enter.

### View All Employees

This option allows you to view all employees stored in the database. The application will fetch the data from the `employee` table and display it in a table format.

### Add Employee

Use this option to add a new employee to the database. You will be prompted to enter the employee's first name, last name, role, and manager. The application will insert the new employee into the `employee` table with the provided information.

### Update Employee Role

If you need to update the role of an existing employee, choose this option. You will be asked to select the employee whose role you want to update and then choose the new role for that employee. The application will update the `role_id` of the selected employee in the `employee` table.

### View All Roles

This option allows you to view all roles stored in the database. The application will fetch the data from the `role` table and display it in a table format.

### Add Role

To add a new role, select this option. You will be prompted to enter the role's name, salary, and department. The application will insert the new role into the `role` table with the provided information.

### View All Departments

This option displays all departments stored in the database. The application will fetch the data from the `department` table and display it in a table format.

### Add Department

Choose this option to add a new department to the database. You will be prompted to enter the department's name, and the application will insert the new department into the `department` table.

### Quit

Selecting this option will exit the application.



**For a video walkthrough click [here](https://drive.google.com/file/d/1Dp_GmTBYl49vXlaMS4JC6RqLREFaSGQA/view "drive.google.com")**

## Dependencies

The Employee Manager application relies on the following dependencies:

- inquirer: A powerful library for creating command-line interfaces.
- mysql: A MySQL client for Node.js to interact with the MySQL database.

These dependencies are automatically installed when you run `npm install`.

## Contributing

Contributions to the Employee Manager application are welcome! If you find any bugs or want to add new features, please feel free to open issues or submit pull requests to the GitHub repository.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is under the MIT License 