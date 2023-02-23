import React from 'react'
import Features from '../../components/Features/Features'
import Header from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import './home.css'

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  )
}

export default Home
