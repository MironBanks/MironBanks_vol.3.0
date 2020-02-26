import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineLite, Expo } from 'gsap'

const RecentWrapper = styled.div`
  margin-left: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    margin-left: 5%;
  }
  h3 {
    font-family: 'Lato';
    font-weight: 700;
    margin-bottom: 0.4rem;
    font-size: 1.3rem;
    color: #132f3e;
  }
  p {
    font-family: 'Lato';
    font-weight: 300;
    font-size: 14px;
    width: 300px;
    margin: 0;
    color: #132f3e;
  }
`

const RecentContent = styled.div`
  width: 30%;
  opacity: 0;
`

const ProjectList = styled.div`
 
  width: 60%;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 860px) {
    width: 100%;
    margin-top: 100px;
  }
`

const Project = styled.div`
 
  padding: 0px 15px;
  span {
    z-index: -1 !important;
  }
  video {       
    @media (max-width: 860px) {
      width: 100%;
      padding-right: 5%;
    }
  }
`

const ProjectLink = styled.div`
  display:flex;
  justify-content: space-between;
  z-index:100;
  a {
    color:inherit;
    font-size:14px;
    cursor: pointer;
  }
`

class RecentWorks extends Component {
  constructor(props) {
    super(props)
    this.recent = null
    this.img = null
    this.Tween = null
  }

  componentDidMount() {
    this.myTween = new TimelineLite()
    this.myTween
      .to(this.recent, 1.2, {
        opacity: 1,
        delay: 1.4,
        ease: Expo.easeOut,
        x: 0,
        y: 30,
      })
      .to(this.img, 1.2, {
        opacity: 1,
        delay: -1,
        ease: Expo.easeOut,
        x: 0,
        y: 30,
      })
  }
  render() {
    return (
      <RecentWrapper>
        <RecentContent ref={div => (this.recent = div)}>
          <h3>. Some Things I've Built</h3>
          <p>
            This is only a tiny highlight of things I've built.
            <br />
            I have more exciting projects coming soon.
            <br />
            <br />
            Below U can check my other noteworthy smaller projects.
          </p>
        </RecentContent>
        <ProjectList ref={img => (this.img = img)}>
          <Project>
            <span>
              <video
                width="600"
                height="400"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/58F2bDDdEce4LCjx8t/html5"
              >
                <source
                  src={require('../../assets/images/mercedes.mp4')} type="video/mp4" />
              </video>
            </span>
            <p>Adobe XD | ProtoPie</p>
          </Project>
          <Project>
            <span>
              <video
                width="600"
                height="400"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/cAqjS1ZeyO4YjUTTDO/html5"
              >
                <source src={require('../../assets/images/mariusz.mp4')} type="video/mp4" />
              </video>
            </span>
            <p>Adobe XD | ProtoPie</p>
            <ProjectLink>
              <a href="https://github.com/MironBanks/Andrew-Morrow" rel="noopener noreferrer" target="_blank">andrewmorrow.no</a>
              <a href="https://github.com/MironBanks/Andrew-Morrow" rel="noopener noreferrer" target="_blank">GitHub</a>
            </ProjectLink>
          </Project>
          <Project>
            <span>
              <video
                width="600"
                height="400"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/LpFM0IFq6aciTfCeL2/html5"
              >
                <source src={require('../../assets/images/Philipines.mp4')} type="video/mp4" />
              </video>
            </span>
            <p>Adobe XD | ProtoPie</p>
          </Project>
          <Project>
            <span>
              <video
                width="600"
                height="400"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/cICXYU9zQ1eWR18jcb/html5"
              >
                <source
                  src={require('../../assets/images/justanna-2.mp4')}
                  type="video/mp4"
                />
              </video>
            </span>
            <p>Adobe XD | ProtoPie</p>
            <ProjectLink>
              <a href="https://github.com/MironBanks/Andrew-Morrow" rel="noopener noreferrer" target="_blank">andrewmorrow.no</a>
              <a href="https://github.com/MironBanks/Andrew-Morrow" rel="noopener noreferrer" target="_blank">GitHub</a>
            </ProjectLink>
          </Project>
          <Project>
            <span>
              <video
                width="600"
                height="400"
                autoPlay
                muted
                loop
                playsInline
                poster="https://giphy.com/gifs/cAqjS1ZeyO4YjUTTDO/html5"
              >
                <source src={require('../../assets/images/personalTrainer.mp4')} type="video/mp4" />
              </video>
            </span>
            <p>Adobe XD | ProtoPie</p>
            <ProjectLink>
              <a href="https://github.com/MironBanks/Andrew-Morrow" rel="noopener noreferrer" target="_blank">andrewmorrow.no</a>
              <a href="https://github.com/MironBanks/Andrew-Morrow" rel="noopener noreferrer" target="_blank">GitHub</a>
            </ProjectLink>
          </Project>
        </ProjectList>
      </RecentWrapper>
    )
  }
}

export default RecentWorks
