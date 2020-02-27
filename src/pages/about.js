import React from 'react'
import styled from 'styled-components'

const About = styled.div`
  font-family: Lato;
  color: #132f3e;
  .inner {
    margin: 100px auto 0;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 50%;
    max-width:900px;
    @media (max-width: 600px) {
      padding: 0 2%;
      width: 100%;
    }
    h3 {
      font-size: 80px;
      line-height: 50px;
      font-family: 'Teko';
      font-weight:300;
      text-align: center;
      margin-bottom: 30px;
      span {
        font-size: 40px;
      }
      @media (max-width: 600px) {
        font-size: 34px;
      }
    }
    .block {
      display: block;
      height: 3px;
      width: 50px;
      margin: 0 auto;
      background: #0a0a0a;
      margin-bottom: 50px;
    }
    p {
      color: #0a0a0a;
      margin-top: 0px;
      font-weight: 300;
      font-family: 'Lato';
      font-size: 14px;
    }

    a{
      text-align: center;
      margin:0px 40px 40px 40px;
      color:inherit;
      font-size:14px;
      cursor: pointer;
    }
  }
`

const SkillsList = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  color: #132f3e;
  ul {
    margin-top: 75px;
    padding: none;
    margin: 0;
    margin-right: 100px;
    li {
      font-family: Lato;
      margin: 5px 0;
      font-size: 12px;
      font-weight: 300;
      list-style: none;
    }
  }
`

const AboutPage = () => (
  <About>
    <div className="inner">
      <h3>
        A <span>little</span> about <br /> who I am.
        </h3>
      <span className="block" />
      <p style={{ margin: '0px 0px 40px 0px' }}>
        Hello! I'm Miron, a Front-End developer based in Oslo who enjoys building things that
        live on the internet. I develop exceptional websites and web apps that provide intuitive,
        pixel-perfect user interfaces.
                <br />
        <br />
        I consider myself to be extremely fortunate, because my 'job', such as it is, simply entails
        doing what I love. I call myself a web developer as it's a nice umbrella term for the programmer
        who specializes in the development of World Wide Web applications.
                </p>
      <p style={{ textAlign: 'center', margin: '0px 40px 40px 40px', fontWeight: 700, }} >
        I'm currently looking for freelance opportunities, my inbox is always open.
        Whether for a potential project or just to say hi, I'll try my best to answer your email!
                </p>
      <a href="mailto:info@mironbanks.com" target="_blank" rel="noopener noreferrer">info@mironbanks.com</a>
      <p style={{ textAlign: 'center' }}>Skills & other things:</p>
      <SkillsList>
        <ul>
          <b>Development</b>
          <li>HTML & SCSS</li>
          <li>Javascript - ES6</li>
          <li>React</li>
          <li>Redux</li>
          <li>Gatsby.js / Next.js</li>
          <li>GraphQL</li>
          <li>REST API</li>
          <li>Webpack</li>
          <li>Node.js / NPM</li>
          <li>Git/GitHub</li>
        </ul>
        <ul>
          <b>Design</b>
          <li>Photoshop</li>
          <li>Adobe XD</li>
          <li>Protopie</li>
        </ul>
      </SkillsList>
    </div>
  </About>
)

export default AboutPage