import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  // Adding Incomes
  addExpense (data: any){
    return this.http.post(`${this.baseUrl}/expense`,data)
  }

  // Fetching Incomes
  getExpense(){
    return  this.http.get(`${this.baseUrl}/expense`)
  }

  // Deleting Income
  removeExpense(id: number){
    return this.http.delete(`${this.baseUrl}/expense?id=${id}`);
  }
}
