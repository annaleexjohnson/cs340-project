"use client";
import React, { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import AddWizard from "../components/addWizard/AddWizard";
import EditWizard from "../components/editWizard/EditWizard";
import { useAppContext } from "../context/index.js";

export default function Wizards() {
  const [wizards, setWizards] = useState(null);
  const { editWizardModal, setEditWizardModal } = useAppContext();
  const { addWizardModal, setAddWizardModal } = useAppContext();

  const [editName, setEditName] = useState("");
  const [editHouse, setEditHouse] = useState("");
  const [editGraduated, setEditGraduated] = useState("");
  const [loading, setLoading] = useState(false);

  // fetches wizards from route
  async function fetchWizards() {
    setLoading(true);

    await fetch("/api/getWizardsRoute", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setWizards(data.wizards);
        setLoading(false);
      });
  }

  // fetch wizards on page load and when new wizard is added
  useEffect(() => {
    fetchWizards();
  }, [addWizardModal]);

  // fetch wizards and resent form when wizard is edited
  useEffect(() => {
    resetEditForm();
    fetchWizards;
  }, [editWizardModal]);

  // row component to hold wizards
  const WizardRow = ({ name, house, graduated }) => {
    return (
      <React.Fragment>
        <tr>
          <td>{name}</td>
          <td>{house}</td>
          <td>{graduated ? "Yes" : "No"}</td>
          <td
            className={styles.editButton}
            onClick={() => {
              console.log(name, house, graduated);
              editWizardInfo(name, house, graduated);
              setEditWizardModal(true);
            }}
          >
            <MdModeEdit />
          </td>
          <td className={styles.deleteButton}>
            <MdDeleteForever />
          </td>
        </tr>
      </React.Fragment>
    );
  };

  // edit wizard function
  const editWizardInfo = (name, house, graduated) => {
    setEditName(name);
    setEditHouse(house);
    setEditGraduated(graduated);
  };

  // reset edit form
  const resetEditForm = () => {
    setEditName("");
    setEditHouse("");
    setEditGraduated("");
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Hogwarts Witch & Wizards</h1>
        {loading && <div>Loading wizards...</div>}
        {wizards && (
          <div className={styles.addWizardButton}>
            <button
              onClick={() => {
                setAddWizardModal(true);
              }}
            >
              Add Wizard
            </button>
          </div>
        )}

        {addWizardModal && (
          <div className={styles.modalContainer}>
            <AddWizard />
          </div>
        )}

        {wizards && (
          <div className={styles.displayWizardsContainer}>
            <h3>List of Witches & Wizards: </h3>

            <table className={styles.displayWizardsTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>House</th>
                  <th>Graduated?</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {wizards.map((wizard, index) => {
                  return (
                    <WizardRow
                      key={index}
                      name={wizard.wizard_name}
                      house={wizard.house_name}
                      graduated={wizard.wizard_graduated}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {editWizardModal && (
          <div className={styles.modalContainer}>
            <EditWizard
              name={editName}
              house={editHouse}
              graduated={editGraduated}
            />
          </div>
        )}
      </div>
    </>
  );
}
