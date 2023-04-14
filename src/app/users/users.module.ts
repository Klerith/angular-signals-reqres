import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersSignalPageComponent } from './pages/users-signal-page/users-signal-page.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    UsersSignalPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
