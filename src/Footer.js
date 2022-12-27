import React from 'react'

const Footer = ({ isFooter, setIsFooter}) => {
  return (
    <footer className='bg-teal-400 min-w-full fixed bottom-0 left-0 rounded shadow-lg  text-center text-white transit-foot'>
        <span className='close-btn cursor-pointer text-2xl font-bold' onClick={() => setIsFooter(!isFooter)}>&#x2715;</span>
        <h1 className='text-xl font-semi-bold'>An Image gallery site made by Faruk Haruna</h1>
        <p>Meet Haruna:</p>
        <div className='font-bold'>
        <hr />
        <p><a href="https://wa.me/qr/LWZJZHJ2AAOYE1">Whatsapp Dm</a></p>
        <p><a href="mailto:harunafaruk2004@gmail.com">Email Me</a></p>
        <p><a href="https://github.com/Haruna2004">GitHub Account</a></p>
        <hr />
        </div>
        <h3>&copy;built using Tailwindcss and React Js</h3>
    </footer>
  )
}
export default Footer