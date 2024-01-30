
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {
  totalIncome = 0;
  totalExpense = 0;

  updateTotalIncome(income: number) {
    this.totalIncome += income;
  }

  updateTotalExpense(expense: number) {
    this.totalExpense += expense;
  }

}




