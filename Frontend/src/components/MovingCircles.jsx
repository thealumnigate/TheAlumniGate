import { useEffect, useRef } from 'react';

const MovingCircles = ({
  circleCount = 8,
  minSize = 40,
  maxSize = 120,
  speed = 0.5,
  color = '#0ea5e9',
  mouseInfluence = 0.3,
  followMouse = true
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const circlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Initialize circles
    const initializeCircles = () => {
      circlesRef.current = [];
      for (let i = 0; i < circleCount; i++) {
        circlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          dx: (Math.random() - 0.5) * speed * 2,
          dy: (Math.random() - 0.5) * speed * 2,
          opacity: Math.random() * 0.3 + 0.1, // Low opacity for subtlety
          originalX: Math.random() * canvas.width,
          originalY: Math.random() * canvas.height,
        });
      }
    };

    initializeCircles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circlesRef.current.forEach((circle) => {
        // Calculate mouse influence
        let mouseForceX = 0;
        let mouseForceY = 0;

        if (followMouse && mouseInfluence > 0) {
          const dx = circle.x - mouseRef.current.x; // Reversed direction for repulsion
          const dy = circle.y - mouseRef.current.y; // Reversed direction for repulsion
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 400; // Influence radius

          if (distance < maxDistance && distance > 0) {
            const force = (1 - distance / maxDistance) * mouseInfluence * 2; // Increased force multiplier
            mouseForceX = (dx / distance) * force;
            mouseForceY = (dy / distance) * force;
          }
        }

        // Update position with mouse influence
        circle.x += circle.dx + mouseForceX;
        circle.y += circle.dy + mouseForceY;

        // Wrap around edges - let circles go off screen and come back from the other side
        if (circle.x < -circle.size / 2) {
          circle.x = canvas.width + circle.size / 2;
        } else if (circle.x > canvas.width + circle.size / 2) {
          circle.x = -circle.size / 2;
        }

        if (circle.y < -circle.size / 2) {
          circle.y = canvas.height + circle.size / 2;
        } else if (circle.y > canvas.height + circle.size / 2) {
          circle.y = -circle.size / 2;
        }

        // Add subtle drift back towards original position
        const driftX = (circle.originalX - circle.x) * 0.001;
        const driftY = (circle.originalY - circle.y) * 0.001;
        circle.dx += driftX;
        circle.dy += driftY;

        // Limit speed
        const maxSpeed = speed * 2;
        circle.dx = Math.max(-maxSpeed, Math.min(maxSpeed, circle.dx));
        circle.dy = Math.max(-maxSpeed, Math.min(maxSpeed, circle.dy));

        // Draw circle (only if it's at least partially visible)
        if (circle.x > -circle.size / 2 && circle.x < canvas.width + circle.size / 2 &&
          circle.y > -circle.size / 2 && circle.y < canvas.height + circle.size / 2) {
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${Math.floor(circle.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (followMouse) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [circleCount, minSize, maxSize, speed, color, mouseInfluence, followMouse]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 light-circles"
      style={{ zIndex: 0 }}
    />
  );
};

export default MovingCircles;
