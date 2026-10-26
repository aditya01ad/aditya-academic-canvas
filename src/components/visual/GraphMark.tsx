/** A small hand-drawn-style graph sketch, referencing the site's mathematical roots. */
export default function GraphMark() {
  const points = [
    [37, 68], [91, 27], [157, 42], [189, 113],
    [151, 172], [77, 175], [26, 126], [112, 103],
  ];
  const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[0,7],[1,7],[2,7],[4,7],[5,7]];
  return (
    <figure className="graph-note" aria-label="A small diagram of connected vertices, inspired by spectral graph theory">
      <svg viewBox="0 0 222 208" fill="none" aria-hidden="true" className="w-full">
        {edges.map(([a,b],i) => <line key={i} x1={points[a][0]} y1={points[a][1]} x2={points[b][0]} y2={points[b][1]} stroke="currentColor" strokeWidth="1" opacity=".38" />)}
        {points.map(([x,y],i) => <circle key={i} cx={x} cy={y} r={i===7 ? 4.2 : 3.2} fill={i===7 ? "hsl(var(--accent))" : "hsl(var(--foreground))"} />)}
        <path d="M141 24l22 -6" stroke="currentColor" strokeOpacity=".25" />
        <text x="165" y="18" className="graph-notation">λ</text>
        <text x="18" y="202" className="graph-notation">G = (V, E)</text>
      </svg>
      <figcaption className="graph-caption">a little graph, naturally.</figcaption>
    </figure>
  );
}
