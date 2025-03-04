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
        <h1>Vores hold</h1>
        <span>
          2000+ ansatte <br /> siden 1975
        </span>
        <p>
          De ansatte på Gowala Farms er passionerede fagfolk, der med omsorg og
          ekspertise sikrer sunde dyr og produkter af højeste kvalitet.
        </p>
      </div>

      <div className={styles.employees}>
        {displayedEmployees.length > 0 ? (
          displayedEmployees.map((employee, index) => (
            <div key={employee._id} className={styles.employeeCard}>
              <div className={styles.employeeImageWrapper}>
                <img
                  src={employee.image}
                  alt={employee.name}
                  className={styles.employeeImage}
                />
                <div className={styles.employeeOverlay}>
                  {index === 0 ? (
                    <p className={styles.employeeText}>{employee.text}</p>
                  ) : null}
                  <h2 className={styles.employeeName}>{employee.name}</h2>
                </div>
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
