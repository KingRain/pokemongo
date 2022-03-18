import styled from "styled-components";
import Reviews from "../../assets/meeting.png";

import React from 'react'
//import Lottie from 'react-lottie-player'

//import lottieJson from './ani3.json'


const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
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

const Aboutimg3 = styled.div`
width: 30%;
position: relative;
top: 100%;
bottom: 100%;

`

const About = () => {
  return (
    <AboutSection id="about3">
      <Main>
        <div>
          <Title>Reviews</Title>
          <CurvedLine />
        </div>
        <Content>
          <Aboutimg3>
            <img src={Reviews} alt="" width="200" height="100" />
          </Aboutimg3>
          <AboutText>

            <Text>
            Whether you are sniping on your phone using sniper tools or using a botting program to snipe Pokemon, this ultimate Discord channels list will help you with all of your sniping needs. We have been getting a lot of requests lately asking about a list of best discord servers and discord Pokemon GO coordinates where you can find all the active channels of rare and 100 IV Pokemon spawn coordinates for sniping purposes. Apart from the cords (longitude and latitude), in every discord channel, you are going to find all the other relevant details about each Pokemon, including its name, remaining time, level, IV score, and CP score.
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
