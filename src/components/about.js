import FadeIn from './fade';
import a from "../css/about.module.css"

export default function About() {
    return (
        <section id="about" className={a.about}>
            <FadeIn>
            <h1 className={a.header}>
                About Me
            </h1>
            <div className={a.description}>
                <p className={a.desc}>
                    Hello, my name is Mark Alexander. I am a recent Towson University graduate, passionate about learning new things. I am interested in all things programming, from web development to A.I.
                </p>

                <h2 className={a.title}>
                    Education
                </h2>

                <div className={a.edu}>
                    <div className={a.college}>
                        <p className={a.text}>
                            Towson University - Bachelor's of Computer Science
                        </p>
                        <p className={a.text}>
                            Jan. 2023 - Dec. 2024
                        </p>
                    </div>
                    <p className={a.text}>
                            GPA: 3.67
                    </p>
                </div>

                <div className={a.edu}>
                    <div className={a.college}>
                        <p className={a.text}>
                            Pikes Peak State College - Associate's of Computer Science
                        </p>
                        <p className={a.text}>
                            Aug. 2020 - May 2022
                        </p>
                    </div>
                    <p className={a.text}>
                            GPA: 4.00
                    </p>
                </div>
            </div>
            <h2 className={a.title}>
                Skills
            </h2>

            <div className={a.container}>
                <div className={a.skill}>
                    <img src={`${process.env.PUBLIC_URL}/svg/python-5.svg`} className={a.skill_img} alt="Python"></img>
                    <span className={a.skill_name}>Python</span>
                </div>

                <div className={a.skill}>
                    <img src={`${process.env.PUBLIC_URL}/svg/c.svg`} className={a.skill_img} alt="C++"></img>
                    <span className={a.skill_name}>C++</span>
                </div>

                <div className={a.skill}>
                    <img src={`${process.env.PUBLIC_URL}/svg/java-4.svg`} className={a.skill_img} alt="Java"></img>
                    <span className={a.skill_name}>Java</span>
                </div>
                
                <div className={a.skill}>
                    <img src={`${process.env.PUBLIC_URL}/svg/git.svg`} className={a.skill_img} alt="Git"></img>
                    <span className={a.skill_name}>Git</span>
                </div>

                <div className={a.skill}>
                    <img src={`${process.env.PUBLIC_URL}/svg/kotlin-2.svg`} className={a.skill_img} alt="Kotlin"></img>
                    <span className={a.skill_name}>Kotlin</span>
                </div>

                <div className={a.skill}>
                    <img src={`${process.env.PUBLIC_URL}/svg/react-2.svg`} className={a.skill_img} alt="React"></img>
                    <span className={a.skill_name}>React</span>
                </div>

                <div className={a.skill}>
                    <img src={`${process.env.PUBLIC_URL}/svg/nodejs-3.svg`} className={a.skill_img} alt="Node.js"></img>
                    <span className={a.skill_name}>Node.js</span>
                </div>

                <div className={a.skill}>
                    <img src={`${process.env.PUBLIC_URL}/svg/logo-javascript.svg`} className={a.skill_img} alt="JavaScript"></img>
                    <span className={a.skill_name}>JavaScript</span>
                </div>
            </div>
            </FadeIn>
        </section>
    )
}