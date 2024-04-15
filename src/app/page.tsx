'use client'
import api from "@/api";
import React, { useState } from "react";
import ZonesList from "./components/ZonesList";

export default async function Home() {
  const [showZones, setShow] = useState(false);
  const listZones = await api.listZones();

  async function LoadExternalData () {
    await api.loadZonesData();
    setShow(true);
  }

  return  (
    <section>
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => LoadExternalData()}>Load External Data</button>
      <br/><br/>
      { (showZones || listZones) ? <ZonesList/> : null }
    </section>
  );
}
