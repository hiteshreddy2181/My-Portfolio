import { Injectable } from '@angular/core';
import { EducationBackground } from '../interface/education-background';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  data: any;

  constructor() { }

  getEducation(): EducationBackground{
    this.data = [
                  [
                    {'year':'2019 - 2023','position':'B-Tech (Engineering)','place':'Sree Vidyanikathen Engineering College, Tirupati, AP'},
                    {'year':'2017 - 2019','position':'Intermediate (MPC)','place':'Sri Chaitanya Jr college, Vijayawada, AP'},

                  ],
                  [
                    {'year':'July 2023 - Present','position':'Software Engineer','place':'Synxa It Pvt Ltd, Hyderabad, TS','description':'Worked on frontend application using angular/react and microservices using py flask - development. Worked on dockerizing the angular applications and microservices and deploying them in openshift -deployment. Worked on modernizing the legay SSIS packages using Apache Airflow and pyspark using different airflow and Kubernetes operators. Worked on MERN Stack applications created some collections in MongoDB. worked on frontend using react and worked on creating API’s and consuming them in the UI'},
                    {'year':'Jan 2023 - June 2023','position':'Junior Software Engineer','place':'Epam Systems, Hyderabad, TS','description':' Worked as a .Net full stack developer. Worked on C#, WinForms, Asp.net webforms, Asp.net MVC, Asp.net Core, Entity Frameworks, Unit Testing, Web Services, Web API, Rest, Soap, Sql server, Git, Jira, Agile Methodologies react js, angular js,'}
                  ] 
    ];
    return this.data;

  }


}


