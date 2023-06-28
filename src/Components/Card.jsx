import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctor from "../assets/images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Card = (props) => {
  const { state, addFav, removeFav, getFavs } = useContext(ContextGlobal);
  const location = useLocation();

  const [faved, isFaved] = useState(false);
  const [dentists, setDentists] = useState({});

  const handleFav = () => {
    addFav({ ...props.dentist, isFav: true });
    setIsSolid(!isSolid);

    isFaved(true);
  };

  const handleDeleteFav = () => {
    removeFav(props.dentist);
  };


  useEffect(() => {
    console.log('getFavs() :>> ', getFavs());
  }, [])
  


  const isFavPage = location.pathname === "/favs";

  // CAMBIA ESTRELLA REGULAR A SOLID
  const [isSolid, setIsSolid] = useState(false);

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
        disabled={isFavPage ? false : faved}
        id="btnStar"
      >
        <FontAwesomeIcon
          icon={isSolid || props.dentist.isFav   ? solidStar : regularStar}
          style={{
            color: isSolid || props.dentist.isFav ? "#6750a4" : "black",
          }}
          id="star"
        />
      </button>
    </div>
  );
};

export default Card;
