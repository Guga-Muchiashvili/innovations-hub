"use client";
import { useEffect, useRef, useState } from "react";
import L, { LatLngBoundsLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import { exchangePrograms } from "@/common/constans";
import { ExchangeProgram } from "@/common/types";
import LocalDetailCard from "../elements/LocalCardElement";

const LocalPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [modalData, setModalData] = useState<ExchangeProgram | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const map = L.map(mapRef.current, {
      center: [41.7151, 44.8271],
      zoom: 8,
      maxZoom: isMobile ? 20 : 15,
      minZoom: isMobile ? 7 : 8,
      dragging: true,
      touchZoom: true,
      scrollWheelZoom: true,
    });

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          '&copy; <a href="https://www.esri.com">Esri</a> contributors',
      }
    ).addTo(map);

    const georgiaBounds = [
      [41.0, 40.0],
      [43.7, 46.7],
    ] as LatLngBoundsLiteral;
    map.setMaxBounds(georgiaBounds);

    const customIcon = L.icon({
      iconUrl: "/location.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    exchangePrograms.forEach((program) => {
      const marker = L.marker([program.location.lat, program.location.lng], {
        icon: customIcon,
      }).addTo(map);

      marker.on("click", () => {
        setModalData(program);
      });
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "calc(100vh)",
        }}
      />
      {modalData && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black  bg-opacity-50 z-[1000000] flex justify-center items-center"
          onClick={() => setModalData(null)}
        >
          <div
            className="w-full md:w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <LocalDetailCard onClose={() => setModalData(null)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalPage;
