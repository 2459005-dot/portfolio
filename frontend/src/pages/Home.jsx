import React from 'react'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Header from '../components/Header'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

const Home = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div>
            현재의 테마 : {theme}
            <button onClick={toggleTheme}>테마전환</button>
            <Header />
            <main>

                <section id='Hero'>
                    <Hero />
                </section>

                <section id='Contact'>
                    <Contact />
                </section>

                <section id='Aboutme'>
                    <Aboutme />
                </section>

                <section id='Work'>
                    <Work />
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Home