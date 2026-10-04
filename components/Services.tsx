import { SERVICES } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-h">
      <div className="w">
        <div className="c"><span className="pill">Services</span><h2 id="services-h">What I <em>do</em></h2></div>
        <ul className="sv">
          {SERVICES.map(([t, d], i) => (
            <li key={t} className="glass rv"><span className="n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
