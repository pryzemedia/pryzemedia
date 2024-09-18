import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
//import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BaseChartDirective, NgChartsModule} from "ng2-charts";
//import {faChartPie, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {MatIconModule} from "@angular/material/icon";



@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule, MatIconModule],
  templateUrl: './pie-chart-panel.component.html',
  styleUrls: ['./pie-chart-panel.component.css']
})
export class PieChartPanelComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  //faChevronDown = faChevronDown;
  //faChartPie = faChartPie;

  @Input() headerText: string = "List of Reports"; //Text that goes in the header
  @Input() colorTheme:string = "blue"; //red, lt-red, blue, green, purple, dark
  @Input() cardID: string = ""; // Must be unique
  @Input() horizontalBar: boolean = false;

  @Input() buttons: boolean = false; // does this component use buttons
  @Input() buttonList: any[] = []; // pass json data

  @Input() inputChartData: ChartDataset[] = [];
  @Input() inputChartLabels: string[] = [];
  @Input() includeLegend: boolean = false;
  @Input() includeChartTitle: boolean = false;
  @Input() chartTitle: string = '';
  @Input() matIcon: string = "pie_chart"

  //button actions
  @Output() btn1_Action: EventEmitter<any> = new EventEmitter<any>();
  @Output() btn2_Action: EventEmitter<any> = new EventEmitter<any>();

  headerClass: string = "blue-header";
  reportMsgID: string = "";
  reportDataID: string = "";

  emitBtn1Action(params: any){
    //creates an instance of this if more than one button is used
    this.btn1_Action.emit(params);

  }

  /*emitBtn2Action(params: any){
    //Used if ony one button exists
    this.btn2_Action.emit(params);

  }*/

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      title:{
        display:false,
        text: ''
      },
      datalabels: {
        display: false,
      },
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  /*
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
   */

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [
    DataLabelsPlugin
  ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public updateChart(): void{
    //remove default data
    this.pieChartData.labels?.pop();
    this.pieChartData.datasets.forEach((dataset) => {
      dataset.data.pop();
    });

    this.pieChartData.labels = this.inputChartLabels;
    for (let i = 0; i < this.inputChartData.length; i ++) {
      // @ts-ignore
      this.pieChartData.datasets[i].data = this.inputChartData[i].data;
      // @ts-ignore
      this.pieChartData.datasets[i].label = this.inputChartData[i].label;
      // @ts-ignore
      this.pieChartData.datasets[i].backgroundColor = this.inputChartData[i].backgroundColor;
    }

    // @ts-ignore
    this.pieChartOptions.plugins.title.display = this.includeChartTitle;
    // @ts-ignore
    this.pieChartOptions.plugins.title.text = this.chartTitle;
    // @ts-ignore
    this.pieChartOptions.plugins.legend.display = this.includeLegend;

  }

  ngOnInit() {
    switch (this.colorTheme) {
      case "purple":
        this.headerClass = "purple-header";
        break;
      case "green" :
        this.headerClass = "green-header";
        break;
      case "dark" :
        this.headerClass = "dark-header";
        break;
      case "red" :
        this.headerClass = "red-header";
        break;
      case "lt-red" :
        this.headerClass = "lt-red-header";
        break;
      default:
        this.headerClass = "blue-header";
        break;
    }

    this.reportMsgID = this.cardID + 'Msg';
    this.reportDataID = this.cardID + 'Data';

    this.updateChart();
  }

}
