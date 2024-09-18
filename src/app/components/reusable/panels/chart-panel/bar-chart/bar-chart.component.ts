import {Component, Input, ViewChild, Output, EventEmitter, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType} from "chart.js";
import {BaseChartDirective, NgChartsModule} from "ng2-charts";

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule, MatIconModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() headerText: string = "List of Reports"; //Text that goes in the header
  @Input() colorTheme: string = "blue"; //red, lt-red, blue, green, purple, dark
  @Input() cardID: string = ""; // Must be unique
  @Input() horizontalBar: boolean = false;

  @Input() buttons: boolean = false; // does this component use buttons
  @Input() buttonList: any[] = []; // pass json data

  @Input() inputChartData: ChartDataset[] = [];
  @Input() inputChartLabels: string[] = [];
  @Input() includeLegend: boolean = false;
  @Input() includeChartTitle: boolean = false;
  @Input() chartTitle: string = '';
  @Input() headerMessage: string = 'No node selected. Select a node to continue.'
  @Input() matIcon: string = "bar_chart_4_bars"

  //button actions
  @Output() btn1_Action: EventEmitter<any> = new EventEmitter<any>();
  @Output() btn2_Action: EventEmitter<any> = new EventEmitter<any>();

  headerClass: string = "blue-header";
  reportMsgID: string = "";
  reportDataID: string = "";

  hideContent: boolean = true;

  ngOnChanges(changes: SimpleChanges){

    if (changes.hasOwnProperty('inputChartData') ||
      changes.hasOwnProperty('inputChartLabels')  ) {

     this.updateChart();

    }


  }
  emitBtn1Action(params: any) {
    //creates an instance of this if more than one button is used
    this.btn1_Action.emit(params);

  }

  emitBtn2Action(params: any) {
    //Used if ony one button exists
    this.btn2_Action.emit(params);

  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        min: 0
      },
      y: {
        min: 0
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'No node selected. Select a node to continue.',
        font: {
          size: 16,
          weight: '500',
          family: "'Roboto',sans-serif"
        },
        padding: {
          top: 1,
          bottom: 30
        }
      },
      tooltip: {
        titleFont: {
          size: 16,
          weight: '400',
          family: "'Roboto',sans-serif"
        },
        bodyFont: {
          size: 14,
          family: "'Roboto',sans-serif"
        }
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {data: [], label: 'Series A', backgroundColor: []}
    ]
  };

  // events
  public chartClicked({event, active}: { event?: ChartEvent, active?: {}[] }): void {
  }

  public chartHovered({event, active}: { event?: ChartEvent, active?: {}[] }): void {
  }

  public updateChart(): void {
    if (this.inputChartData[0].data.length > 0) {
      this.hideContent = false;
    } else {
      this.hideContent = true;
    }
    //remove default data
    this.barChartData.labels?.pop();
    this.barChartData.datasets.forEach((dataset) => {
      dataset.data.pop();
    });

    //populate new data from imports
    this.barChartData.labels = this.inputChartLabels;
    for (let i = 0; i < this.inputChartData.length; i++) {
      // @ts-ignore
      this.barChartData.datasets[i].data = this.inputChartData[i].data;
      // @ts-ignore
      this.barChartData.datasets[i].label = this.inputChartData[i].label;
      // @ts-ignore
      this.barChartData.datasets[i].backgroundColor = this.inputChartData[i].backgroundColor;

    }

    // @ts-ignore
    if (this.horizontalBar) this.barChartOptions.indexAxis = 'y';
    // @ts-ignore
    this.barChartOptions.plugins.title.display = this.includeChartTitle;
    // @ts-ignore
    this.barChartOptions.plugins.title.text = this.chartTitle;
    // @ts-ignore
    this.barChartOptions.plugins.legend.display = this.includeLegend;


    this.chart?.ngOnChanges({});
    console.log("this.inputChartData[0].data = " + this.inputChartData[0].data + "; barChartData.datasets[0].data = " + this.barChartData.datasets[0].data + "; this.inputChartLabels = " + this.inputChartLabels);

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
