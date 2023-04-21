import React from "react";
import "./Table.css";

const Table = (props) => {
  const calculateTotalSalary = (days, salaryPerDay) => {
    return days * salaryPerDay;
  };

  const calculateTotalSalariesAllEmployees = () => {
    return employeesWithDefaultTotalSalary.reduce((total, employee) => {
      return total + employee.totalSalary;
    }, 0);
  };

  const employeesWithDefaultTotalSalary = props.employees.map((employee) => {
    const totalSalary = calculateTotalSalary(
      employee.days,
      employee.salaryPerDay
    );
    return {
      ...employee,
      totalSalary: totalSalary,
    };
  });

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Days</th>
          <th>Salary Per Day</th>
          <th>Total Salary</th>
        </tr>
        {employeesWithDefaultTotalSalary.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>
              <input
                type="number"
                value={employee.days}
                onChange={(e) => {
                  const newDays = parseInt(e.target.value);
                  const newSalary = calculateTotalSalary(
                    newDays,
                    employee.salaryPerDay
                  );
                  const updatedEmployees = [...props.employees];
                  updatedEmployees[index].days = newDays;
                  updatedEmployees[index].totalSalary = newSalary;
                  props.handleUpdateEmployees(updatedEmployees);
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={employee.salaryPerDay}
                onChange={(e) => {
                  const newSalaryPerDay = parseInt(e.target.value);
                  const newSalary = calculateTotalSalary(
                    employee.days,
                    newSalaryPerDay
                  );
                  const updatedEmployees = [...props.employees];
                  updatedEmployees[index].salaryPerDay = newSalaryPerDay;
                  updatedEmployees[index].totalSalary = newSalary;
                  props.handleUpdateEmployees(updatedEmployees);
                }}
              />
            </td>
            <td>{employee.totalSalary}</td>
          </tr>
        ))}
      </table>
      <p>
        Total Salary of All Employees: {calculateTotalSalariesAllEmployees()}
      </p>
    </div>
  );
};

export default Table;
