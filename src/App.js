import React from 'react';
import './App.css'; // Import the CSS file

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <a href={article.homeUrl} className="home-button">Home</a>
      <img src={article.logo} alt="Publication Logo" className="publication-logo" />
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "Pro-Palestinian protests turn violent across Europe",
    date: '04 Nov 2023',
    time: '11:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `Social media video showed protesters tossing fireworks toward police in London as protesters in Sweden were seen lighting an Israeli flag on fire.Pro-Palestinian demonstrations occurred across major European cities protesting the Israel-Hamas war. In London, 29 arrests were made for various offenses including inciting racial hatred. Demonstrations also took place in Berlin and Paris, with authorities taking measures to prevent antisemitic behavior.`,
    content: `Thousands of pro-Palestinian demonstrators across major European cities protested the ongoing Israel-Hamas war, with at least 29 people being arrested in London, England.

    Pro-Palestinian demonstrators in cities across Europe rallied together and called for a cease fire, chanting, "Stop the massacre in Gaza" and "Cease fire now."
    
    As many as 9,900 people have been killed in the war on both sides, including at least 1,400 Israeli civilians and soldiers and 35 Americans.
    At least 29 demonstrators in London, England were arrested on Saturday afternoon, London's Metropolitan Police said.

"Today, a total of 29 arrests have been made for offenses including inciting racial hatred and racially aggravated public order," Metropolitan Police said on X, formerly known as Twitter.

London's police said that two of the people were arrested for wording on a banner displayed during the protest. Another man was arrested for making antisemitic remarks during a speech, police said.

Police said that one person was arrested on suspicion of inciting racial hatred and three people were arrested on suspicion of assaulting a police officer.
London's police shared an image of what appeared to be hundreds of protesters surrounding the city's famous Trafalgar Square.

Social media footage from Trafalgar Square showed protesters throwing fireworks towards a police barricade, with red sparks from the fireworks shooting towards a gathering of the officers.

In a previous post, police said that they had arrested three in Piccadilly Circus, including one on a terrorism charge for displaying a placard that could incite hatred.
German news agency, DPA, reported that about 6,000 protesters marched through the center of the German capital. 

Berlin police previously banned any kind of public or written statements that are antisemitic, anti-Israeli or glorify violence or terror. In Paris, demonstrators gathered on Saturday calling for a ceasefire with signs reading "Stop the cycle of violence" and "To do nothing, to say nothing is to be complicit."

Other demonstrators chanted, "Palestine will live, Palestine will win" and "Stop the massacre in Gaza."

French Interior Minister Gérald Darmanin previously banned pro-Palestinian gatherings due to concerns about public disorder.

However, Paris’ police chief authorized the march from République to Nation, two large plazas in eastern Paris, but stipulated that any behavior deemed antisemitic or sympathetic to terrorism would not be tolerated.
Social media video from Malmö, Sweden showed a man holding a small Israeli flag and lighting it on fire, before throwing it onto the ground.

The flag burner was seen alongside a small group of protesters gathered outside a synagogue waving Palestinian flags.`,
    image: '../photo.avif' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
    </div>
  );
};

export default App;
