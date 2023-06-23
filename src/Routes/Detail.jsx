import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const [dentist, setDentist] = useState({});

  const { id } = useParams();

  const fetchDentistByID = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDentist(res.data);
      });
  };

  useEffect(() => {
    fetchDentistByID();
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{dentist.name}</h2>
      <h1>{dentist.username}</h1>
      <p>{dentist.email}</p>
      <p>{dentist.phone}</p>
    </>
  );
};

export default Detail;
