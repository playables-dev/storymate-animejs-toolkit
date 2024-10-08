import { animate, createTimeline, defaults, utils } from '../anime-beta-master/lib/anime.esm.min.js';

//from Moving Letters - by Tobias Ahlin

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

animate('.ml9 .letter', {
  scale: 0,
  duration: 0  
})

createTimeline({loop: false})
.add('.ml9 .letter', {
  scale: [0, 1],
  duration: 1500,
  ease: "outElastic",
  delay: (el, i) => 45 * (i+1)
});