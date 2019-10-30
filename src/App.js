import React, { useRef } from 'react';

import "./style.scss"

function App() {
  let absXStart
  let absXEnd
  const cards = [useRef(null), useRef(null), useRef(null)]
  let activeCard = 0
  const screenWidth = window.innerWidth

  const scrollTo = (event) => {
    absXEnd = event.changedTouches[0].screenX
    if (absXEnd < absXStart) {
      const diffX = absXStart - absXEnd
      if (diffX > screenWidth / 2 && activeCard + 1 < cards.length) activeCard += 1
    } else if (absXEnd > absXStart) {
      const diffX = absXEnd - absXStart
      if (diffX > screenWidth / 2 && activeCard > 0) activeCard += -1
    }
    console.log("activeCard: ", activeCard)
    cards[activeCard].current.scrollIntoView({
      behavior: 'smooth',
      block: "center",
      inline: "center"
    })
  }

  return (
    <>
      <div
        className="container"
        onTouchStart={(event) => {
          absXStart = event.touches[0].screenX
        }}
        onTouchMove={(event) => {
          //console.log(event.changedTouches[0].screenX)
          //absX += event.touchList[0].clientX
          //console.log(absX)
          //console.log(event.touches[0].clientX)
          //console.log(event.currentTarget())
        }}
        onTouchEnd={scrollTo}
        onTouchCancel={scrollTo}
      >
        <div className="card" ref={cards[0]}>
        </div>
        <div className="card" ref={cards[1]}>
        </div>
        <div className="card" ref={cards[2]}>
        </div>
      </div>

      <div className="abs-btn">
        <button onClick={(e) => {
          cards[1].current.scrollIntoView({
            behavior: 'smooth',
            block: "center",
            inline: "center"
          });
        }
        }>
          Press me
        </button>
      </div>

    </>
  );
}

export default App;
