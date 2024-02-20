"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import AddWizard from "../components/addWizard/AddWizard";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

export default function Wizards() {
  const [wizards, setWizards] = useState([]);

  // fetch wizards on page load
  useEffect(() => {
    const fetchWizards = async () => {
      const res = await fetch("/api/wizardInfo", {
        method: "GET",
      });
      const wizards = await res.json();
      console.log(wizards);
      setWizards(wizards);
    };

    fetchWizards();
  }, []);

  const WizardRow = ({ name, house, graduated }) => {
    return (
      <React.Fragment>
        <tr>
          <td>{name}</td>
          <td>{house}</td>
          <td>{graduated ? "Yes" : "No"}</td>
          <td>
            <MdDeleteForever />
          </td>
        </tr>
      </React.Fragment>
    );
  };

  return (
    <>
      {wizards && (
        <div className={styles.container}>
          <h1>Hogwarts Witch & Wizards</h1>

          <div className={styles.displayWizardsContainer}>
            <h3>List of Witches & Wizards: </h3>

            <table className={styles.displayWizardsTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>House</th>
                  <th>Graduated?</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {wizards.map((wizard) => {
                  return (
                    <WizardRow
                      name={wizard.wizard_name}
                      house={wizard.house_name}
                      graduated={wizard.wizard_graduated}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>

          <AddWizard />
        </div>
      )}
    </>
  );
}
