import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Alert, Container, Button } from "@mui/material";

const CountryDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  if (error)
    return (
      <Alert severity="error">
        Ошибка при получении данных о стране: {error.message}
      </Alert>
    );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "450px",
        backgroundColor: "#222020",
        padding: "20px 50px",
        marginTop: "15px",
        borderRadius: "3px",
        width: "500px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
        sx={{  textTransform: "none",marginBottom: "20px", backgroundColor: "#fff", color: "black", maxWidth: "120px", transition: ".3s ease-in-out",  "&:hover": { backgroundColor: "black", color: "white" }}}
      >
        Назад
      </Button>

      {country && (
        <>
          <Typography sx={{ color: "white", mb: "3px" }} variant="h4">
            {country.name.common}
          </Typography>
          <Typography sx={{ color: "white", mb: "6px" }} variant="h6">
            Столица: {country.capital}
          </Typography>
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            width="200"
          />
        </>
      )}
    </Container>
  );
};

export default CountryDetail;
