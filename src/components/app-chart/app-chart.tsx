import { Component, h } from '@stencil/core';
import ApexCharts, { ApexOptions } from 'apexcharts'

@Component({
  tag: 'app-chart',
  styleUrl: 'app-chart.css',
  scoped: true,
})
export class AppChart {
  div: HTMLDivElement;
  chart: ApexCharts;

  componentDidRender() {
    this.chartRender();
  }

  chartRender() {
    var options: ApexOptions = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };

    this.chart = new ApexCharts(this.div, options);
    this.chart.render();
  }

  disconnectedCallback() {
    this.chart.destroy();
  }

  render() {
    return (
      <div ref={el => this.div = el}></div>
    );
  }

}
