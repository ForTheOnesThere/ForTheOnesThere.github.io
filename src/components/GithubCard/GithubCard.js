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

                <Fade bottom duration={1000} delay={250} distance="50px">

                  <Title title="Online Presence" />

                  <Tilt
                    options={{
                      reverse: false,
                      max: 8,
                      perspective: 1000,
                      scale: 1,
                      speed: 300,
                      transition: true,
                      axis: null,
                      reset: true,
                      easing: 'cubic-bezier(.03,.98,.52,.99)',
                    }}
                  >
                    <img src={require('../../images/logo.png')} alt='Github Logo' className='img'/>
                  </Tilt>

                </Fade>

                <br/>
                <br/>

                <Fade bottom duration={1000} delay={250} distance="50px">
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
                </Fade>
              </div>
            </section>
  );
}






export default GithubCard;
