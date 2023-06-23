import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state, getFavs } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);
  const [isFromLocalStorage, setIsFromLocalStorage] = useState(false);

  useEffect(() => {
    setFavs(state.data);
    setIsFromLocalStorage(true);
  }, [state.data]);

  useEffect(() => {
    getFavs();
  }, []);

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
      {isFromLocalStorage ? (
        <>
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
      ) : (
        <p>Loading favorite dentists...</p>
      )}
    </>
  );
};

export default Favs;
