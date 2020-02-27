import React from "react"
import SEO from '../components/seo';
import MainLayout from '../layouts/index';
import Hero from "../components/Hero/hero"
import SocialIcons from "../components/Social/social"
import RecentWorks from '../components/RecentWork/recent'


const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" keywords={[`Freelance Web Developer`, `Web Design`, `Javascript Developer`, `UI UX Designer`]} />
    <Hero />
    <SocialIcons />
    <RecentWorks />
  </MainLayout>
)

export default IndexPage
