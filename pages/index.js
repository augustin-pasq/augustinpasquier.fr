import {Button} from "primereact/button"
import {Carousel} from "primereact/carousel"
import {CSSTransition} from "react-transition-group"
import Head from "next/head"
import Link from "next/link"
import {Rating} from "primereact/rating"
import SvgFactory from "@/components/SvgFactory"
import {TabPanel, TabView} from "primereact/tabview"
import {Tag} from "primereact/tag"
import {Timeline} from "primereact/timeline"
import {useEffect, useRef, useState} from "react"
import {SpeedDial} from "primereact/speeddial"
import {useMediaQuery} from "react-responsive"

export default function Home() {
    const [data, setData] = useState({})
    const [readyToRender, setReadyToRender] = useState(false)
    const [movingHand, setMovingHand] = useState(true)

    const [displaySidebar, setDisplaySidebar] = useState(false)
    const header = useRef(null)
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
            setDisplaySidebar(window.scrollY > window.innerHeight / 1.5)
        })
    }, [])

    const isMobile = useMediaQuery({ minWidth: 1280 })

    const sidebar = [
        {
            title: "💡",
            icon: "about-icon",
            command: () => about.current.scrollIntoView()
        },
        {
            title: "🔧",
            icon: "languages-icon",
            command: () => languages.current.scrollIntoView()
        },
        {
            title: "🏗️",
            icon: "projects-icon",
            command: () => projects.current.scrollIntoView()
        }
    ]

    const carouselItem = (item) => {
        return (
            <span className="carousel-item">{item}</span>
        )
    }

    const timelineItem = (item) => {
        return (
            <div className="timeline-item">
                <span className="timeline-item-date">{item.date}</span>
                <p className="timeline-item-text">{item.text}</p>
            </div>
        )
    }

    return (
        <>
            {readyToRender &&
                <>
                    <Head>
                        <title>Augustin Pasquier | Portfolio</title>
                        <meta name="description" content="Augustin Pasquier | Portfolio"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>

                    {isMobile ?
                        <CSSTransition in={displaySidebar} timeout={500} classNames="slide-left" unmountOnExit>
                            <div id="sidebar">
                                {sidebar.map((sidebarItem, index) => {return <div key={index} className="sidebar-item" onClick={sidebarItem.command}>{sidebarItem.title}</div>})}
                            </div>
                        </CSSTransition>
                        :
                        <CSSTransition in={displaySidebar} timeout={500} classNames="slide-left" unmountOnExit>
                            <SpeedDial model={sidebar} direction="up" transitionDelay={0} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-text" />
                        </CSSTransition>
                    }

                    <header ref={header}>
                        <div id="header-text">
                            <div>
                                <span id="title-heading"><span id="title-heading-emoji" className={movingHand ? "title-heading-emoji-animated" : ""} onAnimationEnd={() => setMovingHand(false)}>👋</span>, moi c'est</span>
                                <h1>Augustin Pasquier</h1>
                                <span id="carousel">et je suis 
                                    <Carousel value={["étudiant en BUT informatique", "développeur web en alternance", "passionné par la programmation"]} numVisible={1} numScroll={1} orientation="vertical" circular autoplayInterval={1800} showIndicators={false} showNavigators={false} verticalViewPortHeight={"2rem"} itemTemplate={carouselItem}/>
                                </span>
                            </div>

                            <Button id="contact-button" label="Me contacter" icon="pi pi-send" text raised rounded onClick={() => contact.current.scrollIntoView()}/>
                        </div>

                        <picture>
                            <source srcSet="/images/profile_picture.webp"/>
                            <img src="/images/profile_picture.png" alt="Photo de profil"/>
                        </picture>

                        <div id="cta">
                            <i className="pi pi-angle-double-down" onClick={() => about.current.scrollIntoView()}></i>
                        </div>
                    </header>

                    <main>
                        <section ref={about}>
                            <h2><span className="section-title-emoji">💡</span>Tout commence avec un ruban LED</h2>

                            <div className="section-text">
                                <p>En classe de troisième, je me vois mener un projet scolaire dont l'un des objectifs
                                    était de contrôler un ruban LED via une carte Arduino. Ce projet, c'est ma première
                                    confrontation à la programmation. C'est aussi le déclic qui me fera prendre
                                    conscience que c'est dans cette discipline que je veux m'illustrer.</p>
                                <span>Depuis, j'enchaîne les projets et m'investis à fond dans ma passion :</span>
                            </div>

                            <Timeline value={data.events} align="alternate" content={timelineItem}/>
                        </section>

                        <section ref={languages}>
                            <h2><span className="section-title-emoji">🔧</span>Des langages et des outils</h2>

                            <div className="section-text">
                                <p>Depuis ma première ligne de code jusqu'à aujourd'hui, j'ai appris à me servir de tout
                                    un tas de langages et outils. À l'aise avec certaines, envieux de progresser dans
                                    d'autres, j'ai déjà utilisé toutes ces technologies.</p>
                            </div>

                            <div className="languages">
                                {data.languages.map((language, languageIndex) => {
                                    return (
                                        <div key={languageIndex} className="languages-item">
                                            <div className="languages-item-icon-container">
                                                <SvgFactory className="languages-item-icon" item={language.logo}/>
                                            </div>
                                            <div className="languages-item-text">
                                                <span>{language.name}</span>
                                                <Rating value={language.value} cancel={false} readOnly/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="tools">
                                {data.tools.map((tool, index) => {
                                    return (
                                        <div key={index} className="tools-item">
                                            <SvgFactory item={tool.logo}/>
                                            <span>{tool.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>

                        <section ref={projects}>
                            <h2><span className="section-title-emoji">🏗️</span>Mes projets</h2>

                            <div className="section-text">
                                <p>Que ce soit sur mon temps personnel, à l'université ou en entreprise, j'ai développé
                                    multiples applications et petits programmes. Chaque projet m'a permis d'apprendre ou
                                    de m'améliorer dans une technologie.</p>
                                <span>Le code de chacun d'entre eux est disponible sur GitHub.</span>
                            </div>

                            <TabView>
                                {Object.keys(data.projects).map((category, index) => {
                                    return (
                                        <TabPanel header={data.projects[category].tabTitle} key={index}>
                                            <div className="projects">
                                                {data.projects[category].content.map((project, projectIndex) => {
                                                    return (
                                                        <div key={projectIndex} className="projects-item" onClick={() => project.repositoryName ? window.open(`https://github.com/augustin-pasq/${project.repositoryName}`) : ""}>
                                                            <span className="projects-item-title">{project.name}</span>
                                                            <div className="projects-item-stack">
                                                                {project.technos.map((techno, technoIndex) => (
                                                                    <Tag key={technoIndex} value={`${techno}`} rounded></Tag>
                                                                ))}
                                                            </div>
                                                            <span className="projects-item-description">{project.description}</span>
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
                            <h2 id="contact-section-title">Besoin de me contacter ?</h2>
                            <div id="contact-section-text" className="section-text">
                                <p>Vous pouvez m'envoyer un mail ainsi que me retrouver sur GitHub et LinkedIn.</p>
                            </div>

                            <div id="connections">
                                <Link className="connections-item" href="mailto:contact@augustinpasquier.fr" target="_blank">
                                    <SvgFactory item="mail"/>
                                    <span>Mail</span>
                                </Link>

                                <Link className="connections-item" href="https://www.github.com/augustin-pasq" target="_blank">
                                    <SvgFactory item="github"/>
                                    <span>GitHub</span>
                                </Link>

                                <Link className="connections-item" href="https://www.linkedin.com/in/augustin-pasquier-354a07228/" target="_blank">
                                    <SvgFactory item="linkedin"/>
                                    <span>LinkedIn</span>
                                </Link>
                            </div>
                        </section>
                    </main>

                    <CSSTransition in={displaySidebar} timeout={500} classNames="slide-right" unmountOnExit>
                        <Button id="scroll-to-top-button" icon="pi pi-arrow-up" rounded text raised onClick={() => header.current.scrollIntoView()}/>
                    </CSSTransition>
                </>
            }
        </>
    )
}