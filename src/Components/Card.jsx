import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = (props) => {
  const { state, addFav } = useContext(ContextGlobal);

  const handleFav = () => {
    addFav(props.dentist);
  };

  return (
    <div className="card">
      <Link className="col" to={`detail/${props.dentist.id}`}>
        <h4>{props.dentist.name}</h4>
        <h1>{props.dentist.username}</h1>
        <p>{props.dentist.id}</p>
      </Link>
      <button onClick={handleFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
