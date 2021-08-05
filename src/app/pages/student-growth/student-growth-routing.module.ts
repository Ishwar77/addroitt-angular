import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentGrowthPage } from './student-growth.page';

const routes: Routes = [
  {
    path: '',
    component: StudentGrowthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentGrowthPageRoutingModule {}
