import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import {
  List,
  ListItemText,
  Alert,
  Container,
  ListItemButton,
} from "@mui/material";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error)
    return (
      <Alert severity="error">
        Ошибка при получении данных о странах: {error.message}
      </Alert>
    );

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <List
        sx={{
          margin: "0 auto",
          width: "450px",
          backgroundColor: "#222020",
          padding: "20px 50px",
          marginTop: "15px",
          borderRadius: "3px",
        }}
      >
        {countries.map((country) => (
          <ListItemButton
            sx={{
              display: "flex",
              textAlign: "center",
              minHeight: "150px",
              color: "black",
              backgroundColor: "#ffff",
              marginBottom: "20px",
              borderRadius: "3px",
              transition: ".3s ease-in-out",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            component={Link}
            to={`/country/${country.name.common}`}
            key={country.cca3}
          >
            <ListItemText
              primaryTypographyProps={{ fontSize: "30px", fontWeight: "300" }}
              primary={country.name.common}
            />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
};

export default CountryList;
