import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentGrowthPageRoutingModule } from './student-growth-routing.module';

import { StudentGrowthPage } from './student-growth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentGrowthPageRoutingModule
  ],
  declarations: [StudentGrowthPage]
})
export class StudentGrowthPageModule {}
