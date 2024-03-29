import { Chart } from 'chart.js/auto';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    this.showChartData()
  }

  showChartData(){
    new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            tension: .2
          },
        ],
    
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
          
        },
        
      },
    });
  }

}
