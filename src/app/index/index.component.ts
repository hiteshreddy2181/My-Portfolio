import { Component, OnInit } from '@angular/core';
import { PersonalinfoService } from '../services/personalinfo.service';
import { PersonalInfo } from '../interface/personal-info';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../services/skills.service';
import { EducationService } from '../services/education.service';
import { ContactsService } from '../services/contacts.service';
import { AwardsService } from '../services/awards.service';
import { WorksService } from '../services/works.service';
import { ServiceOfferedService } from '../services/service-offered.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  skills: string[] = ['Software developer', 'Full Stack Developer', 'Data Engineer', 'Freelancer'];
  currentSkillIndex: number = 0;
  currentText: string = '';
  isDeleting: boolean = false;
  typeSpeed: number = 200;
  eraseSpeed: number = 200;
  delayBetweenSkills: number = 2000;

  pinfo: PersonalInfo | undefined; // observable for personal information

  languages: any;
  experience: any;
  contact: any;
  award: any;
  work: any;
  categories: any;
  services: any;

  currentDate: Date = new Date();

  year = this.currentDate.getFullYear();

  constructor (private pinfoService: PersonalinfoService, private langs: SkillsService, private exp: EducationService, private contacts: ContactsService, private awards: AwardsService, private works: WorksService, private sv: ServiceOfferedService){}

  ngOnInit(): void {
    this.pinfo = this.pinfoService.getInfo();
    this.languages = this.langs.getSkills();
    this.experience = this.exp.getEducation();
    this.contact = this.contacts.getContacts();
    this.award = this.awards.getAwards();
    this.award = this.award.slice(0,3);
    this.work = this.works.getWorks();
    this.work = this.work.slice(0,5);
    this.categories = this.works.getCategory();
    this.services = this.sv.getServices();
    this.type();
  }

  type() {
    const currentSkill = this.skills[this.currentSkillIndex];
    if (this.isDeleting) {
      this.currentText = currentSkill.substring(0, this.currentText.length - 1);
      if (this.currentText === '') {
        this.isDeleting = false;
        this.currentSkillIndex = (this.currentSkillIndex + 1) % this.skills.length;
      }
    } 
    else {
      this.currentText = currentSkill.substring(0, this.currentText.length + 1);
      if (this.currentText === currentSkill) {
        // setTimeout(() => this.isDeleting = true, this.delayBetweenSkills);
        this.isDeleting = true
      }
    }

    const delay = this.isDeleting ? this.eraseSpeed : this.typeSpeed;
    setTimeout(() => this.type(), delay);
  }
  calculateYears(born: any){
    return this.year - born;
  }

}
