import React, { useState } from "react";

const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
  });

  const [message, setMessage] = useState({ text: "", color: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleForm = (e) => {
    e.preventDefault();
    if (
      contactInfo.name.length <= 5 ||
      emailRegex.test(contactInfo.email) === false
    ) {
      setMessage({
        text: "Por favor verifique su información nuevamente",
        color: "red",
      });
      return;
    } else {
      setMessage({
        text: `Gracias ${contactInfo.name}, te contactaremos cuanto antes vía mail`,
        color: "green",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="">Nombre completo</label>
        <input
          type="text"
          placeholder="Don Perez del Demonio III"
          onChange={(e) => {
            setContactInfo((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="example@example.com"
          onChange={(e) => {
            setContactInfo((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />

        {message && <p style={{ color: message.color }}>{message.text}</p>}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
