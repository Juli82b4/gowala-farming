import React from "react";
import styles from "./employeesection.module.css";
import useEmployees from "../../hooks/useEmployees";

export const EmployeeSection = () => {
  const { employees, loading, error } = useEmployees();
  const displayedEmployees = employees.slice(0, 5);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.employeeSection}>
      <div className={styles.header}>
        <h1>Vores medarbejdere</h1>
        <span>Vi har udvalgt de bedste medarbejdere</span>
        <p>
          Her finder du et udvalg af vores dedikerede medarbejdere fra Gowala
          Farms.
        </p>
      </div>

      <div className={styles.employees}>
        {displayedEmployees.length > 0 ? (
          displayedEmployees.map((employee) => (
            <div key={employee._id} className={styles.employee}>
              <div className={styles.employeeImageWrapper}>
                <img
                  src={employee.image}
                  alt={employee.name}
                  className={styles.employeeImage}
                />
              </div>

              <div className={styles.employeeDetails}>
                <h2>{employee.name}</h2>
                <p className={styles.employeeDescription}>
                  {employee.position}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noEmployees}>
            Ingen medarbejdere tilgængelig
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeSection;
