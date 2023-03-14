import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {BackgroundComponent} from "./pages/background/background.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {NavbarComponent} from "./pages/navbar/navbar.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'navbar', component: NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'work', component: ProjectsComponent},
  {path: 'bg', component: BackgroundComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'bg', component: BackgroundComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
