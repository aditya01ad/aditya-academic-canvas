export type ProjectStatus = "active" | "completed";
export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  url: string;
  featured?: boolean;
};

/** Project descriptions link to existing GitHub repositories; do not imply unverified results. */
export const projects: PortfolioProject[] = [
  {
    id: "spectral",
    title: "Spectral Graph Theory Research",
    category: "Research · Python · SageMath",
    status: "completed",
    description: "Computational experiments with graph spectra, cospectral constructions, graph families and zero forcing. Part of a wider investigation into spectral determination.",
    tags: ["NetworkX", "SageMath", "Linear algebra"],
    url: "https://github.com/aditya01ad/spectral-project",
    featured: true,
  },
  {
    id: "or-prep",
    title: "Operations Research Notebooks",
    category: "Optimization · Python",
    status: "active",
    description: "Worked notebooks covering linear programming, transport models, integer optimization, PuLP, and Python data workflows. End-to-end case studies are still in progress.",
    tags: ["PuLP", "NumPy", "Pandas"],
    url: "https://github.com/aditya01ad/colab_codes",
    featured: true,
  },
  {
    id: "analyzer",
    title: "Graph Spectrum Analyzer",
    category: "Python · Algorithms",
    status: "active",
    description: "A command-line toolkit exploring graph eigenvalues and spectral properties. Its large-graph calculation paths and automated tests are being reviewed.",
    tags: ["Python", "CLI", "NetworkX"],
    url: "https://github.com/aditya01ad/ds-analyzer",
    featured: true,
  },
  {
    id: "optimization",
    title: "Optimization Techniques",
    category: "Numerical methods · MATLAB",
    status: "completed",
    description: "Academic implementations and coursework involving optimization techniques and numerical methods.",
    tags: ["MATLAB", "Optimization", "Numerical"],
    url: "https://github.com/aditya01ad/Optimization-techniques",
  },
  {
    id: "cospectral",
    title: "Study of Cospectral Graphs",
    category: "Graph theory · Documentation",
    status: "completed",
    description: "Research notes and mathematical material examining spectral graph invariants and cospectrality.",
    tags: ["Graph theory", "Mathematics"],
    url: "https://github.com/aditya01ad/Study_of_Cospectral_Graphs",
  },
];
