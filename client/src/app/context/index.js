"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext([]);

export function AppWrapper({ children }) {
  let [editWizardModal, setEditWizardModal] = useState(false);
  let [addWizardModal, setAddWizardModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        editWizardModal,
        setEditWizardModal,
        addWizardModal,
        setAddWizardModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
