import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users';
import { filter } from 'rxjs';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  public users: User[] = [];
  public currentPage: number = 1;


  constructor( private usersService: UsersService ) {}

  ngOnInit(): void {
    this.loadPage( this.currentPage );
  }

  loadPage( page: number ) {

    this.usersService.loadPage( page )
      .pipe(
        filter( users => users.length > 0 )
      )
      .subscribe( users => {
        console.log(users)
        this.currentPage = page;
        this.users = users;
      })
  }


}
