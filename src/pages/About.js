// Updated About Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/About.css'

function About() {
  // Company values data
  const companyValues = [
    {
      icon: "🎯",
      title: "Innovation",
      description: "We constantly innovate to bring you the latest and most effective business solutions."
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building long-term relationships based on trust, transparency, and reliable service."
    },
    {
      icon: "🌟",
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering outstanding results."
    },
    {
      icon: "💡",
      title: "Creativity",
      description: "Creative thinking and unique approaches to solve complex business challenges."
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "Helping businesses grow and scale with sustainable, long-term strategies."
    },
    {
      icon: "❤️",
      title: "Passion",
      description: "We're passionate about your success and dedicated to achieving your goals."
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="About Biznivate"
        subtitle="Empowering businesses with innovative solutions and expert guidance since 2010"
        buttonText="Learn More"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Who We Are Section */}
      <Section 
        title="Who We Are"
        subtitle="A team of passionate professionals dedicated to your business success"
      >
        <SimpleGrid columns={2}>
          <div className="about-content">
            <h3>Our Story</h3>
            <p>
              Founded in 2010, Biznivate has been helping businesses transform and grow for over a decade. 
              We started with a simple mission: to provide innovative business solutions that deliver real results.
            </p>
            <p>
              Today, we're proud to have helped over 5,000 businesses achieve their goals through our 
              comprehensive range of services including consulting, marketing, design, and technology solutions.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration"
              style={{width: '100%', borderRadius: '8px'}}
            />
          </div>
        </SimpleGrid>
      </Section>

      {/* Mission Section */}
      <Section 
        title="Our Mission"
        subtitle="Helping millions of organizations grow better"
        className="mission-section"
      >
        <SimpleGrid columns={2}>
          <div className="mission-image">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Business growth"
              style={{width: '100%', borderRadius: '8px'}}
            />
          </div>
          <div className="mission-content">
            <h3>Growing Together</h3>
            <p>
              We believe that when businesses succeed, communities thrive. Our mission is to provide 
              the tools, strategies, and support that businesses need to grow sustainably and make 
              a positive impact.
            </p>
            <p>
              Through innovative solutions and personalized service, we help organizations of all 
              sizes achieve their full potential and create lasting value for their stakeholders.
            </p>
          </div>
        </SimpleGrid>
      </Section>

      {/* Values Section */}
      <Section 
        title="Our Values"
        subtitle="The principles that guide everything we do"
      >
        <SimpleGrid columns={3}>
          {companyValues.map((value, index) => (
            <SimpleCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default About
