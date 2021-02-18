import React from 'react'
import Particles from 'react-tsparticles'
import './particles.scss'

const ParticlesBG = () => {
  return (
    <div className="particles">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: 'rgb(0, 0, 0)',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 100,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: 'rgb(255, 255, 255)',
            },
            links: {
              color: 'rgb(255, 255, 255)',
              enable: false,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

export default ParticlesBG
