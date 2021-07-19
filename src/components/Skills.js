import React from 'react'
import resume from '../files/HinkelResume.docx'

export default function Skills() {
    return (
        <section id="skills">
            <div className="skills txt-center">
                <div className="padding">
                    <h2>Skills & Proficiencies</h2>
                </div>
                <ul>
                    <li>Project Engineering</li>
                    <li>Project Management</li>
                    <li>Process Optimization</li>
                    <li>Process Simulation</li>
                    <li>Water Treatment</li>
                    <li>Industrial Waterwaste</li>
                    <li>Paper Industry</li>
                    <li>Pulp Industry</li>
                    <li>Lean Green Belt Certified</li>
                    <li>Dairyman' Standard Testing</li>
                    <li>Aspen Plus</li>
                    <li>Python</li>
                    <li>MATLAB</li>
                    <li>Microsoft Suite</li>
                </ul>
                <div className="btn">
                    <a href={resume} download>Download Résumé <i class="fas fa-download"></i></a>
                </div>
            </div>
        </section>
    )
}
