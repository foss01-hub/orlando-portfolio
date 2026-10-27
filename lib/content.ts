export const contact = {
  email: "pragma.pa@gmail.com",
  emailHref: "mailto:pragma.pa@gmail.com",
  linkedIn: "https://www.linkedin.com/in/orlandojordannunez",
  location: "Panamá",
  pdfHref: "/CV_Orlando_Andres_Jordan_Nunez.pdf",
} as const;

export type Project = {
  status: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  capabilities: string[];
  visual: "pulse" | "arduino" | "tides" | "brake";
  href?: string;
  hrefLabel?: string;
};

export const projects: Project[] = [
  {
    status: "En línea",
    title: "MangroTides",
    subtitle: "Mareas y condiciones de pesca para Panamá",
    description:
      "Web de mareas con 15 puntos en 8 zonas del Pacífico y el Caribe. Un lector propio en Python extrae las tablas de mareas en PDF de la ACP y las compara contra una API externa en cada despliegue. Incluye un asistente de IA que consulta la base de datos mediante herramientas para responder con datos reales.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Python",
      "OpenAI API",
      "GitHub Actions",
    ],
    capabilities: [
      "Extracción y validación de datos",
      "214 pruebas automatizadas e integración continua",
      "IA conectada a datos reales (tool calling)",
      "Modo sin señal para uso en el agua",
    ],
    visual: "tides",
    href: "https://mangrotides-production.up.railway.app",
    hrefLabel: "Ver sitio",
  },
  {
    status: "En línea",
    title: "Pragma Pulse",
    subtitle: "Automatización de reportes de mercado",
    description:
      "Sistema que recopila información de varias fuentes y publica reportes programados varias veces al día en Telegram, con un archivo web con búsqueda y filtros. Tiene respaldo entre proveedores de datos para que la falla de una API no detenga el proceso, y funciona sin interrupción desde su lanzamiento.",
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
      "Tolerancia a fallas",
      "Ejecución programada",
      "Auditoría de seguridad básica",
    ],
    visual: "pulse",
    href: "https://pragma-brief-production.up.railway.app/",
    hrefLabel: "Ver archivo",
  },
  {
    status: "Feria de Ingeniería Q2026-1",
    title: "Freno electromagnético experimental",
    subtitle: "Prototipo de frenado con electroimanes",
    description:
      "Prototipo presentado en la Feria de Proyectos de Ingeniería de la Universidad Latina, categoría Prototipo. Lideré el diseño, los materiales, el armado y la presentación. La carcasa se diseñó en Fusion 360 y se imprimió en 3D. Rindió por debajo de lo esperado y el análisis dejó claro que la fuerza depende del bobinado y del número de vueltas.",
    tags: [
      "Arduino Uno",
      "Motor DC 12 V",
      "Tacómetro óptico",
      "Electroimanes",
      "Fusion 360",
      "Impresión 3D",
    ],
    capabilities: [
      "Liderazgo de proyecto",
      "Diseño mecánico y CAD",
      "Integración electromecánica",
      "Análisis de resultados",
    ],
    visual: "brake",
  },
  {
    status: "Proyecto académico",
    title: "Automatización de iluminación",
    subtitle: "Control con sensores PIR y LDR",
    description:
      "Control automático de iluminación con Arduino, sensores de presencia y de luz, relé y lógica temporizada. Práctica de electrónica aplicada, lectura de señales, conexión de componentes y pruebas de funcionamiento.",
    tags: ["Arduino", "Sensor PIR", "Sensor LDR", "Relé", "C++"],
    capabilities: [
      "Lectura de sensores",
      "Control de actuadores",
      "Pruebas iterativas",
      "Documentación técnica",
    ],
    visual: "arduino",
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
    role: "Fundador y desarrollador (proyectos propios)",
    dates: "Enero 2026 - Presente",
    bullets: [
      "Desarrollé MangroTides y Pragma Pulse, dos sistemas en línea con bases de datos, tareas programadas y validación automática de datos.",
      "Automaticé un flujo administrativo en Google Sheets con Apps Script: facturas en PDF desde plantilla, alertas por correo de inventario bajo y respaldo diario.",
      "Construí un sistema de citas con reserva por enlace, confirmación por correo y panel administrativo con verificación antes de cancelar.",
    ],
  },
  {
    organization: "INEC - Contraloría General de la República de Panamá",
    role: "Practicante",
    dates: "Septiembre - Noviembre 2025",
    bullets: [
      "Revisé y codifiqué registros y cuestionarios digitales conforme a los procedimientos establecidos.",
      "Comparé datos e identifiqué inconsistencias para apoyar la calidad y trazabilidad de los registros.",
      "Roté entre funciones de revisor/codificador y analista de datos bajo criterios de confidencialidad.",
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
    skills: ["Arduino", "Sensores y actuadores", "Control básico", "Circuitos eléctricos"],
  },
  {
    category: "Programación",
    skills: ["C++", "Java", "JavaScript / TypeScript", "Python básico"],
  },
  {
    category: "Datos y backend",
    skills: ["PostgreSQL", "Node.js", "REST APIs", "Validación de datos"],
  },
  {
    category: "Diseño y fabricación",
    skills: ["Fusion 360", "AutoCAD", "Impresión 3D", "Metrología"],
  },
  {
    category: "IA y automatización digital",
    skills: ["APIs de IA (OpenAI, Claude)", "n8n y Make", "Google Apps Script", "Mapeo de procesos"],
  },
  {
    category: "Capacidades profesionales",
    skills: [
      "Documentación técnica",
      "Resolución de problemas",
      "Pruebas y mejora iterativa",
      "Aprendizaje independiente",
    ],
  },
];

export const education = {
  institution: "Universidad Latina de Panamá",
  program: "Ingeniería en Mecatrónica",
  dates: "Enero 2026 - En curso | Graduación estimada: 2030",
  coursework: [
    "Programación para Ingenieros (C++)",
    "Programación (Java)",
    "Circuitos Eléctricos I",
    "Física Aplicada I y II",
    "Cálculo",
    "Álgebra de Vectores y Matrices",
    "Dibujo Técnico (AutoCAD)",
    "Metrología y Normalización",
  ],
  secondary:
    "Centro Bilingüe Vista Alegre - Bachiller en Tecnología (2025)",
} as const;

export const languages = [
  "Español - Nativo",
  "Inglés - Intermedio, con lectura técnica y comunicación escrita",
] as const;

export const navItems = [
  { href: "#about", label: "Perfil" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
] as const;
