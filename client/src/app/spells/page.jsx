"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import EditSpell from "../components/editSpell/EditSpell";

export default function Spells() {
  const dummySpellData = [
    {
      spell_name: "Avis",
      spell_desc: "conjuration that would produce a flock of birds",
      spell_type: "Transfiguration",
    },
    {
      spell_name: "Expelliarmus",
      spell_desc:
        "the Disarming Charm, so-called because it would change its object's (the opponent's) quality from armed to disarmed by separating them from their wand",
      spell_type: "Charm",
    },
    {
      spell_name: "Impedimenta",
      spell_desc:
        "the Impediment Jinx, which (appropriately) would impede the forward motion of an object",
      spell_type: "Jinx",
    },
  ];
  const dummyTypeData = [
    { type_name: "Transfiguration" },
    { type_name: "Charm" },
    { type_name: "Jinx" },
    { type_name: "Hex" },
    { type_name: "Curse" },
    { type_name: "Counter-spell" },
    { type_name: "Healing spell" },
  ];

  const [openEditModal, setOpenEditModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [editType, setEditType] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const editSpellInfo = (name, type, desc) => {
    setEditName(name);
    setEditType(type);
    setEditDesc(desc);
  };
  const resetEditForm = () => {
    setEditName("");
    setEditType("");
    setEditDesc("");
  };

  const SpellRow = ({ name, type, desc }) => {
    return (
      <React.Fragment>
        <tr>
          <td>{name}</td>
          <td>{type}</td>
          <td>{desc}</td>
          <td
            className={styles.editButton}
            onClick={() => {
              editSpellInfo(name, type, desc);
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

  const TypeOption = ({ name }) => {
    return (
      <React.Fragment>
        <option>{name}</option>
      </React.Fragment>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Spells</h1>

        {dummySpellData && (
          <div className={styles.displaySpellsContainer}>
            <h3>List of Spells:</h3>
            <table className={styles.displaySpellsTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Spell(s)</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {dummySpellData.map((spell, index) => {
                  return (
                    <SpellRow
                      key={index}
                      name={spell.spell_name}
                      type={spell.spell_type}
                      desc={spell.spell_desc}
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
            <EditSpell name={editName} type={editType} description={editDesc} />
          </div>
        )}

        <div className={styles.addSpellContainer}>
          <h3>Add a Spell</h3>

          <form className={styles.addSpellForm}>
            <div className={styles.addSpellInput}>
              <label>Spell Name:</label>
              <input type="text" placeholder="LeviosAH"></input>
            </div>
            <div className={styles.addSpellInput}>
              <label>Spell Type:</label>
              <select>
                {dummyTypeData.map((type, index) => {
                  return <TypeOption key={index} name={type.type_name} />;
                })}
              </select>
            </div>
            <div className={styles.addSpellInput}>
              <label>Spell Description:</label>
              <input type="text" placeholder="levitates objects"></input>
            </div>
            <button type="submit">Add Spell</button>
          </form>
        </div>
      </div>
    </>
  );
}
