function generateQuote() {
  let quotes = {
    "― Albert Einstein":
      '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
    "-Carrie Bradshaw":
      "“Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.",
    "― Charlotte Eriksson":
      "“All I wanted was to live a life where I could be me, and be okay with that. I had no need for material possessions, money or even close friends with me on my journey. I never understood people very well anyway, and they never seemed to understand me very well either. All I wanted was my art and the chance to be the creator of my own world, my own reality. I wanted the open road and new beginnings every day.”",
    "― Deepak Chopra":
      "“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”",
    "Aaron Lauritsen":
      "“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”",
  };
  let authors = Object.keys(quotes);
  let individualAuthor = authors[Math.floor(Math.random() * authors.length)];
  console.log(individualAuthor);

  let quote = quotes[individualAuthor];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = individualAuthor;
}
