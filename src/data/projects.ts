/**
 * Hand-curated public projects. Descriptions say what the repositories actually contain,
 * not what might eventually be built. Categories are for browsing, not rankings.
 */
export type ProjectGroup = "research" | "coding" | "other";

export type Project = {
  id: string;
  title: string;
  group: ProjectGroup;
  kind: string;
  summary: string;
  tags: string[];
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "spectral-project",
    title: "Spectral graph theory experiments",
    group: "research",
    kind: "Research code",
    summary:
      "Code, notebooks and graph data from my M.Sc. research explorations: spectra, cospectral graphs, zero forcing and related questions. Some implementations build on work in the literature, with attribution in the source.",
    tags: ["Graph theory", "Python", "SageMath", "NetworkX"],
    url: "https://github.com/aditya01ad/spectral-project",
    featured: true,
  },
  {
    id: "cospectral-notes",
    title: "Study of cospectral graphs",
    group: "research",
    kind: "Reading & notes",
    summary:
      "Written notes on the ideas behind graph spectra: what eigenvalues reveal about a graph, and why different graphs can sometimes share the same spectrum.",
    tags: ["Linear algebra", "Graph theory", "Writing"],
    url: "https://github.com/aditya01ad/Study_of_Cospectral_Graphs",
  },
  {
    id: "ds-analyzer",
    title: "DS Analyzer",
    group: "coding",
    kind: "Experimental tool",
    summary:
      "A Python command-line experiment for inspecting graph properties and searching for cospectral examples using Godsil–McKay switching. It is a prototype, not a proof that a graph is spectrally unique.",
    tags: ["Python", "NetworkX", "Algorithms"],
    url: "https://github.com/aditya01ad/ds-analyzer",
    featured: true,
  },
  {
    id: "colab",
    title: "My coding notebooks",
    group: "coding",
    kind: "Learning in public",
    summary:
      "Google Colab notebooks where I practise Python, NumPy, data analysis and operations-research models. Some exercises are worked through; others are still sketches.",
    tags: ["Colab", "Python", "Optimization", "PuLP"],
    url: "https://github.com/aditya01ad/colab_codes",
    featured: true,
  },
  {
    id: "matlab",
    title: "Optimization Techniques",
    group: "coding",
    kind: "Coursework",
    summary:
      "A collection of MATLAB exercises in numerical methods, differential equations, plotting and other mathematical computations.",
    tags: ["MATLAB", "Numerical methods"],
    url: "https://github.com/aditya01ad/Optimization-techniques",
  },
  {
    id: "circle",
    title: "Circle packing experiments",
    group: "coding",
    kind: "Small experiment",
    summary:
      "A few MATLAB files from exploring how circles can be arranged and plotted. A small working folder rather than a packaged project.",
    tags: ["MATLAB", "Geometry"],
    url: "https://github.com/aditya01ad/Circle-packing",
  },
  {
    id: "website",
    title: "This website",
    group: "other",
    kind: "Personal project",
    summary:
      "The source code for the little corner of the internet you're visiting—built with React and TypeScript, and changing as I figure out what I want it to be.",
    tags: ["React", "TypeScript", "Web"],
    url: "https://github.com/aditya01ad/aditya-academic-canvas",
    featured: true,
  },
  {
    id: "time",
    title: "A tiny time service",
    group: "other",
    kind: "Small utility",
    summary:
      "A lightweight Node/Express endpoint for returning the current time in India. Mostly an exercise in making a simple tool work.",
    tags: ["Node.js", "Express"],
    url: "https://github.com/aditya01ad/timecheck",
  },
];

export const projectFilters: { value: "all" | ProjectGroup; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "research", label: "Research & notes" },
  { value: "coding", label: "Code & experiments" },
  { value: "other", label: "Side projects" },
];
