const quotes = [
               {
                 quote: `Talk is cheap. Show me the code.`,
                 source: `― Linus Torvalds`,
               },
               {
                quote: `when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.`,
                source: `― Jane Stiff`,
                tag: 'Inspiration'
              },
              {
                quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
                source: `― Harold Abelson`,
                citation: `Structure and Interpretation of Computer Programs`,
                year: '2010',
              },
              {
                quote: `Anybody can write code that a computer can understand. Good programmers write code that humans can understand.`,
                source: `― Martin Fowler`,
                tag: 'Programming'
              },
              {
                quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
                source: `― Kent Beck`,
                tag: 'Programming'
              },
              {
                quote: `Truth can only be found in one place: the code.`,
                source: `― Rasheed Ogunlaru`,
                citation: `Clean Code: A Handbook of Agile Software Craftsmanship`,
                tag: 'Programming'
              },
              {
                quote: `A language that doesn't affect the way you think about programming is not worth knowing.`,
                source: `― Alan J. Perlis`,
                year: '2015',
                tag: 'Code Philosophy'
              },
              {
                quote: `Walking on water and developing software from a specification are easy if both are frozen.`,
                source: `― Edward V. Berard`,
                year: '2018',
                tag: 'Code Philosophy'
              },
              {
                quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
                source: `― C.A.R. Hoare`,
                tag: 'Inspiration'
              },
              {
                quote: `A conscious human is driven by their conscience, not popular opinion.`,
                source: `― Suzy Kassem`,
                year: '2005',
              }
               ];

const quoteBox = $('#quote-box');
const button = $('#load-quote');
const body = $('body');
let clicked = false;

const getRandomQuote = (array) => {
  const randomIndex = Math.floor(Math.random()*array.length);
  return array[randomIndex];
};

/* the following function uses a string of letters and numbers used to hexcode a color
   to generate a randon color through a loop, the letters are harcoded white so if 
   at come point the function returns #ffffff the user will see white screen
   I added an if statement to prevent this */

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  if (color !== '#FFFFFF') {
    return color;
  } else {
    return '#000000'; // if the function gets white as a random color it will be changed to black
  }
};

const printQuote = () => {
  const quoteObject = getRandomQuote(quotes);
  quoteBox.empty(); // every time a new quote appears we need to delete the contant of the previous code

  const quote = $('<p></p>');
  quote.addClass('quote')
       .text(quoteObject.quote);   

  const source = $('<p></p>');
  source.addClass('sourse')
        .text(quoteObject.source); 

  quoteBox.append(quote, source);

  // this function will add the following contant to the page only if a quotes object has correcponding properties
  if (quoteObject.citation) {
    const citation = $('<span></span>');
    citation.addClass('citation')
            .text(quoteObject.citation);

    source.append(citation);
  };

  if (quoteObject.year) {
    const year = $('<span></span>');
    year.addClass('year')
            .text(quoteObject.year);

    source.append(year);
  };

  if (quoteObject.tag) {
    const tag = $('<span></span>');
    tag.addClass('citation')
        .text(quoteObject.tag); 
      
    source.append(tag);
  }

  body.css('background-color', getRandomColor()); //here we change the color of the body element to a randomly generated color
  
}

//the code down here handles the changing of quotes over time
let interval = setInterval(printQuote, 3000);

const quoteTimer = () => {
  return interval;
}

quoteTimer();

/*I needed to clear interval once the button was clicked 
  and set it back to the same interval because if you don't 
  do this the quote might flash to a new one once a user 
  clicks a button in for example 2900 ms. And with this code
  no matter when the button is clicked after the click there're
  still 3000 ms before the quote changes*/

button.on('click', () => {
  printQuote();
  clearInterval(interval);
  interval = setInterval(printQuote, 3000);
});

