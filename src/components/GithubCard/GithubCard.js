import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import ScrollIntoView from 'react-scroll-into-view';
import Title from '../Title/Title';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import '../../style/components/GithubCard.scss';
import 'tachyons';

const GithubCard = ({ data }) => {
  const { text: text } = data;
  const { avatarUrl: url } = data;
 /* can now use 'text' and 'url' as variables in this component */



  return (
          <section className='gh' id='github'>
              <div id='git-card-wrapper'>

                  <Title title="Online Presence" />

                  <img src={require('../../images/logo.png')} alt='Github Logo' className='img'/>

                  <br/>
                  <br/>

                  <p className='with-edge-space'>{text}</p>

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
            </section>




  /*
      <Fade bottom>

      <div className='gh-container'>
<div id='gh-su'>






            <h1 className='pa1 title'>Online Presence</h1>






          </div>



      </div>

      </Fade>

    */

  );
}






export default GithubCard;
