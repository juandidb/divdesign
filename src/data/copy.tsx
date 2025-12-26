export type Locale = 'es' | 'en';

type PortfolioItem = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  metric: string;
  linkLabel: string;
  link: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type ProcessStep = {
  title: string;
  description: string;
  duration: string;
};

type ProofBrand = {
  name: string;
  caption: string;
};

type ProofMetric = {
  value: string;
  label: string;
};

type InsightItem = {
  pill: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type Copy = {
  nav: { hero: string; services: string; work: string; process: string; testimonials: string; contact: string; cta: string };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
  };
  services: { title: string; subtitle: string; items: { title: string; description: string }[] };
  work: { title: string; subtitle: string; items: PortfolioItem[] };
  process: { title: string; subtitle: string; steps: ProcessStep[] };
  testimonials: { title: string; subtitle: string; items: Testimonial[] };
  cta: { title: string; subtitle: string; button: string };
  contact: {
    title: string;
    subtitle: string;
    form: { name: string; email: string; project: string; budget: string; submit: string; success: string };
    budgetOptions: string[];
  };
  proof: { label: string; title: string; subtitle: string; brands: ProofBrand[]; metrics: ProofMetric[] };
  insights: { title: string; subtitle: string; items: InsightItem[] };
  faq: { title: string; subtitle: string; items: FaqItem[] };
};

const titleEs = 'Diseño web premium para vender tus servicios.';

const titleEn = 'Premium web design to sell your services.';

const projectImages = {
  launchpad: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
  fintech:
    'https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  juan: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80',
} as const;

