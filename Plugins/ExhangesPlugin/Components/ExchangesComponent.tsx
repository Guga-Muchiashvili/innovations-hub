"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { exchangePrograms } from "@/common/constans";
import { ExchangeProgram } from "@/common/types";
import Globe from "globe.gl";

const ExchangePage = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  const [modalData, setModalData] = useState<ExchangeProgram | null>(null);
  const markersRef = useRef<THREE.Object3D[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !globeRef.current) return; // Make sure this only runs in the browser

    const world = new Globe(globeRef.current)
      .globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      )
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
      } else {
        setModalData(null);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      scene.clear();
      markersRef.current = [];
    };
  }, []); // Make sure this useEffect only runs once, after the first render

  return (
    <div>
      <div
        ref={globeRef}
        style={{ width: "100%", height: "100vh", background: "black" }}
      />
      {modalData && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            maxHeight: "80vh",
            overflowY: "auto",
            width: "300px",
          }}
        >
          <h2>{modalData.name}</h2>
          <p>
            <strong>Age:</strong> {modalData.age || "N/A"}
          </p>
          <p>
            <strong>Finance Type:</strong> {modalData.financeType || "N/A"}
          </p>
          <p>
            <strong>Money Amount:</strong> {modalData.moneyAmount || "N/A"}
          </p>
          <p>
            <strong>Period:</strong> {modalData.period || "N/A"}
          </p>
          <p>
            <strong>Sending Organisation:</strong>{" "}
            {modalData.sendingOrganisation || "N/A"}
          </p>
          <p>
            <strong>Hosting Organisation:</strong>{" "}
            {modalData.hostingOrganisation || "N/A"}
          </p>
          <p>
            <strong>Form Deadline:</strong> {modalData.formDedline || "N/A"}
          </p>
          <p>
            <strong>Send Date:</strong> {modalData.sendDate || "N/A"}
          </p>
          <p>
            <strong>Back Date:</strong> {modalData.backDate || "N/A"}
          </p>
          <p>
            <strong>Registration Form:</strong>{" "}
            {modalData.registrationForm || "N/A"}
          </p>
          <p>
            <strong>Description:</strong> {modalData.description || "N/A"}
          </p>
          <p>
            <strong>Country:</strong> {modalData.country || "N/A"}
          </p>
          <p>
            <strong>Criteriums:</strong> {modalData.criteriums || "N/A"}
          </p>
          <p>
            <strong>Scholarship Description:</strong>{" "}
            {modalData.ScolarshipDescription || "N/A"}
          </p>
          <p>
            <strong>Is Not Sponsored:</strong>{" "}
            {modalData.isNotSponsored ? "Yes" : "No"}
          </p>
          <p>
            <strong>Additional Info:</strong>{" "}
            {modalData.additionalInfo || "N/A"}
          </p>
          <button onClick={() => setModalData(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ExchangePage;
