import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { SHOES_URL, token } from "../utils/backend_services";

// Create ShoeContext
export const ShoeContext = createContext();

export const ShoeProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await axios.get(`${SHOES_URL}`, {
          headers: {
            Authorization: token, // Authorization header with token
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setShoes(response.data);
          setLoading(false);
          return data;
        } else {
          console.log(response);
          throw new Error("Failed to get shoes");
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  return (
    <ShoeContext.Provider value={{ shoes, loading, error }}>
      {children}
    </ShoeContext.Provider>
  );
};
