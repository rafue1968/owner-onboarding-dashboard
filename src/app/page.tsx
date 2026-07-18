"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Header from "../components/Header";
import data from "@/data/onboarding-data.json";
import PortfolioSummary from "@/components/PortfolioSummary";
import FilterBar from "@/components/FilterBar";
import PropertyGrid from "@/components/PropertyGrid";



export default function Home() {

  

  const ownerName = data.owner.name

  // console.log(data.statusLegend);

  // data.properties.map((property) => {
  //   // console.log(property);
  //   property.steps.map((step) => {
  //     console.log(step);
  //   });
  // })

  const [filter, setFilter] = useState("all");

  const filteredProperties = filterProperties(
    data.properties,
    filter
  )


  return (
    <>
      <Header ownerName={ownerName} />

      {/* <PortfolioSummary /> */}

      <FilterBar activeFilter={filter} setFilter={setFilter} />

      <PropertyGrid properties={data.properties} />
    </>
  );
}
