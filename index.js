const inquirer = require('inquirer');
const db = require('./db/connection');

const mainMenu = () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ]).then(answer => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          db.end();
          break;
      }
    });
  };
  
  const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
      if (err) throw err;
      console.table(res.rows);
      mainMenu();
    });
  };
  
  const viewAllRoles = () => {
    db.query('SELECT * FROM role', (err, res) => {
      if (err) throw err;
      console.table(res.rows);
      mainMenu();
    });
  };
  
  const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', (err, res) => {
      if (err) throw err;
      console.table(res.rows);
      mainMenu();
    });
  };
  
  const addDepartment = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:'
      }
    ]).then(answer => {
      db.query('INSERT INTO department (name) VALUES ($1)', [answer.name], (err, res) => {
        if (err) throw err;
        console.log('Department added successfully!');
        mainMenu();
      });
    });
  };
  
  const addRole = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the role:'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary of the role:'
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'Enter the department ID for the role:'
      }
    ]).then(answer => {
      db.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [answer.title, answer.salary, answer.department_id], (err, res) => {
        if (err) throw err;
        console.log('Role added successfully!');
        mainMenu();
      });
    });
  };
  
  const addEmployee = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Enter the first name of the employee:'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Enter the last name of the employee:'
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'Enter the role ID for the employee:'
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'Enter the manager ID for the employee (leave blank if none):'
      }
    ]).then(answer => {
      const manager_id = answer.manager_id ? answer.manager_id : null;
      db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [answer.first_name, answer.last_name, answer.role_id, manager_id], (err, res) => {
        if (err) throw err;
        console.log('Employee added successfully!');
        mainMenu();
      });
    });
  };
  
  const updateEmployeeRole = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'employee_id',
        message: 'Enter the ID of the employee to update:'
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'Enter the new role ID for the employee:'
      }
    ]).then(answer => {
      db.query('UPDATE employee SET role_id = $1 WHERE id = $2', [answer.role_id, answer.employee_id], (err, res) => {
        if (err) throw err;
        console.log('Employee role updated successfully!');
        mainMenu();
      });
    });
  };
  
  mainMenu();