import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const [dentists, setDentists] = useState([]);

  const fetchDentists = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setDentists(res.data);
    });
  };

  useEffect(() => {
    fetchDentists();
  }, []);

  return (
    <main className="">
    <h1>Home</h1>
    <div className="card-grid">
      {dentists.map((dentist, index) => (
        <Card dentist={dentist} key={index} />
      ))}
    </div>
  </main>
  );
};

export default Home;
