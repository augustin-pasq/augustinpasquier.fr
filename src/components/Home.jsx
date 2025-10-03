import {AnimatePresence, motion} from "framer-motion"
import {Button} from "primereact/button"
import {Carousel} from "primereact/carousel"
import data from "../data/data.json"
import {Rating} from "primereact/rating"
import SvgFactory from "./SvgFactory"
import {TabPanel, TabView} from "primereact/tabview"
import {Tag} from "primereact/tag"
import {Timeline} from "primereact/timeline"
import {useEffect, useRef, useState} from "react"
import {SpeedDial} from "primereact/speeddial"
import {useTranslation} from "react-i18next"

export default function Home() {
    const [movingHand, setMovingHand] = useState(true)
    const [displaySidebar, setDisplaySidebar] = useState(false)
    const {t, i18n} = useTranslation()

    const header = useRef(null)
    const about = useRef(null)
    const languages = useRef(null)
    const projects = useRef(null)
    const contact = useRef(null)

    useEffect(() => {
        const onScroll = () => setDisplaySidebar(window.scrollY > window.innerHeight / 1.5)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const sidebarModel = [
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
                <span className="timeline-item-date">{t(item.date)}</span>
                <p className="timeline-item-text" dangerouslySetInnerHTML={{__html: t(item.text)}}></p>
            </div>
        )
    }

    const slideLeft = {
        initial: {
            opacity: 0,
            x: "-5rem"
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.190, 1.000, 0.220, 1.000]
            }
        },
        exit: {
            opacity: 0,
            x: "-5rem",
            transition: {
                duration: 0.5,
                ease: [0.190, 1.000, 0.220, 1.000]
            }
        }
    }

    const slideRight = {
        initial: {
            opacity: 0,
            x: "6rem"
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.190, 1.000, 0.220, 1.000]
            }
        },
        exit: {
            opacity: 0,
            x: "6rem",
            transition: {
                duration: 0.5,
                ease: [0.190, 1.000, 0.220, 1.000]
            }
        }
    }

    return (
        <>
            <AnimatePresence>
                {displaySidebar &&
                    <>
                        <motion.div id={`sidebar${window.matchMedia("(max-width: 1280px)").matches ? "-mobile" : ""}`} variants={slideLeft} initial="initial" animate="animate" exit="exit">
                            {window.matchMedia("(max-width: 1280px)").matches ?
                                <SpeedDial model={sidebarModel} direction="up" transitionDelay={0} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-text"/>
                                :
                                <>
                                    {sidebarModel.map((sidebarItem, index) => {
                                        return <div key={index} className="sidebar-item" onClick={sidebarItem.command}>{sidebarItem.title}</div>
                                    })}
                                </>
                            }
                        </motion.div>
                        <motion.div id="scroll-to-top-button" variants={slideRight} initial="initial" animate="animate" exit="exit">
                            <Button icon="pi pi-arrow-up" rounded text raised onClick={() => header.current.scrollIntoView()}/>
                        </motion.div>
                    </>
                }
            </AnimatePresence>

            <header ref={header}>
                <span id="language-selector" onClick={() => i18n.changeLanguage(i18n.language === "fr-FR" ? "en-US" : "fr-FR")}>{i18n.language === "fr-FR" ? "🇬🇧" : "🇫🇷"}</span>
                <div id="header-text">
                    <div>
                        <span id="title-heading"><span id="title-heading-emoji" className={movingHand ? "title-heading-emoji-animated" : ""} onAnimationEnd={() => setMovingHand(false)}>👋</span>{t("header.top")}</span>
                        <h1>Augustin Pasquier</h1>
                        <span id="carousel">{t("header.bottom")}
                            <Carousel value={[t("header.carousel.item1"), t("header.carousel.item2"), t("header.carousel.item3")]} numVisible={1} numScroll={1} orientation="vertical" circular autoplayInterval={1800} showIndicators={false} showNavigators={false} verticalViewPortHeight={"2rem"} itemTemplate={carouselItem}/>
                        </span>
                    </div>

                    <Button id="contact-button" label={t("header.contact")} icon="pi pi-send" text raised rounded
                            onClick={() => contact.current.scrollIntoView()}/>
                </div>

                <picture>
                    <source srcSet="/images/profile_picture.webp"/>
                    <img src="/images/profile_picture.png" alt={t("header.contact")}/>
                </picture>

                <div id="cta">
                    <i className="pi pi-angle-double-down" onClick={() => about.current.scrollIntoView()}></i>
                </div>
            </header>

            <main>
                <section id="about-section" ref={about}>
                    <h2><span className="section-title-emoji">💡</span>{t("about.title")}</h2>

                    <div className="section-text">
                        <p>{t("about.text1")}</p>
                        <span>{t("about.text2")}</span>
                    </div>

                    <Timeline value={data.events} align="alternate" content={timelineItem}/>
                </section>

                <section id="languages-section" ref={languages}>
                    <h2><span className="section-title-emoji">🔧</span>{t("languages.title")}</h2>

                    <div className="section-text">
                        <p>{t("languages.text")}</p>
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
                                    <span>{t(tool.name)}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section id="projects-section" ref={projects}>
                    <h2><span className="section-title-emoji">🏗️</span>{t("projects.title")}</h2>

                    <div className="section-text">
                        <p>{t("projects.text1")}</p>
                        <span>{t("projects.text2")}</span>
                    </div>

                    <TabView scrollable>
                        {Object.keys(data.projects).map((category, index) => {
                            return (
                                <TabPanel header={t(data.projects[category].tabTitle)} key={index}>
                                    <div className="projects">
                                        {data.projects[category].content.map((project, projectIndex) => {
                                            return (
                                                <div key={projectIndex} className={`projects-item ${project.url ? "" : "project-no-repository"}`} onClick={() => window.open(project.url)}>
                                                    <span className="projects-item-title">{project.name}</span>
                                                    <div className="projects-item-stack">
                                                        {project.technos.map((techno, technoIndex) => <Tag key={technoIndex} value={`${techno}`} rounded></Tag>)}
                                                    </div>
                                                    <span
                                                        className="projects-item-description">{t(project.description)}</span>
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
                    <h2 id="contact-section-title">{t("contact.title")}</h2>
                    <div id="contact-section-text" className="section-text">
                        <p>{t("contact.text")}</p>
                    </div>

                    <div id="connections">
                        <a className="connections-item" href="mailto:contact@augustinpasquier.fr" target="_blank" rel="noreferrer">
                            <SvgFactory item="mail"/>
                            <span>Email</span>
                        </a>

                        <a className="connections-item" href="https://www.github.com/augustin-pasq" target="_blank" rel="noreferrer">
                            <SvgFactory item="github"/>
                            <span>GitHub</span>
                        </a>

                        <a className="connections-item" href="https://www.linkedin.com/in/augustin-pasquier-354a07228/" target="_blank" rel="noreferrer">
                            <SvgFactory item="linkedin"/>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <span id="footer-mention">{t("footer.text")}</span>
                <span id="footer-name">{`Augustin Pasquier | Portfolio - ${(new Date().getFullYear())}`}</span>
            </footer>
        </>
    )
}
