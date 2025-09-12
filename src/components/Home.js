import {Button} from "primereact/button"
import {Carousel} from "primereact/carousel"
import {CSSTransition} from "react-transition-group"
import {Rating} from "primereact/rating"
import SvgFactory from "./SvgFactory"
import {TabPanel, TabView} from "primereact/tabview"
import {Tag} from "primereact/tag"
import {Timeline} from "primereact/timeline"
import {useEffect, useRef, useState} from "react"
import {SpeedDial} from "primereact/speeddial"
import {useMediaQuery} from "react-responsive"

const eventsData = [
    { date: "Octobre - Juin 2018", text: "Projet scolaire avec une carte Arduino et un ruban LED" },
    { date: "Janvier 2018", text: "Stage de découverte de troisième dans une boutique de support informatique" },
    { date: "2019 - 2021", text: "Découverte du développement web via la création de bots Discord et de sites web" },
    { date: "Février 2021", text: "Stage de découverte et de pratique dans une agence de développement web" },
    { date: "Juin 2021", text: "Obtention du baccalauréat mention bien, spécialités mathématiques et physique chimie" },
    { date: "Septembre 2021", text: "Intégration du BUT informatique à l'IUT de Vannes" },
    { date: "Mai 2022", text: "Intervention dans une école primaire pour initier une classe de CE2-CM1 à la programmation" },
    { date: "Septembre 2022", text: "Début d'un contrat d'alternance pour du développement web et mobile dans la start-up vannetaise Imagina" },
    { date: "Décembre 2023", text: "Participation à l'édition 2023 de l'évènement \"La Nuit de l'Info\", en finissant 2<sup>ème</sup> sur 654 soumissions" },
    { date: "Août 2024", text: "Obtention du BUT informatique" },
    { date: "Septembre 2024", text: "Intégration de l'ENSSAT à Lannion et début d'un contrat d'alternance pour un poste d'ingénieur DevSecOps chez Orange" }
]

const languagesData = [
    { name: "HTML/CSS", value: 5, logo: "html" },
    { name: "JavaScript", value: 4, logo: "javascript" },
    { name: "PHP", value: 4, logo: "php" },
    { name: "React.js", value: 4, logo: "react" },
    { name: "SQL", value: 4, logo: "mysql" },
    { name: "Java", value: 3, logo: "java" },
    { name: "Python", value: 3, logo: "python" },
    { name: "Android", value: 2, logo: "android" }
]

const toolsData = [
    { name: "Linux", logo: "linux" },
    { name: "Suite JetBrains", logo: "jetbrains" },
    { name: "Visual Studio Code", logo: "vscode" },
    { name: "Postman", logo: "postman" },
    { name: "Git", logo: "git" }
]

