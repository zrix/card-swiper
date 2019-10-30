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
        onTouchEnd={scrollTo}
        onTouchCancel={scrollTo}
      >
        <div className="card" ref={cards[0]}>
          <p>0</p>
        </div>
        <div className="card" ref={cards[1]}>
          <p>1</p>
        </div>
        <div className="card" ref={cards[2]}>
          <p>2</p>
        </div>
      </div>
    </>
  );
}

export default App;
