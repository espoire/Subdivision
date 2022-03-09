import "./overrides/JsExtensions.js";
import "./overrides/ThreeExtensions.js";
import Initializer from "./3d/init/Initializer.js";
import RegularPolyhedron from "./3d/geom/RegularPolyhedron.js";

const animationManager = Initializer.getRenderingManager();

const d20geometry = RegularPolyhedron.getIcosahedronGeometry();
const goldMaterial = new THREE.MeshPhysicalMaterial({
  color: '#FF0',
  reflectivity: 0.5,
  clearcoat: 0.2,
  roughness: 0.2,
  metalness: 0.8,

  wireframe: true,
});

const d20mesh = new THREE.Mesh(
  d20geometry,
  goldMaterial
);

animationManager.scene.add(d20mesh);

animationManager.display();