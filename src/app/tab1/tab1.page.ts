import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private AuthService: AuthenticationService, private router:Router, private skillsService: SkillsService) {}
  async logout(){
    await this.AuthService.logout();
    this.router.navigateByUrl('/', {replaceUrl: true});
  }
  slidesOptions = {
    slidesPerView: 2.4,
    spaceBetween: 0,
    centeredSlides: false
  };
  data : any;

  ngOnInit(){
    this.skillsService
    .getData('users?page=2')
    .subscribe(data=>{
      console.log(data);
      this.data = data;
    });
  }
  onGoToSkillSinglePage(skill){

    this.skillsService.currentArticle = skill;
    this.router.navigate(['/student-details'])
  }
}
