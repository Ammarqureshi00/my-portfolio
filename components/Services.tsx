import { SERVICES } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-h">
      <div className="w">
        <div className="c">
          <span className="pill">Services</span>
          <h2 id="services-h">A few ways I can <em>help</em></h2>
          <p className="lead">Bring me a problem, a rough idea or a site you want to improve. We can work out the right next step together.</p>
        </div>
        <ul className="sv">
          {SERVICES.map(([t, d], i) => (
            <li key={t} className="glass rv"><span className="n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
