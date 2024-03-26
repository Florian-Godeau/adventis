import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";

function Home() {
    return (
        <>
            <Header />
            <FullPage>
                <Slide>
                    <Slider />
                </Slide>
                <Slide>
                    <About />
                </Slide>
            </FullPage>
        </>
    );
}

export default Home;