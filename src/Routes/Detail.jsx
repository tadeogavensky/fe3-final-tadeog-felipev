import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
 
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
