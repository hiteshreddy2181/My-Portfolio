import { Injectable } from '@angular/core';
import { PersonalInfo } from '../interface/personal-info';
@Injectable({
  providedIn: 'root'
})
export class PersonalinfoService {

  constructor() { }

  // Don't forget the observable
  getInfo(): PersonalInfo{
    return {
      'name':'PEDDIREDDY HITESH REDDY',
      'who': 'Software Engineer',
      'photo': '/assets/img/me.jpg',
      'description': 'As a Software Engineer, I specialize in various technologies, including the MERN Stack, MEAN Stack, Airflow, Docker, Openshift, Kubernetes, .NET and Kafka. My contributions span diverse projects, such as building data pipelines for e-commerce companies, deploying microservices architectures for banking applications, and optimizing cloud-based platforms in healthcare. Additionally, I’m a passionate Technical Content Writer, creating engaging articles and tutorials on topics like the MERN stack, .NET framework, Python, and Java. My work has been published on platforms such as Medium, Dev.to, and Hacker Noon, reaching thousands of readers and receiving positive feedback. I also received recognition for my research on mesh messaging services using Bluetooth, winning the best paper award at the 10th International Conference on Contemporary Engineering and Technology in 2022. I hold a Bachelor of Technology in Computer Science and Engineering from Sree Vidyanikethan Engineering College (Class of 2023), where I honed my skills in various programming languages, frameworks, and tools. My certifications from HackerRank include 5-star ratings in Java, Python, and Problem Solving. I’m eager to leverage my expertise to help teams achieve company goals and solve complex challenges. Collaborating with customers and teammates to develop creative technical solutions is where I thrive!.',
      'from': 'Andhra Pradesh, India',
      'live': 'Telangana, India',
      'born': 2002,
      'gender': 'Male',
      'phone': '+91 9618737291',
      'email': 'hiteshreddy2181@gmail.com',
      'slogan': 'Happy to Learn.'
    };
  }
}
