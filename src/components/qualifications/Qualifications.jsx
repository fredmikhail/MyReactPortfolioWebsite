import React from "react";
import "./Qualifications.css"

const Qualifications = () => {
    const [toggleState, setToggleState] = React.useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ? 
                        "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>

                    <div className={
                        toggleState === 2 ? 
                        "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">College Physics/Math Tutor</h3>
                                <span className="qualification__subtitle">Various Locations</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 09/2018 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Software Developer Intern</h3>
                                <span className="qualification__subtitle">iBwave Solutions - Montreal</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 05/2021 - 09/2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer Intern</h3>
                                <span className="qualification__subtitle">EXFO - Montreal</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 01/2021 - 04/2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Software Engineer Intern</h3>
                                <span className="qualification__subtitle">CMC Electronics - Montreal</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 09/2019 - 12/2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                            <div>
                                <h3 className="qualification__title">Software Engineering</h3>
                                <span className="qualification__subtitle">Concordia University - Montreal</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2022
                                </div>
                            </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">Pure Sciences</h3>
                                <span className="qualification__subtitle">John Abbott College - Montreal</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications;