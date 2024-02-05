import { Component } from '@angular/core';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb: number;
  ub: number;

  errMsg!: string | null;
  results!: number[];
  isJobRunning!: boolean;
  isEven!: boolean;
  isSquared!: boolean;

  constructor(private nss: NumberSeriesService) {
    this.lb = 0;
    this.ub = 0;
  }

  formSubmitted() {
    this.results = [];
    this.errMsg = null;
    this.isJobRunning = true;

    let ob = null;
    
    if (this.isSquared && this.isEven)
      ob = this.nss.generateSquaredEvenSeries(this.lb, this.ub);
    else if (this.isSquared)
      ob = this.nss.generateSquaredSeries(this.lb, this.ub);
    else if (this.isEven)
      ob = this.nss.generateEvenSeries(this.lb, this.ub);
    else
      ob = this.nss.generateSeries(this.lb, this.ub);

    ob.subscribe({
      next: val => this.results.push(val),
      error: err => { this.errMsg = err; this.isJobRunning = false; },
      complete: () => this.isJobRunning = false
    });
  }
}
