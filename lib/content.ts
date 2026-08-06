export const contact = {
  email: "pragma.pa@gmail.com",
  emailHref: "mailto:pragma.pa@gmail.com",
  linkedIn: "https://www.linkedin.com/in/orlandojordannunez",
  location: "Panamá",
  pdfHref: "/Orlando_Jordan_Professional_Portfolio_EN.pdf",
} as const;

export type Project = {
  status: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  capabilities: string[];
  visual: "pulse" | "arduino" | "legal";
};

export const projects: Project[] = [
  {
    status: "Proyecto funcional",
    title: "Pragma Pulse",
    subtitle: "Automatización de reportes e información",
    description:
      "Sistema funcional que recopila información de varias fuentes y produce reportes programados mediante un flujo conectado a Telegram. El proyecto demuestra integración backend, ejecución programada, procesamiento de información y entrega confiable de resultados.",
    tags: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Railway",
      "Telegram Bot API",
      "Tareas programadas",
    ],
    capabilities: [
      "Integración de sistemas",
      "Automatización de procesos",
      "Procesamiento de información",
      "Resolución de problemas técnicos",
    ],
    visual: "pulse",
  },
  {
    status: "Proyecto técnico",
    title: "Automatización de iluminación con Arduino",
    subtitle: "Control básico con sensores y lógica de automatización",
    description:
      "Proyecto orientado al control automático de iluminación usando Arduino, sensores y lógica de activación. Sirve como práctica de electrónica aplicada, lectura de señales, conexión de componentes y documentación de funcionamiento.",
    tags: [
      "Arduino",
      "Sensores",
      "Electrónica básica",
      "C++",
      "Automatización",
      "Documentación técnica",
    ],
    capabilities: [
      "Lectura de sensores",
      "Control de actuadores",
      "Pruebas iterativas",
      "Aprendizaje técnico aplicado",
    ],
    visual: "arduino",
  },
  {
    status: "Concepto y prototipo",
    title: "legaldoc-ai",
    subtitle: "Datos estructurados, reglas de validación y revisión humana",
    description:
      "Concepto y prototipo para capturar información estructurada, aplicar reglas, validar consistencia y generar borradores de documentos para revisión profesional. Se presenta como caso de estudio de automatización, no como producto comercial terminado.",
    tags: [
      "OpenAI API",
      "Node.js",
      "Supabase",
      "Reglas de validación",
      "Datos estructurados",
      "Revisión humana",
    ],
    capabilities: [
      "Diseño de procesos",
      "Validación de datos",
      "Uso responsable de IA",
      "Documentación técnica",
    ],
    visual: "legal",
  },
];

export type Experience = {
  organization: string;
  role: string;
  dates: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    organization: "Pragma AI Studio",
    role: "Proyectos independientes de IA y automatización",
    dates: "2026 - Present",
    bullets: [
      "Desarrollo proyectos prácticos para automatización, procesamiento de información y documentación técnica.",
      "Integro herramientas como Node.js, n8n, Google Apps Script, REST APIs, Supabase y Railway en soluciones de aprendizaje aplicado.",
      "Analizo procesos manuales, defino reglas de validación, pruebo salidas y documento el funcionamiento de cada flujo.",
    ],
  },
  {
    organization: "INEC - Comptroller General of Panama",
    role: "Práctica escolar",
    dates: "September - November 2025",
    bullets: [
      "Revisé y codifiqué registros institucionales y cuestionarios digitales como parte de una práctica escolar.",
      "Apoyé tareas de clasificación, revisión de consistencia y control de calidad de datos.",
      "Identifiqué inconsistencias y validé información antes de pasarla a la siguiente etapa de procesamiento.",
    ],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Automatización y electrónica",
    skills: ["Arduino", "Sensores", "Control básico", "Electrónica aplicada"],
  },
  {
    category: "Programación",
    skills: ["C++", "Node.js", "Python - en desarrollo", "REST APIs"],
  },
  {
    category: "Datos y backend",
    skills: ["PostgreSQL", "Supabase", "Validación de datos", "Revisión de consistencia"],
  },
  {
    category: "Herramientas técnicas",
    skills: ["Fusion 360", "AutoCAD", "Railway", "Fundamentos de Git"],
  },
  {
    category: "Capacidades profesionales",
    skills: [
      "Documentación técnica",
      "Aprendizaje independiente",
      "Resolución de problemas",
      "Pruebas y mejora iterativa",
    ],
  },
  {
    category: "Automatización digital",
    skills: ["n8n", "Google Apps Script", "Diseño de flujos", "Mapeo de procesos"],
  },
];

export const education = {
  institution: "Universidad Latina de Panamá",
  program: "Ingeniería Mecatrónica",
  dates: "2026 - 2030 - En curso",
  coursework: [
    "Programación para ingenieros",
    "Física aplicada",
    "Cálculo integral",
    "Diseño asistido por computadora",
    "Metrología",
  ],
  secondary:
    "Centro Bilingüe Vista Alegre - Bachiller en Tecnología",
} as const;

export const languages = [
  "Español - Nativo",
  "Inglés - Intermedio, conversacional y técnico",
] as const;

export const navItems = [
  { href: "#about", label: "Perfil" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
] as const;