export const copy: Record<Locale, Copy> = {
  es: {
    nav: {
      hero: 'Inicio',
      services: 'Servicios',
      work: 'Portfolio',
      process: 'Proceso',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      cta: 'Contactar',
    },
    hero: {
      kicker: 'Diseñador Web · UX/UI · Frontend',
      title: titleEs,
      subtitle:
        'Alineo estrategia, UX/UI y frontend para que tu propuesta se entienda en segundos y convierta con confianza.',
      ctaPrimary: 'Contactar',
      ctaSecondary: 'Ver portfolio',
      badge: 'Basado en Buenos Aires · Disponible para proyectos selectos',
    },
    services: {
      title: 'Servicios diseñados para resultados',
      subtitle: 'Desde la estrategia UX hasta la capa visual y el frontend listo para producción.',
      items: [
        {
          title: 'UX/UI',
          description: 'Research ágil, wireframes claros y UI con microinteracciones que mejoran la conversión.',
        },
        {
          title: 'Diseño web',
          description: 'Landing pages premium, sistemas de diseño escalables y narrativa visual orientada a negocio.',
        },
        {
          title: 'Desarrollo frontend',
          description: 'Implementación en React + Tailwind + Vite, más despliegue en servidor para salir en vivo con código limpio, rápido y listo para marketing.',
        },
      ],
    },
    work: {
      title: 'Proyectos recientes',
      subtitle: 'Selección curada de lanzamientos para startups, SaaS y marcas en crecimiento.',
      items: [
        {
          title: 'Launchpad SaaS',
          subtitle: 'Sitio de lanzamiento B2B',
          description: 'Rediseño integral con flujo de demo y pricing flexible. +42% en leads calificados.',
          tags: ['UX/UI', 'Design System', 'Webflow → React'],
          image: projectImages.launchpad,
          metric: '+42% leads',
          linkLabel: 'Ver caso',
          link: '#contact',
        },
        {
          title: 'Fintech Andes',
          subtitle: 'Producto web responsive',
          description: 'Dashboard de onboarding con accesibilidad AA y performance 95+ en Lighthouse.',
          tags: ['Frontend', 'Performance', 'UX Writing'],
          image: projectImages.fintech,
          metric: '95%+ clientes',
          linkLabel: 'Ver detalle',
          link: '#contact',
        },
        {
          title: 'Juan Di Benedetto - IT Support',
          subtitle: 'Sitio personal',
          description: 'Landing portfolio con foco en autoridad personal y despliegue listo para leads directos.',
          tags: ['Portfolio', 'Next.js', 'Deploy'],
          image: projectImages.juan,
          metric: 'Live',
          linkLabel: 'Visitar',
          link: 'https://juandibenedetto.tech/',
        },
      ],
    },
    process: {
      title: 'Proceso claro y sin fricción',
      subtitle: 'Metodología breve, con entregables verificables en cada etapa.',
      steps: [
        {
          title: 'Kickoff y estrategia',
          description: 'Objetivos, métricas de éxito y mapa de stakeholders. Documento breve para alinear expectativas.',
          duration: '2-3 días',
        },
        {
          title: 'UX y prototipo',
          description: 'Flujos, wireframes y prototipo navegable para validar antes de producir UI definitiva.',
          duration: '1-2 semanas',
        },
        {
          title: 'UI y sistema visual',
          description: 'Componentes, tokens y microinteracciones. Hand-off claro para marketing y dev.',
          duration: '1 semana',
        },
        {
          title: 'Frontend y lanzamiento',
          description: 'Implementación en React + Tailwind con performance y SEO técnico listos para campaña.',
          duration: '1-2 semanas',
        },
      ],
    },
    testimonials: {
      title: 'Testimonios reales',
      subtitle: 'Clientes que necesitaban mover la aguja, no solo "verse bien".',
      items: [
        {
          name: 'Lucía V.',
          role: 'CMO · SaaS B2B',
          quote: 'Claridad, velocidad y foco comercial. El nuevo sitio duplicó la tasa de demos en 6 semanas.',
        },
        {
          name: 'Agustín R.',
          role: 'Founder · Fintech',
          quote: 'El hand-off fue impecable. Código limpio, accesible y listo para SEO. Ahorro meses de retrabajo.',
        },
        {
          name: 'Daniela P.',
          role: 'COO · Retail',
          quote: 'No solo diseño: ayudó a ordenar la oferta y contar la historia. El equipo de ventas lo agradece.',
        },
      ],
    },
    cta: {
      title: '¿Listo para elevar tu presencia digital?',
      subtitle: 'Trabajo con pocos proyectos en paralelo para mantener calidad y velocidad.',
      button: 'Agendar conversación',
    },
    contact: {
      title: 'Contacto directo',
      subtitle: 'Contame qué necesitás y te propongo un plan concreto en 24 horas.',
      form: {
        name: 'Nombre y empresa',
        email: 'Email de contacto',
        project: 'Proyecto o necesidad',
        budget: 'Rango de inversión',
        submit: 'Enviar',
        success: 'Gracias por escribir. Te respondo en 24h.',
      },
      budgetOptions: ['USD 1k - 3k', 'USD 3k - 6k', 'USD 6k - 10k', 'USD 10k+'],
    },
    proof: {
      label: 'Confianza',
      title: 'Equipos de producto y founders que confían',
      subtitle: 'He colaborado con startups SaaS, fintechs y consultoras que necesitaban salir con algo premium en semanas, no meses.',
      brands: [
        { name: 'Mercury Labs', caption: 'Series A SaaS' },
        { name: 'AndesPay', caption: 'Fintech regional' },
        { name: 'Northpeak', caption: 'Consultora growth' },
        { name: 'Pionero', caption: 'Marketplace' },
        { name: 'Altitud', caption: 'Venture Studio' },
      ],
      metrics: [
        { value: '+38%', label: 'Mejora en conversión promedio' },
        { value: '24h', label: 'Tiempo de respuesta' },
        { value: '92', label: 'NPS de clientes' },
      ],
    },
    insights: {
      title: 'Insights accionables',
      subtitle: 'Mini playbooks y aprendizajes listos para aplicar en tu propio funnel.',
      items: [
        {
          pill: 'Playbook',
          title: 'Cómo armar un flow de demo que convierta',
          description: 'Checklist en 5 pasos para que tu CTA lleve a conversaciones reales y no a formularios muertos.',
          link: '#contact',
          linkLabel: 'Quiero el flow',
        },
        {
          pill: 'Research',
          title: 'Entrevistas relámpago para founders ocupados',
          description: 'Formato de 30 minutos para validar pricing y mensajes sin frenar el roadmap.',
          link: '#contact',
          linkLabel: 'Agendar sesión',
        },
        {
          pill: 'Entrega',
          title: 'Hand-off sin drama entre diseño y dev',
          description: 'Tokens, librerías y documentación que tu equipo puede reutilizar al día siguiente.',
          link: '#contact',
          linkLabel: 'Ver formato',
        },
      ],
    },
    faq: {
      title: 'FAQ y garantías',
      subtitle: 'Transparencia total antes de empezar. Si algo no aplica a tu caso, lo revisamos juntos.',
      items: [
        {
          question: '¿Trabajás con agencias o solo clientes directos?',
          answer: 'Ambos. Me sumo como product designer/frontend embed o lidero el proyecto end-to-end con tus stakeholders.',
        },
        {
          question: '¿Qué pasa si necesito cambios luego del lanzamiento?',
          answer: 'Incluyo 10 días de soporte para ajustes menores y opciones de retainer mensual para mejoras continuas.',
        },
        {
          question: '¿Podés sumarte a calls con inversores/equipo?',
          answer: 'Sí. Participo en demos clave para asegurar que el mensaje y la demo estén alineados con el nuevo sitio.',
        },
      ],
    },
  },
  en: {
    nav: {
      hero: 'Home',
      services: 'Services',
      work: 'Work',
      process: 'Process',
      testimonials: 'Testimonials',
      contact: 'Contact',
      cta: 'Contact',
    },
    hero: {
      kicker: 'Web Designer · UX/UI · Frontend',
      title: titleEn,
      subtitle:
        'I align strategy, UX/UI, and frontend so your offer lands fast and converts with trust.',
      ctaPrimary: 'Contact',
      ctaSecondary: 'View work',
      badge: 'Based in Buenos Aires · Available for select projects',
    },
    services: {
      title: 'Services built for outcomes',
      subtitle: 'From UX strategy to polished UI and production-ready frontend.',
      items: [
        {
          title: 'UX/UI',
          description: 'Lean research, clear wireframes, and microinteractions that lift conversion.',
        },
        {
          title: 'Web design',
          description: 'Premium landing pages, scalable design systems, and business-first storytelling.',
        },
        {
          title: 'Frontend',
          description: 'React + Tailwind + Vite implementation plus server deployment so everything ships clean, fast, and marketing-ready.',
        },
      ],
    },
    work: {
      title: 'Selected work',
      subtitle: 'Curated launches for startups, SaaS, and growth brands.',
      items: [
        {
          title: 'Launchpad SaaS',
          subtitle: 'B2B launch site',
          description: 'Full redesign with demo flow and flexible pricing. +42% qualified leads.',
          tags: ['UX/UI', 'Design System', 'Webflow → React'],
          image: projectImages.launchpad,
          metric: '+42% leads',
          linkLabel: 'View case',
          link: '#contact',
        },
        {
          title: 'Fintech Andes',
          subtitle: 'Responsive web product',
          description: 'Onboarding dashboard with AA accessibility and 95+ Lighthouse score.',
          tags: ['Frontend', 'Performance', 'UX Writing'],
          image: projectImages.fintech,
          metric: '95%+ clientes',
          linkLabel: 'View detail',
          link: '#contact',
        },
        {
          title: 'juandibenedetto.tech',
          subtitle: 'Personal site',
          description: 'Authority-building portfolio page with a direct lead capture focus and production deployment.',
          tags: ['Portfolio', 'Next.js', 'Deployment'],
          image: projectImages.juan,
          metric: 'Live',
          linkLabel: 'Visit site',
          link: 'https://juandibenedetto.tech/',
        },
      ],
    },
    process: {
      title: 'A clear, frictionless process',
      subtitle: 'Short sprints with tangible deliverables at every stage.',
      steps: [
        {
          title: 'Kickoff & strategy',
          description: 'Goals, success metrics, and stakeholder map. One-pager to align expectations.',
          duration: '2-3 days',
        },
        {
          title: 'UX & prototype',
          description: 'Flows, wireframes, and a clickable prototype to validate before UI production.',
          duration: '1-2 weeks',
        },
        {
          title: 'UI & design system',
          description: 'Components, tokens, and microinteractions. Clean hand-off for marketing and dev.',
          duration: '1 week',
        },
        {
          title: 'Frontend & launch',
          description: 'React + Tailwind implementation with performance and technical SEO ready for campaigns.',
          duration: '1-2 weeks',
        },
      ],
    },
    testimonials: {
      title: 'Credible testimonials',
      subtitle: 'Clients who needed to move the needle, not just "look nice".',
      items: [
        {
          name: 'Lucía V.',
          role: 'CMO · SaaS B2B',
          quote: 'Clarity, speed, and commercial focus. The new site doubled demo requests in 6 weeks.',
        },
        {
          name: 'Agustín R.',
          role: 'Founder · Fintech',
          quote: 'Hand-off was spotless. Clean, accessible code ready for SEO. Saved months of rework.',
        },
        {
          name: 'Daniela P.',
          role: 'COO · Retail',
          quote: 'Beyond design: he structured the offer and story. The sales team loves it.',
        },
      ],
    },
    cta: {
      title: 'Ready to level up your presence?',
      subtitle: 'I take a few projects at a time to keep quality and speed.',
      button: 'Book a call',
    },
    contact: {
      title: 'Direct contact',
      subtitle: 'Tell me what you need and I will share a concrete plan within 24 hours.',
      form: {
        name: 'Name & company',
        email: 'Contact email',
        project: 'Project or need',
        budget: 'Investment range',
        submit: 'Send',
        success: 'Thanks for reaching out. I will reply within 24h.',
      },
      budgetOptions: ['USD 1k - 3k', 'USD 3k - 6k', 'USD 6k - 10k', 'USD 10k+'],
    },
    proof: {
      label: 'Trusted by',
      title: 'Product teams and founders who need momentum',
      subtitle: 'I plug into SaaS, fintech, and boutique consultancies that must launch premium experiences in weeks, not months.',
      brands: [
        { name: 'Mercury Labs', caption: 'Series A SaaS' },
        { name: 'AndesPay', caption: 'LATAM fintech' },
        { name: 'Northpeak', caption: 'Growth studio' },
        { name: 'Pioneer', caption: 'Marketplace' },
        { name: 'Altitude', caption: 'Venture studio' },
      ],
      metrics: [
        { value: '+38%', label: 'Avg. conversion lift' },
        { value: '24h', label: 'Response time' },
        { value: '92', label: 'Client NPS' },
      ],
    },
    insights: {
      title: 'Actionable insights',
      subtitle: 'Micro playbooks and lessons you can plug into your own funnel.',
      items: [
        {
          pill: 'Playbook',
          title: 'Designing demo flows that sell',
          description: 'A five-step checklist so your CTA leads to real conversations, not dead forms.',
          link: '#contact',
          linkLabel: 'Send me the playbook',
        },
        {
          pill: 'Research',
          title: 'Lightning interviews for busy founders',
          description: '30-minute format to validate pricing and messaging without derailing the roadmap.',
          link: '#contact',
          linkLabel: 'Book a session',
        },
        {
          pill: 'Delivery',
          title: 'Hand-offs devs actually enjoy',
          description: 'Tokens, libraries, and docs your team can reuse the very next day.',
          link: '#contact',
          linkLabel: 'See the toolkit',
        },
      ],
    },
    faq: {
      title: 'FAQ + guarantees',
      subtitle: 'Full transparency before we start. If one of these does not fit your scenario, we rewrite it.',
      items: [
        {
          question: 'Do you partner with agencies or only direct clients?',
          answer: 'Both. I join as an embedded product designer/frontend dev or lead the project end-to-end with your stakeholders.',
        },
        {
          question: 'What happens if we need changes after launch?',
          answer: 'I include 10 days of support for tweaks plus optional retainers for ongoing improvements.',
        },
        {
          question: 'Can you join investor or team calls?',
          answer: 'Yes. I attend key demos to make sure the story and walkthrough stay aligned with the new site.',
        },
      ],
    },
  },
};
