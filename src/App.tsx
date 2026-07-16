import projects from './projects'
import './App.css'

const projectEntries = Object.entries(projects)

function getHost(url: string) {
  return new URL(url).hostname.replace(/^www\./, '')
}

function App() {
  return (
    <main className="portal-shell">
      <div className="portal-frame">
        <section className="hero" aria-labelledby="portal-title">
          <p className="eyebrow">Selected Works</p>
          <h1 id="portal-title">Ivan Wu</h1>
          <p className="intro">
            A quiet index of websites, experiments, and small corners on the
            internet.
          </p>
        </section>

        <section className="project-list" aria-label="Project links">
          {projectEntries.map(([slug, project], index) => {
            const host = getHost(project.url)

            return (
              <a
                className="project-item"
                href={project.url}
                key={slug}
                rel="noreferrer"
                target="_blank"
              >
                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="project-copy">
                  <strong>{project.name}</strong>
                  <span>{project.description}</span>
                </span>
                <span className="project-meta">
                  <span>{host}</span>
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App
