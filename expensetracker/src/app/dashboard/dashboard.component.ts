import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../shared/finance.service';
import { IncomeService } from '../income/service/income.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private incomeService: IncomeService, private financeService:FinanceService) {}

  ngOnInit(): void {
 
  }

  get balance(): number {
    return this.financeService.getBalance();
  }
  
  get financeServiceData(): FinanceService {
    return this.financeService;
  }

}
