"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Instances() {
  return (
    <>
      <div className={styles.container}>
        <h1>Spell Instances</h1>

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

        <div className={styles.displayInstancesContainer}>
          <h3>List of Spells & Known Users:</h3>
          <table className={styles.displayInstancesTable}>
            <tbody>
              <tr>
                <th>Spell Name</th>
                <th>Wizard Name</th>
                <th>Notes</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>Ascendio</td>
                <td>Newton Scamander</td>
                <td>
                  used this spell in September 1927 on a library record column
                  in the library of the French Ministry of Magic
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Densaugeo</td>
                <td>Draco Malfoy</td>
                <td>
                  on 13 November 1994, Hermione Granger was hit by this hex from
                  Draco Malfoy&apos;s wand
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Episkey</td>
                <td>Nymphadora Tonks</td>
                <td>
                  In 1996, Tonks used this spell to fix Harry Potter&apos;s
                  broken nose
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
