import React from 'react';
import Footer from './footer';
export default function About(props) {


  return (

    <div>
    <div className='container mt-5' style={{color: props.mode==='dark'?'white':'#000'}}>
        <h3>{props.theme_title}</h3>
        <div className='themebox'>
            <p>Convert Case is a versatile, free online tool designed to boost productivity by streamlining text formatting. Whether you need to fix a "Caps Lock" mistake or ensure a title follows proper capitalization rules, the platform provides instant corrections and various stylistic outputs</p>
           
            <p>Beyond simple formatting, the site offers:</p>

            <ul>
                <li><strong>Functional Conversions: </strong> Easily translate standard text into specialized formats like binary or Morse code.</li>
                <li><strong>Creative Flair:</strong> Utilize unique text manipulators to make social media posts or advertisements more eye-catching.</li>
                <li><strong>Error Correction:</strong> Quickly remedy accidental typing errors to save time on manual editing.</li>
            </ul>

            <p>Ultimately, it serves as an all-in-one solution for anyone looking to refine, transform, or stylize their written content for professional or personal use.</p>
        </div>
    </div>

     <Footer />

    </div>
  )
}
