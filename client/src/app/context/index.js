"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext([]);

export function AppWrapper({ children }) {
  let [editWizardModal, setEditWizardModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        editWizardModal,
        setEditWizardModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
