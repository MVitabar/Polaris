"use client"

import { useEffect, useRef } from "react"
import type * as THREE from "three"

interface Model3DViewerProps {
  className?: string
}

export function Model3DViewer({ className = "" }: Model3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let isCancelled = false
    let cleanupFn: (() => void) | null = null

    const loadThree = async () => {
      try {
        if (isCancelled) return

        const THREE = await import("three")
        const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js")

        if (isCancelled || !mountRef.current) return
        const mountEl = mountRef.current

        const width = mountEl.clientWidth || 400
        const height = mountEl.clientHeight || 400

        // Scene
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x0a2235)

        // Camera
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
        camera.position.set(0, 1.4, 4.5)

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 1.1
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        mountEl.appendChild(renderer.domElement)

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.06
        controls.minDistance = 2
        controls.maxDistance = 10
        controls.autoRotate = true
        controls.autoRotateSpeed = 2
        controls.target.set(0, 0.2, 0)

        // Lights
        const ambient = new THREE.AmbientLight(0xffffff, 0.35)
        scene.add(ambient)

        const keyLight = new THREE.DirectionalLight(0xfff4df, 1.4)
        keyLight.position.set(5, 8, 6)
        keyLight.castShadow = true
        scene.add(keyLight)

        const fillLight = new THREE.DirectionalLight(0xe8c77f, 0.6)
        fillLight.position.set(-5, 2, -4)
        scene.add(fillLight)

        const rimLight = new THREE.PointLight(0xe8c77f, 0.8, 20)
        rimLight.position.set(-3, 0, 5)
        scene.add(rimLight)

        // Floor shadow plane
        const ground = new THREE.Mesh(
          new THREE.PlaneGeometry(8, 8),
          new THREE.ShadowMaterial({ opacity: 0.25 })
        )
        ground.rotation.x = -Math.PI / 2
        ground.position.y = -1.1
        ground.receiveShadow = true
        scene.add(ground)

        // Materials
        const goldMat = (rough: number) =>
          new THREE.MeshPhysicalMaterial({
            color: 0xe8c77f,
            metalness: 0.75,
            roughness: rough,
            clearcoat: 1,
            clearcoatRoughness: 0.2,
            envMapIntensity: 1.2,
          })

        const darkMat = new THREE.MeshPhysicalMaterial({
          color: 0x0d2840,
          metalness: 0.5,
          roughness: 0.25,
          clearcoat: 0.6,
        })

        const group = new THREE.Group()

        // Central icosahedron (gold)
        const central = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 1), goldMat(0.18))
        central.castShadow = true
        group.add(central)

        // Orbiting torus rings
        const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.045, 16, 100), darkMat)
        ring1.rotation.x = Math.PI / 2
        group.add(ring1)

        const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.03, 16, 100), goldMat(0.35))
        ring2.rotation.x = Math.PI / 2.5
        ring2.rotation.y = 0.4
        group.add(ring2)

        // Small orbiting satellites
        const satellites: THREE.Mesh[] = []
        for (let i = 0; i < 3; i++) {
          const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), goldMat(0.25))
          s.castShadow = true
          satellites.push(s)
          group.add(s)
        }

        group.position.y = 0.2
        scene.add(group)

        // Resize
        const handleResize = () => {
          if (!mountEl || !camera || !renderer) return
          const w = mountEl.clientWidth || 400
          const h = mountEl.clientHeight || 400
          camera.aspect = w / h
          camera.updateProjectionMatrix()
          renderer.setSize(w, h)
        }
        window.addEventListener("resize", handleResize)

        // Animation
        let animationFrameId: number | null = null
        const animate = () => {
          animationFrameId = requestAnimationFrame(animate)
          if (!scene || !camera || !renderer || !controls) return

          central.rotation.y += 0.004
          central.rotation.z += 0.002
          ring1.rotation.z += 0.0015
          ring2.rotation.y += 0.001

          const time = Date.now() * 0.001
          satellites.forEach((s, i) => {
            const angle = time * 0.6 + (i * Math.PI * 2) / 3
            s.position.set(Math.cos(angle) * 0.95, Math.sin(angle * 1.2) * 0.35 + 0.15, Math.sin(angle) * 0.95)
            s.rotation.x += 0.01
            s.rotation.y += 0.015
          })

          controls.update()
          renderer.render(scene, camera)
        }
        animate()

        cleanupFn = () => {
          window.removeEventListener("resize", handleResize)
          if (animationFrameId) cancelAnimationFrame(animationFrameId)
          if (mountEl && renderer) mountEl.removeChild(renderer.domElement)
          renderer.dispose()
          controls.dispose()
        }
      } catch (error) {
        console.error("Error loading 3D viewer:", error)
      }
    }

    loadThree()

    return () => {
      isCancelled = true
      cleanupFn?.()
    }
  }, [])

  return (
    <div className={`relative w-full h-full min-h-[380px] overflow-hidden rounded-2xl ${className}`}>
      <div ref={mountRef} className="w-full h-full min-h-[380px]" />
    </div>
  )
}
