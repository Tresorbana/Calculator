import { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set initial canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const particles: { x: number; y: number; dx: number; dy: number; radius: number }[] = [];

    // Create particles - fewer particles on mobile
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5, // Slower movement
        dy: (Math.random() - 0.5) * 0.5, // Slower movement
        radius: window.innerWidth < 768 ? 1.5 : 1.8, // Smaller on mobile
      });
    }

    function updateParticles() {
      particles.forEach(particle => {
        // Move particles
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });
    }

    function draw() {
      if (!ctx) return;
      
      // Clear with a slight fade for trail effect
      ctx.fillStyle = 'rgba(13, 13, 43, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles with reduced opacity
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.15)'; // Reduced opacity
        ctx.fill();
      });

      // Draw lines between close particles with reduced opacity
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = window.innerWidth < 768 ? 80 : 120; // Shorter connection distance
          
          if (dist < maxDist) {
            const opacity = 0.15 * (1 - dist / maxDist); // Fade effect for lines
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationFrameId: number;
    function animate() {
      updateParticles();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };
    
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        opacity: 0.4, // Overall opacity control
        background: "#0d0d2b",
        pointerEvents: "none" // Ensure it doesn't interfere with clicks
      }}
    />
  );
};

export default CanvasBackground;
