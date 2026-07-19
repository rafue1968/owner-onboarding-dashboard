"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Header from "../components/Header";
import data from "@/data/onboarding-data.json";
import PortfolioSummary from "@/components/PortfolioSummary";
import FilterBar from "@/components/FilterBar";
import PropertyGrid from "@/components/PropertyGrid";
import PropertyModal from "@/components/PropertyModal";
import { filterProperties, PropertyFilter } from "@/utils/filterProperties";
import { calculatePortfolioSummary } from "@/utils/calculatePortfolioSummary";
import { Property } from "@/types/onboarding";

export default function Home() {
  const ownerName = data.owner.name;
  const [filter, setFilter] = useState<PropertyFilter>("all");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const summary = calculatePortfolioSummary(data.properties);
  const filteredProperties = filterProperties(data.properties, filter);

  return (
    <div className={styles.page}>
      <Header ownerName={ownerName} />

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <PortfolioSummary summary={summary} />
          <FilterBar activeFilter={filter} setFilter={setFilter} />
          <PropertyGrid properties={filteredProperties} onSelectProperty={setSelectedProperty} />
        </div>
      </main>

      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        stepDefinitions={data.onboardingStepDefinitions}
      />
    </div>
  );
}
