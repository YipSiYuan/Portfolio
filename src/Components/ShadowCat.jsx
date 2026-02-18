import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ShadowCat(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/behemot_cat (1).glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {if (animations.Length > 0){actions[animations[0].name]?.play()}}, [actions,animations]);
  return (
    <group ref={group} {...props} dispose={null}  rotation={[-Math.PI / 0.4, 0, 0.2]} scale={ 0.05} position = {[0,-2.6, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="b27d6c2e3a85451cb27150675a4df8d1fbx" rotation={[Math.PI / 2, -0.2, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Cat_Material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Cat_Material}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Cat_Material}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="Object_6" />
                  <group
                    name="Object_8"
                    position={[-40.514, 50.188, -1.104]}
                    rotation={[0, 0, -0.076]}
                    scale={0.892}
                  />
                  <group
                    name="Object_10"
                    position={[-40.514, 50.188, -1.104]}
                    rotation={[0, 0, -0.076]}
                    scale={1.034}
                  />
                  <group name="LowPoly">
                    <group name="Skull_Lowpoly">
                      <mesh
                        name="Skull_Lowpoly_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Skull_Lowpoly_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                    <group name="Smoke_Lowpoly">
                      <mesh
                        name="Smoke_Lowpoly_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Smoke_Lowpoly_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                    <group name="Cat_Lowpoly">
                      <mesh
                        name="Cat_Lowpoly_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cat_Lowpoly_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                    <group name="Lantern_Lowpoly">
                      <group
                        name="Lantern_Glass_Lowpoly"
                        position={[-1.109, 1.383, -0.034]}
                        scale={0.973}>
                        <mesh
                          name="Lantern_Glass_Lowpoly_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Lantern_Glass_Lowpoly_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Lantern_Handle_Lowpoly">
                        <mesh
                          name="Lantern_Handle_Lowpoly_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Lantern_Handle_Lowpoly_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Candle_Lowpoly">
                        <mesh
                          name="Candle_Lowpoly_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Candle_Lowpoly_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                    </group>
                    <group name="Rope_Lowpoly">
                      <group name="Rope_Lowpoly_1">
                        <mesh
                          name="Rope_Lowpoly_1_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Rope_Lowpoly_1_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Rope_Lowpoly_2">
                        <mesh
                          name="Rope_Lowpoly_2_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Rope_Lowpoly_2_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Rope_Lowpoly_3">
                        <mesh
                          name="Rope_Lowpoly_3_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Rope_Lowpoly_3_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Rope_Lowpoly_4">
                        <mesh
                          name="Rope_Lowpoly_4_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Rope_Lowpoly_4_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Rope_Lowpoly_5">
                        <mesh
                          name="Rope_Lowpoly_5_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Rope_Lowpoly_5_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Rope_Lowpoly_6">
                        <mesh
                          name="Rope_Lowpoly_6_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Rope_Lowpoly_6_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Rope_Lowpoly_7">
                        <mesh
                          name="Rope_Lowpoly_7_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Rope_Lowpoly_7_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Rope_Lowpoly_8">
                        <mesh
                          name="Rope_Lowpoly_8_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Rope_Lowpoly_8_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="Tie_Lowpoly_1">
                        <group name="polySurface39">
                          <mesh
                            name="polySurface39_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface39_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface40">
                          <mesh
                            name="polySurface40_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface40_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface37">
                          <mesh
                            name="polySurface37_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface37_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface38">
                          <mesh
                            name="polySurface38_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface38_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                      </group>
                      <group name="Tie_Lowpoly_2">
                        <group name="polySurface47">
                          <mesh
                            name="polySurface47_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface47_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface48">
                          <mesh
                            name="polySurface48_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface48_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface45">
                          <mesh
                            name="polySurface45_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface45_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface46">
                          <mesh
                            name="polySurface46_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface46_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                      </group>
                      <group name="Tie_Lowpoly_3">
                        <group name="polySurface43">
                          <mesh
                            name="polySurface43_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface43_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface44">
                          <mesh
                            name="polySurface44_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface44_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface41">
                          <mesh
                            name="polySurface41_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface41_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface42">
                          <mesh
                            name="polySurface42_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface42_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                      </group>
                      <group name="Tie_Lowpoly_4">
                        <group name="polySurface49">
                          <mesh
                            name="polySurface49_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface49_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface50">
                          <mesh
                            name="polySurface50_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface50_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface51">
                          <mesh
                            name="polySurface51_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface51_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface52">
                          <mesh
                            name="polySurface52_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface52_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                      </group>
                      <group name="Tie_Lowpoly_5">
                        <group name="polySurface56">
                          <mesh
                            name="polySurface56_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface56_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface54">
                          <mesh
                            name="polySurface54_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface54_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface53">
                          <mesh
                            name="polySurface53_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface53_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group name="polySurface55">
                          <mesh
                            name="polySurface55_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface55_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="SmokeLines1">
                      <group name="polySurface57" position={[0.056, -0.839, -0.034]}>
                        <mesh
                          name="polySurface57_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface57_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="polySurface58" position={[-0.658, -0.247, 0.074]}>
                        <mesh
                          name="polySurface58_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface58_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="polySurface59" position={[0.413, -0.317, 0.197]}>
                        <mesh
                          name="polySurface59_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface59_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="polySurface60" position={[-0.265, 0.184, -0.121]}>
                        <mesh
                          name="polySurface60_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface60_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="polySurface61" position={[0.064, -0.655, 0.037]}>
                        <mesh
                          name="polySurface61_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface61_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="polySurface62" position={[0.506, 0.026, 0.073]}>
                        <mesh
                          name="polySurface62_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface62_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="polySurface63" position={[0.369, 0.37, 0.038]}>
                        <mesh
                          name="polySurface63_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface63_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                      <group name="polySurface64" position={[0.353, 0.143, 0.06]}>
                        <mesh
                          name="polySurface64_Cat_Material_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface64_Cat_Material_0.geometry}
                          material={materials.Cat_Material}
                        />
                      </group>
                    </group>
                    <group name="Flame_Glow" position={[3.333, -4.833, 0.191]} scale={0.355}>
                      <group
                        name="Flame_Glow_1"
                        position={[-123.328, 159.999, -3.371]}
                        scale={24.532}
                      />
                    </group>
                    <group name="Flame" position={[-40.611, 50.195, -1.104]} scale={1.034}>
                      <group
                        name="Flame_Inner"
                        position={[0.094, -0.007, 0]}
                        rotation={[0, 0, -0.076]}
                        scale={0.862}
                      />
                    </group>
                    <group name="CatHair" position={[-0.033, -0.438, -0.06]} scale={0.328}>
                      <group
                        name="group7"
                        position={[83.972, 13.071, -64.911]}
                        rotation={[-1.643, 1.36, 1.959]}>
                        <group
                          name="pPlane1"
                          position={[15.352, 187.849, -2.183]}
                          rotation={[2.243, 0.92, 0.382]}
                          scale={24.671}>
                          <mesh
                            name="pPlane1_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane1_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group
                          name="pPlane2"
                          position={[10.096, 189.31, -2.275]}
                          rotation={[2.008, 1.125, 0.655]}
                          scale={24.098}>
                          <mesh
                            name="pPlane2_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane2_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                      </group>
                      <group name="group5">
                        <group
                          name="pPlane1_1"
                          position={[14.507, 187.437, -1.774]}
                          rotation={[2.292, 1.029, 0.6]}
                          scale={38.964}>
                          <mesh
                            name="pPlane1_Cat_Material_0_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane1_Cat_Material_0_1.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group
                          name="pPlane2_1"
                          position={[9.799, 190.935, -2.93]}
                          rotation={[2.349, 1.091, 0.579]}
                          scale={28.195}>
                          <mesh
                            name="pPlane2_Cat_Material_0_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane2_Cat_Material_0_1.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                      </group>
                      <group
                        name="group6"
                        position={[29.517, 16.191, 17.318]}
                        rotation={[-0.078, -0.141, 0.173]}>
                        <group
                          name="pPlane3"
                          position={[-17.222, 180.345, -10.576]}
                          rotation={[2.198, 1.053, 0.623]}
                          scale={24.091}>
                          <mesh
                            name="pPlane3_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane3_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                        <group
                          name="pPlane4"
                          position={[-20.612, 179.693, -13.028]}
                          rotation={[1.601, 1.26, 1.087]}
                          scale={19.98}>
                          <mesh
                            name="pPlane4_Cat_Material_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pPlane4_Cat_Material_0.geometry}
                            material={materials.Cat_Material}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Wick">
                      <mesh
                        name="Wick_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Wick_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                  </group>
                  <group name="Outer">
                    <group name="LowPoly_Cat_Large_V04polySurface1">
                      <mesh
                        name="LowPoly_Cat_Large_V04polySurface1_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.LowPoly_Cat_Large_V04polySurface1_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                    <group
                      name="Flame_Outer"
                      position={[0.094, -0.007, 0]}
                      rotation={[0, 0, -0.076]}
                    />
                    <group name="Candle_Outer">
                      <mesh
                        name="Candle_Outer_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Candle_Outer_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                    <group name="Glass_Outer" position={[-1.112, 1.386, -0.036]} scale={0.973}>
                      <mesh
                        name="Glass_Outer_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Glass_Outer_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                    <group name="Smoke_Outer" position={[0.111, -0.242, -0.189]} scale={9.803}>
                      <mesh
                        name="Smoke_Outer_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Smoke_Outer_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                    <group name="Lantern_Outer">
                      <mesh
                        name="Lantern_Outer_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Lantern_Outer_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                    <group name="Skull_Outer" position={[0.001, -0.486, 0.075]} scale={1.007}>
                      <mesh
                        name="Skull_Outer_Cat_Material_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Skull_Outer_Cat_Material_0.geometry}
                        material={materials.Cat_Material}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/behemot_cat (1).glb')