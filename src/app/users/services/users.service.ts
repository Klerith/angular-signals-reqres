import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaginatedUsers, User } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'https://reqres.in/api/users'

  constructor( private http: HttpClient ) { }

  loadPage( page: number ): Observable<User[]> {
    return this.http.get<PaginatedUsers>( this.baseUrl, { params: { page: page } } )
      .pipe(
        map( response => response.data )
      );
  }

}
