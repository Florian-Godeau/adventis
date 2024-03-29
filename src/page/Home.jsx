import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";

const Home = () => (
  <>
    <Header />
    <ReactFullpage
      licenseKey={'YOUR_LICENSE_KEY'} // Remplacez par votre clé de licence si nécessaire
      scrollingSpeed={700}
      navigation={true} // Active les bulletpoints de navigation
      navigationPosition={'right'} // Positionne les bulletpoints à droite
      sectionsColor={['#ff5f45', '#0798ec']} // Exemple de couleurs de fond pour chaque section
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section"><Slider /></div>
            <div className="section"><About /></div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default Home;


