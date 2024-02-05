import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb: number, ub: number): Observable<number> {
    return new Observable(observer => {
      if (lb > ub) {
        observer.error(`${lb} is greate than ${ub} hence can not initiate a series.`);
        return;
      }

      let n = lb;
      let handler = setInterval(() => {
        observer.next(n);
        n++;
        if (n > ub) {
          clearInterval(handler);
          observer.complete();
        }
      }, 500);
    });
  }

  generateEvenSeries(lb: number, ub: number): Observable<number> {
    return this.generateSeries(lb, ub).pipe(filter(x => x % 2 === 0));
  }

  generateSquaredSeries(lb: number, ub: number): Observable<number> {
    return this.generateSeries(lb, ub).pipe(map(x => x * x));
  }

  generateSquaredEvenSeries(lb: number, ub: number): Observable<number> {
    return this.generateSeries(lb, ub).pipe(filter(x => x % 2 === 0), map(x => x * x));
  }
}
