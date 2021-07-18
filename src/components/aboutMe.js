import React from 'react'
import Portrait from '../images/Mark-Portrait.png'

export default function AboutMe() {
    return (
        <section id="aboutme">
            <div className="row">
                <div className="row-two">
                    <img src={Portrait} alt="Mark Hinkel Portrait" />
                </div>
                <div className="row-two about">
                    <h1>About Me</h1>
                    <p>Resourceful Lean Green Belt certified chemical engineering graduate specialized in environmental studies eager to explore a career with a creative team. Strong background in water and wastewater treatment, process improvement, and manufacturing in an industrial setting.</p>
                </div>
                <hr/>
            </div>
        </section>
    )
}
