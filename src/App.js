import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

//import styles from "./style.scss"
import "./style.scss"
//console.log(styles)

const App = () => {
  return (
    <div className="container">
      <ParallaxProvider scrollAxis="vertical">
        <Parallax y={["-50%", "50%"]} className="parallax1 center">
          <p>Hello1</p>
          <p>Hello1</p>
          <p>Hello1</p>
          <p>Hello1</p>
          <p>Hello1</p>
          <p>Hello1</p>
          <p>Hello1</p>
        </Parallax>
        <Parallax y={["50%", "-50%"]} className="parallax2 center">
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
        </Parallax>
        <Parallax y={["80%", "-80%"]} className="parallax2 center">
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
          <p>Hello2</p>
        </Parallax>
      </ParallaxProvider>
    </div>
  )
}


export default App
