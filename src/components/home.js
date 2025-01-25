import h from "../css/home.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FadeIn from "./fade"

export default function Home() {
    return(
        <section id="home" className={h.home}>
            <FadeIn>
                <div className = {h.text}>
                    <h1>Hi, my name is</h1>
                </div>
                <div className = {h.text}>
                    <h2>Mark Alexander</h2>
                </div>
                <div className = {h.text}>
                    <p>I am a computer science student at Towson University. </p>
                </div>
                <div className={h.icons}>
                    <a className={h.icons_link} href ="https://github.com/marksalamander" target="_blank" rel="noreferrer">
                        <GitHubIcon fontSize="inherit"  />
                    </a>
                    <a className={h.icons_link} href ="https://www.linkedin.com/in/mark-alexander-940b62257/" target="_blank" rel="noreferrer">
                        <LinkedInIcon fontSize="inherit" />
                    </a>
                </div>
            </FadeIn>
        </section>
    )
}