// first, place a quotes array on the global object. (in the browser, whenever you declare a variable and
// are not in a function, it will be set on the global object (called `window`). This variable will be
// available for use anywhere--in this js file or in another one that follows it!)
var quotes = [
  {
    // array of objects, so that we can seperate quote from author (and style them slightly differently later)
    quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    author: "Albert Einstein"
  },
  {
    quote: "We all live with the objective of being happy; our lives are all different and yet the same.",
    author: "Ana Frank"
  },
  {
    quote: "Trees that are slow to grow bear the best fruit.",
    author: "Moliere"
  },
  {
    quote: "When it is dark enough, you can see the stars.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jih Rohn",
    unknown: true
  },
  {
    quote: "If you are willing to do more than you are paid to do, eventually you will be paid to do more than you do.",
    author: "Anonymous"
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churcill"
  },
  {
    quote: "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.",
    author: "Vaibhav Shah"
  },
  {
    quote: "Try not to become a person of success, but rather try to become a person of value.",
    author: "Albert Einstein"
  },
  {
    quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    author: "Eleanor Roosevelt",
    unknown: true
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "The distance between insanity and genius is measured only by success.",
    author: "Bruce Feirstein",
    unknown: true
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },
  {
    quote: "We all live with the objective of being happy; our lives are all different and yet the same.",
    author: "Ana Frank"
  },
  {
    quote: "Trees that are slow to grow bear the best fruit.",
    author: "Moliere"
  },
  {
    quote: "When it is dark enough, you can see the stars.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein",
    unknown: true
  },
  {
    quote: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    author: "Mark Twain"
  },
  {
    quote: "Only put off until tomorrow what you are willing to die having left undone.",
    author: "Pablo Picasso"
  },
  {
    quote: "Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "Mark Twain"
  },
  {
    quote: "The successful warrior is the average man, with laserlike focus.",
    author: "Bruce Lee"
  },
  {
    quote: "You can't connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something -- your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
    author: "Steve Jobs",
    unknown: true
  },
  {
    quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    author: "Jim Rohn"
  },
  {
    quote: "The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors.",
    author: "Napoleon Hill",
    unknown: true
  },
  {
    quote: "You may have to fight a battle more than once to win it.",
    author: "Margaret Thatcher"
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Robert Schuller"
  },
  {
    quote: "Always bear in mind that your own resolution to success is more important than any other one thing.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
    author: "John Maxwell"
  },
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
    unknown: true
  },
  {
    quote: "Much of the stress that people feel doesn't come from having too much to do. It comes from not finishing what they've started.",
    author: "David Allen"
  },
  {
    quote: "Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it.",
    author: "Greg Anderson"
  },
  {
    quote: "You never regret being kind.",
    author: "Nicole Shepherd"
  },
  {
    quote: "Success at the highest level comes down to one question: Can you decide that your happiness can come from someone else's success?",
    author: "Bill Walton"
  },
  {
    quote: "Do what you have always done and you'll get what you have always got.",
    author: "Sue Knight",
    unknown: true
  },
  {
    quote: "Think of what you have rather than of what you lack. Of the things you have, select the best and then reflect how eagerly you would have sought them if you did not have them.",
    author: "Marcus Aurelius"
  },
  {
    quote: "Happiness is where we find it, but very rarely where we seek it.",
    author: "J. Petit Senn",
    unknown: true
  },
  {
    quote: "To be content means that you realize you contain what you seek.",
    author: "Alan Cohen"
  },
  {
    quote: "Expecting life to treat you well because you are a good person is like expecting an angry bull not to charge because you are a vegetarian.",
    author: "Shari R. Barr"
  },
  {
    quote: "View your life from your funeral: Looking back at your life experiences, what have you accomplished? What would you have wanted to accomplish but didn't? What were the happy moments? What were the sad? What would you do again, and what wouldn't you do?",
    author: "Victor Frankl"
  },
  {
    quote: "Boredom is the feeling that everything is a waste of time...serenity, that nothing is.",
    author: "Thomas Szasz"
  },
  {
    quote: "To handle yourself, use your head; to handle others, use your heart.",
    author: "Eleanor Roosevelt",
    unknown: true
  },
  {
    quote: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
    author: "William Arthur Ward"
  },
  {
    quote: "Keep your fears to yourself, but share your courage with others.",
    author: "Robert Louis Stevenson"
  },
  {
    quote: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets people to do the greatest things.",
    author: "Ronald Reagan"
  },
  {
    quote: "Power isn't control at all-power is strength, and giving that strength to others. A leader isn't someone who forces others to make him stronger; a leader is someone willing to give his strength to others that they may have the strength to stand on their own.",
    author: "Beth Revis"
  },
  {
    quote: "Don't tell people how to do things; tell them what to do and let them surprise you with their results.",
    author: "George S. Patton Jr."

  },
  {
    quote: "Leadership is the art of getting someone else to do something you want done because he wants to do it.",
    author: "Dwight D. Eisenhower"
  },
  {
    quote: "Victory has a hundred fathers and defeat is an orphan.",
    author: "John F. Kennedy"

  },
  {
    quote: "Management is doing things right; leadership is doing the right things.",
    author: "Peter F. Drucker"
  },
  {
    quote: "Example is not the main thing in influencing others. It is the only thing.",
    author: "Albert Schweitzer"
  },
  {
    quote: "Leaders must be close enough to relate to others, but far enough ahead to motivate them.",
    author: "John C. Maxwell"
  },
  {
    quote: "The mark of a great man is one who knows when to set aside the important things in order to accomplish the vital ones",
    author: "Brandon Sanderson"
  },
  {
    quote: "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.",
    author: "John C. Maxwell"

  },
  {
    quote: "You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out.",
    author: "Steve Jobs"
  },
  {
    quote: "A leader ... is like a shepherd. He stays behind the flock, letting the most nimble go out ahead, whereupon the others follow, not realizing that all along they are being directed from behind.",
    author: "Nelson Mandela"
  },
  {
    quote: "Being responsible sometimes means pissing people off.",
    author: "Colin Powell"
  },
  {
    quote: "Do you know that one of the great problems of our age is that we are governed by people who care more about feelings than they do about thoughts and ideas.",
    author: "Margaret Thatcher"
  },
  {
    quote: "A leader is a dealer in hope.",
    author: "Napoleon"
  },
  {
    quote: "The best executive is the one who has sense enough to pick good men to do what he wants done, and self-restraint to keep from meddling with them while they do it.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see. Let them see.",
    author: "Henry David Thoreau"
  },
  {
    quote: "I cannot trust a man to control others who cannot control himself.",
    author: "Robert E. Lee"
  },
  {
    quote: "Consensus: the process of abandoning all beliefs, principles, values, and policies in search of something in which no one believes, but to which no one objects; the process of avoiding the very issues that have to be solved, merely because you cannot get agreement on the way ahead. What great cause would have been fought and won under the banner: 'I stand for consensus?'",
    author: "Margaret Thatcher"
  },
  {
    quote: "A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go but ought to be.",
    author: "Rosalynn Carter"
  },
  {
    quote: "There is a difference between being a leader and being a boss. Both are based on authority. A boss demands blind obedience; a leader earns his authority through understanding and trust.",
    author: "Klaus Balkenhol"
  },
  //working
  {
    quote: "You get in life what you have the courage to ask for.",
    author: "Nancy D. Solomon"
  },
  {
    quote: "In the end, it is important to remember that we cannot become what we need to be by remaining what we are.",
    author: "Max De Pree"
  },
  {
  quote: "A leader isn't someone who forces others to make him stronger; a leader is someone willing to give his strength to others so that they may have the strength to stand on their own.",
  author: "Beth Revis"
  },
  {
    quote: "Always remember, Son, the best boss is the one who bosses the least. Whether it's cattle, or horses, or men, the least government is the best government.",
    author: "Ralph Moody"
  },
  {
    quote: "If you really want the key to success, start by doing the opposite of what everyone else is doing.",
    author: "Brad Szollose"

  },
  {
    quote: "'Give as few orders as possible,'his father had told him once long ago.'Once you've given orders on a subject, you must always give orders on that subject.",
    author: "Frank Herbert"

  },
  {
    quote: "The art of leadership is saying no, not yes. It is very easy to say yes",
    author: "Tony Blair"
  },
  {
    quote: "Wisdom equals knowledge plus courage. You have to not only know what to do and when to do it, but you have to also be brave enough to follow through.",
    author: "Jarod Kintz"
  },
  {
    quote: "In a battle between two ideas, the best one doesn't necessarily win. No, the idea that wins is the one with the most fearless heretic behind it.",
    author: " Seth Godin"
  },
  //working
  {
    quote: "If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.",
    author: "Antoine de Saint-Exupery"
  },
  {
    quote: "Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.",
    author: "Patrick Lencioni"
  },
  {
    quote: "Leadership is an action, not a position.",
    author: "Donald McGannon"
  },
  {
    quote: "Surround yourself with great people; delegate authority; get out of the way",
    author: "Ronald Reagan"
  },
  {
    quote: "I cannot give you a formula for success, but I can give you the formula for failure, which is: Try to please everybody.",
    author: "Herbert Bayard Swope"
  },
  {
    quote: "Show me the man you honor and I will know what kind of man you are.",
    author: "Thomas John Carlisle"
  },
  {
    quote: "A man always has two reasons for doing anything: a good reason and the real reason.",
    author: "J.P. Morgan"
  },
  {
    quote: "If you spend your life trying to be good at everything, you will never be great at anything.",
    author: "Tom Rath"
  },
  {
    quote: "Average leaders raise the bar on themselves; good leaders raise the bar for others; great leaders inspire others to raise their own bar.",
    author: "Orrin Woodward",
  },
  //working
  {
    quote: "Don't blow off another's candle for it won't make yours shine brighter.",
    author: "Jaachynma N.E. Agu"
  },
  {
    quote: "Whenever you see a successful business, someone once made a courageous decision.",
    author: "Peter F. Drucker",
  },
  {
quote: "When you put together deep knowledge about a subject that intensely matters to you, charisma happens. You gain courage to share your passion, and when you do that, folks follow.",
author: "Jerry Porras"
},
{
quote: "People buy into the leader before they buy into the vision.",
author: "John Maxwell"
},
{
quote: "A good leader is a person who takes a little more than his share of the blame and a little less than his share of the credit.",
author: "John Maxwell"
},
{
quote: "A good plan violently executed now is better than a perfect plan executed next week.",
author: "George Patton"
},
{
quote: "Feeling gratitude and not expressing it is like wrapping a present and not giving it.",
author: "William Arthur Ward",
unknown: true
},
{
quote: "Silent gratitude isn't very much to anyone.",
author: "Gertrude Stein"
},
{
quote: "The only people with whom you should try to get even are those who have helped you.",
author: "John E. Southard"
},
{
quote: "Keep your eyes open and try to catch people in your company doing something right, then praise them for it.",
author: "Tom Hopkins"
},
{
quote: "You wouldn't worry so much about what others think of you if you realized how seldom they do.",
author: "Eleanor Roosevelt"
},
{
quote: "Low self-confidence isn't a life sentence. Self-confidence can be learned, practiced, and mastered-just like any other skill. Once you master it, everything in your life will change for the better.",
author: " Barrie Davenport",
unknown: true
},
{
quote: "Shyness has a strange element of narcissism, a belief that how we look, how we perform, is truly important to other people.",
author: "Andre Dubus"
},
{
quote: "Do it or not. There is no try.",
author: "Yoda",
unknown: true
},
{
  quote: "Rarely have I seen a situation where doing less than the other guy is a good strategy",
  author: "Jimmy Spithill"
},
{
  quote: "You may have to fight a battle more than once to win it.",
  author: "Margaret Thatcher"
},
{
  quote: "The best revenge is massive success.",
  author: "Frank Sinatra"
},
{
  quote: "The question isn't who is going to let me; it's who is going to stop me.",
  author: "Ayn Rand"
},
{
  quote: "The only way to do great work is to love what you do.",
  author: "Steve Jobs",
  unknown: true
}
];


