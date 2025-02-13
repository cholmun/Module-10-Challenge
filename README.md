Collecting workspace information# 10 SQL: Employee Tracker

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. This project is a command-line application to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Mock-Up

The following video shows an example of the application being used from the command line:

[!A video thumbnail shows the command-line employee management application with a play button overlaying the view.](https://2u-20.wistia.com/medias/2lnle7xnpk)

## Getting Started

To get started, install the necessary packages:

```sh
npm install inquirer@8.2.4 pg
```

Ensure you have PostgreSQL installed and running. Create the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/100-sql-challenge-ERD.png)

## Database Schema

* `department`
  * `id`: `SERIAL PRIMARY KEY`
  * `name`: `VARCHAR(30) UNIQUE NOT NULL`

* `role`
  * `id`: `SERIAL PRIMARY KEY`
  * `title`: `VARCHAR(30) UNIQUE NOT NULL`
  * `salary`: `DECIMAL NOT NULL`
  * `department_id`: `INTEGER NOT NULL`

* `employee`
  * `id`: `SERIAL PRIMARY KEY`
  * `first_name`: `VARCHAR(30) NOT NULL`
  * `last_name`: `VARCHAR(30) NOT NULL`
  * `role_id`: `INTEGER NOT NULL`
  * `manager_id`: `INTEGER`

## Bonus

Additional functionalities to consider:

* Update employee managers.
* View employees by manager.
* View employees by department.
* Delete departments, roles, and employees.
* View the total utilized budget of a department.

## Submission

Submit the following for review:

* A walkthrough video demonstrating the functionality of the application.
* The URL of the GitHub repository, with a unique name and a README describing the project.

## Walkthrough Video



## License

This project is licensed under the MIT License.