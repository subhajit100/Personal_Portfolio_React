import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Let's have a chat. Shall we?" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
