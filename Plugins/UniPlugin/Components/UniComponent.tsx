"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { exchangePrograms } from "@/common/constans";
import { ExchangeProgram } from "@/common/types";
import Globe from "globe.gl";
import earth from "../../../public/earth.jpg";
import UniversityDetailCard from "../elements/UniversityCardElement";

const UniversityComponent = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<THREE.Object3D[]>([]);
  const [modalData, setModalData] = useState<ExchangeProgram | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !globeRef.current) return;

    const world = new Globe(globeRef.current)
      .globeImageUrl(earth.src)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.3)
      .backgroundColor("rgba(255, 255, 255, 0)");

    world.globeMaterial(
      new THREE.MeshStandardMaterial({
        color: 0x00aaff,
        transparent: true,
        opacity: 0.9,
      })
    );

    const scene = world.scene();
    const camera = world.camera();
    const renderer = world.renderer();
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const loader = new GLTFLoader();

    setTimeout(() => {
      loader.load("/location.glb", (gltf) => {
        const markerModel = gltf.scene;
        markerModel.scale.set(5, 5, 5);

        exchangePrograms.forEach((program) => {
          const { lat, lng } = program.location;
          const { x, y, z } = world.getCoords(lat, lng);

          const marker = markerModel.clone(true);
          marker.position.set(x, y, z);
          marker.lookAt(0, 0, 0);

          marker.userData = program as ExchangeProgram;

          marker.traverse((child: THREE.Object3D) => {
            if ((child as THREE.Mesh).isMesh) {
              child.userData = marker.userData;
            }
          });

          scene.add(marker);
          markersRef.current.push(marker);
        });
      });
    }, 1000);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markersRef.current, true);

      if (intersects.length > 0) {
        document.body.style.cursor = "pointer";
      } else {
        document.body.style.cursor = "default";
      }
    };

    const handleClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markersRef.current, true);

      if (intersects.length > 0) {
        let clickedObject = intersects[0].object;

        while (clickedObject.parent && !clickedObject.userData.name) {
          clickedObject = clickedObject.parent;
        }
        if (clickedObject.userData) {
          setModalData(clickedObject.userData as ExchangeProgram);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      scene.clear();
      markersRef.current = [];
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div>
      <div
        ref={globeRef}
        style={{
          width: "100%",
          height: "100vh",
          background: "black",
          position: "relative",
        }}
      />
      {modalData && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1000] flex justify-center items-center"
          onClick={() => setModalData(null)}
        >
          <div
            className="w-full md:w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <UniversityDetailCard onClose={() => setModalData(null)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityComponent;
