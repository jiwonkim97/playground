import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Three = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      const camera = new THREE.PerspectiveCamera(30, 1);
      camera.position.set(0, 0, 3);

      const loader = new GLTFLoader();
      scene.background = new THREE.Color('white');
      const light = new THREE.DirectionalLight(0xffffff, 10);
      scene.add(light);

      loader.load('/scene.gltf', object => {
        scene.add(object.scene);
        renderer.render(scene, camera);
      });
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id='canvas' width='300' height='300'></canvas>;
};

export default Three;
