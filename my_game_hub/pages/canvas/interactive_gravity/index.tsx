import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  radius: number;
  mass: number;
  velocity: { x: number; y: number };
};

const InteractiveGravity = () => {
  // const mainRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  // const { width: canvasWidth, height: canvasHeight } = useClientWidthHeight(mainRef);
  // return <div style={{ display: 'flex', flex: 1, width: '100%' }} ref={mainRef}></div>;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw particles
    const particles: Particle[] = [
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
      {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        radius: Math.random() * 50,
        mass: Math.random() * 30,
        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 },
      },
    ];

    function drawParticles() {
      // Check if canvas and ctx exist
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Calculate gravitational force
        const G = 10;
        const force = { x: 0, y: 0 };

        particles.forEach(otherParticle => {
          if (particle !== otherParticle) {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx ** 2 + dy ** 2);
            const direction = { x: dx / distance, y: dy / distance };
            const magnitude = (G * particle.mass * otherParticle.mass) / distance ** 2;
            force.x += direction.x * magnitude;
            force.y += direction.y * magnitude;
          }
        });

        // Update particle position
        const acceleration = {
          x: force.x / particle.mass,
          y: force.y / particle.mass,
        };
        const dt = 0.1;
        particle.x += particle.velocity.x * dt + 0.5 * acceleration.x * dt ** 2;
        particle.y += particle.velocity.y * dt + 0.5 * acceleration.y * dt ** 2;
        particle.velocity.x += acceleration.x * dt;
        particle.velocity.y += acceleration.y * dt;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
        ctx.fill();
      });

      requestAnimationFrame(drawParticles);
    }

    drawParticles();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default InteractiveGravity;
