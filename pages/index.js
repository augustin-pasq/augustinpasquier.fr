import Head from "next/head"
import {Timeline} from "primereact/timeline"
import {Rating} from "primereact/rating"
import SvgFactory from "@/components/SvgFactory";
import {useRef} from "react";

const events = [
    {date: "Janvier 2018", text: "Stage de découverte de troisième dans une boutique de support informatique"},
    {date: "Mai - Juin 2018", text: "Projet scolaire avec une carte Arduino et un ruban LED"},
    {date: "2019 - 2021", text: "Découverte du développement web via la création de bots Discord et de sites web"},
    {date: "Février 2021", text: "Stage de découverte et de pratique dans une agence de développement web"},
    {date: "Juin 2021", text: "Obtention du baccalauréat mention bien, spécialités mathématiques et physique chimie"},
    {date: "Septembre 2021", text: "Intégration du BUT informatique à l'IUT de Vannes"},
    {date: "Septembre 2022", text: "Début d'un contrat d'alternance pour du développement web dans la start-up vannetaise Imagina"},
    {date: "Décembre 2023", text: "Participation à l'édition 2023 de l'évènement \"La Nuit de l'Info\""}
]

const skills = {
    web_dev: {
        title: "Développement web",
        content: [
            {name: "HTML/CSS", value: 5, logo: "html"},
            {name: "JavaScript", value: 4, logo: "javascript"},
            {name: "PHP", value: 4, logo: "php"},
            {name: "React.js", value: 4, logo: "react"}
        ]
    },
    app_dev: {
        title: "Développement applicatif",
        content: [
            {name: "Java", value: 3, logo: "java"},
            {name: "Python", value: 3, logo: "python"},
            {name: "Développement Android (Java)", value: 2, logo: "android"}
        ]
    },
    databases: {
        title: "Bases de données",
        content: [
            {name: "SQL (MySQL, Oracle, SQLite)", value: 4, logo: "mysql"},
            {name: "NoSQL (MongoDB)", value: 2, logo: "mongodb"}
        ]
    }
}

const tools = [
    {name: "Linux", logo: "linux"},
    {name: "WebStorm", logo: "webstorm"},
    {name: "Visual Studio Code", logo: "vscode"},
    {name: "Postman", logo: "postman"},
    {name: "Git", logo: "git"}
]

export default function Home() {
    const about = useRef(null)

    const customizedContent = (item) => {
        return (
            <div className="timeline-item">
                <h4>{item.date}</h4>
                <span>{item.text}</span>
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

        <main>
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
                            <img src="/images/profile_picture.png" alt="Photo de profil" />
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

            <section id="tools-section">
                <h2>🔧 Des compétences et des outils</h2>
                <div className="technos-container">
                    {Object.keys(skills).map((category, categoryIndex) => {
                        return (
                            <div key={categoryIndex}>
                                <h3>{skills[category].title}</h3>
                                <div className="skill-category">
                                    {skills[category].content.map((skill, skillIndex) => {
                                        return (
                                            <div key={skillIndex} className="skill col-3">
                                                <div className="col-3">
                                                    <SvgFactory item={skill.logo}/>
                                                </div>
                                                <div className="col-9">
                                                    <span>{skill.name}</span>
                                                    <Rating value={skill.value} cancel={false} readOnly/>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="tools-container">
                    <h3 className="col-12">Outils</h3>
                    {tools.map((tool, index) => {
                        return (
                            <div key={index} className="col-2">
                                <SvgFactory item={tool.logo} />
                                <span>{tool.name}</span>

                            </div>
                        )
                    })}
                </div>
            </section>
        </main>

        <footer>

        </footer>
    </>)
}