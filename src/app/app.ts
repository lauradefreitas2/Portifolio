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
    { label: 'Projetos', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contato', href: '#contact' }
  ];

  readonly highlights: Experience[] = [
    { value: '24', label: 'anos' },
    { value: 'Recife', label: 'PE' },
    { value: 'Backend', label: 'Java e Spring' },
    { value: 'Angular', label: 'frontend moderno' }
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
        'Experiência com análise, manutenção e evolução de sistemas, organização de camadas, contratos HTTP, regras de domínio e qualidade orientada a testes.',
      stack: ['DDD', 'Ports & Adapters', 'OpenAPI', 'Mockito', 'Docker Compose', 'Azure']
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Backend',
      items: ['Java 21', 'Spring Boot', 'Spring Web', 'Spring Data JPA', 'REST APIs', 'Jakarta Validation']
    },
    {
      title: 'Arquitetura e domínio',
      items: ['Arquitetura Hexagonal', 'DDD', 'Ports & Adapters', 'Use Cases', 'Mappers', 'Tratamento global de erros']
    },
    {
      title: 'Dados e infraestrutura',
      items: ['PostgreSQL', 'H2', 'Docker Compose', 'Quartz Scheduler', 'Azure', 'Spring Security']
    },
    {
      title: 'Qualidade e observabilidade',
      items: ['JUnit 5', 'Mockito', 'Testes de controller', 'Testes de persistência', 'Actuator', 'Micrometer Prometheus']
    },
    {
      title: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML semântico', 'CSS moderno', 'Responsividade', 'Acessibilidade']
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
