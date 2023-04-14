import * as THREE from 'three'

console.log(THREE);
//We need to create a scene
    //scene is like a container
    //we put object, models and lights etc in it
    //at some point, we ask three.js to render that scene
//creating scene

const scene = new THREE.Scene()


//Grouping multiple objects

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

cube1.position.x = -2;

group.add(cube1);
group.add(cube2);

group.scale.y = 2;
group.rotation.y = 1;

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

//Below code should be before renderer.render
//mesh.position.y = 1;
//mesh.position.z = 1;
//mesh.position.z = 1;
//doinf the above with one life of code below
mesh.position.set(0.5, -0.5, 0.2);
scene.add(mesh);
//mesh.position.normalize();

//Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// console.log(mesh.position.length()); //from center to object

// Scale
//mesh.scale.x = 2;
mesh.scale.set(1, 0.5, 0.5);
//default for above is one

//you can reorder before changing the rotation
//mesh.rotation.reorder('YXZ');
mesh.rotation.y = Math.PI/2;

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
camera.position.z = 5;
camera.position.y = 1;
scene.add(camera);

//camera.lookAt(new THREE.Vector3(3,0,0));
// camera.lookAt(mesh.position);
// console.log(mesh.position.distanceTo(camera.position)); // from camera to object

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