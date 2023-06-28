import React from "react";
import Form from "../Components/Form";
import axios from "axios";
import { THEME } from "../assets/themes/theme"; //1

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <main>
      <h1 className="title">Contacto</h1>
      <div className="contact">
        <div className="contact-container">
          <h2>Want to know more?</h2>
          <p>Send us your questions and we will contact you</p>
          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
