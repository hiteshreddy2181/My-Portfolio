import { Injectable } from '@angular/core';
import { LanguageInfo } from '../interface/language-info';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: any;

  constructor() { }



  getSkills(): LanguageInfo {
    this.skills = [
      {
        name: 'HTML',
        src: 'assets/img/skills/html.svg',
      },
      {
        name: 'CSS',
        src: 'assets/img/skills/css..svg',
      },
      {
        name: 'Javascript',
        src: 'assets/img/skills/javascript.svg',
      },
      {
        name: 'MongoDB',
        src: 'assets/img/skills/mongodb.svg',
      },
      {
        name: 'API',
        src: 'assets/img/skills/api.svg',
      },
      {
        name: 'Bootstrap',
        src: 'assets/img/skills/bootstrap.svg',
      },
      {
        name: 'React',
        src: 'assets/img/skills/react.png',
      },
      {
        name: 'Node Js',
        src: 'assets/img/skills/nodejs.png',
      },
      {
        name: 'Figma',
        src: 'assets/img/skills/figma.svg',
      },
      {
        name: 'Firebase',
        src: 'assets/img/skills/firebase.svg',
      },
      {
        name: 'Git',
        src: 'assets/img/skills/git.svg',
      },
      {
        name: 'Material UI',
        src: 'assets/img/skills/mui..svg',
      },
      {
        name: 'Docker',
        src: 'assets/img/skills/docker.png',
      },
      {
        name: 'Kubernetes',
        src: 'assets/img/skills/kubernetes.png',
      },
      {
        name: 'SQL Server',
        src: 'assets/img/skills/Sqlserver.png',
      },
      {
        name: 'Airflow',
        src: 'assets/img/skills/airflow.jpeg',
      },
      {
        name: 'Openshift',
        src: 'assets/img/skills/openshift.png',
      },
      {
        name: '.NET',
        src: 'assets/img/skills/.net.png',
      },
      {
        name: 'Kafka',
        src: 'assets/img/skills/kafka.png',
      },
      {
        name: 'Flask',
        src: 'assets/img/skills/pythonflask.png',
      },
      {
        name: 'Spark',
        src: 'assets/img/skills/spark.png',
      },
      {
        name: 'Bitbucket',
        src: 'assets/img/skills/bitbucket.jpeg',
      },
      {
        name: 'Jira',
        src: 'assets/img/skills/jira.jpeg',
      },
    ];
            
    // skills[0] => normal
    // skills[1] => extra


    return this.skills;

    
  }

}
