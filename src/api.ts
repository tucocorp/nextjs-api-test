interface Zone {
  id: number;
  external_id: string
  name: string;
}

interface Climate {
  id: number;
  TMS: string;
}

interface SoilMoisture {
  id: number;
  TMS: string;
}

const DATESTART = 1547164800
const DATEEND = 1686096000

const api = {
  loadZonesData:  async () => {
    const res = await fetch(`http://localhost:8000/api/v1/zones/loadData?date_start=${DATESTART}&date_end=${DATEEND}`);

    return res;
  },

  loadZoneData:  async (id: number) => {
    await fetch(`http://localhost:8000/api/v1/climates/loadData?zone_id=${id}&date_start=${DATESTART}&date_end=${DATEEND}`);
    await fetch(`http://localhost:8000/api/v1/soilmoistures/loadData?zone_id=${id}&date_start=${DATESTART}&date_end=${DATEEND}`);

    return "OK";
  },

  listZones: async (): Promise<Zone[]> => {
    const data = await fetch(`http://localhost:8000/api/v1/zones`);
    const zones = await data.json();

    return zones;
  },

  fetchZone: async (id: Zone["id"]): Promise<Zone> => {
    const data = await fetch(`http://localhost:8000/api/v1/zones`);
    const zones = await data.json();

    const zone = zones.find((zone: { id: number }) => zone['id'] === +id);

    if (!zone) {
      throw new Error(`Zone with id ${id} not found`);
    }

    return zone;
  },

  fetchClimates: async (id: Zone["id"]): Promise<Climate> => {
    const data = await fetch(`http://localhost:8000/api/v1/climates?zone_id=${id}&date_start=${DATESTART}&date_end=${DATEEND}`);
    const climates = await data.json();

    return climates;
  },

  fetchSoilMoistures: async (id: Zone["id"]): Promise<SoilMoisture> => {
    const data = await fetch(`http://localhost:8000/api/v1/soilmoistures?zone_id=${id}&date_start=${DATESTART}&date_end=${DATEEND}`);
    const soilmoistures = await data.json();

    return soilmoistures;
  }
};

export default api;
