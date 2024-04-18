import api from "@/api";
import ScatterSimpleChart from "@/app/components/ScatterSimpleChart";
import Link from "next/link";

export default async function ZonePage({ params: { id } }: { params: { id: string } }) {

  const zoneData = api.fetchZone(+id);
  const climatesData = api.fetchClimates(+id);
  const soilmoisturesData = api.fetchSoilMoistures(+id);

  const [zone, climates, soilmoistures] =  await Promise.all([zoneData, climatesData, soilmoisturesData]);

  const climateFormattedData: any[] = [];
  climates.forEach((climate) => {
    if(climate.tem1 != null){ climateFormattedData.push([climate.TMS, climate.tem1]) }
  });

  const soilmoistureFormattedData: any[] = []
  soilmoistures.forEach((soilmoisture) => {
    if(soilmoisture.smo1 !== null) { soilmoistureFormattedData.push([soilmoisture.TMS,  soilmoisture.smo1]) }
  })

  return (
    <section key={zone.id}>
      <div>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" href={`/`}>Return Home</Link>
      </div>
      <br/>
      <div>Zone Name: {zone.name}</div>
      <br/>
      <div>Climates (tmp1)</div>
      <div key="climates" className="bubblechart__wrapper">
        <ScatterSimpleChart data={climateFormattedData} min_value={climateFormattedData[0]} />
      </div>

      <br/>
      <br/>

      <div>SoilMoistures (smo1)</div>
      <div key="soilmoistures" className="bubblechart__wrapper">
      <ScatterSimpleChart data={soilmoistureFormattedData} min_value={soilmoistureFormattedData[0]} />
      </div>
    </section>
  );
}