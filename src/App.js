import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

//import styles from "./style.scss"
import "./style.scss"
//console.log(styles)

const App = () => {
  return (
    <div className="container">
      <ParallaxProvider scrollAxis="vertical">
        <Parallax y={["-0%", "0%"]} className="parallax1">
          <Element name="A" />
        </Parallax>
        <Parallax y={["90%", "-90%"]} className="parallax2">
          <Element name="B" />
        </Parallax>
      </ParallaxProvider>
    </div>
  )
}

function Element(props) {
  return (
    <div className="ratio">
      <div className="inner">
        <div className="box">{props.name}</div>
        {props.children}
      </div>
    </div>
  );
}

export default App
