import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, Menu, X, Terminal as TerminalIcon, BrainCircuit, BarChart3, Code2, Cpu } from 'lucide-react';
import { SiPython, SiR, SiJavascript, SiMysql, SiReact, SiStreamlit, SiFastapi, SiPandas, SiScikitlearn, SiTensorflow, SiJupyter, SiDocker, SiGithub, SiOpencv } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './styles.css';

const projects = [
  {
    number: '01',
    title: 'Revox',
    subtitle: 'Sentimental analysis of Indian politics',
    description: 'An AI dashboard translating public sentiment into a clear view of party performance across health, education, and more.',
    tags: ['Python', 'NLP', 'ML Models', 'Streamlit'],
    github: 'https://github.com/Chinthak123/REVOX-Sentimental-Analysis-Of-Indian-Politics.git',
    image: 'https://i.postimg.cc/BnnMyWvR/PHOTO-2026-03-31-23-48-00.jpg',
    tone: 'violet',
    visual: 'politics',
  },
  {
    number: '02',
    title: 'Gesture Controlled Interview Prep',
    subtitle: 'Computer vision, without the keyboard',
    description: 'A webcam mock interview app that reads your answers from your fingers, with real-time scoring and spoken questions.',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Streamlit'],
    github: 'https://github.com/Chinthak123/Gesture-Controlled-Interview-Prep.git',
    tone: 'coral',
    visual: 'gesture',
  },
  {
    number: '03',
    title: 'DataPulse AI',
    subtitle: 'Messy CSVs in. Useful insight out.',
    description: 'An auto-analytics tool that cleans, visualizes, and exposes data workflows as MCP tools for AI agents.',
    tags: ['Python', 'FastAPI', 'FastMCP', 'Pandas'],
    github: 'https://github.com/Chinthak123/Automatic-Data-cleaner-and-visualizer-using-FastMCP.git',
    image: 'https://i.postimg.cc/65fBcZ7V/Screenshot-2026-07-12-215013.png',
    tone: 'mint',
    visual: 'data',
  },
  {
    number: '04',
    title: 'Computer Sales Dashboard',
    subtitle: 'Power BI meets hardware pricing',
    description: 'An interactive business dashboard surfacing pricing trends, brand performance, and storage preferences.',
    tags: ['Power BI', 'DAX', 'Data Analytics'],
    github: 'https://github.com/Chinthak123/computer-sales-dashboard-using-powerbi.git',
    image: 'https://i.postimg.cc/mk6yWkk9/Screenshot-2026-03-02-230411.png',
    tone: 'yellow',
    visual: 'dashboard',
  },
];

const skillGroups = [
  { label: 'Languages & core', icon: Code2, items: [{ name: 'Python', symbol: SiPython }, { name: 'R', symbol: SiR }, { name: 'JavaScript', symbol: SiJavascript }, { name: 'SQL', symbol: SiMysql }] },
  { label: 'Frameworks & tools', icon: Cpu, items: [{ name: 'React', symbol: SiReact }, { name: 'Streamlit', symbol: SiStreamlit }, { name: 'FastAPI', symbol: SiFastapi }, { name: 'Pandas', symbol: SiPandas }, { name: 'Machine Learning', symbol: SiScikitlearn }, { name: 'TensorFlow', symbol: SiTensorflow }, { name: 'Jupyter', symbol: SiJupyter }, { name: 'Power BI', symbol: BarChart3 }, { name: 'Docker', symbol: SiDocker }] },
  { label: 'How I work', icon: BrainCircuit, items: ['Problem solving', 'Analytical thinking', 'Communication', 'Presentation', 'Leadership', 'Time management'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="wordmark" href="#top" onClick={closeMenu}>CDK<span>.</span></a>
          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#about" onClick={closeMenu}>About me</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="mailto:chinthakdivan@gmail.com" onClick={closeMenu}>Let's talk <ArrowUpRight size={16} /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Available for interesting problems</p>
            <h1 className="hero-name">Chinthak<br /><em>Divan K.</em></h1>
            <p className="hero-intro">AI and Data Science student turning raw data and curious questions into useful, human-centered tools.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="mailto:chinthakdivan@gmail.com">Get in touch <Mail size={16} /></a>
            </div>
            <GithubStat />
          </div>
          <div className="hero-orbit reveal delay-one"><NeuralNode /></div>
          <div className="scroll-note"><span>01</span><div className="scroll-line" /> Scroll to explore</div>
        </section>

        <section className="marquee" aria-label="Areas of interest"><div>AI & DATA SCIENCE <span>✦</span> MACHINE LEARNING <span>✦</span> DATA VISUALIZATION <span>✦</span> HUMAN-CENTERED TOOLS <span>✦</span></div></section>

        <section className="work-section container" id="work">
          <div className="section-heading"><div><p className="section-kicker">Selected work <span>04 projects</span></p><h2>A few things I’ve<br /><em>made real.</em></h2></div><p className="section-aside">Every project starts with a messy question.<br />That’s usually the interesting part.</p></div>
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout"><div><p className="section-kicker">The person behind the projects</p><h2>More than just<br /><em>the model.</em></h2></div><div className="about-copy"><p>I like sitting at the intersection of technical depth and clear communication. Whether I’m cleaning a dataset, training a model, or presenting an insight, I care about making the final result feel obvious and useful.</p><p>When I’m away from a notebook, you’ll find me learning something new, breaking down complex ideas, or looking for the next problem worth solving.</p><a className="text-link" href="https://github.com/Chinthak123" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a></div></div>
        </section>

        <section className="skills-section container"><div className="section-heading skills-heading"><div><p className="section-kicker">My toolkit</p><h2>Curious by nature.<br /><em>Equipped by practice.</em></h2></div></div><SkillOrbit /><div className="skills-grid tools-grid"><div className="skill-group"><div className="skill-title"><Cpu size={19} /><h3>Frameworks & tools</h3></div><div className="skill-list">{skillGroups[1].items.map((item) => <span className="skill-symbol" key={item.name} title={item.name} aria-label={item.name}>{(() => { const Logo = item.symbol; return <Logo aria-hidden="true" />; })()}</span>)}</div></div></div><div className="how-i-work"><div className="skill-title"><BrainCircuit size={19} /><h3>How I work</h3></div><div className="soft-skill-list">{skillGroups[2].items.map((item) => <span key={item}>{item}</span>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="container contact-inner"><p className="section-kicker">Have a question or an idea?</p><h2>Let’s make something<br /><em>meaningful.</em></h2><div className="contact-terminal"><div className="terminal-bar"><span /><span /><span /><strong><TerminalIcon size={14} /> chinthak@portfolio:~</strong></div><div className="terminal-body"><p><b>→</b> choose a connection</p><a href="https://github.com/Chinthak123" target="_blank" rel="noreferrer"><SiGithub size={21} /><span>github.com/Chinthak123</span><ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/chinthak-divan-k-808bb5233" target="_blank" rel="noreferrer"><FaLinkedinIn size={21} /><span>linkedin.com/in/chinthak-divan-k-808bb5233</span><ArrowUpRight size={16} /></a><a href="mailto:chinthakdivan@gmail.com"><Mail size={21} /><span>chinthakdivan@gmail.com</span><ArrowUpRight size={16} /></a></div></div><div className="contact-meta"><span>Chinthak Divan K / 2026</span></div></div></section>
      </main>
    </div>
  );
}

function NeuralNode() {
  const inputPackets = [0, 0.55, 1.1, 1.65];
  const outputPackets = [0.2, 0.8, 1.4, 2];
  const [velocity, setVelocity] = useState(50);
  const [sparsity, setSparsity] = useState(30);
  const [focusLayer, setFocusLayer] = useState('attention');

  return <div className={`neural-node focus-${focusLayer}`} aria-label="Animated neural network pipeline visualization">
    <div className="neural-grid" />
    <div className="neural-heading input-heading">Data ingestion</div><div className="neural-heading core-heading">Neural core matrix</div><div className="neural-heading output-heading">Logits output</div>
    <div className="neural-panel input-panel"><span /><span /><span /><span /></div>
    <div className="neural-panel core-panel"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
    <div className="neural-panel output-panel"><b /><b /><b /><b /></div>
    <svg className="neural-lines" viewBox="0 0 520 290" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M 94 108 L 220 145 M 94 145 L 220 145 M 94 182 L 220 145 M 300 145 L 425 112 M 300 145 L 425 145 M 300 145 L 425 178" /></svg>
    <svg className="neural-streams" viewBox="0 0 520 290" preserveAspectRatio="none" fill="none" aria-hidden="true">
      {inputPackets.map((delay, index) => <motion.circle key={`input-${index}`} r="4" fill="#39b85a" initial={{ cx: 110, cy: 104 + index * 28 }} animate={{ cx: [110, 205, 280], cy: [104 + index * 28, 145, 145] }} transition={{ duration: 2.7, repeat: Infinity, delay, ease: 'linear' }} />)}
      {outputPackets.map((delay, index) => <motion.circle key={`output-${index}`} r="4" fill="#eab308" initial={{ cx: 300, cy: 145 }} animate={{ cx: [300, 360, 425], cy: [145, 112 + index * 23, 112 + index * 23] }} transition={{ duration: 2.4, repeat: Infinity, delay, ease: 'linear' }} />)}
    </svg>
    <div className="neural-metrics"><div><span>Tokens flow</span><strong>5952 tk</strong></div><div><span>Compute load</span><strong>49%</strong></div><div><span>Sparsity rate</span><strong>30%</strong></div></div>
    <div className="neural-controls"><label>Pipeline Focus Layer</label><div className="focus-tabs"><button className={focusLayer === 'embeddings' ? 'active' : ''} type="button" onClick={() => setFocusLayer('embeddings')}>Embeddings</button><button className={focusLayer === 'attention' ? 'active' : ''} type="button" onClick={() => setFocusLayer('attention')}>Attention Core</button><button className={focusLayer === 'logits' ? 'active' : ''} type="button" onClick={() => setFocusLayer('logits')}>Logits Out</button></div><label htmlFor="velocity-slider">Data Flow Velocity <em>{velocity} pt/s</em></label><input id="velocity-slider" className="neural-slider" type="range" min="0" max="100" value={velocity} onChange={(event) => setVelocity(Number(event.target.value))} /><label htmlFor="sparsity-slider">Sparsity Threshold <em>{sparsity} %</em></label><input id="sparsity-slider" className="neural-slider" type="range" min="0" max="100" value={sparsity} onChange={(event) => setSparsity(Number(event.target.value))} /></div>
  </div>;
}

function SkillOrbit() {
  const [active, setActive] = useState(false);
  const languageItems = skillGroups[0].items;

  return <div className={`skill-orbit ${active ? 'is-active' : ''}`}><button className="code-orbit-core" type="button" onClick={() => setActive((current) => !current)} aria-label="Toggle language logo orbit"><Code2 size={58} /><span>{active ? 'Pause orbit' : 'Start orbit'}</span></button><div className="orbit-track orbit-track-one" /><div className="orbit-track orbit-track-two" />{languageItems.map((item, index) => { const Logo = item.symbol; return <span className={`orbit-skill orbit-skill-${index}`} key={item.name} title={item.name} aria-label={item.name}><Logo aria-hidden="true" /></span>; })}<p className="orbit-caption">Languages & core</p></div>;
}

function GithubStat() {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    const animation = window.setInterval(() => {
      setRepoCount((current) => {
        if (current >= 48) {
          window.clearInterval(animation);
          return 48;
        }
        return current + 1;
      });
    }, 35);

    return () => window.clearInterval(animation);
  }, []);

  return <a className="github-stat" href="https://github.com/Chinthak123?tab=repositories" target="_blank" rel="noreferrer"><span className="github-stat-icon"><SiGithub size={20} /></span><strong>{repoCount}</strong><span className="github-stat-label">public repositories</span><ArrowUpRight size={15} /></a>;
}

function ProjectCard({ project }) {
  return <article className={`project-card ${project.tone}`}><a href={project.github} target="_blank" rel="noreferrer" className={`project-visual ${project.visual} ${project.image ? 'has-image' : 'logo-visual'}`} aria-label={`View ${project.title} on GitHub`}>{project.image ? <img src={project.image} alt={`${project.title} project preview`} /> : <div className="opencv-mark"><SiOpencv size={92} /></div>}<span className="project-number">{project.number}</span><span className="visual-label">{project.visual === 'data' ? <><BarChart3 size={19} /> MCP / ANALYTICS</> : project.visual === 'gesture' ? 'OPENCV / COMPUTER VISION' : project.visual === 'dashboard' ? 'DASHBOARD' : 'REVOX / 2024'}</span><ArrowUpRight className="visual-arrow" size={22} /></a><div className="project-info"><p className="project-subtitle">{project.subtitle}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.github} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16} /></a></div></article>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);