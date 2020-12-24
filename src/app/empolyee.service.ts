import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmpolyeeService {

  private baseURL= "http://localhost:8080/api/v1/employee";
  
  constructor(private HttpClient : HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.HttpClient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee : Employee): Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}`,employee);
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.HttpClient.get<Employee>(`${this.baseURL}/${id}`);

  }
  updateEmployee(id : number, employee:Employee):Observable<Object>{
  return this.HttpClient.put(`${this.baseURL}/${id}`,employee );
  }

  deleteEmployee(id : number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/${id}` );
    }
}
