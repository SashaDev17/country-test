import React from "react";

import { Routes, Route } from "react-router-dom";

import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
