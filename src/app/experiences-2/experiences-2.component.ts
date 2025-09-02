import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface para tipagem das experiências
interface Experience {
  empresa: string;
  periodo: string;
  jobTitle: string;
  jobDescription: string;
  tecnologias: string[];
}

@Component({
  selector: 'app-experiences-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences-2.component.html',
  styleUrl: './experiences-2.component.scss'
})
export class Experiences2Component implements OnInit {
  experiences: Experience[] = [];

  ngOnInit() {
    this.loadExperiences();
  }

  // Simulação de chamada backend
  private loadExperiences(): void {
    // Simula uma chamada HTTP que retorna os dados
    this.experiences = this.getExperiencesData();
  }

  private getExperiencesData(): Experience[] {
    return [
      {
        empresa: 'UOL EdTech',
        periodo: '2024 - Atualmente',
        jobTitle: 'Desenvolvedor Front-End Pleno',
        jobDescription: 'Desenvolvo projetos web para cursos corporativos, com foco em plataformas de EAD que utilizam o padrão SCORM. Tenho experiência em acessibilidade digital e recentemente concluí um curso intensivo de React, aplicando esse conhecimento na atualização de um produto existente para uma versão mais moderna e flexível.',
        tecnologias: ['HTML/CSS', 'SCSS', 'JavaScript', 'jQuery', 'SCORM', 'React']
      },
      {
        empresa: 'Sysvision',
        periodo: '2023',
        jobTitle: 'Desenvolvedor Front-End & UX/UI Designer',
        jobDescription: 'Desenvolvimento do Portal do Tribunal de Contas da Angola (TCA) com foco em Front-End utilizando Liferay 7. Responsável pela criação de interfaces modernas e funcionais para sistemas governamentais de grande escala.',
        tecnologias: ['HTML/CSS', 'jQuery', 'Liferay', 'Azure DevOps']
      },
      {
        empresa: 'Freelance - Sussu Seguros',
        periodo: '2023',
        jobTitle: 'Desenvolvedor Front-End & UX/UI Designer',
        jobDescription: 'Desenvolvimento completo de aplicativo mobile para seguros e serviços. Responsável pelo design da experiência do usuário e implementação técnica.',
        tecnologias: ['Angular', 'UX/UI Design', 'Mobile']
      }, 
      {
        empresa: 'UOL EdTech',
        periodo: '2020 - 2022',
        jobTitle: 'Desenvolvedor Front-End Pleno',
        jobDescription: 'Desenvolvimento de projetos WEB para clientes corporativos, criando plataformas de EAD que utilizam o padrão SCORM. Foco em interfaces educacionais interativas e acessíveis.',
        tecnologias: ['HTML/CSS', 'SCSS', 'JavaScript', 'jQuery', 'SCORM']
      },
      {
        empresa: 'Vector ITC',
        periodo: '2018 - 2020',
        jobTitle: 'Desenvolvedor Front-End',
        jobDescription: 'Desenvolvimento no Internet Banking utilizando Liferay e metodologia Scrum. Criação de interfaces seguras e intuitivas para sistemas bancários.',
        tecnologias: ['Liferay', 'Java', 'jQuery', 'Scrum']
      },
      {
        empresa: 'Everis',
        periodo: '2017 - 2018',
        jobTitle: 'Analista de Sustentação',
        jobDescription: 'Análise e resolução de incidentes em sistemas críticos. Primeiro contato profissional com desenvolvimento web e metodologias ágeis.',
        tecnologias: ['Liferay', 'Java', 'jQuery', 'Suporte Técnico']
      }
    ];
  }
}
