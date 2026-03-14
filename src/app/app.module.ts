import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navigatingcomponents/home/home.component';
import { ProjectsComponent } from './navigatingcomponents/projects/projects.component';
import { AboutComponent } from './navigatingcomponents/about/about.component';
import { AchievementsComponent } from './navigatingcomponents/achievements/achievements.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { ContactComponent } from './navigatingcomponents/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    AchievementsComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
