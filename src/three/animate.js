import controls from "@/three/controls";
import renderer from "@/three/renderer";
import scene from "@/three/scene";
import camera from "@/three/camera";
import * as THREE from "three";

const clock = new THREE.Clock();
const animate = () => {
    controls.update();
    const time = clock.getElapsedTime();
    // console.log(time);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
export default animate;
