import React from 'react'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Header from '../components/Header'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Work />
            <Contact />
            <Aboutme />
            <Footer />
        </div>
    )
}

export default Home