// Demo from https://threejs.org/docs/#Manual/Introduction/Creating_a_scene
window.addEventListener('DOMContentLoaded', function() {
  // set up a scene, camera, and renderer
  var scene = new THREE.Scene();

  var fieldOfView = 75;
  var aspectRatio = window.innerWidth / window.innerHeight;
  var nearClippingPlane= 0.1;
  var farClippingPlane= 1000;
  var camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearClippingPlane, farClippingPlane);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);



  // add a box
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;


  // start the render loop
  function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  render();
});
