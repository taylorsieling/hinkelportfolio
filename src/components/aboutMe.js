import React from 'react'
import Portrait from '../images/Mark-Portrait.png'

export default function AboutMe() {
    return (
        <section id="aboutme">
            <div className="columns">
                
                <div className="about">
                    <h2>About Me</h2>
                    <p>I am a resourceful, Lean Green Belt certified chemical engineering graduate specialized in environmental studies. I am eager to explore a career with a creative team. I have a strong background in water and wastewater treatment, process improvement, and manufacturing in an industrial setting.</p>
                    <p>In my free time, I also enjoy basketball, bouldering, and scrolling endlessly through wikipedia to improve my trivia game.</p>
                </div>
                <div>
                    {/* <img src={Portrait} alt="Mark Hinkel Portrait" /> */}
                </div>
            </div>
        </section>
    )
}
