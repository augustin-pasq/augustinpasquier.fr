export default async function handle(req, res) {
    const events = [
        { date: "Janvier 2018", text: "Stage de découverte de troisième dans une boutique de support informatique" },
        { date: "Mai - Juin 2018", text: "Projet scolaire avec une carte Arduino et un ruban LED" },
        { date: "2019 - 2021", text: "Découverte du développement web via la création de bots Discord et de sites web" },
        { date: "Février 2021", text: "Stage de découverte et de pratique dans une agence de développement web" },
        { date: "Juin 2021", text: "Obtention du baccalauréat mention bien, spécialités mathématiques et physique chimie" },
        { date: "Septembre 2021", text: "Intégration du BUT informatique à l'IUT de Vannes" },
        { date: "Septembre 2022", text: "Début d'un contrat d'alternance pour du développement web dans la start-up vannetaise Imagina" },
        { date: "Décembre 2023", text: "Participation à l'édition 2023 de l'évènement \"La Nuit de l'Info\", classé 2ème sur 654 soumissions" }
    ]

    const languages = [
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
                    name: "Alarm",
                    technos: ["Siri Shortcuts", "Express.js"],
                    description: "Récupération du temps restant avant la prochaine alarme sur iPhone",
                    repositoryName: "Alarm"
                },
                {
                    name: "LJDP (wip)",
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

    res.status(200).json({ events: events, languages: languages, tools: tools, projects: projects })
}