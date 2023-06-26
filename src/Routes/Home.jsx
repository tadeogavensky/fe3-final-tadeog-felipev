import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import axios from "axios";
import { THEME } from "../assets/themes/theme"; //1

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);  //2
  const { theme } = state;  //3

  const [dentists, setDentists] = useState([]);



  const fetchDentists = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data.map((dentist) => {
        return {...dentist, isFav: false}
      })
  
      setDentists(data);
      
    });
  };

  useEffect(() => {
    fetchDentists();
    console.log('useEffect');
  }, []);

  return (
    <main className={theme === THEME.darkMode ? "dark home" : ""}>
      <h1 id="title">Home</h1>
      <div className="card-grid">
        {dentists.map((dentist, index) => (
          <Card dentist={dentist} key={index} />
        ))}
      </div>
    </main>
  );
};

export default Home;
