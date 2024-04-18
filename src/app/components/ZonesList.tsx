import Link from "next/link";
import api from "@/api";
import React from "react";

async function ZonesList() {
  const zones = await api.listZones();

  return (
    <section key="listzones" className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      { zones.map((zone: any) => {
        return (
          <div key={zone.id} className="zone__wrapper">
            <Link href={`/zones/${zone.id}`} key={zone.id}>
              <div>id: {zone.id}</div>
              <div>Name: {zone.name}</div>
              <div>External_id: {zone.external_id}</div>
              <div>Soil Type: {zone.soiltype}</div>
            </Link>
          </div>
        );
      })}
    </section>
  )
}

export default ZonesList
