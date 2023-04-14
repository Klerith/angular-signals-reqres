import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersSignalPageComponent } from './pages/users-signal-page/users-signal-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: UsersPageComponent },
      { path: 'list-signals', component: UsersSignalPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
