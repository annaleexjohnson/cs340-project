"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Spells() {
  return (
    <>
      <div className={styles.container}>
        <h1>Spells</h1>

        <div className={styles.spellSearchContainer}>
          <h3>Search for Spells</h3>

          <form className={styles.spellSearchForm}>
            <div>
              <label>Enter Spell Name:</label>
              <input type="text" placeholder="Wingdarium"></input>
            </div>

            <button>Search</button>
          </form>
        </div>

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
                <option value="Transfiguration">Transfiguration</option>
                <option value="Charm">Charm</option>
                <option value="Jinx">Jinx</option>
                <option value="Hex">Hex</option>
                <option value="Curse">Curse</option>
                <option value="CounterSpell">Counter-Spell</option>
                <option value="HealingSpell">Healing Spell</option>
              </select>
            </div>
            <div className={styles.addSpellInput}>
              <label>Spell Description:</label>
              <input type="text" placeholder="levitates objects"></input>
            </div>
          </form>
        </div>

        <div className={styles.displaySpellsContainer}>
          <h3>List of Spells:</h3>
          <table className={styles.displaySpellsTable}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Spell(s)</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>Avis</td>
                <td>Transfiguration</td>
                <td>conjuration that would produce a flock of birds</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Expelliarmus</td>
                <td>Charm</td>
                <td>
                  the Disarming Charm, so-called because it would change its
                  object&apos;s or the opponent&apos;s quality from armed to
                  disarmed by separating them from their wand
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Melofors</td>
                <td>Jinx</td>
                <td>encased the victim&apos;s head in a pumpkin</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Melofors</td>
                <td>Transfiguration</td>
                <td>encased the victim&apos;s head in a pumpkin</td>
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
