import Head from "next/head"
import {Rating} from "primereact/rating"
import SvgFactory from "@/components/SvgFactory"
import {TabPanel, TabView} from "primereact/tabview"
import {Tag} from "primereact/tag"
import {Timeline} from "primereact/timeline"
import {useRef} from "react"

const events = [
    { date: "Janvier 2018", text: "Stage de découverte de troisième dans une boutique de support informatique" },
    { date: "Mai - Juin 2018", text: "Projet scolaire avec une carte Arduino et un ruban LED" },
    { date: "2019 - 2021", text: "Découverte du développement web via la création de bots Discord et de sites web" },
    { date: "Février 2021", text: "Stage de découverte et de pratique dans une agence de développement web" },
    { date: "Juin 2021", text: "Obtention du baccalauréat mention bien, spécialités mathématiques et physique chimie" },
    { date: "Septembre 2021", text: "Intégration du BUT informatique à l'IUT de Vannes" },
    { date: "Septembre 2022", text: "Début d'un contrat d'alternance pour du développement web dans la start-up vannetaise Imagina" },
    { date: "Décembre 2023", text: "Participation à l'édition 2023 de l'évènement \"La Nuit de l'Info\"" }
]

const skills = [
    { name: "HTML/CSS", value: 5, logo: "html" },
    { name: "JavaScript", value: 4, logo: "javascript" },
    { name: "PHP", value: 4, logo: "php" },
    { name: "React.js", value: 4, logo: "react" },
    { name: "SQL", value: 4, logo: "mysql" },
    { name: "Java", value: 3, logo: "java" },
    { name: "Python", value: 3, logo: "python" },
    { name: "Android (Java)", value: 2, logo: "android" }
]

const tools = [
    { name: "Linux", logo: "linux" },
    { name: "WebStorm", logo: "webstorm" },
    { name: "Visual Studio Code", logo: "vscode" },
    { name: "Postman", logo: "postman" },
    { name: "Git", logo: "git" }
]

const projects = {
    personals: {
        tabTitle: "Projets personnels",
        content: [
            {
                name: "LJDP (wip)",
                technos: ["React.js", "Next.js", "Prisma", "MySQL"],
                description: "Jeu multijoueur en ligne de devinettes à base de photos",
                repositoryName: null
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
                name: "TBO",
                technos: ["React.js"],
                description: "Décompte avant le retour en période d'entreprise durant l'alternance",
                repositoryName: "TBO"
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
                description: "Application Android de gestion des taches (ToDo-List)",
                repositoryName: "Application-ToDo-Android"
            },
            {
                name: "Application ToDo Web",
                technos: ["Vue.js"],
                description: "Application web de gestion des taches (ToDo-List)",
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
    const about = useRef(null)

    const customizedContent = (item) => {
        return (
            <div className="timeline-item">
                <span className="timeline-date">{item.date}</span>
                <p>{item.text}</p>
            </div>
        )
    }

    return (<>
        <Head>
            <title>Augustin Pasquier</title>
            <meta name="description" content="Augustin Pasquier - Site web"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main id="home">
            <section id="me-section">
                <div className="me-content">
                    <div className="col-8">
                        <span>👋</span>
                        <h1>Je suis <span>Augustin Pasquier</span></h1>
                        <span>Développeur</span>
                    </div>
                    <div className="col-4">
                        <picture>
                            <source srcSet="/images/profile_picture.webp"/>
                            <img src="/images/profile_picture.png" alt="Photo de profil"/>
                        </picture>
                    </div>
                </div>
                <div className="me-cta">
                    <span>Apprenez-en plus sur moi !</span>
                    <i className="pi pi-chevron-down cta-chevron" onClick={() => about.current.scrollIntoView()}></i>
                </div>
            </section>

            <section id="about-section" ref={about}>
                <h2><span>💡</span>Tout commence avec un ruban LED...</h2>

                <div className="text-container">
                    <p>
                        En classe de troisième, je me vois mener un projet scolaire dont l'un des objectifs était de
                        contrôler un ruban LED via une carte Arduino.
                        Ce projet, c'est ma première confrontation à la programmation. C'est aussi le déclic qui me fera
                        prendre conscience que c'est dans cette discipline que je veux m'illustrer.
                    </p>
                    <span>Depuis, j'enchaîne les projets et m'investis à fond dans ma passion !</span>
                </div>

                <div className="timeline-container">
                    <h3>Coup d'œil sur mon parcours</h3>
                    <Timeline value={events} align="alternate" className="customized-timeline" content={customizedContent}/>
                </div>
            </section>

            <section id="skills-section">
                <h2><span>🔧</span>Des compétences et des outils</h2>

                <div className="text-container">
                    <p>
                        Grâce à mes projets personnels, universitaires et professionnels, j'ai appris à me servir de
                        tout un
                        tas de langages et outils. À l'aise avec certaines, envieux de progresser dans d'autres, j'ai
                        déjà
                        utilisé toutes ces technologies.
                    </p>
                </div>

                <div className="technos-container">
                    {skills.map((skill, skillIndex) => {
                        return (<div key={skillIndex} className="skill">
                            <SvgFactory item={skill.logo}/>
                            <div className="skill-level">
                                <span>{skill.name}</span>
                                <Rating value={skill.value} cancel={false} readOnly/>
                            </div>
                        </div>)
                    })}
                </div>

                <div className="tools-container">
                    {tools.map((tool, index) => {
                        return (<div key={index} className="tool">
                            <SvgFactory item={tool.logo}/>
                            <span>{tool.name}</span>

                        </div>)
                    })}
                </div>
            </section>

            <section id="projects-section">
                <h2><span>🏗️</span>Mes projets</h2>

                <div className="text-container">
                    <p>
                        Que ce soit sur mon temps personnel, à l'université ou en entreprise, j'ai développé multiples applications et
                        petits programmes. Chacun m'a permis d'apprendre ou de m'améliorer dans une technologie.
                    </p>
                    <span>Le code de chacun de ces projets est disponible sur GitHub.</span>
                </div>

                <TabView>
                    {Object.keys(projects).map((category, index) => {
                        return (
                            <TabPanel header={projects[category].tabTitle} key={index}>
                                <div className="projects-container">
                                    {projects[category].content.map((project, projectIndex) => {
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
        </main>

        <footer>

        </footer>
    </>)
}