console.log(THREE);
//We need to create a scene
    //scene is like a container
    //we put object, models and lights etc in it
    //at some point, we ask three.js to render that scene
//creating scene

const scene = new THREE.Scene()

//we need to create an object now
// object can be many thing like
    //primitive geometries
    //imported models
    //particles
    //lights

//starting with a simple red cube as an object

//to create a visible object, we need to create a mesh
//MESH
//Mesh is a combination of geometry(shape) and a material(how it looks)
//Starting with BoxGeometry and MeshBasicMaterial

//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Camera
//not visible
//serves as a point of view when doing a render
//can have multiple switch between them
//different types
//Using perspective camera below

//Sizes
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//RENDERER
//Render the scene from the camera point of view
//result drawn into the canvas
// A canvas is an HTML element in which you can draw stuff
//threejs will use WebGL to draw or render inside this canvas

//RENDERER

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
    //we can also write like 
    //canvas because in this property, key value name is same
});

renderer.setSize(sizes.width , sizes.height);

renderer.render(scene, camera);