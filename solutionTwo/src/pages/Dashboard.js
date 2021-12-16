import React from "react";
import ArtistsList from "../components/dashBoardComp/ArtistsList";
import Header from "../components/dashBoardComp/Header";
import Hero from "../components/dashBoardComp/Hero";

function Dashboard() {
  return (
    <>
      <Header />
      <Hero />
      <ArtistsList />
    </>
  );
}

export default Dashboard;
