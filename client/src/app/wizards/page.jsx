"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import AddWizard from "../components/addWizard/AddWizard";

export default function Wizards() {
  return (
    <>
      <div className={styles.container}>
        <h1>Hogwarts Witch & Wizards</h1>

        <AddWizard />

        <div className={styles.wizardSearchContainer}>
          <h3>Search for Witch/Wizard in Database</h3>

          <form className={styles.wizardSearchForm}>
            <div>
              <label>Enter witch/wizard name:</label>
              <input type="text" placeholder="Parry Hotter"></input>
            </div>

            <button>Search</button>
          </form>
        </div>

        <div className={styles.displayWizardsContainer}>
          <h3>List of Witches & Wizards: </h3>

          <table className={styles.displayWizardsTable}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>House</th>
                <th>Graduated?</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>Harry Potter</td>
                <td>Gryffindor</td>
                <td>Yes</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Newton Scamander</td>
                <td>Hufflepuff</td>
                <td>Yes</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Draco Malfoy</td>
                <td>Slytherin</td>
                <td>Yes</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Sirius Black</td>
                <td>Gryffindor</td>
                <td>Yes</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Nymphadora Tonks</td>
                <td>Hufflepuff</td>
                <td>Yes</td>
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
