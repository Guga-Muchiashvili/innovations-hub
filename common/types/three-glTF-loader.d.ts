// src/types/three-glTF-loader.d.ts
declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Object3D, AnimationClip, Camera } from "three";

  export class GLTFLoader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (error: ErrorEvent) => void
    ): void;
  }

  export interface GLTF {
    scene: Object3D;
    animations: AnimationClip[];
    scenes: Object3D[];
    cameras: Camera[];
    asset: GLTFAsset;
  }

  export interface GLTFAsset {
    generator: string;
    version: string;
    copyright?: string;
    minVersion?: string;
  }
}
