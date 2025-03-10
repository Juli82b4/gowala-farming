// Import React library for building UI components
import React from "react";

// Import CSS module for styling
import styles from "./employeesection.module.css";

// Import custom hook to fetch employee data
import useEmployees from "../../hooks/useEmployees";

// Define EmployeeSection component
export const EmployeeSection = () => {
  // Retrieve employees, loading state, and error state from the custom hook
  const { employees, loading, error } = useEmployees();

  // Slice the employees array to display only the first 5 employees
  const displayedEmployees = employees.slice(0, 5);

  // Display a loading message while data is being fetched
  if (loading) return <div>Loading...</div>;

  // Display an error message if fetching data fails
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.employeeSection}>
      <div className={styles.header}>
        <h1>Vores hold</h1>
        <span>
          2000+ ansatte siden 1975
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