const projectsData = {
    personals: {
        tabTitle: "Projets personnels",
        content: [
            {
                name: "LJDP",
                technos: ["React.js", "Next.js", "Prisma", "MySQL"],
                description: "Jeu multijoueur en ligne de devinettes à base de photos",
                repositoryName: "LJDP"
            },
            {
                name: "augustinpasquier.fr",
                technos: ["React.js", "Next.js"],
                description: "Portfolio",
                repositoryName: "augustinpasquier.fr"
            },
            {
                name: "Nuit de l'Info 2023",
                technos: ["React.js", "PHP"],
                description: "Application web produite à l'édition 2023 de la Nuit de l'Info",
                repositoryName: "nuit-info-2023"
            },
            {
                name: "Test Technique Alternance",
                technos: ["Android (Java)"],
                description: "Application Android produite pour un test technique lors de la recherche d'alternance",
                repositoryName: "Test-Technique-Alternance"
            },
            {
                name: "Patrick Sébastien",
                technos: ["JavaScript"],
                description: "Bot Discord pour souhaiter les anniversaires et faire du bruit dans les salons vocaux",
                repositoryName: "Patrick-Sebastien"
            },
            {
                name: "Évelyne Dhéliat",
                technos: ["JavaScript"],
                description: "Bot Discord de prévisions météo",
                repositoryName: "Evelyne-Dheliat"
            }
        ]
    },
    university: {
        tabTitle: "Projets universitaires",
        content: [
            {
                name: "Punto",
                technos: ["React.js", "Next.js", "Prisma", "MySQL", "MongoDB", "SQLite", "Neo4j"],
                description: "Implémentation du jeu de société Punto avec 4 bases de données",
                repositoryName: "Punto"
            },
            {
                name: "Application ToDo Android",
                technos: ["Android (Java)"],
                description: "Application Android de gestion des tâches (ToDo-List)",
                repositoryName: "Application-ToDo-Android"
            },
            {
                name: "Application ToDo Web",
                technos: ["Vue.js"],
                description: "Application web de gestion des tâches (ToDo-List)",
                repositoryName: "Application-ToDo-Web"
            },
            {
                name: "Convertisseur de température",
                technos: ["Android (Java)"],
                description: "Application Android pour convertir les degrés Celsius en Fahrenheit (et inversement)",
                repositoryName: "Convertisseur-Temperature"
            },
            {
                name: "Application Météo",
                technos: ["HTML/CSS/JavaScript", "Vue.js"],
                description: "Application web de prévisions météo",
                repositoryName: "Application-Meteo"
            },
            {
                name: "Projet NoSQL",
                technos: ["React.js", "Next.js", "Prisma", "MongoDB"],
                description: "Panneau d'administration/Catalogue pour un concessionaire automobile",
                repositoryName: "Projet-NoSQL"
            },
            {
                name: "SportTrack",
                technos: ["HTML/CSS", "Express.js", "PHP", "SQLite"],
                description: "Application web de suivi d'activités sportives",
                repositoryName: "SportTrack"
            },
            {
                name: "PNR",
                technos: ["Java", "JavaFX", "MySQL"],
                description: "Application de bureau de saisie d'observations de faune locale",
                repositoryName: "SAE-PNR"
            },
            {
                name: "Marienbad",
                technos: ["Java"],
                description: "Numérisation du jeu de Marienbad",
                repositoryName: "College-Numerique-56"
            },
            {
                name: "Collège Numérique 56",
                technos: ["HTML/CSS/JavaScript"],
                description: "Site vitrine pour l'opération Collège Numérique 56",
                repositoryName: "College-Numerique-56"
            }
        ]
    },
    professionals: {
        tabTitle: "Projets professionnels",
        content: [
            {
                name: "Imagina",
                technos: ["React.js", "Symfony", "PHP", "Doctrine", "Android (Kotlin)", "HTML/CSS/JavaScript"],
                description: "Contribution aux applications web et Android Imagina ainsi qu'au site vitrine de l'entreprise",
                repositoryName: null
            }
        ]
    }
}

