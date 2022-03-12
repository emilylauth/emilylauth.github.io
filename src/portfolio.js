import "./App.css";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://github.com/emilylauth/emilylauth.github.io.git",
  title: "EL",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Emily Lauth",
  role: "Web Developer",
  description:
    "Welcome to my portfolio. I am a development student based in Salt Lake City, UT. Previously, I have been a photographer and photo editor in Chicago for 5 years. I received a Bachelor of Science degree in 2016 from Illinois State University, with focus in Interactive Media.",
  // resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/emily-lauth/",
    github: "https://github.com/emilylauth",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "BadBank",
    description: "Front end banking application",
    stack: ["React", "JavaScript", "AWS"],
    sourceCode: "https://github.com/emilylauth/BAD-BANK-APP",
    livePreview:
      "https://emily-lauth-banking-application.s3.amazonaws.com/index.html#/login/",
  },
  {
    name: "Movie Tickets",
    description: "Simulation movie ticket selections from a movie theater.",
    stack: ["JavaScript", "React", "CSS"],
    sourceCode: "https://github.com/emilylauth/Movie-Tickets",
    livePreview: "https://emilylauth.github.io/Movie-Tickets/",
  },
  {
    name: "HTML Portfolio",
    description:
      "First major project created for MIT xPRO. This was developed as my inital portfolio.",
    stack: ["HTML", "CSS"],
    sourceCode: "https://github.com/emilylauth/HTML-Portfolio",
    livePreview: "https://emilylauth.github.io/HTML-Portfolio/",
  },
  {
    name: "Tic Tac Toe",
    description:
      "Tic Tac Toe game built to practice synchronizing state between parent and child components.",
    stack: ["JavaScript", "React", "CSS"],
    sourceCode: "https://github.com/emilylauth/Tic-Tac-Toe",
    livePreview: "https://emilylauth.github.io/Tic-Tac-Toe/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "Node.js",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "elauth14@gmail.com",
};

export { header, about, projects, skills, contact };
