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
  const [editName, setEditName] = useState("");
  const [editHouse, setEditHouse] = useState("");
  const [editGraduated, setEditGraduated] = useState("");

  const editWizardInfo = (name, house, graduated) => {
    setEditName(name);
    setEditHouse(house);
    setEditGraduated(graduated);
  };
  const resetEditForm = () => {
    setEditName("");
    setEditHouse("");
    setEditGraduated("");
  };

  // fetch wizards on page load
  useEffect(() => {
    async function fetchWizards() {
      await fetch("/api/wizardInfo", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setWizards(data.wizards));
    }

    fetchWizards();
  }, [editWizardModal]);

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

  return (
    <>
      <div className={styles.container}>
        <h1>Hogwarts Witch & Wizards</h1>

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
          <div className={styles.editModalContainer}>
            <div
              className={styles.closeEditModal}
              onClick={() => {
                setEditWizardModal(false);
                resetEditForm();
              }}
            >
              <IoIosCloseCircle />
            </div>
            <EditWizard
              name={editName}
              house={editHouse}
              graduated={editGraduated}
            />
          </div>
        )}

        <AddWizard />
      </div>
    </>
  );
}
