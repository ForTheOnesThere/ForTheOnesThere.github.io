import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import GithubCard from './GithubCard/GithubCard';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData, githubCardData} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [githubcarddata, setGitHubCard] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setGitHubCard({...githubCardData});
  }, []);


  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <GithubCard data={githubcarddata}/>
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
