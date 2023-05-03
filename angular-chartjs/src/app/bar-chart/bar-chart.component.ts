import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'], 
	       datasets: [
          {
            label: "Pain",
            data: ['30','15', '70', '64', '42',
								 '57', '93'],
            backgroundColor: "#EEF5ED",
            hoverBackgroundColor: "#2BB673"
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