export default function Home() {
    const [movingHand, setMovingHand] = useState(true)
    const [displaySidebar, setDisplaySidebar] = useState(false)

    const header = useRef(null)
    const about = useRef(null)
    const languages = useRef(null)
    const projects = useRef(null)
    const contact = useRef(null)

    useEffect(() => {
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
                <p className="timeline-item-text" dangerouslySetInnerHTML={{__html: item.text}}></p>
            </div>
        )
    }

    return (
        <>
            <CSSTransition in={displaySidebar} timeout={500} classNames="slide-left" unmountOnExit>
                {isMobile ?
                    <div id="sidebar">
                        {sidebar.map((sidebarItem, index) => {
                            return <div key={index} className="sidebar-item" onClick={sidebarItem.command}>{sidebarItem.title}</div>
                        })}
                    </div>
                    :
                    <SpeedDial model={sidebar} direction="up" transitionDelay={0} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-text" />
                }
            </CSSTransition>

            <CSSTransition in={displaySidebar} timeout={500} classNames="slide-right" unmountOnExit>
                <Button id="scroll-to-top-button" icon="pi pi-arrow-up" rounded text raised onClick={() => header.current.scrollIntoView()}/>
            </CSSTransition>

            <header ref={header}>
                <div id="header-text">
                    <div>
                        <span id="title-heading"><span id="title-heading-emoji" className={movingHand ? "title-heading-emoji-animated" : ""} onAnimationEnd={() => setMovingHand(false)}>👋</span>, moi c'est</span>
                        <h1>Augustin Pasquier</h1>
                        <span id="carousel">et je suis 
                            <Carousel value={["étudiant à l'ENSSAT de Lannion", "ingénieur DevSecOps en alternance", "passionné par la programmation"]} numVisible={1} numScroll={1} orientation="vertical" circular autoplayInterval={1800} showIndicators={false} showNavigators={false} verticalViewPortHeight={"2rem"} itemTemplate={carouselItem}/>
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
                <section id="about-section" ref={about}>
                    <h2><span className="section-title-emoji">💡</span>Tout commence avec un ruban LED</h2>

                    <div className="section-text">
                        <p>En classe de troisième, je me vois mener un projet scolaire dont l'un des objectifs
                            était de contrôler un ruban LED via une carte Arduino. Ce projet, c'est ma première
                            confrontation à la programmation. C'est aussi le déclic qui me fera prendre
                            conscience que c'est dans cette discipline que je veux m'illustrer.</p>
                        <span>Depuis, j'enchaîne les projets et m'investis à fond dans ma passion :</span>
                    </div>

                    <Timeline value={eventsData} align="alternate" content={timelineItem}/>
                </section>

                <section id="languages-section" ref={languages}>
                    <h2><span className="section-title-emoji">🔧</span>Des langages et des outils</h2>

                    <div className="section-text">
                        <p>Depuis ma première ligne de code jusqu'à aujourd'hui, j'ai appris à me servir de multiples langages et outils. À l'aise avec certaines et envieux de progresser dans
                            d'autres, j'ai déjà utilisé toutes ces technologies :</p>
                    </div>

                    <div className="languages">
                        {languagesData.map((language, languageIndex) => {
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
                        {toolsData.map((tool, index) => {
                            return (
                                <div key={index} className="tools-item">
                                    <SvgFactory item={tool.logo}/>
                                    <span>{tool.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section id="projects-section" ref={projects}>
                    <h2><span className="section-title-emoji">🏗️</span>Mes projets</h2>

                    <div className="section-text">
                        <p>Que ce soit sur mon temps personnel, à l'université ou en entreprise, j'ai développé
                            de nombreuses applications et petits programmes. Chaque projet m'a permis d'apprendre ou
                            de m'améliorer dans une ou plusieurs technologies.</p>
                        <span>Le code de chacun d'entre eux est disponible sur GitHub.</span>
                    </div>

                    <TabView scrollable>
                        {Object.keys(projectsData).map((category, index) => {
                            return (
                                <TabPanel header={projectsData[category].tabTitle} key={index}>
                                    <div className="projects">
                                        {projectsData[category].content.map((project, projectIndex) => {
                                            return (
                                                <div key={projectIndex} className={`projects-item ${project.repositoryName ? "" : "project-no-repository"}`} onClick={() => project.repositoryName ? window.open(`https://github.com/augustin-pasq/${project.repositoryName}`) : ""}>
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
                        <a className="connections-item" href="mailto:contact@augustinpasquier.fr" target="_blank">
                            <SvgFactory item="mail"/>
                            <span>Mail</span>
                        </a>

                        <a className="connections-item" href="https://www.github.com/augustin-pasq" target="_blank">
                            <SvgFactory item="github"/>
                            <span>GitHub</span>
                        </a>

                        <a className="connections-item" href="https://www.linkedin.com/in/augustin-pasquier-354a07228/" target="_blank">
                            <SvgFactory item="linkedin"/>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <span id="footer-mention">Fait avec ❤️ par Augustin</span>
                <span id="footer-name">{`Augustin Pasquier | Portfolio - ${(new Date().getFullYear())}`}</span>
            </footer>
        </>
    )
}
