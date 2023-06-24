import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctor from "../assets/images/doctor.jpg"

const Card = (props) => {
  const { state, addFav, removeFav } = useContext(ContextGlobal);
  const location = useLocation();

  const [faved, isFaved] = useState(false);

  const handleFav = () => {
    addFav(props.dentist);
    isFaved(true)
  };

  const handleDeleteFav = () => {
    removeFav(props.dentist);
  };

  const isFavPage = location.pathname === "/favs";

  return (
    <div className="card">
      <h1>{props.dentist.username}</h1>
      <img src={doctor}/>
      <h4>{props.dentist.name}</h4>
      <p>{props.dentist.id}</p>

      <Link className="col" to={`detail/${props.dentist.id}`}>
        Ir al detalle
      </Link>

      {isFavPage ? (
        <button onClick={handleDeleteFav} className="favButton">
          Delete Fav
        </button>
      ) : (
        <button onClick={handleFav} className="favButton" disabled={faved}>
          Add Fav
        </button>
      )}
    </div>
  );
};

export default Card;
