import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
})
export class StudentDetailsPage implements OnInit {
  slidesOptions = {
    initialSlide: 0,
    slidesPerView: 2.3,
    autoplay: true
  };

  skillDetail;
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillDetail = this.skillsService.currentArticle;
    console.log(this.skillsService.currentArticle)
  }

  onGoToSkillSinglePage(skill) {

  }

  logout() {

  }

}
