import { AuthModule } from './@app/auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/guards/auth.guard';


// {
//   path: 'auth',
//   loadChildren: () =>
//     import('@app/auth/auth.module').then((m) => m.AuthModule),
//   canActivate: [NotAuthenticatedGuard],
// },
const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./@app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./@app/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
