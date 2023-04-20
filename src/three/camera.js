import * as THREE from "three";
//初始化相机
const camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerWidth, 1, 50);
camera.position.set(0, 0, 10);
export default camera;
