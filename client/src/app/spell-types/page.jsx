"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { MdDeleteForever } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

export default function Types() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const dummyTypeData = [
    {
      type_name: "Transfiguration",
      type_desc: "Alteration of the object's form or appearance",
    },
    {
      type_name: "Charm",
      type_desc:
        "Alteration of the objects inherent qualities i.e. its behaviour and capabilities",
    },
    {
      type_name: "Jinx",
      type_desc:
        "Minor dark magic; spells whose effects were irritating but amusing, almost playful and of minor inconvenience to the target",
    },
    {
      type_name: "Hex",
      type_desc:
        "Consistently affected the object in a negative manner; had connotations of dark magic, but more so than a jinx.",
    },
    {
      type_name: "Curse",
      type_desc:
        "The worst kind of dark magic, intended to affect the target in a strongly negative manner",
    },
    {
      type_name: "Counter-spell",
      type_desc: "Inhibition of the effect of another spell",
    },
    {
      type_name: "Healing spell",
      type_desc:
        "For improving the condition of a living, injured or ill target",
    },
  ];

  const TypeRow = ({ name, desc }) => {
    return (
      <React.Fragment>
        <tr>
          <td>{name}</td>
          <td>{desc}</td>
          <td>
            <MdDeleteForever />
          </td>
        </tr>
      </React.Fragment>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Spell Classification Types</h1>

        <div className={styles.addTypeContainer}>
          <h3>Add a Type</h3>
          <form className={styles.addTypeForm}>
            <div className={styles.addTypeInput}>
              <label>Type Name:</label>
              <input type="text" placeholder="charm"></input>
            </div>
            <div className={styles.addTypeInput}>
              <label>Type Description:</label>
              <input
                type="text"
                placeholder="alteration of the objects inherent qualities"
              ></input>
            </div>
            <button>Add Type</button>
          </form>
        </div>

        <div className={styles.displayTypesContainer}>
          <h3>List of Types:</h3>
          <table className={styles.displayTypesTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            {dummyTypeData.map((type, index) => {
              return (
                <TypeRow
                  key={index}
                  name={type.type_name}
                  desc={type.type_desc}
                />
              );
            })}
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
}