var currentIdx;
var index = 0;
var welcome = '';
var word = ' Welcome';
$(document).ready(function(){
  setInterval(typingText, 300);
});

function updateQuote() {
  
  do{
      var idx = Math.floor(Math.random() * quotes.length);
  }while(currentIdx === idx);

  currentIdx = idx;
  // after we access `quotes[idx]`, we get back an object. We additionally dot off that to get the appropriate
  // property.
  $('#quote').html(quotes[idx].quote);
  $('#author').html(quotes[idx].author);
}

function shareTweet () {
    
    var quoteTweet = quotes[currentIdx].quote;
    if(quoteTweet.length > 100) {
        
        quoteTweet = quoteTweet.substr(0, 100).match(/(^.+)\S/)[1] + "...";
        
    }
    
    quoteTweet = encodeURI( "\"" +quoteTweet+ "\"");
    window.open("https://twitter.com/intent/tweet?text=" + quoteTweet + "&hashtags=ourhealthyday,mimicom24");
    
    
}

function typingText (){
	$('#typed').text('');
  if (index !== word.length) {
  	welcome += word[index];
  	$('#typed').text(welcome);
  	index++;
  } else {
  	index = 0;
    welcome = '';
  }
}

$(function(){
  // function enter() {
  //           $('#typed').typed({
  //             strings: ["Welcome"],
  //             typeSpeed: 200,
  //             backDelay: 500,
  //           showCursor: false,
  //             loop:true
  //           });
  //       }
  updateQuote(); 
  $('#generator').click(updateQuote);
    $('#twitter').click(shareTweet);
})

// the script is done running! But our click listener remains. So whenever you click, it remembers the function
// it has and runs it, giving us a new quote.
