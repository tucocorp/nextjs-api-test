import api from "@/api";

// const dayjs = require('dayjs-with-plugins');
import ScatterSimpleChart from "@/app/components/ScatterSimpleChart";
import Link from "next/link";

export default async function ZonePage({ params: { id } }: { params: { id: string } }) {

  await api.loadZoneData(+id);

  const zone = await api.fetchZone(+id);
  const climates = await api.fetchClimates(+id);
  const soilmoistures = await api.fetchSoilMoistures(+id);

  const climateFormattedData = []
  for(const k in climates){
    if(climates[k].stm1 != null) {
      climateFormattedData.push([climates[k].TMS, climates[k].stm1]);
    }
  }

  const soilmoistureFormattedData = []
  for(const k in soilmoistures){
    if(soilmoistures[k].smo1 != null) {
      soilmoistureFormattedData.push([soilmoistures[k].TMS, soilmoistures[k].smo1]);
    }
  }

  return (
    <section>
      <div>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" href={`/`}>Return Home</Link>
      </div>
      <br/>
      <div>Zone Name: {zone.name}</div>
      <br/>
      <div>Climates</div>
      <div className="bubblechart__wrapper">
        <ScatterSimpleChart data={climateFormattedData} />
      </div>

      <br/>
      <br/>

      <div>SoilMoistures</div>
      <div className="bubblechart__wrapper">
      <ScatterSimpleChart data={soilmoistureFormattedData} />
      </div>
    </section>
  );
}