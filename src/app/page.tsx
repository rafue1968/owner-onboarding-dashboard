import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import data from "@/data/onboarding-data.json";
import PortfolioSummary from "@/components/PortfolioSummary";
import FilterBar from "@/components/FilterBar";
import PropertyGrid from "@/components/PropertyGrid";



export default function Home() {

  const ownerName = data.owner.name

  console.log(data.statusLegend);

  // data.properties.map((property) => {
  //   // console.log(property);
  //   property.steps.map((step) => {
  //     console.log(step);
  //   });
  // })



  return (
    <>
      <Header ownerName={ownerName} />

      {/* <PortfolioSummary /> */}

      {/* <FilterBar /> */}

      <PropertyGrid property={data.properties[0]} />
    </>
  );
}
