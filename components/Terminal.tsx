export default function Terminal({ lines, title = "troubleshooting.sh" }: { lines: string[]; title?: string }) {
  return (
    <div className="term" aria-hidden="true">
      <div className="term-bar"><i /><i /><i /><span>{title}</span></div>
      <pre>{lines.map((l, i) => <code key={i} className={l.startsWith("✓") ? "ok" : l.startsWith("✗") ? "bad" : l.startsWith("$") ? "cmd" : ""} style={{ animationDelay: `${i * 0.35}s` }}>{l}{"\n"}</code>)}</pre>
    </div>
  );
}
