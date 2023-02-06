// Custom CSS

import "./App.css";
import "./index.css";

// Components 
import Header from "./components/header";
import Main from "./components/main";
import Details from "./components/photographers/details";
import Lightbox from "./components/ligthbox/ligthbox";
import Form from "./components/contact/form";

// Required
import {Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Context
import { LigthboxProvider } from "./context/ligthbox";
import { FormProvider } from "./context/form";

function App() {

  // URL Location
  const location = useLocation();

  // Fix for delete infosbar "return homepage from photographer page"
  useEffect(() => {
    if (location.pathname === "/") {
      let infosbar = document.getElementsByClassName("infosbar");
      if (infosbar.length > 0) {
        infosbar[0].remove();
      }
    }
  }, [location]);

  return (
    <>
    <Router basename="/ocr_fischeye">
      <LigthboxProvider>
      <FormProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/photographer/:id" element={<Details />} />
          </Routes>
        </div>
        <Lightbox />
        <Form />
        </FormProvider>
      </LigthboxProvider>
      </Router>
    </>
  );
}

export default App;
