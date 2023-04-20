import { OrbitControls } from "three/addons/controls/OrbitControls";
import camera from "@/three/camera";
import renderer from "@/three/renderer";

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

export default controls;
