import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const ParallaxSection: React.FC = () => {
  // Captura o progresso do scroll
  const { scrollYProgress } = useScroll();

  // Define a velocidade do movimento parallax para diferentes camadas
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Mais próximo (move mais)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);  // Médio
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20]);  // Mais distante (move menos)

  return (
    <div style={{ height: '200vh', position: 'relative' }}>
      {/* Fundo mais distante */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          backgroundImage: 'url("/path-to-background-image-1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: y3,
        }}
      />

      {/* Camada intermediária */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          backgroundImage: 'url("/path-to-background-image-2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: y2,
        }}
      />

      {/* Primeiro plano (move mais rápido) */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          backgroundImage: 'url("/path-to-background-image-3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: y1,
        }}
      />

      {/* Conteúdo na frente */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginTop: '50vh' }}>
        <h1 style={{ color: '#fff', fontSize: '4rem' }}>Efeito Parallax</h1>
        <p style={{ color: '#fff', fontSize: '1.5rem' }}>Movendo diferentes camadas com o scroll!</p>
      </div>
    </div>
  );
};

export default ParallaxSection;
