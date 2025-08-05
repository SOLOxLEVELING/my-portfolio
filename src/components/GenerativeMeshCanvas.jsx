import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector2 } from "three";
// CHANGED: We now import our local file. Note the relative path.
import SimplexNoise from "../utils/simplex-noise.js";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const WavingMesh = () => {
  const geometryRef = useRef();
  const materialRef = useRef();

  // CHANGED: We can now use `new SimplexNoise()` simply and cleanly.
  const simplex = useMemo(() => new SimplexNoise(), []);

  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();
    const positions = geometryRef.current.attributes.position;
    const count = positions.count;

    for (let i = 0; i < count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      // --- NEW: FBM (Fractal Brownian Motion) for detailed waves ---

      let noise = 0;
      let amplitude = 1.0; // Controls the height of the waves
      let frequency = 0.1; // Controls the scale/zoom of the waves
      const octaves = 4; // The number of noise layers to combine

      for (let j = 0; j < octaves; j++) {
        // The magic is here: time is added to x and y to make the waves travel
        const waveX = x * frequency + time * 0.1;
        const waveY = y * frequency + time * 0.1;

        noise += simplex.noise2D(waveX, waveY) * amplitude;

        // For each octave, we make the waves smaller (higher frequency) and less powerful (lower amplitude)
        frequency *= 2.0;
        amplitude *= 0.5;
      }

      positions.setZ(i, noise);
    }

    positions.needsUpdate = true;
    materialRef.current.uniforms.uTime.value = time;
    materialRef.current.uniforms.uMouse.value.set(mouse.x, mouse.y);
  });

  // --- No changes are needed in the shaders ---
  const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying float vHeight;

  void main() {
    vec3 pos = position;

    // --- MOUSE INTERACTION (keep this as is) ---
    float distToMouse = distance(vec2(pos.x, pos.y), uMouse * 5.0);
    pos.z += smoothstep(1.0, 0.0, distToMouse) * 0.5;

    // --- NEW: UI "VALLEY" EFFECT ---
    // Calculate distance from the vertex to the center of the UI text block
    float distToCenter = distance(vec2(pos.x, pos.y), vec2(0.0, 0.0));
    // Create a gentle, wide depression in the center
    // The '0.8' controls the size of the valley. The '-0.4' is its depth.
    pos.z += smoothstep(0.8, 0.0, distToCenter) * -0.4;


    vHeight = pos.z; // Pass the final height to the fragment shader
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

  const fragmentShader = `
    varying float vHeight;

    void main() {
      vec3 color1 = vec3(0.0, 0.8, 0.8);
      vec3 color2 = vec3(0.8, 0.0, 0.8);
      vec3 finalColor = mix(color1, color2, vHeight * 2.0 + 0.5);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  return (
    <mesh rotation={[-Math.PI / 2.3, 0, 0]}>
      <planeGeometry ref={geometryRef} args={[10, 10, 100, 100]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        wireframe={true}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new Vector2(0, 0) },
        }}
      />
    </mesh>
  );
};

const GenerativeMeshCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 1, 4] }}>
      <color attach="background" args={["#0a0a0a"]} />
      <WavingMesh />

      {/* NEW: Add the Bloom post-processing effect */}
      <EffectComposer>
        <Bloom
          intensity={0.7} // The bloom intensity.
          luminanceThreshold={0.1} // Only objects brighter than this will bloom.
          luminanceSmoothing={0.9} // Smoothness of the bloom transition.
          height={300}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default GenerativeMeshCanvas;
