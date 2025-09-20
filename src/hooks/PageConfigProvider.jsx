import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n";

const PageConfigContext = createContext();

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getInitialConfig = () => {
  const saved = localStorage.getItem("pageConfig");
  if (saved) return JSON.parse(saved);
  return {
    theme: getSystemTheme(),
    language: "en",
  };
};

export const PageConfigProvider = ({ children }) => {
  const [pageConfig, setPageConfig] = useState(getInitialConfig);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", pageConfig.theme);
    document.querySelector("html").className = pageConfig.theme;
    i18n.changeLanguage(pageConfig.language);
    localStorage.setItem("pageConfig", JSON.stringify(pageConfig));
  }, [pageConfig]);

  const handleTheme = (e) => {
    setPageConfig((prev) => ({
      ...prev,
      theme: e.target.checked ? "dark" : "light",
    }));
  };

  const handleLanguageChange = (lng) => {
    setPageConfig((prev) => ({
      ...prev,
      language: lng,
    }));
  };

  return (
    <PageConfigContext.Provider
      value={{ pageConfig, handleTheme, handleLanguageChange }}
    >
      {children}
    </PageConfigContext.Provider>
  );
};

export const usePageConfig = () => useContext(PageConfigContext);
