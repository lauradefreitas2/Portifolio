import { Component, signal } from '@angular/core';

type Project = {
  title: string;
  label: string;
  description: string;
  stack: string[];
  link?: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Experience = {
  value: string;
  label: string;
};

type RoleExperience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

type BackendArea = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly email = 'laurafribeirooabreu@gmail.com';
  readonly currentYear = new Date().getFullYear();
  readonly menuOpen = signal(false);
  readonly lightTheme = signal(false);

  readonly contactHref =
    `mailto:${this.email}?subject=${encodeURIComponent('Contato pelo portfólio')}` +
    `&body=${encodeURIComponent('Oi Laura, vi seu portfólio e gostaria de conversar sobre uma oportunidade.')}`;

  readonly navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contato', href: '#contact' }
  ];

  readonly highlights: Experience[] = [
    { value: 'Backend', label: 'produtos financeiros' },
    { value: '2x', label: 'Azure Certified' },
    { value: 'Open Finance', label: 'integrações reguladas' },
    { value: 'PIX', label: 'pagamentos e rastreabilidade' }
  ];

  readonly experience: RoleExperience = {
    role: 'Backend Software Engineer',
    company: 'Experiência backend',
    period: 'jan 2024 - o momento',
    location: 'Recife, PE · Híbrido',
    summary:
      'Atuação no ecossistema de investimentos, com foco em renda fixa, Open Finance e fluxos financeiros críticos para aplicação, resgate e cancelamento.',
    bullets: [
      'Desenvolvimento e evolução de APIs backend para jornadas financeiras end-to-end, integrando sistemas internos, legados e serviços externos.',
      'Integração com habilitador de pagamentos via PIX para aplicações financeiras usando saldo de outras instituições.',
      'Sustentação de regras de negócio críticas com foco em consistência, segurança, rastreabilidade e conformidade regulatória.',
      'Modernização de sistemas legados e adaptação de serviços para cloud Azure, contribuindo para escalabilidade e evolução arquitetural.',
      'Implementação e melhoria de observabilidade, segurança com TLS/OAuth2 e integração entre soluções distribuídas.'
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'APIs REST',
      'MongoDB',
      'MySQL',
      'Redis',
      'Azure',
      'Dynatrace',
      'Docker',
      'JMeter',
      'Bamboo',
      'GitHub',
      'Bitbucket',
      'Jira',
      'Mainframe',
      'Angular',
      'Node.js',
      'NestJS',
      'Next.js'
    ]
  };

  readonly backendAreas: BackendArea[] = [
    {
      title: 'APIs financeiras críticas',
      description:
        'Construção de endpoints para aplicação, resgate e cancelamento, com regras de negócio consistentes e contratos claros.'
    },
    {
      title: 'Open Finance e pagamentos',
      description:
        'Integrações com sistemas externos e habilitador PIX, cuidando de rastreabilidade, confiabilidade e fluxos end-to-end.'
    },
    {
      title: 'Cloud e modernização',
      description:
        'Migração e adaptação de serviços para Azure, evolução de sistemas legados e melhoria de arquitetura distribuída.'
    },
    {
      title: 'Segurança e observabilidade',
      description:
        'Aplicação de práticas com TLS/OAuth2, monitoramento com Dynatrace, testes de carga com JMeter e foco em disponibilidade.'
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'Policy Billing Engine',
      label: 'Backend',
      description:
        'Serviço para emissão de apólices, cobrança recorrente, cancelamento por inadimplência, persistência e métricas operacionais em uma arquitetura hexagonal.',
      stack: ['Java 21', 'Spring Boot', 'REST', 'JPA', 'PostgreSQL', 'Quartz', 'Actuator', 'Prometheus', 'JUnit 5']
    },
    {
      title: 'Portfólio Angular',
      label: 'Frontend',
      description:
        'Recriação deste portfólio como aplicação Angular standalone, com dados estruturados, tema claro/escuro, menu responsivo e contato direto por e-mail.',
      stack: ['Angular', 'TypeScript', 'HTML semântico', 'CSS responsivo', 'Acessibilidade']
    },
    {
      title: 'Sistemas e APIs',
      label: 'Engenharia',
      description:
        'Experiência com análise, manutenção e evolução de sistemas distribuídos, contratos HTTP, regras de domínio, segurança e qualidade orientada a testes.',
      stack: ['Open Finance', 'TLS/OAuth2', 'Dynatrace', 'JMeter', 'Docker', 'Azure']
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Backend financeiro',
      items: ['Java', 'Spring Boot', 'Spring Security', 'APIs REST', 'Open Finance', 'PIX']
    },
    {
      title: 'Arquitetura e domínio',
      items: ['Sistemas distribuídos', 'Arquitetura Hexagonal', 'DDD', 'Integrações legadas', 'Regras críticas', 'Alta disponibilidade']
    },
    {
      title: 'Dados e infraestrutura',
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Azure']
    },
    {
      title: 'Qualidade e observabilidade',
      items: ['Dynatrace', 'JMeter', 'JUnit 5', 'Mockito', 'Actuator', 'Prometheus']
    },
    {
      title: 'Ferramentas e frontend',
      items: ['Git', 'GitHub', 'Bitbucket', 'Bamboo', 'Jira', 'Angular']
    }
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleTheme(): void {
    this.lightTheme.update((enabled) => !enabled);
  }
}
