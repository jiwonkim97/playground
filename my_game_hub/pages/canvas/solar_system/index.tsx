import React, { useEffect, useRef } from 'react';

type PlanetData = {
  name: string;
  color: string;
  radius: number;
  x: number;
  y: number;
  mass: number;
  dx: number;
  dy: number;
};

const G = 6.6743 * Math.pow(10, -11); // 중력 상수
const AU = 149.6 * Math.pow(10, 9); // 천문단위
// const AU = 1; // 천문단위

const SolarSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const planets: PlanetData[] = [
      {
        name: 'Sun',
        color: 'yellow',
        radius: 40,
        x: 0,
        y: 0,
        mass: 2 * Math.pow(10, 30),
        dx: 0,
        dy: 0,
      },
      {
        name: 'Mercury',
        color: 'gray',
        radius: 10,
        x: 0,
        y: -60 * AU,
        mass: 3.3 * Math.pow(10, 23),
        dx: 47.87 * 1000,
        dy: 0,
      },
      {
        name: 'Venus',
        color: 'orange',
        radius: 15,
        x: 0,
        y: -110 * AU,
        mass: 4.87 * Math.pow(10, 24),
        dx: 35.02 * 1000,
        dy: 0,
      },
      {
        name: 'Earth',
        color: 'blue',
        radius: 15,
        x: 0,
        y: -150 * AU,
        mass: 5.97 * Math.pow(10, 24),
        dx: 29.78 * 1000,
        dy: 0,
      },
      {
        name: 'Mars',
        color: 'red',
        radius: 10,
        x: 0,
        y: -220 * AU,
        mass: 6.39 * Math.pow(10, 23),
        dx: 24.077 * 1000,
        dy: 0,
      },
      {
        name: 'Jupiter',
        color: 'brown',
        radius: 30,
        x: 0,
        y: -420 * AU,
        mass: 1.898 * Math.pow(10, 27),
        dx: 13.07 * 1000,
        dy: 0,
      },
      {
        name: 'Saturn',
        color: 'yellow',
        radius: 25,
        x: 0,
        y: -650 * AU,
        mass: 5.68 * Math.pow(10, 26),
        dx: 9.68 * 1000,
        dy: 0,
      },
      {
        name: 'Uranus',
        color: 'lightblue',
        radius: 20,
        x: 0,
        y: -900 * AU,
        mass: 8.68 * Math.pow(10, 25),
        dx: 6.8 * 1000,
        dy: 0,
      },
      {
        name: 'Neptune',
        color: 'darkblue',

        radius: 20,
        x: 0,
        y: -1100 * AU,
        mass: 1.024 * Math.pow(10, 26),
        dx: 5.43 * 1000,
        dy: 0,
      },
    ];

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const drawPlanet = (planet: PlanetData) => {
      context.fillStyle = planet.color;
      context.beginPath();
      context.arc(planet.x + canvas.width / 2, planet.y + canvas.height / 2, planet.radius, 0, 2 * Math.PI);
      context.fill();
    };

    const updatePlanet = (planet: PlanetData, dt: number) => {
      const fx = (-G * planet.mass * planets[0].mass) / Math.pow(planet.x - planets[0].x, 2);
      const fy = (-G * planet.mass * planets[0].mass) / Math.pow(planet.y - planets[0].y, 2);

      for (let i = 1; i < planets.length; i++) {
        if (planets[i] === planet) continue;
        const dx = planets[i].x - planet.x;
        const dy = planets[i].y - planet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = (G * planet.mass * planets[i].mass) / Math.pow(distance, 2);
        const fx = (force * dx) / distance;
        const fy = (force * dy) / distance;
        planet.dx += (fx / planet.mass) * dt;
        planet.dy += (fy / planet.mass) * dt;
      }

      planet.x += planet.dx * dt;
      planet.y += planet.dy * dt;
    };

    const animate = (timestamp: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const planet of planets) {
        updatePlanet(planet, timestamp / 1000);
        drawPlanet(planet);
      }
      requestAnimationFrame(animate);
    };

    canvas.width = 1000;
    canvas.height = 1000;

    requestAnimationFrame(animate);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default SolarSystem;
