import React from "react";

const Card = (props) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <h4>{props.dentist.name}</h4>
      <h1>{props.dentist.username}</h1>

      <p>{props.dentist.id}</p>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
