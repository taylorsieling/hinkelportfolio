import React from 'react'
import Mark from '../images/Mark-Headshot.png'

export default function Header() {
    return (
        <section id="header">
        <div className="header">
            <div className="columns">
                <div className="header-intro">
                    <div className="hello">
                        <h3>Hello, I'm</h3>
                    </div>
                    <div className="intro">
                        <h1><span className="txt-normal">Mark</span> Hinkel</h1>
                        <h3 className="txt-upper">Chemical Engineer</h3>
                    </div>
                    <div className="icons">
                        <a href="mailto:mjhinkel18@gmail.com" target="_blank" rel="noreferrer"><i class="fas fa-envelope-open fa-2x"></i>{null}</a>
                        <a href="www.linkedin.com/in/markjhinkel" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in fa-2x"></i>{null}</a>
                        <a href="www.github.com" target="_blank" rel="noreferrer"><i class="fab fa-github fa-2x"></i>{null}</a>
                    </div>
                </div>
                <div className="header-image">
                    <img src={Mark} alt="Mark Hinkel Portrait" className="portrait"/>
                </div>
            </div>
        </div>
        </section>
    )
}
