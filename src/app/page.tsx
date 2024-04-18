import React from "react";
import ZonesList from "./components/ZonesList";
import LoadZonesDataButton from "./components/LoadZonesDataButton";


export default function Home() {

  return  (
    <section>
      <LoadZonesDataButton/>
      <br/><br/>
      <ZonesList/>
    </section>
  );
}