export default class RegularPolyhedron {
  static getIcosahedronGeometry() {
      const verts = [];
      
      verts.push(0, 0, 1); // Top apex

      const degreesToRadian = Math.PI / 180;
      const radius = 0.5 / Math.cos(54 * degreesToRadian);
      const altitude = Math.sin(
        Math.acos(radius)
      );

      // Top pentagonal ring
      for(let i = 0; i < 5; i++) {
        const anglePer = 360 / 5 * degreesToRadian;
        const angle = anglePer * i;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = 1 - altitude;

        verts.push(x, y, z);
      }

      // Bottom pentagonal ring
      for(let i = 0; i < 5; i++) {
        const anglePer = 360 / 5 * degreesToRadian;
        const bottomOffset = 36 * degreesToRadian;
        const angle = anglePer * i + bottomOffset;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = -1 + altitude;

        verts.push(x, y, z);
      }

      // Bottom apex
      verts.push(0, 0, -1);
      console.log(verts);

      const index = [];

      index.push(
        // Top 5
        0, 1, 2,
        0, 2, 3,
        0, 3, 4,
        0, 4, 5,
        0, 5, 1,

        // Middle 10
        1, 2, 6,
        2, 6, 7,
        2, 3, 7,
        3, 7, 8,
        3, 4, 8,
        4, 8, 9,
        4, 5, 9,
        5, 9, 10,
        5, 1, 10,
        1, 10, 6,

        // Bottom 5
        11, 7, 6,
        11, 8, 7,
        11, 9, 8,
        11, 10, 9,
        11, 6, 10,
      )

      const geometry = new THREE.BufferGeometry();
      
      geometry.setIndex(index);
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      geometry.computeVertexNormals();

      return geometry;
  }
}