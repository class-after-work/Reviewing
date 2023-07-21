const saying = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const quotes = [
  {
    quotes:
      "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "-Martin Luther King Jr.",
  },
  {
    quotes:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt.",
  },
  {
    quotes:
      "Monsters are real, and ghosts are real, too. They live inside us - and sometimes, they win.",
    author: "-Stephen King.",
  },
  {
    quotes:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "-Thomas A. Edison.",
  },
  {
    quotes:
      "Everything negative - pressure, challenges - is all an opportunity for me to rise.",
    author: "-Kobe Bryant.",
  },
  {
    quotes: "Do not try to be original, just try to be good.",
    author: "-Paul Rand.",
  },
  {
    quotes: "When you are actually powerful, you don’t need to be petty.",
    author: "-Jon Stewart.",
  },
  {
    quotes:
      "Life is like playing a violin in public and learning the instrument as one goes on. ",
    author: "-Samuel Butler.",
  },
  {
    quotes: "Loving others brings love back to you.",
    author: "-Catherine Pulsifer.",
  },
];

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

function getQuote() {
  saying.innerText = randomQuotes.quotes;
  author.innerText = randomQuotes.author;
}
getQuote();
