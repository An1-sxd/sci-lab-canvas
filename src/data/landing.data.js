import { FlaskConical, BarChart3, Zap, Users, Microscope, Database, Atom, Beaker } from "lucide-react";

export const heroData = {
  badge: "Virtual Lab Platform",
  title: "Design, Run & Analyze",
  titleAccent: "Experiments",
  subtitle: "A powerful virtual laboratory platform that lets you create, simulate, and analyze scientific experiments in a safe, collaborative environment.",
  primaryCta: {
    label: "Get Started Free",
    href: "/download",
  },
  secondaryCta: {
    label: "View Pricing",
    href: "/pricing",
  },
};

export const appPreviewData = {
  title: "Powerful Lab Interface",
  description: "Experience a modern, intuitive interface designed for scientists and researchers.",
  image: "/src/assets/app-preview.png",
  features: [
    "Real-time experiment simulation",
    "Comprehensive data analysis tools",
    "Collaborative workspace",
    "Export to multiple formats",
  ],
};

export const featuresData = {
  sectionTitle: "Everything You Need",
  sectionSubtitle: "Powerful features to accelerate your research",
  features: [
    {
      icon: FlaskConical,
      title: "Create Experiments",
      description: "Design complex experiments with our intuitive drag-and-drop interface. Set parameters, variables, and conditions easily.",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Powerful analytics tools to visualize and interpret your results. Generate charts, graphs, and statistical reports.",
    },
    {
      icon: Zap,
      title: "Real-time Simulation",
      description: "Watch your experiments unfold in real-time with accurate physics-based simulations and instant feedback.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your research team. Share experiments, review results, and collaborate in real-time.",
    },
    {
      icon: Microscope,
      title: "Virtual Microscopy",
      description: "Explore specimens at various magnification levels with our advanced virtual microscopy tools.",
    },
    {
      icon: Database,
      title: "Cloud Storage",
      description: "All your experiments and data are securely stored in the cloud, accessible from anywhere, anytime.",
    },
  ],
};

export const statsData = [
  { value: "10K+", label: "Active Users" },
  { value: "500K+", label: "Experiments Run" },
  { value: "50+", label: "Institutions" },
  { value: "99.9%", label: "Uptime" },
];
