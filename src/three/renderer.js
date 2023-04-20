import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
//设置渲染尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
export default renderer;
