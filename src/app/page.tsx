"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Header from "../components/Header";
import data from "@/data/onboarding-data.json";
import PortfolioSummary from "@/components/PortfolioSummary";
import FilterBar from "@/components/FilterBar";
import PropertyGrid from "@/components/PropertyGrid";
import { filterProperties, PropertyFilter } from "@/utils/filterProperties";



export default function Home() {

  

  const ownerName = data.owner.name

  const [filter, setFilter] = useState<PropertyFilter>("all");

  const filteredProperties = filterProperties(
    data.properties,
    filter
  )


  return (
    <>
      <Header ownerName={ownerName} />

      {/* <PortfolioSummary /> */}

      <FilterBar activeFilter={filter} setFilter={setFilter} />

      <PropertyGrid properties={filteredProperties} />
    </>
  );
}
