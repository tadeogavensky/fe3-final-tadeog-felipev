import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctor from "../assets/images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Card = (props) => {
  const { addFav, removeFav} = useContext(ContextGlobal);

  const location = useLocation();

  const [faved, isFaved] = useState(false);

  useEffect(() => {
    setIsSolid(props.dentist.isFav);
  }, [props.dentist.isFav]);

  const favs = JSON.parse(localStorage.getItem("favData")) || [];

  useEffect(() => {
    if (favs) {
      const isDentistFav = favs.some((fav) => fav.id === props.dentist.id);
      isFaved(isDentistFav);
    }
  }, [props.dentist.id, favs]);

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

      {!isFavPage ? (
        <button
          onClick={handleFav}
          className="favButton"
          id="btnStar"
          disabled={faved}
        >
          <FontAwesomeIcon
            icon={isSolid || faved ? solidStar : regularStar}
            style={{
              color: isSolid || props.dentist.isFav ? "#6750a4" : "black",
            }}
            id="star"
          />
        </button>
      ) : (
        <button
          onClick={isFavPage ? handleDeleteFav : handleFav}
          className="favButton"
          id="btnStar"
        >
          <FontAwesomeIcon
            icon={isSolid ? solidStar : regularStar}
            style={{ color: isSolid ? "#6750a4" : "black" }}
            id="star"
          />
        </button>
      )}
    </div>
  );
};

export default Card;
