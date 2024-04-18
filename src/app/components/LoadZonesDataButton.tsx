'use client'
import api from "@/api";
import { useRouter } from 'next/navigation';

function LoadZonesDataButton() {
  const router = useRouter();
    return (
      <section>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={async () => {
            api.loadZonesData().then(() => {
              router.refresh();
            })
          }}
        >
          Load External Data
        </button>
      </section>

    );
  }

  export default LoadZonesDataButton