// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment.development';
// import { Income } from '../model/income';

// @Injectable({
//   providedIn: 'root'
// })
// export class IncomeService {

//   private baseUrl = environment.apiEndpoint;

//   constructor(private http: HttpClient) { }

//   addIncome(data: any){
//     return this.http.post(`${this.baseUrl}/income`,data)
//   }

//   getIncome(){
//     return  this.http.get(`${this.baseUrl}/income`)
//   }


//   removeIncome(id: number){
//     return this.http.delete(`${this.baseUrl}/income?id=${id}`);
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private baseUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  // Adding Incomes
  addIncome(data: any) {
    return this.http.post(`${this.baseUrl}/income`, data);
  }

  // Fetching Incomes
  getIncome() {
    return this.http.get(`${this.baseUrl}/income`);
  }

  // Deleting Income
  removeIncome(id: number) {
    return this.http.delete(`${this.baseUrl}/income?id=${id}`);
  }
}
