import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'team',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'posts/:id',component:PostsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'comments/:id',component:CommentsComponent},
  {
    path:'products',
    component:ProductsComponent,
    children:[
    {path: 'withOffers',component:LoginComponent},
    {path: 'withoutOffers',component:RegisterComponent},
  ]},
  {path:'*',redirectTo: 'home'},           //404 Handling
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
