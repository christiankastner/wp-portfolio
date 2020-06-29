const ABOUT = [
    "I'm a full-stack software engineer with a background in both the arts and the sciences. I love being creative and experimenting with new technology, such as graphical computing, natural language processing, and machine learning. Combining art and technology is a passion of mine as well as using software to build new user experiences.",
    "I'm currently looking for work as a frontend or full-stack developer. I am skilled in JavaScript, Ruby, Rails, React, Python, and currently teaching myself Jest and React Testing Library. I also have significant experience within data science and numerical computing, having used R for my masters dissertaion and coursework, as well as matlab for courses in machine learning and numerical analysis.",
    "My previous experience includes a Masters in Psychology from the University of Glasgow, and Bachelors degrees in Philosophy and Mathematics from University of California, Los Angeles. My introduction into web development was through an interest in machine learning as a tool for Psychology research and inpatient/outpatient procedure. However, I quickly fell in love with the creative side of coding, experimenting with design and interface. This duality makes me versatile in tackling the varied problems presented in web development."
]

const PROJECTS = [
    {
        title: "Beat Poems",
        img: "./public/poems.png",
        meta: "Poems and Natural Language Processing",
        description: "A single page app that makes your poems a little less ordinary. Input a poem and Bongo Cat will do its own spin on your material. Then let Bongo Cat read it aloud, accompanied with some sweet bongos.",
        demo: null,
        active: "https://christianmkastner.com/beat-poems/",
        github: {
            frontend: 'https://github.com/christiankastner/beat-poems',
        },
        tags: ["JavaScript", "Webpack", "Babel", "SASS", "SVG", "Adobe Illustrator"]
    },
    {
        title: "Virtual Canvas",
        img: "./public/virtual_canvas.png",
        meta: "Interactive Audio Visualizer",
        description: "A shared space for audio and visual artists to create on the same canvas simultaneously. By combining animation and audio in the browser with P5.js, UI state management with React Redux, and websocketing using ActionCable in rails, Virtual Canvas allows users to create shapes synced to audio and collaborate on a music visualizer together.",
        demo: "https://www.youtube.com/embed/qsTvRDrYrx0",
        active: "https://christianmkastner.com/virtual-canvas/#/",
        github: {
            frontend: 'https://github.com/christiankastner/virtual-canvas',
            backend: 'https://github.com/christiankastner/virtual_canvas_backend_api'
        },
        tags: ["React", "Ruby on Rails", "Web Sockets", "Redux", "SASS", "Firebase Cloud Storage"]
    },
    {
        title: "Kangaroo Hangout",
        img: "./public/hangout.png",
        meta: "Event Planning App",
        description: "Want to plan a whole day's outing? Kangaroo Hangout is an event planning app that lets user's input places they'd like to go to, then search for nearby locations to also visit. Want Sushi after your Muay Thai class or a library near your favorite burger place? That's easy with kangaroo hangout.",
        demo: "https://www.youtube.com/embed/iZrBZusBhJQ",
        active: 'https://christianmkastner.com/kangaroo-hangout-frontend/#/',
        github: {
            frontend: 'https://github.com/christiankastner/kangaroo-hangout-frontend',
            backend: 'https://github.com/christiankastner/kangaroo-hangout-backend-api'
        },
        tags: ["React", "Ruby on Rails", "JWT", "Google Places API", "Semantic UI"]
    },
]

const SKILLS = {
    "Tech": [
        "React", "Redux", "Javascript", "Rails", "Sockets", "ActionCable", "ActionMailer", "Ruby", "Python", "HTML5", "CSS3", "Mocha", "MySQL", "PostgreSQL", "Heroku", "JWT", "Material UI", "Semantic UI", "Git & Github"
    ],
    "Data": [
        "R", "Matlab", "SciKit Learn", "Pandas", "Matplotlib", "Numerical Analysis"
    ],
    "Creative": [
        "Photoshop", "Lightroom", "P5.js", "Mo.js", "Processing in Java"
    ]
}

const renderDemo = (url) => {
    if (url == null) return ""
    let iframe = document.createElement("div")
    iframe.className = "responsive"
    iframe.innerHTML = `<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`
    return iframe
} 

const renderLinks = (...links) => {
    ul = document.createElement("ul")
    ul.className = "links"
    let newArray = links.filter(x => x).map(x => {
        link = document.createElement("li")
        link.append(x)
        return link
    })
    ul.append(...newArray)
    return ul
}

function get(element) {
    return document.getElementById(element);
}

document.addEventListener('DOMContentLoaded', function() {
    var open = get("menu-btn");
    var nav = get("nav");
    
    open.addEventListener('click', function() {
        nav.classList.toggle('open-nav');
    })
    nav.addEventListener('click', function() {
        nav.classList.toggle('open-nav');
    })

    var about = document.getElementById("text-card");
    var projectList = document.getElementById("project-list");
    var skillList = document.getElementById("skill-list");

    // Populate about section
    (function() {
        ABOUT.map(paragraph => {
            p = document.createElement("p")
            p.innerText = paragraph
            about.appendChild(p)
        })
    })();

    // Populate project list
    (function() {
        PROJECTS.map(project => {
            li = document.createElement("li")
            li.className = "project-card"

            img = document.createElement("img")
            img.src = project.img
            img.alt = `${project.title} picture`

            div = document.createElement("div")
            div.className = "project-header"

            h3 = document.createElement("h3")
            h3.innerText = project.title
            h4 = document.createElement("h4")
            h4.innerText = project.meta
            demo = document.createElement("a")
            demo.innerText = "Live Site" || "Not Deployed, Currently Developing"
            if (project.active) {
                demo.href = project.active
            }

            frontend = document.createElement("a")
            project.github.frontend ? frontend.innerText = "Frontend" : ""
            frontend.href = project.github.frontend

            backend = document.createElement("a")
            project.github.backend ? backend.innerText = "Backend" : 
            backend.href = project.github.backend

            links = renderLinks(demo, frontend, backend)

            gradient = document.createElement("div")
            gradient.className = "gradient"
            div.append(h3,h4,links)

            tags = document.createElement("div")

            tags.innerHTML = project.tags.map(function(x) {
                return "<span>" + x + "</span>"
            }).join(" - ")

            tags.classList.add("tags")

            p = document.createElement("p")
            p.innerText = project.description
            iframe = renderDemo(project.demo)

            container = document.createElement("div")
            container.className = "text-container"
            container.append(iframe)

            li.append(img,div,p,container,tags,gradient)
            projectList.appendChild(li)
        })
    })();

    // Populate Skills
    (function() {
        for (const title in SKILLS) {
            let li = document.createElement("li")
            
            let h4 = document.createElement("h4")
            h4.innerText = title

            let p = document.createElement("p")
            p.innerText = SKILLS[title].join(", ")

            li.append(h4, p)
            skillList.appendChild(li)
        }
    })();
})