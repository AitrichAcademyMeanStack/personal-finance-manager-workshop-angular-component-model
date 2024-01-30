import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from './service/expense.service';
import { Expense } from './model/expense';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  expenseForm!: FormGroup; 
  res: any;
  totalExpense: number = 0;
  @ViewChild('incomeCardsContainer', { read: ElementRef }) incomeCardsContainer!: ElementRef;
  constructor(private fb: FormBuilder, private expenseService: ExpenseService) {}
  
  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      title: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      date: ['', [Validators.required]],
      type: ['', [Validators.required]],
      reference: ['']
    });
  }

  get title() {
    return this.expenseForm.get('title');
  }

  get amount() {
    return this.expenseForm.get('amount');
  }

  

  submitExpenseform() {
    if (this.expenseForm.valid) {
      const formData = this.expenseForm.value;
      
      // Call the service to add income to the mock server
      this.expenseService.addExpense(formData).subscribe(
        (response) => {
          // Add card dynamically
          this.addIncomeCard(response);
          this.totalExpense += +formData.amount;
          // Reset form
          this.expenseForm.reset();
        },
        (error) => {
          console.error('Error adding income', error);
        }
      );
    } else {
      this.expenseForm.markAllAsTouched();
    }
  }

  private addIncomeCard(income: any) {
    const { title, amount, date, reference } = income;

    const cardEl = document.createElement('div');
    cardEl.classList.add('card');

    cardEl.innerHTML = `
      <h3>${title}</h3>
      <p>Amount: $${amount}</p>
      <p>Date: ${date}</p>
      <p>Reference: ${reference}</p>
    `;

    // Append card to container
    this.incomeCardsContainer.nativeElement.appendChild(cardEl);
  }
}
