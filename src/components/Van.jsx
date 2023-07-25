/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 van.gltf --transform 
Files: van.gltf [47.17MB] > van-transformed.glb [652.4KB] (99%)
Author: Karol Miklas (https://sketchfab.com/karolmiklas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-gmc-motorhome-reimagined-low-poly-6hiH0iyDqXqtdD9wbqSbyLLhKmz
Title: FREE GMC Motorhome reimagined low poly
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/van-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.interior} position={[0.76, 0.244, 3.398]} rotation={[-0.136, 0.002, 0.012]} scale={1.06} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.clay} scale={1.169} />
      <mesh geometry={nodes.Object_18.geometry} material={materials['clay.001']} position={[0, -0.96, 3.058]} rotation={[-0.483, 0, 0]} scale={1.169} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.windows} scale={1.169} />
    </group>
  )
}

useGLTF.preload('/van-transformed.glb')