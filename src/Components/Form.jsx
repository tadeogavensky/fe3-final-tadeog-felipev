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
        <label className="nombre" htmlFor="">Nombre completo</label>
        <input
          className="form-content"
          type="text"
          placeholder="Don Perez del Demonio III"
          onChange={(e) => {
            setContactInfo((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
        />

        <label className='email' htmlFor="">Email</label>
        <input
          className="form-content"
          type="text"
          placeholder="example@example.com"
          onChange={(e) => {
            setContactInfo((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />

        

        <button>Submit</button>
        {message && <p className="warning" style={{ color: message.color }}>{message.text}</p>}
      </form>
    </div>
  );
};

export default Form;
