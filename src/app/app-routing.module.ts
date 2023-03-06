import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const canSee = () => {
  return !!localStorage.getItem('credentials');
}

const routes: Routes = [
  {
    path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [canSee],
  },
  {
    path: 'users/:id', loadChildren: () => import('./users/profile/profile.module').then(m => m.ProfileModule), canActivate: [canSee]
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'edit', loadChildren: () => import('./users/edit/edit.module').then(m => m.EditModule), canActivate: [canSee] },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
