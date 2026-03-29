import React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/NavBar'
import SectionWrapper from '../components/SectionWrapper'
import About from '../components/About'
import Work from '../components/Work'
import Publications from '../components/Publications'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export const Head = () => (
  <>
    <title>Akshat Sinha</title>
    <meta name="description" content="Senior Site Reliability Engineer at Rubrik. Network security professional." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)

const IndexPage = () => (
  <Layout>
    <NavBar hideTopBar />
    <SectionWrapper id="about" className="min-h-screen flex items-center">
      <About />
    </SectionWrapper>
    <SectionWrapper id="work" title="Work" gray>
      <Work />
    </SectionWrapper>
    <SectionWrapper id="publications" title="Publications" className="min-h-screen flex items-center">
      <Publications />
    </SectionWrapper>
    <SectionWrapper id="service" title="Service" gray>
      <Service />
    </SectionWrapper>
    <SectionWrapper id="contact" title="Contact" className="min-h-screen flex items-center pt-24">
      <Contact />
    </SectionWrapper>
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage
