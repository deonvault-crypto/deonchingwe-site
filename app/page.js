const projects = [
  {
    meta: 'Mobility / Zimbabwe',
    status: 'Live product',
    name: 'LetsGoRide',
    text: 'A ride platform built for the way people actually move in Zimbabwe.',
    decision: 'Keep the flow direct. Make the important actions obvious. Remove anything that slows a rider or driver down.'
  },
  {
    meta: 'Consumer / Lifestyle',
    status: 'Brand in development',
    name: 'Navora',
    text: 'A consumer brand trying to look outward without pretending it came from somewhere else.',
    decision: 'Build the visual language before adding categories. Fewer products, clearer identity.'
  },
  {
    meta: 'Fitness / Zimbabwe',
    status: 'App released',
    name: 'DeYon Gym',
    text: 'A gym and member app built around access, routine and a real community.',
    decision: 'Start with the unglamorous parts: membership status, entry, check-in and access history.'
  },
  {
    meta: 'Finance / Europe ↔ Africa',
    status: 'Being worked through',
    name: 'VEYRO',
    text: 'An attempt to make cross-border money movement feel less distant and more understandable.',
    decision: 'Work from the rails backwards. Secure the right partners before making promises to users.'
  }
];

const archive = ['about','projects','companies','apps','journal','press','gallery','contact'];

function Header() {
  return <header className="topbar shell">
    <a className="brand" href="/">Deon Davies Chingwe</a>
    <nav className="nav"><a href="/">Home</a><a href="/projects/">Work</a><a href="/journal/">Notes</a><a href="/about/">About</a></nav>
    <div className="place">Zimbabwe ↔ Poland</div>
  </header>
}

function Footer() {
  return <footer className="footer shell">
    <div className="footer-grid">
      <div><div className="label">If it needs a real answer</div><h2>Email me.</h2><a className="cta" href="mailto:hello@deonchingwe.com">hello@deonchingwe.com</a></div>
      <div className="archive">{archive.map(x => <a key={x} href={`/${x}/`}>{x}</a>)}</div>
    </div>
    <div className="bottom"><span>Deon Davies Chingwe · Founder & Builder</span><span>Zimbabwe ↔ Poland · 2026</span></div>
  </footer>
}

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero shell">
        <div>
          <div className="kicker">Founder & Builder · Zimbabwe ↔ Poland</div>
          <h1>I build things that have to survive contact with real life.</h1>
        </div>
        <div className="hero-copy">
          <p>Mostly mobility, fitness and consumer products between Zimbabwe and Poland. Some are live. Some are still being argued with.</p>
          <a className="cta" href="/projects/">See what I’m building</a>
          <div className="hand hero-note">still building after the shift →</div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head"><div className="label">Right now</div><h2>Making LetsGoRide work beyond the pitch deck.</h2></div>
        <div className="now-grid">
          <div className="big-copy">The interesting part is not drawing another ride-booking screen.</div>
          <div className="note-card"><p>It is deciding what a driver in Zimbabwe needs to trust, what a passenger needs to understand in five seconds, and which assumptions from bigger markets simply do not travel.</p><p>I’m building through those questions one release at a time.</p><a className="cta" href="/projects/">Read the project decisions</a></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head"><div className="label">Four bets, different stages</div><div><h2>The work</h2><p className="lede">No pretend case-study metrics. Just what each product is, what makes it difficult, and the decision I am making next.</p></div></div>
        <div className="projects">
          {projects.map(p => <a href="/projects/" className="project" key={p.name}>
            <div className="meta"><span>{p.meta}</span><span>{p.status}</span></div>
            <h3>{p.name}</h3><p>{p.text}</p>
            <div className="decision"><strong>The decision</strong><br />{p.decision}</div>
          </a>)}
        </div>
      </section>

      <section className="section shell">
        <div className="section-head"><div className="label">Things I’m still figuring out</div><h2>Questions are part of the work.</h2></div>
        <div className="questions">
          {[
            'How do you build trust before you have scale?',
            'What changes when a product is designed from Zimbabwe outward?',
            'How much should software explain, and how much should it simply get out of the way?',
            'When does restraint become hesitation?'
          ].map(q => <div className="question" key={q}><span>{q}</span><b>?</b></div>)}
        </div>
      </section>

      <section className="section shell">
        <div className="section-head"><div className="label">A useful constraint</div><h2>What I refuse to build</h2></div>
        <div className="constraint">
          <div className="statement">Something that only works in the demo.</div>
          <div className="explain"><p>If the product cannot survive slow networks, awkward edge cases, a busy front desk or a driver using it between trips, the polished mock-up means very little.</p><p className="hand">the unglamorous bits are usually the product.</p><a className="cta" href="/about/">More about how I work</a></div>
        </div>
      </section>
    </main>
    <Footer />
  </>
}
