import {CSSTransition} from "react-transition-group"
import Head from "next/head"
import Link from "next/link"
import {Rating} from "primereact/rating"
import SvgFactory from "@/components/SvgFactory"
import {TabPanel, TabView} from "primereact/tabview"
import {Tag} from "primereact/tag"
import {Timeline} from "primereact/timeline"
import {TypeAnimation} from "react-type-animation"
import {useEffect, useRef, useState} from "react"

export default function Home() {
    const [data, setData] = useState({})
    const [readyToRender, setReadyToRender] = useState(false)

    const [displaySidebar, setDisplaySidebar] = useState(false)
    const about = useRef(null)
    const languages = useRef(null)
    const projects = useRef(null)
    const contact = useRef(null)

    useEffect(() => {
        fetch("/api/getData")
            .then((result) => {result.json()
                .then((content) => {setData(content)})
                .then(() => setReadyToRender(true))
            })

        window.addEventListener("scroll", () => {
            setDisplaySidebar(window.scrollY > window.innerHeight / 1.75)
        })
    }, [])

    const timelineItem = (item) => {
        return (
            <div className="timeline-item">
                <span>{item.date}</span>
                <p>{item.text}</p>
            </div>
        )
    }

    return (
        <>
            {readyToRender &&
                <>
                    <Head>
                        <title>Augustin Pasquier</title>
                        <meta name="description" content="Augustin Pasquier - Site web"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>

                    <CSSTransition in={displaySidebar} timeout={500} classNames="slide" unmountOnExit>
                            <div id="sidebar">
                                <div className="sidebar-item" onClick={() => about.current.scrollIntoView()}>💡</div>
                                <div className="sidebar-item" onClick={() => languages.current.scrollIntoView()}>🔧</div>
                                <div className="sidebar-item" onClick={() => projects.current.scrollIntoView()}>🏗️</div>
                                <div className="sidebar-item" onClick={() => contact.current.scrollIntoView()}>💬</div>
                            </div>
                    </CSSTransition>

                    <main>
                        <section id="me-section">
                            <div className="me-content">
                                <div className="text-container">
                                    <span className="pre-title"><span>👋</span>, moi c'est</span>
                                    <h1>Augustin Pasquier</h1>
                                    <span className="post-title">et je suis 
                                            <TypeAnimation
                                                sequence={["étudiant en BUT informatique", 1500, "développeur web en alternance", 1500, "passionné d'informatique", 1500,]}
                                                preRenderFirstString={true}
                                                speed={50}
                                                repeat={Infinity}/>
                                        </span>
                                </div>

                                <picture>
                                    <source srcSet="/images/profile_picture_no-background.webp"/>
                                    <img src="/images/profile_picture_no-background.png" alt="Photo de profil"/>
                                </picture>
                            </div>

                            <div className="me-cta">
                                <span>Apprenez-en plus sur moi !</span>
                                <i className="pi pi-chevron-down cta-chevron" onClick={() => about.current.scrollIntoView()}></i>
                            </div>
                        </section>

                        <section id="about-section" ref={about}>
                            <h2><span>💡</span>Tout commence avec un ruban LED...</h2>

                            <div className="text-container">
                                <p>En classe de troisième, je me vois mener un projet scolaire dont l'un des objectifs était de contrôler un ruban LED via une carte Arduino. Ce projet, c'est ma première confrontation à la programmation. C'est aussi le déclic qui me fera prendre conscience que c'est dans cette discipline que je veux m'illustrer.</p>
                                <span>Depuis, j'enchaîne les projets et m'investis à fond dans ma passion :</span>
                            </div>

                            <Timeline value={data.events} align="alternate" content={timelineItem}/>
                        </section>

                        <section id="languages-section" ref={languages}>
                            <h2><span>🔧</span>Des langages et des outils</h2>

                            <div className="text-container">
                                <p>Depuis ma première ligne de code jusqu'à aujourd'hui, j'ai appris à me servir de tout un tas de langages et outils. À l'aise avec certaines, envieux de progresser dans d'autres, j'ai déjà utilisé toutes ces technologies.</p>
                            </div>

                            <div className="languages-container">
                                {data.languages.map((language, languageIndex) => {
                                    return (
                                        <div key={languageIndex} className="language-item">
                                            <SvgFactory item={language.logo}/>
                                            <div>
                                                <span>{language.name}</span>
                                                <Rating value={language.value} cancel={false} readOnly/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="tools-container">
                                {data.tools.map((tool, index) => {
                                    return (
                                        <div key={index} className="tool">
                                            <SvgFactory item={tool.logo}/>
                                            <span>{tool.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>

                        <section id="projects-section" ref={projects}>
                            <h2><span>🏗️</span>Mes projets</h2>

                            <div className="text-container">
                                <p>Que ce soit sur mon temps personnel, à l'université ou en entreprise, j'ai développé multiples applications et petits programmes. Chaque projet m'a permis d'apprendre ou de m'améliorer dans une technologie.</p>
                                <span>Le code de chacun d'entre eux est disponible sur GitHub.</span>
                            </div>

                            <TabView>
                                {Object.keys(data.projects).map((category, index) => {
                                    return (
                                        <TabPanel header={data.projects[category].tabTitle} key={index}>
                                            <div className="projects-container">
                                                {data.projects[category].content.map((project, projectIndex) => {
                                                    return (
                                                        <div key={projectIndex} className={project.repositoryName ? "project cursor-pointer" : "project no-repository"} onClick={() => project.repositoryName ? window.open(`https://github.com/augustin-pasq/${project.repositoryName}`) : ""}>
                                                            <span className="project-name">{project.name}</span>
                                                            <div className="project-technos">
                                                                {project.technos.map((techno, technoIndex) => (
                                                                    <Tag key={technoIndex} value={`${techno}`} rounded></Tag>
                                                                ))}
                                                            </div>
                                                            <span className="project-description">{project.description}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </TabPanel>
                                    )
                                })}
                            </TabView>
                        </section>

                        <section id="contact-section" ref={contact}>
                            <h2>Besoin de me contacter ?</h2>
                            <div className="text-container">
                                <p>Vous pouvez m'envoyer un mail ainsi que me retrouver sur GitHub et LinkedIn.</p>
                            </div>

                            <div id="socials-container">
                                <Link className="social-item" href="mailto:contact@augustinpasquier.fr" target="_blank">
                                    <SvgFactory item="mail"/>
                                    <span>Mail</span>
                                </Link>

                                <Link className="social-item" href="https://www.github.com/augustin-pasq" target="_blank">
                                    <SvgFactory item="github"/>
                                    <span>GitHub</span>
                                </Link>

                                <Link className="social-item" href="https://www.linkedin.com/in/augustin-pasquier-354a07228/" target="_blank">
                                    <SvgFactory item="linkedin"/>
                                    <span>LinkedIn</span>
                                </Link>
                            </div>
                        </section>
                    </main>
                </>
            }
        </>
    )
}