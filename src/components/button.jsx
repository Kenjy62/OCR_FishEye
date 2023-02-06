import { useContext, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FormContext } from "../context/form";

function Button() {
  const { isOpen, toggleForm } = useContext(FormContext);

  const formButton = useRef(null);

  useEffect(() => {
    formButton.current.addEventListener("keypress", toggleContact);

    return () => {
      if (formButton.current) {
        formButton.current.removeEventListener("keypress", toggleContact);
      }
    };
  }, []);

  const toggleContact = (e) => {
    if (e.key === "Enter") {
      toggleForm(e);
      setTimeout(() => {
        document.getElementById("closeForm").focus();
      }, 0);
    }
  };

  return (
    <button
      ref={formButton}
      role="button"
      tabIndex="0"
      id="openForm"
      aria-label="Open Contact Form"
      className="cursor-pointer font-medium px-10 py-4 rounded-md bg-fePrimary text-white hover:bg-feSecondary hover:text-black"
      onClick={(e) => {
        toggleForm(e);
      }}
    >
      Contactez-moi
    </button>
  );
}

export default Button;
