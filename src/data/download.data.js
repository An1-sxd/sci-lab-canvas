export const downloadHeaderData = {
  title: "Download Virtual Lab",
  subtitle: "Get the desktop application for the best experience. Available for Windows, macOS, and Linux.",
  version: "v2.4.1",
  releaseDate: "January 2026",
};

export const platformsData = [
  {
    id: "windows",
    name: "Windows",
    icon: "windows",
    fileName: "VirtualLab-Setup-2.4.1.exe",
    fileSize: "128 MB",
    requirements: "Windows 10 or later (64-bit)",
    downloadUrl: "#",
  },
  {
    id: "macos",
    name: "macOS",
    icon: "apple",
    fileName: "VirtualLab-2.4.1.dmg",
    fileSize: "142 MB",
    requirements: "macOS 11 (Big Sur) or later",
    downloadUrl: "#",
  },
  {
    id: "linux",
    name: "Linux",
    icon: "linux",
    fileName: "VirtualLab-2.4.1.AppImage",
    fileSize: "135 MB",
    requirements: "Ubuntu 20.04+ / Fedora 34+ / Debian 11+",
    downloadUrl: "#",
  },
];

export const systemRequirementsData = {
  title: "System Requirements",
  minimum: {
    title: "Minimum",
    specs: [
      "4GB RAM",
      "2GHz dual-core processor",
      "2GB available storage",
      "OpenGL 3.3 compatible GPU",
    ],
  },
  recommended: {
    title: "Recommended",
    specs: [
      "8GB RAM",
      "3GHz quad-core processor",
      "5GB available storage",
      "Dedicated GPU with 2GB VRAM",
    ],
  },
};
