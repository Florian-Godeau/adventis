import React from 'react';
import { useSpring, animated } from 'react-spring';

const About = ({ isActive }) => {
  const fadeIn = useSpring({
    opacity: isActive ? 1 : 0, // L'opacité est pleine lorsque isActive est vrai, sinon elle est transparente.
    from: { opacity: 0 }, // On commence avec la carte invisible.
    delay: 300, // Délai avant le début de l'animation pour permettre le changement de slide.
    config: { duration: 1000 }, // Durée de l'animation en millisecondes.
  });

  return (
    <div className="about-background">
      <animated.div style={fadeIn} className="text-card">
        <p className='def'><span className='defTitle'>Adventice: </span>Nom scientifique que l'on donne aux plantes indésirables du jardin, à toutes celles qui poussent d'elles mêmes, à l'état brut, spontané.</p>
        <p className='bio'>Eva Husson, alias Adventis, est une jeune artiste plasticienne de 23 ans...
                           Autodidacte, son univers gravite autour du portrait qu'elle a évolué au fil des années et de ses inspirations. 
                           Elle travaille essentiellement la matière; tissus, cartons, plastique, etc. Cela lui permet une recherche en constante évolution, 
                           un puits sans fond d'inspirations pour faire évoluer et complexifier ses travaux.</p>
      </animated.div>
    </div>
  );
};

export default About;
