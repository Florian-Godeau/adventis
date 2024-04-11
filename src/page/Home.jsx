import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import Gallery from "../components/Gallery";

class Home extends Component {
  state = {
    currentSection: 0,
  };

  onLeave = (origin, destination, direction) => {
    this.setState({ currentSection: destination.index });
  };

  onNavigate = (destination) => {
    if (this.fullpageApi) {
      this.fullpageApi.moveTo(destination);
    }
  };

  render() {
    return (
      <>
        <Header onNavigate={this.onNavigate} invertColors={this.state.currentSection === 2} />
        <ReactFullpage
          licenseKey={'YOUR_LICENSE_KEY'}
          scrollingSpeed={700}
          navigation={true}
          navigationPosition={'right'}
          onLeave={this.onLeave}
          render={({ state, fullpageApi }) => {
            this.fullpageApi = fullpageApi;
            return (
              <ReactFullpage.Wrapper>
                <div className="section"><Slider /></div>
                <div className="section"><About isActive={this.state.currentSection === 1} /></div>
                <div className="section"><Gallery /></div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </>
    );
  }
}

export default Home;

