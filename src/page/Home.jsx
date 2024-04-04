import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";

class Home extends Component {
  fullpageApi = null;

  onNavigate = (destination) => {
    if (this.fullpageApi) {
      this.fullpageApi.moveTo(destination);
    }
  };

  render() {
    return (
      <>
        <Header onNavigate={this.onNavigate} />
        <ReactFullpage
          licenseKey={'YOUR_LICENSE_KEY'}
          scrollingSpeed={700}
          navigation={true}
          navigationPosition={'right'}
          sectionsColor={['#ff5f45', '#0798ec']}
          render={({ state, fullpageApi }) => {
            // Stocker la référence de fullpageApi dans l'instance du composant
            this.fullpageApi = fullpageApi;

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
  }
}

export default Home;
