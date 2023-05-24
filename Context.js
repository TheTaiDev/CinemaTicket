import { createContext, useState } from "react";
const MoviesCards = createContext();
const MoviesContext = ({ children }) => {
  const [seats, setSeats] = useState([]);
  return (
    <MoviesCards.Provider value={{ seats, setSeats }}>
      {children}
    </MoviesCards.Provider>
  );
};
export { MoviesContext, MoviesCards };
