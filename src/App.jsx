
const skills = [
  "C++",
  "Java",
  "Python",
  "HTML & CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "SQL",
  "Git & GitHub",
  "Data Structures and Algorithms",
  "Web Development",
];

const projects = [
  {
    number: "01",
    name: "Writofest 2K26",
    status: "Featured Project",
    description:
      "An event registration website for Team ScriptInk, bringing creative campus activities together.",
    tech: "React · Vite · Express · MongoDB",
    repositoryUrl: "https://github.com/Rakshitha-B21/writofest",
    repositoryLabel: "GitHub Repo",
    liveDemoUrl: "https://writofest.vercel.app/",
  },
  {
    number: "02",
    name: "VaultSense AI",
    status: "In Progress",
    description:
      "An AI-focused project with a modern dashboard and intelligent insights.",
    tech: "React · Vite · AI · Dashboard",
    repositoryUrl: null,
    liveDemoUrl: null,
  },
];

const clubs = [
  {
    number: "01",
    name: "Decoders",
    role: "Member",
    category: "Technical Club · SIT",
    description:
      "A technical club at SIT that brings students together through coding activities, technical events, and competitions.",
    responsibilities: [
      "Participating in coding activities and competitions",
      "Engaging in technical events and collaborative learning",
      "Connecting with peers who share an interest in technology",
    ],
    tags: ["Coding", "Technology", "Teamwork"],
  },
  {
    number: "02",
    name: "ScriptInk",
    role: "Member",
    category: "Creative & Technical Community",
    description:
      "A community where creativity and technology come together through web development, design, and campus events.",
    responsibilities: [
      "Website development and design",
      "Event organization and coordination",
      "Team collaboration",
    ],
    tags: ["Web Development", "Design", "Events"],
  },
];

function App() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">
          RB<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#clubs">Clubs</a>
          <a href="#contact" className="nav-button">
            Contact ↗
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              COMPUTER SCIENCE STUDENT · WEB DEVELOPER
            </p>

            <h1>
              Hi, I'm <span>Rakshitha B.</span>
            </h1>

            <h2>Aspiring Software Engineer.</h2>

            <p className="hero-description">
              I build web experiences, solve coding problems, and turn ideas
              into projects. Always learning, always building.
            </p>

            <div className="hero-buttons">
              <a className="button primary" href="#projects">
                Explore My Work ↗
              </a>

              <a className="button secondary" href="#contact">
                Let's Connect
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Rakshitha-B21"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/rakshitha-b-21oct2006/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://leetcode.com/u/Rakshitha__B_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode ↗
              </a>

              <a
                href="https://codeforces.com/profile/Rakshitha_B_"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeForces ↗
              </a>

              <a
                href="https://www.codechef.com/users/sit_1si24cs137"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeChef ↗
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/rakshithab21"
                target="_blank"
                rel="noopener noreferrer"
              >
                GeeksforGeeks ↗
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="hero-card">
            <div className="orbit">
              <div className="monogram">
                RB<span>.</span>
              </div>
            </div>

            <p className="hero-card-caption">
              BUILD · LEARN · REPEAT
            </p>

            <div className="float-tag tag-one">
              ✦ Web Development
            </div>

            <div className="float-tag tag-two">
              ⌘ Problem Solving
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <p className="eyebrow">01 — ABOUT ME</p>

          <h2>
            Curious by nature.
            <br />
            <span>Builder by choice.</span>
          </h2>

          <p className="section-description">
            I'm a Computer Science student passionate about software
            development and problem solving. I enjoy learning new technologies,
            building useful applications, and improving my skills through
            consistent practice.
          </p>

          <div className="stats-grid">
            <article className="stat-card">
              <h3>
                500<span>+</span>
              </h3>
              <p>LeetCode Problems Solved</p>
            </article>

            <article className="stat-card">
              <h3>
                12<span>+</span>
              </h3>
              <p>Technologies & Skills</p>
            </article>

            <article className="stat-card">
              <h3>02</h3>
              <p>Featured Projects</p>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <p className="eyebrow">02 — MY TOOLKIT</p>

          <h2>
            Skills & <span>Technologies.</span>
          </h2>

          <p className="section-description">
            Technologies I'm learning and using to grow as a developer.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>✦</span> {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <p className="eyebrow">03 — SELECTED WORK</p>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p className="section-description">
            Projects where I turn ideas into practical experiences.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / 02</span>
                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <div className="project-symbol">{"</>"}</div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-tech">{project.tech}</div>

                <div className="project-links">
                  {project.repositoryUrl ? (
                    <a
                      className="project-link"
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.repositoryLabel || "GitHub Repository"} ↗
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled" aria-disabled="true">
                      {project.repositoryLabel || "GitHub Repository"}
                    </span>
                  )}

                  {project.liveDemoUrl ? (
                    <a
                      className="project-link"
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled" aria-disabled="true">
                      Live Demo
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Clubs & Leadership Section */}
        <section className="section" id="clubs">
          <p className="eyebrow">04 — BEYOND THE CLASSROOM</p>

          <h2>
            Clubs & <span>Leadership.</span>
          </h2>

          <p className="section-description">
            Learning, creating, and collaborating with communities through
            technology, creativity, and campus activities.
          </p>

          <div className="clubs-grid">
            {clubs.map((club) => (
              <article className="club-card" key={club.number}>
                <div className="club-top">
                  <div className="club-icon">
                    {club.name.charAt(0)}
                  </div>

                  <span className="club-role">{club.role}</span>
                </div>

                <h3>{club.name}</h3>

                <p className="club-category">{club.category}</p>

                <p className="club-description">{club.description}</p>

                <div className="club-divider"></div>

                <h4>Involvement</h4>

                <ul className="club-responsibilities">
                  {club.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="club-tags">
                  {club.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <p className="eyebrow">05 — GET IN TOUCH</p>

          <h2>
            Let's build something <span>meaningful.</span>
          </h2>

          <p className="section-description">
            Open to learning, collaborating, and exploring exciting
            opportunities with fellow developers.
          </p>

          <div className="contact-buttons">
            <a className="button secondary" href="mailto:jeevanurakshabm@gmsil.com">
              Email ↗
            </a>

            <a
              className="button primary"
              href="https://www.linkedin.com/in/rakshitha-b-21oct2006/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn ↗
            </a>

            <a
              className="button secondary"
              href="https://github.com/Rakshitha-B21"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Rakshitha B. · Built with React
      </footer>
    </>
  );
}

export default App;
