/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Circle005: THREE.Mesh
    Circle004: THREE.Mesh
    Circle003: THREE.Mesh
    Circle002: THREE.Mesh
    Circle001: THREE.Mesh
    Circle: THREE.Mesh
  }
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials } = useGLTF('/UFO.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Circle005.geometry} 
        material={materials['Material.006']} 
        material-color={'green'} 
      />
      <mesh 
        geometry={nodes.Circle004.geometry} 
        material={materials['Material.002']} 
        position={[0.02, 0.01, 0.13]} 
        rotation={[-Math.PI, 0.3, 0]} scale={0.22} 
        material-color={'green'} 
      />
      <mesh 
        geometry={nodes.Circle003.geometry} 
        material={materials['Material.001']} position={[0, -1.14, 0.09]} 
        rotation={[-Math.PI, 0.3, 0]} scale={0.57} 
        material-color={'green'} 
      />
      <mesh 
        geometry={nodes.Circle002.geometry} 
        material={materials['Material.003']} 
        position={[-0.15, 1.41, 0.04]} 
        rotation={[-Math.PI, -0.3, -Math.PI]} scale={0.68} 
        material-color={'green'} 
      />
      <mesh 
        geometry={nodes.Circle001.geometry} 
        material={materials['Material.005']} 
        material-color={'yellow'} 
      />
      <mesh geometry={nodes.Circle.geometry} 
        material={materials['Material.008']} 
        material-color={'grey'} 
      />
    </group>
  )
}

useGLTF.preload('/UFO.glb')
