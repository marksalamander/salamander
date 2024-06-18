import header from "../css/header.module.css"
import resume from "./Resume.pdf"
import { HashLink } from 'react-router-hash-link';

export default function Taskbar() {
    return(
        <header className={header}>
            <div className={header.nav}>
                <ol>
                    <li>
                        <HashLink smooth to="/#home" className={header.links}>Home</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#about" className={header.links}>About</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#projects" className={header.links}>Projects</HashLink>
                    </li>
                </ol>
                <a className={header.resume_pdf} href={resume} target="_blank" rel="noreferrer">
                    Resume
                </a>
            </div>
        </header>
    )
}