"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import AddWizard from "../components/addWizard/AddWizard";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import EditWizard from "../components/editWizard/EditWizard";

export default function Wizards() {
  const [wizards, setWizards] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
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
  // useEffect(() => {
  //   const fetchWizards = async () => {
  //     const res = await fetch("/api/wizardInfo", {
  //       method: "GET",
  //     });
  //     const wizards = await res.json();
  //     console.log(wizards);
  //     setWizards(wizards);
  //   };

  //   fetchWizards();
  // }, []);

  const dummyWizardData = [
    {
      house_name: "Gryffindor",
      wizard_graduated: 1,
      wizard_name: "Harry Potter",
    },
    {
      house_name: "Hufflepuff",
      wizard_graduated: 1,
      wizard_name: "Newton Scamander",
    },
    {
      house_name: "Slytherin",
      wizard_graduated: 1,
      wizard_name: "Draco Malfoy",
    },
    {
      house_name: "Gryffindor",
      wizard_graduated: 1,
      wizard_name: "Sirius Black",
    },
    {
      house_name: "Hufflepuff",
      wizard_graduated: 1,
      wizard_name: "Nymphadora Tonks",
    },
  ];

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
              setOpenEditModal(true);
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
      (
      <div className={styles.container}>
        <h1>Hogwarts Witch & Wizards</h1>

        {dummyWizardData && (
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
                {dummyWizardData.map((wizard, index) => {
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

        {openEditModal && (
          <div className={styles.editModalContainer}>
            <div
              className={styles.closeEditModal}
              onClick={() => {
                setOpenEditModal(false);
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
      )
    </>
  );
}
