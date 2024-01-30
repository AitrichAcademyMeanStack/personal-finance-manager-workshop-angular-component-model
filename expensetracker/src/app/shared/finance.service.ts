import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  
totalIncome = 0;
totalExpense = 0;
  constructor() { }
updateTotalIncome(income: number) {
  this.totalIncome += income;
}

updateTotalExpense(expense: number) {
  this.totalExpense += expense;
}

getBalance(): number {
  return this.totalIncome - this.totalExpense;
}
}


