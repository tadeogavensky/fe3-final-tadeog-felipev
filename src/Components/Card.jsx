import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctor from "../assets/images/doctor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Card = (props) => {
  const { addFav, removeFav, getFavs } = useContext(ContextGlobal);

  const location = useLocation();

  const [faved, isFaved] = useState(false);

  const handleFav = () => {
    addFav({ ...props.dentist, isFav: true });
    isFaved(true);
  };

  const handleDeleteFav = () => {
    removeFav(props.dentist.id);
  };

  const isFavPage = location.pathname === "/favs";

  const [isSolid, setIsSolid] = useState(props.dentist.isFav);

  return (
    <div className="card">
      <h1>{props.dentist.username}</h1>
      <img src={doctor} alt="dentist-img" />
      <h4>{props.dentist.name}</h4>
      <p>{props.dentist.id}</p>

      <Link className="col" to={`detail/${props.dentist.id}`} id="detail-link">
        Ir al detalle
      </Link>

      <button
        onClick={isFavPage ? handleDeleteFav : handleFav}
        className="favButton"
        /*  disabled={isFavPage || props.dentist.isFav} */
        id="btnStar"
      >
        <FontAwesomeIcon
          icon={isSolid || props.dentist.isFav ? solidStar : regularStar}
          style={{
            color: isSolid || props.dentist.isFav ? "#ffa500" : "black",
          }}
          id="star"
        />
      </button>
    </div>
  );
};

export default Card;
