import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { BookmarksComponent } from "./components/bookmarks/bookmarks.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "projects", loadChildren: "./project/project.module#ProjectModule" },
  {
    path: "bookmarks",
    component: BookmarksComponent,
    data: { animation: "TranslateLeft" }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: { animation: "TranslateLeft" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { animation: "TranslateLeft" }
  },
  { path: "**", redirectTo: "projects" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  private message;
  constructor(private router: Router) {}
  redirectToLogin(msg) {
    this.router.navigate(["/login"]);
    this.message = msg;
  }
  redirectToProjects(){
    this.router.navigate(["/projects"]);
  }
  getRedirectMessage(){
    return this.message;
  }
}
