import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'https://nimaptest.herokuapp.com';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}
  // Add
  add(path: string, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/${path}`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  getAll(path: string, limit: number, page: number, query: any) {
    return this.httpClient.get(
      `${this.REST_API}/${path}/filter/all?limit=${limit}&page=${page}&${query}`
    );
  }
  // Get single object
  GetBook(id: any, path: string): Observable<any> {
    let API_URL = `${this.REST_API}/${path}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Update
  update(id: any, data: any, path: string): Observable<any> {
    let API_URL = `${this.REST_API}/${path}/${id}`;
    return this.httpClient
      .patch(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  // Delete
  delete(id: any, path: string): Observable<any> {
    let API_URL = `${this.REST_API}/${path}/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
