import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctor from "../assets/images/doctor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Card = (props) => {
  const { state, addFav, removeFav, getFavs } = useContext(ContextGlobal);
  const location = useLocation();

  const [faved, isFaved] = useState(false);
  const [dentist, setDentist] = useState([])

  const handleFav = () => {
    addFav(props.dentist);
    isFaved(true);
  };


  useEffect(() => {
    setDentist(getFavs())
  }, []);

  const handleDeleteFav = () => {
    removeFav(props.dentist);
  };

  const isFavPage = location.pathname === "/favs";

  // CAMBIA ESTRELLA REGULAR A SOLID
  const [isSolid, setIsSolid] = useState(false);

  const handleIconClick = () => {
    setIsSolid(!isSolid);
  };

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
        onClick={isFavPage ? handleDeleteFav : handleFav} //acorte el codigo
        className="favButton"
        disabled={isFavPage ? false : faved}
      >
        <FontAwesomeIcon
          icon={isFavPage ? solidStar : regularStar}
          onClick={handleIconClick}
          style={{ color: isFavPage ? '#ffa500' : 'black' }}
        />
      </button>
    </div>
  );
};

export default Card;
