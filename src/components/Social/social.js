import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineLite } from 'gsap'
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faGithub, faLinkedin, faInstagram, faDribbble, faEnvelope)

const SocialLinks = styled.div`
  margin-top: 50px;
  position: relative;
  padding-left: 100px;
  z-index: 10;
  @media (max-width: 600px) {
    padding-left: 5%;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    li {
      list-style: none;
      margin-right: 25px;
      a {
        text-decoration: none;
        font-weight: 300;
        color: #000;
        text-transform: capitalize;
        svg {
          font-size: 16px;
        }
        &:hover {
          color: #fff;
        }
      }
    }
  }
`

const socialsArray = [
  { url: 'https://github.com/MironBanks', icon: 'github' },
  {
    url: 'https://www.linkedin.com/in/jakub-sladek/',
    icon: 'linkedin',
  },
  { url: 'https://www.instagram.com/dealwith_that', icon: 'instagram' },
  { url: 'mailto:info@mironbanks.com', icon: 'envelope' },
]

class SocialIcons extends Component {
  constructor(props) {
    super(props)
    this.socials = []
    // reference to the animation
    this.myTween = null
  }
  componentDidMount() {
    this.myTween = new TimelineLite()
    this.myTween.staggerFrom(
      this.socials,
      0.2,
      { delay: 1, scale: 0, autoAlpha: 0 },
      0.1
    ) //animate
  }
  render() {
    return (
      <SocialLinks>
        <ul>
          {socialsArray.map((social, index) => {
            return (
              <li
                key={`social-${index}`}
                ref={li => (this.socials[index] = li)}
              >
                <a target="_blank" rel="noopener noreferrer" href={social.url}>
                  <FontAwesomeIcon icon={['fab', `${social.icon}`]} />
                  <FontAwesomeIcon icon={['far', `${social.icon}`]} />
                </a>
              </li>
            )
          })}
        </ul>
      </SocialLinks>
    )
  }
}

export default SocialIcons
