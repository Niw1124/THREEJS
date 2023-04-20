<template>
    <div class="scene" ref="sceneDiv"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import gsap from "gsap";
//导入场景
import scene from "@/three/scene";
//导入相机
import camera from "@/three/camera";
//导入gui对象
import gui from "@/three/gui";
//导入controls对象
import controls from "@/three/controls";
//导入renderer对象
import renderer from "@/three/renderer";
//导入坐标轴
import axesHelper from "@/three/axesHelper";
//导入每一帧的animate函数
import animate from "@/three/animate";
//初始化调整屏幕
import "@/three/init";

scene.add(camera);
scene.add(controls);
scene.add(axesHelper);

//物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: "#ff0000"
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//场景元素div
let sceneDiv = ref(null);
onMounted(() => {
    // console.log(sceneDiv.value)
    sceneDiv.value.appendChild(renderer.domElement);
    animate();
});


//添加物体的函数
const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(20, 20), new THREE.MeshBasicMaterial());
plane.position.set(0, 0, -6);
plane.receiveShadow = true;
scene.add(plane);
</script>

<style scoped lang="scss">


.scene {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
}
</style>
