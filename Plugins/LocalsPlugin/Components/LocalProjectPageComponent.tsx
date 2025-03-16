"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { exchangePrograms } from "@/common/constans";
import { ExchangeProgram } from "@/common/types";
import ScholarshipCard from "@/Plugins/ExhangesPlugin/elements/ExchangeCardElement";

const MAP_IMAGE_URL = "/georgia.webp";

const convertLatLngToPosition = (lat: number, lng: number) => {
  const scale = 10;
  return {
    x: (lng - 42) * scale,
    y: 0,
    z: (lat - 42) * scale,
  };
};

const LocalPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [modalData, setModalData] = useState<ExchangeProgram | null>(null);
  const markersRef = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 20, 0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mapRef.current.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(MAP_IMAGE_URL, (texture) => {
      const aspectRatio = texture.image.width / texture.image.height;
      const geometry = new THREE.PlaneGeometry(40, 40 / aspectRatio, 50, 50);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });

      const mapMesh = new THREE.Mesh(geometry, material);
      mapMesh.rotation.x = -Math.PI / 2; // Rotate to lie flat
      scene.add(mapMesh);
    });

    const markerGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    exchangePrograms.forEach((program) => {
      const { lat, lng } = program.location;
      const { x, y, z } = convertLatLngToPosition(lat, lng);
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.set(x, y + 0.3, z); // Adjusted marker height
      marker.userData = program;
      scene.add(marker);
      markersRef.current.push(marker);
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markersRef.current, true);

      if (intersects.length > 0) {
        setModalData(intersects[0].object.userData as ExchangeProgram);
      }
    };

    window.addEventListener("click", handleClick);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("click", handleClick);
      scene.clear();
      markersRef.current = [];
    };
  }, []);

  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "100vh", position: "relative" }}
      />
      {modalData && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setModalData(null)}
        >
          <div
            className="w-full md:w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ScholarshipCard onClose={() => setModalData(null)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalPage;
