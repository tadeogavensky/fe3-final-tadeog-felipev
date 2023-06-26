import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);
  const [isFromLocalStorage, setIsFromLocalStorage] = useState(false);

  useEffect(() => {
    if (state.favs) {
      setFavs(state.favs);
      setIsFromLocalStorage(true);
    }
  }, [state.favs]);

  if (!isFromLocalStorage) {
    return <p>Loading favorite dentists...</p>;
  }

  return (
    <>
      <div className="row center-row">
        <h1 style={{ marginRight: 40 }}>Dentists Favs</h1>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Clear Favs
        </button>
      </div>
      {favs.length > 0 ? (
        <div className="card-grid">
          {favs.map((dentist) => (
            <Card dentist={dentist} key={dentist.id} />
          ))}
        </div>
      ) : (
        <p>No favorite dentists available.</p>
      )}
    </>
  );
};

export default Favs;
