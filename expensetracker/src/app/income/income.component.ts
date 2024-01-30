

// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { IncomeService } from './service/income.service';
// import { ViewChild, ElementRef } from '@angular/core';


// @Component({
//   selector: 'app-income',
//   templateUrl: './income.component.html',
//   styleUrls: ['./income.component.css']
// })
// export class IncomeComponent implements OnInit {
//   incomeForm!: FormGroup;
//   res: any;
//   incomeCards:any;
//   @ViewChild('incomeCards') incomeCards: ElementRef;
//   constructor(private fb: FormBuilder, private IncomeService: IncomeService) {}

//   ngOnInit(): void {
//     this.incomeForm = this.fb.group({
//       title: ['', [Validators.required]],
//       amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
//       date: ['', [Validators.required]],
//       incomeType: ['', [Validators.required]],
//       reference: ['']
//     });
//   }

//   get title() {
//     return this.incomeForm.get('title');
//   }

//   get amount() {
//     return this.incomeForm.get('amount');
//   }

//   get date() {
//     return this.incomeForm.get('date');
//   }
// -------old------
  // submitIncomeForm() {
  //   if (this.incomeForm.valid) {
     
  //     const formData = this.incomeForm.value;
  //     this.IncomeService.addIncome(formData).subscribe(
  //       (response) => {
         
  //         this.res = response;
  //         console.log('Income added successfully', this.res);
  //       },
  //       (error) => {
       
  //         console.error('Error adding income', error);
  //       }
  //     );
  //   } else {
      
  //     this.incomeForm.markAllAsTouched();
  //   }
  // }






// submitIncomeForm() {
//   // Get form data
//   const title = this.incomeForm.value.title;
//   const amount = this.incomeForm.value.amount;
//   const date = this.incomeForm.value.date;
//   const reference = this.incomeForm.value.reference;

//   // Create card element
//   const cardEl = document.createElement('div');
//   cardEl.classList.add('card');

//   // Set card content
//   cardEl.innerHTML = `
//     <h3>${title}</h3>
//     <p>Amount: $${amount}</p>
//     <p>Date: ${date}</p>
//     <p>Reference: ${reference}</p>
//   `;

//   // Append card to container
//   this.incomeCards.nativeElement.appendChild(cardEl);

//   // Reset form
//   this.incomeForm.reset();
// }

// }










import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeService } from './service/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomeForm!: FormGroup;
  @ViewChild('incomeCardsContainer', { read: ElementRef }) incomeCardsContainer!: ElementRef;
  totalIncome: number = 0;
  constructor(private fb: FormBuilder, private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      title: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      date: ['', [Validators.required]],
      incomeType: ['', [Validators.required]],
      reference: ['']
    });
  }

  submitIncomeForm() {
    if (this.incomeForm.valid) {
      const formData = this.incomeForm.value;
      
      // Call the service to add income to the mock server
      this.incomeService.addIncome(formData).subscribe(
        (response) => {
          // Add card dynamically
          this.addIncomeCard(response);
          this.totalIncome += +formData.amount;
          // Reset form
          this.incomeForm.reset();
        },
        (error) => {
          console.error('Error adding income', error);
        }
      );
    } else {
      this.incomeForm.markAllAsTouched();
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
