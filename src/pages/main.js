import main from "../css/main.module.css"
import Header from "../components/header"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Particles from "../components/particles"

export default function Homepage(){

    return (
        <div className={main.container}>
            <Header />
            <Particles className={main.particles} />
            <div className={main.main}>
                <Home />
                <About />
                <Projects />
            </div>
        </div>
    )
}