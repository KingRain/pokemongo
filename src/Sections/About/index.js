import styled from "styled-components";
import wave from "../../assets/waves.svg";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";
import Aboutus from "../../assets/award.png";

import React from 'react'
//import Lottie from 'react-lottie-player'

//import lottieJson from './ani1.json'


const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;


const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const Aboutimg = styled.div`
width: 30%;
position: relative;
top: 100%;
bottom: 100%;
`

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      <Hand>
        <img src={hand} alt="" />
      </Hand>
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Aboutimg>
            <img src={Aboutus} alt="" width="200" height="100" />
          </Aboutimg>
          <AboutText>
            <Human>
              <img src={human} alt="" width="200" height="100" />
            </Human>

            <Text>
            A newly established Pokemon Go Discord server (12 January 2022), based in the city of Sydney. Focused on making it easy to raid with others through using commands for friends codes and raiding. Come check it out and be a part of a newly growing community! Global Remote Raids for all Pok??mon GO trainers level 30 and up! PvP, news, chat, infographics, games and challenges.Check out the Pokemon GO Hub community on Discord ??? hang out with 40370 other members and enjoy free voice and text chat.Friendly Pokemon Go Community Discord Server with Giveaways, Coordinates, Shiny Hunts, Raids and much more !! 
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
