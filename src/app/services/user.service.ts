import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Emp } from '../interfaces/emp';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // httpOptions={
  //   headers : new HttpHeaders({
  //     'Content-Type':'application.json'
  //   })
  // }
  constructor(private http:HttpClient) { }

  private apiurl="http://localhost:5161/api/Values";

  postEmp(emp: Emp): Observable<Emp> {
    return this.http.post<Emp>(this.apiurl, emp);
  }
  // postEmp(emp: Emp): Observable<Emp> {
  //   return this.http.post<Emp>(this.apiUrl, emp);

  getall() :Observable<any[]> {
    return this.http.get<any[]>(this.apiurl);
  }

  getbyid(id:number):Observable<any[]>{
    //let url = `${this.apiurl}/${id}`;
    let url="http://localhost:5161/api/Values/1"
    return this.http.get<any[]>(url);  
  }

  status(){
    const deliverystatus=new Observable(item=>{
      item.next('created');
      setTimeout(()=>{item.next('orderes');},2000);
      setTimeout(()=>{item.next('out of delivery');},4000);
      setTimeout(()=>{item.next('order delivered');},6000);

    });
    return deliverystatus;
  }

  subjectstatus = new Subject<number>();

  bhsubject=new BehaviorSubject<string>("Null");

  resubject =new ReplaySubject<number>(2);

  asubject = new AsyncSubject<string>();

}

// /** POST: add a new hero to the database */
// addHero(hero: Hero): Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//     .pipe(
//       catchError(this.handleError('addHero', hero))
//     );
// }