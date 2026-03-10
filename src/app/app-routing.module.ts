import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigatingcomponents/home/home.component';
import { AboutComponent } from './navigatingcomponents/about/about.component';
import { ProjectsComponent } from './navigatingcomponents/projects/projects.component';
import { AchievementsComponent } from './navigatingcomponents/achievements/achievements.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'achievements',
    component:AchievementsComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
