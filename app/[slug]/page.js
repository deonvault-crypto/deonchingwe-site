const pages = {
  about: {
    title: 'About',
    intro: 'I am Deon Davies Chingwe — a founder and builder from Zimbabwe, based in Poland, working across products that have to function outside a clean demo environment.',
    sections: [
      ['How I work', 'I like products where the software has to meet a real operating constraint: a driver between trips, a gym member at the door, a cross-border payment partner with rules of its own. The work usually starts with the awkward parts, not the presentation layer.'],
      ['What I care about', 'Clarity over decoration. Useful systems over impressive mock-ups. Local context over borrowed assumptions. I would rather ship a smaller thing that survives reality than a bigger thing that only survives a presentation.'],
      ['Between two places', 'Zimbabwe is where many of the problems I care about become concrete. Poland is where I live and build. That distance keeps forcing better questions about trust, infrastructure, distribution and what “normal” actually means.']
    ]
  },
  projects: {
    title: 'Projects',
    intro: 'Four products at different stages. The point here is not to dress them up as finished case studies. It is to show the decisions underneath them.',
    rows: [
      ['LIVE', 'LetsGoRide', 'Mobility / Zimbabwe'],
      ['IN DEVELOPMENT', 'Navora', 'Consumer / Lifestyle'],
      ['RELEASED', 'DeYon Gym', 'Fitness / Zimbabwe'],
      ['IN PROGRESS', 'VEYRO', 'Finance / Europe ↔ Africa']
    ],
    sections: [
      ['LetsGoRide', 'A ride platform for Zimbabwe. The difficult part is not the map — it is making trust, signup, dispatch, support and driver economics understandable enough to work in the real market.'],
      ['Navora', 'A consumer brand being built identity-first. The constraint is deliberate: fewer categories, stronger visual language, less noise.'],
      ['DeYon Gym', 'A member and operations product built around access, membership status, QR entry, check-in history and the routines a real gym needs every day.'],
      ['VEYRO', 'Cross-border financial infrastructure between Europe and Africa. The work begins with partners, rails, compliance and settlement realities before product promises.']
    ]
  },
  companies: {
    title: 'Companies',
    intro: 'I am moving toward a simpler structure: fewer company shells, clearer operating brands, and technology projects that can share real infrastructure where it makes sense.',
    rows: [
      ['OPERATING', 'LetsGoRide', 'Mobility'],
      ['BUILDING', 'VEYRO', 'Cross-border finance'],
      ['BUILDING', 'Navora', 'Consumer'],
      ['OPERATING', 'DeYon Gym', 'Fitness']
    ]
  },
  apps: {
    title: 'Apps',
    intro: 'Software I have built or am actively building. Mobile is useful to me when it removes friction from a real routine, not when it simply creates another surface to maintain.',
    rows: [
      ['iOS + Android', 'LetsGoRide', 'Passenger, driver and delivery platform'],
      ['iOS', 'DeYon Gym', 'Membership, QR access and check-in'],
      ['PRODUCT', 'VEYRO', 'Cross-border wallet and transfer experience'],
      ['CONCEPT', 'Foreigners in Poland', 'Directory and community utility']
    ]
  },
  journal: {
    title: 'Journal',
    intro: 'Notes from building, changing my mind, and trying to understand what survives once software meets operations.',
    rows: [
      ['SEP 2026', 'What 0% commission changes — and what it does not', 'Mobility'],
      ['SEP 2026', 'Why the polished screen is not the product', 'Product'],
      ['AUG 2026', 'Building from Zimbabwe outward', 'Field note'],
      ['AUG 2026', 'Partners before promises', 'Finance']
    ]
  },
  press: {
    title: 'Press',
    intro: 'A place for interviews, announcements and useful references as the work becomes public. No invented coverage and no vanity logo wall.',
    sections: [
      ['Press enquiries', 'For interviews, founder background, product information or media assets, email hello@deonchingwe.com.'],
      ['What belongs here', 'Published interviews, verified company announcements, public launch coverage and speaking appearances. If it has not happened, it does not get a card.']
    ]
  },
  gallery: {
    title: 'Gallery',
    intro: 'Fragments from products, places and the work around them. Less “portfolio moodboard,” more evidence that the projects have a life outside the browser.',
    gallery: ['Zimbabwe / field notes', 'Product decisions', 'Gym / operations', 'Poland / building', 'LetsGoRide / mobility', 'Work in progress']
  },
  contact: {
    title: 'Contact',
    intro: 'If there is a real question, proposal, partnership or problem worth discussing, email is the best place to start.',
    contact: true
  }
};

const archive = ['about','projects','companies','apps','journal','press','gallery','contact'];

export function generateStaticParams() {
  return Object.keys(pages).map(slug => ({ slug }));
}

export const dynamicParams = false;

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

export default async function Page({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return null;

  return <>
    <Header />
    <main className="shell">
      <section className="page-hero">
        <div><div className="kicker">Deon Davies Chingwe / {slug}</div><h1>{page.title}</h1></div>
        <p>{page.intro}</p>
      </section>

      {page.rows && <section className="section">
        <div className="list">{page.rows.map(([date,title,tag]) => <div className="row" key={title}><div className="date">{date}</div><div className="title">{title}</div><div className="tag">{tag}</div></div>)}</div>
      </section>}

      {page.sections && page.sections.map(([title,text], i) => <section className="content-grid" key={title}>
        <div className="label">{String(i+1).padStart(2,'0')} / {slug}</div>
        <div><h2>{title}</h2><p>{text}</p>{i === 0 && slug === 'about' ? <div className="hand">build the difficult bit first →</div> : null}</div>
      </section>)}

      {page.gallery && <section className="section"><div className="gallery">{page.gallery.map((g,i) => <div className="gallery-card" key={g}><div className="label">0{i+1}</div><span>{g}</span></div>)}</div></section>}

      {page.contact && <section className="section"><div className="label">Direct</div><p className="lede">No form funnel. No “book a discovery call” choreography.</p><a className="contact-link" href="mailto:hello@deonchingwe.com">hello@deonchingwe.com</a><p className="hand" style={{marginTop:30}}>specific emails get better answers.</p></section>}
    </main>
    <Footer />
  </>
}
