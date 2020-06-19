import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import ScrollIntoView from 'react-scroll-into-view';
import '../../style/components/GithubCard.scss';
import 'tachyons';

const GithubCard = ({ data }) => {
  const { text: text } = data;
  const { avatarUrl: url } = data;
 /* can now use 'text' and 'url' as variables in this component */

 const [isDesktop, setIsDesktop] = useState(false);
 const [isMobile, setIsMobile] = useState(false);


  return (
    <section className='gh' id='github'>
      <Fade bottom>

      <div className='gh-container'>
<div className='wrap'>
        <span className='gh-span-pic'>
          <img src={require('../../images/logo.png')} alt='Github Logo' className='img'/>
        </span>
        </div>
<div className='wrap'>
        <span className='gh-span gh-su'>
          <div id='gh-su'>
            <h1 className='pa1 heading'>Online Presence</h1>
            <p>{text}</p>
            <br/>
              <br/>
            <ScrollIntoView selector="#footer">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"

            >
              Take A Look
            </a>
          </ScrollIntoView>
          </div>
        </span>
        </div>

      </div>

      </Fade>

    </section>

  );
}






export default GithubCard;
