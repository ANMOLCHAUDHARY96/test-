import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { pipe } from '../../node_modules/@angular/core/src/render3/pipe';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  hero={
    name:'uytuytg',id:2
  }

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(map(data=>data));
  }
  setData():Observable<any>{
    return this.http.post<any>("https://my-test-45564.firebaseio.com/ak.json",this.hero);
  }
}
