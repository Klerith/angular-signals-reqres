import { Component, OnInit, computed, inject, signal } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';

import { User } from '../../interfaces/users';

@Component({
  templateUrl: './users-signal-page.component.html',
  styleUrls: ['./users-signal-page.component.css']
})
export class UsersSignalPageComponent implements OnInit {

  public usersService = inject( UsersService );

  public users = signal<User[]>([]);
  public currentPage = signal(1);

  public labelTotalUsers = computed( () => `Total de usuarios ${ this.users().length }`);

  // get users() {
  //   return users;
  // }

  // get currentPage() {
  //   return currentPage;
  // }

  // get labelTotalUsers() {
  //   return labelTotalUsers;
  // }


  ngOnInit(): void {
    this.loadPage( this.currentPage() );
  }


  loadPage( page: number ) {

    this.usersService.loadPage( page )
    .pipe(
      filter( users => users.length > 0 )
    )
    .subscribe( newUsers => {

      this.currentPage.set( page );
      // this.users.set( users );
      // this.users.set([ ...this.users(), ...users ]);
      this.users.update( currentUsers => [...currentUsers, ...newUsers ])

    })


  }

}
