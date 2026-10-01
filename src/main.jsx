import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const skills = {
  Backend: ['PHP / CodeIgniter 3', 'Node.js / Express', 'MySQL / MS SQL', 'REST APIs', 'FPDF'],
  Frontend: ['React (Vite)', 'JavaScript / jQuery', 'Tailwind / Bootstrap', 'DataTables', 'Chart.js'],
  Workflow: ['Automation', 'CSV / TXT processing', 'Vercel & Render', 'Git', 'Security basics'],
};

const projects = [
  { name: 'Clash Forge', description: 'Clan management and scouting dashboard for Clash of Clans leaders: live player tracking, CWL and war statistics.', tags: ['React', 'Vite', 'Node', 'Tailwind'], link: 'https://clash-forge-snowy.vercel.app/' },
  { name: 'LM SariHub', description: 'Point-of-sale system for sari-sari stores with inventory, sales tracking and user authentication.', tags: ['React', 'Node', 'Supabase', 'JWT'], link: 'https://sarisari-pos.vercel.app/' },
  { name: 'Remittance & Payments', description: 'Automated upload, validation and synchronization with the ARIS API for payment processing.', tags: ['PHP', 'CodeIgniter', 'API'] },
  { name: 'Sales & Returns Dashboard', description: 'Interactive analytics with store and distribution filtering.', tags: ['Chart.js', 'jQuery', 'MySQL'] },
  { name: 'Reporting Engine', description: 'PDF and CSV exports with computed totals and custom formatting.', tags: ['FPDF', 'DataTables', 'PHP'] },
];

function Nav({ dark, onToggle }) {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-[#fafafa]/80 backdrop-blur dark:border-neutral-800 dark:bg-[#0a0a0a]/80">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6 text-sm">
        <a href="#top" className="font-medium">Michael</a>
        <div className="flex items-center gap-5 text-neutral-500">
          {['About', 'Skills', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-neutral-900 dark:hover:text-white">{item}</a>
          ))}
          <button onClick={onToggle} aria-label="Toggle theme" className="h-8 w-8 rounded-full border border-neutral-300 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
            {dark ? '☀' : '◐'}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-3xl border-t border-neutral-200 px-6 py-16 dark:border-neutral-800">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-neutral-500">{title}</h2>
      {children}
    </section>
  );
}

function App() {
  const [dark, setDark] = useState(document.documentElement.classList.contains('dark'));

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (error) {}
  }

  return (
    <div id="top">
      <Nav dark={dark} onToggle={toggleTheme} />
      <main>
        <section className="mx-auto max-w-3xl px-6 pb-20 pt-24">
          <p className="mb-6 font-mono text-xs text-neutral-500">Full-stack web developer</p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">I build web systems that make complex workflows feel simple.</h1>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-neutral-600 dark:text-neutral-400">Hi, I’m Michael. I specialize in data-driven, responsive and automated applications with PHP, React and Node.</p>
          <div className="mt-10 flex gap-3 text-sm">
            <a href="#work" className="rounded-full bg-neutral-900 px-5 py-2.5 text-white transition hover:opacity-80 dark:bg-white dark:text-neutral-900">View work</a>
            <a href="https://github.com/Malate1" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-300 px-5 py-2.5 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">GitHub</a>
          </div>
        </section>

        <Section id="about" title="About">
          <p className="text-lg font-light leading-relaxed text-neutral-700 dark:text-neutral-300">With a strong foundation in PHP (CodeIgniter 3), JavaScript and React, I turn legacy workflows into efficient, maintainable systems: payment automation, reporting engines and live dashboards. Right now I’m modernizing legacy CodeIgniter apps with React, exploring AI for business automation, and learning containerized cloud deployment.</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 font-medium">{category}</h3>
                <ul className="space-y-2 text-sm text-neutral-500">{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="work" title="Selected work">
          <div className="-my-6 divide-y divide-neutral-200 dark:divide-neutral-800">
            {projects.map((project) => {
              const content = (
                <>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-medium">{project.name}</h3>
                    {project.link && <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>}
                  </div>
                  <p className="mt-2 font-light text-neutral-600 dark:text-neutral-400">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="rounded border border-neutral-200 px-2 py-0.5 font-mono text-xs text-neutral-500 dark:border-neutral-800">{tag}</span>)}
                  </div>
                </>
              );
              return project.link
                ? <a key={project.name} href={project.link} target="_blank" rel="noreferrer" className="group block py-6">{content}</a>
                : <div key={project.name} className="py-6">{content}</div>;
            })}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-lg text-2xl font-light tracking-tight sm:text-3xl">Open to collaborations on PHP, React, API integration and automation projects.</p>
          <div className="mt-8 flex flex-col items-start gap-2 text-sm">
            <a href="https://github.com/Malate1" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-70">github.com/Malate1</a>
            <a href="mailto:malatemichael21@gmail.com" className="underline underline-offset-4 hover:opacity-70">malatemichael21@gmail.com</a>
          </div>
        </Section>
      </main>
      <footer className="mx-auto max-w-3xl border-t border-neutral-200 px-6 py-10 text-xs text-neutral-500 dark:border-neutral-800">© {new Date().getFullYear()} Michael</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
