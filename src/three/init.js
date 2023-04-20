//也可以封装到一个初始化函数里，每次调用即可
//监听屏幕大小发生改变
import camera from "@/three/camera";
import renderer from "@/three/renderer";

window.addEventListener("resize", () => {
    camera.aspect = window.innerHeight / window.innerWidth;
    camera.updateProjectionMatrix();
    //    更新渲染器
    renderer.setSize(window.innerHeight, window.innerWidth);
    //    设置渲染器的像素比例
    renderer.setPixelRatio(window.devicePixelRatio);
});