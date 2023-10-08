import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby woke bicycle rights tote bag twee etsy, Brooklyn pinterest
            street art kinfolk. Activated charcoal dreamcatcher gochujang, ascot
            hell of +1 tilde solarpunk hammock shabby chic roof party slow-carb.
            IPhone keffiyeh DSA meh pork belly, unicorn cloud bread pickled
            chartreuse roof party vape palo santo blue bottle.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="" />
        </div>
      </div>
    </section>
  )
}
export default Hero
