"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import EditInstance from "../components/editInstance/EditInstance";

export default function Instances() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editSpellName, setEditSpellName] = useState("");
  const [editSpellWizard, setEditSpellWizard] = useState("");
  const [editNotes, setEditNotes] = useState("");

  const editInstanceInfo = (spell, wizard, notes) => {
    setEditSpellName(spell);
    setEditSpellWizard(wizard);
    setEditNotes(notes);
  };
  const resetEditForm = () => {
    setEditSpellName("");
    setEditWizardName("");
    setEditNotes("");
  };

  const dummyInstanceData = [
    {
      spell: "Ascendio",
      wizard: "Newton Scamander",
      notes:
        "used this spell in September 1927 on a library record column in the library of the French Ministry of Magic",
    },
    {
      spell: "Densaugeo",
      wizard: "Draco Malfoy",
      notes:
        "on 13 November 1994, Hermione Granger was hit by this hex from Draco Malfoy's wand",
    },
    {
      spell: "Episkey",
      wizard: "Nymphadora Tonks",
      notes: "In 1996, Tonks used this spell to fix Harry Potter's broken nose",
    },
  ];

  const InstanceRow = ({ spell, wizard, notes }) => {
    return (
      <React.Fragment>
        <tr>
          <td>{spell}</td>
          <td>{wizard}</td>
          <td>{notes}</td>
          <td
            className={styles.editButton}
            onClick={() => {
              editInstanceInfo(spell, wizard, notes);
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
      <div className={styles.container}>
        <h1>Spell Instances</h1>

        <div className={styles.displayInstancesContainer}>
          <h3>List of Spells & Known Users:</h3>
          <table className={styles.displayInstancesTable}>
            <thead>
              <tr>
                <th>Spell Name</th>
                <th>Wizard Name</th>
                <th>Notes</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {dummyInstanceData.map((instance) => {
                return (
                  <InstanceRow
                    spell={instance.spell}
                    wizard={instance.wizard}
                    notes={instance.notes}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

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
            <EditInstance
              spellName={editSpellName}
              wizardName={editSpellWizard}
              notes={editNotes}
            />
          </div>
        )}

        <div className={styles.addInstanceContainer}>
          <h3>Add a Spell Instance</h3>

          <form className={styles.addInstanceForm}>
            <div className={styles.addInstanceInput}>
              <label>Spell Name:</label>
              <input type="text" placeholder="LeviOHsa"></input>
            </div>
            <div className={styles.addInstanceInput}>
              <label>Wizard First Name:</label>
              <input type="text" placeholder="Won"></input>
            </div>
            <div className={styles.addInstanceInput}>
              <label>Wizard Last Name:</label>
              <input type="text" placeholder="Reasly"></input>
            </div>
            <div className={styles.addInstanceInput}>
              <label>Notes (Optional):</label>
              <input type="text" placeholder="looked really cool"></input>
            </div>
            <button>Add Spell Instance</button>
          </form>
        </div>
      </div>
    </>
  );
}
