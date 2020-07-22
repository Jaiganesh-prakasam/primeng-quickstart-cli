import { Injectable } from '@angular/core';
import { EmpDetails } from '../sharedInterface/emp-details';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeFetchDetailsService {
  private employeesUrl = 'api/employees';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(  private http: HttpClient) { }
  /** GET Employees from the server */
  getEmployees(): Observable<EmpDetails[]> {
    return this.http.get<EmpDetails[]>(this.employeesUrl)
      .pipe(
        catchError(this.handleError<EmpDetails[]>('getEmployees', []))
      );
  }
  /** GET Employee by id. Will 404 if id not found */
  getEmployee(id: number): Observable<EmpDetails> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<EmpDetails>(url).pipe(
      catchError(this.handleError<EmpDetails>(`getEmployee id=${id}`))
    );
  }

  /** POST: add a new employee to the server */
  addEmployee(employee: EmpDetails): Observable<EmpDetails> {
    return this.http.post<EmpDetails>(this.employeesUrl, employee, this.httpOptions).pipe(
      tap((newEmployee: EmpDetails) => console.log(newEmployee)),
      catchError(this.handleError<EmpDetails>('addEmployee'))
    );
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(employeeID: number): Observable<EmpDetails> {
    const url = `${this.employeesUrl}/${employeeID}`;
    return this.http.delete<EmpDetails>(url, this.httpOptions).pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<EmpDetails>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
