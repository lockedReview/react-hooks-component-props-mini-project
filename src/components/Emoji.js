import React from "react"

function Emoji({ minutes }) {
    let emoji = '';
  
    if (minutes < 30) {
      const total = Math.ceil(minutes / 5);
      emoji = '☕️'.repeat(total);
    } else {
      const total = Math.ceil(minutes / 10);
      emoji = '🍱'.repeat(total);
    }
  
    return <small>{emoji} {minutes} read</small>;
  }

export default Emoji