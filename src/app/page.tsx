import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import data from "../data/onboarding-data.json";


export default function Home() {

  const ownerName = data.owner.name

  return (
    <>
      <Header ownerName={ownerName} />
    </>
  );
}
