"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Types() {
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
            <tbody>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>Transfiguration</td>
                <td>Alteration of the object&apos;s form or appearance</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Charm</td>
                <td>
                  Alteration of the objects inherent qualities i.e. its
                  behaviour and capabilities
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Jinx</td>
                <td>
                  Minor dark magic; spells whose effects were irritating but
                  amusing, almost playful and of minor inconvenience to the
                  target
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Hex</td>
                <td>
                  Consistently affected the object in a negative manner; had
                  connotations of dark magic, but more so than a jinx.
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Curse</td>
                <td>
                  The worst kind of dark magic, intended to affect the target in
                  a strongly negative manner
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Counter-spell</td>
                <td>Inhibition of the effect of another spell</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Healing spell</td>
                <td>
                  For improving the condition of a living, injured or ill target
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
