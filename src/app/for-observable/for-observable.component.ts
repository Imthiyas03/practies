import { Component } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-for-observable',
  templateUrl: './for-observable.component.html',
  styleUrls: ['./for-observable.component.css']
})
export class ForObservableComponent {
  status!: any ;
  array1=[1,2,3];
   constructor(private userservice : UserService){
    //!observable
    // this.userservice.status().subscribe(item=>this.status=item);

    //!for subject
    // this.userservice.subjectstatus.subscribe(item =>console.log(item));
    // this.userservice.subjectstatus.next(25);
    // this.userservice.subjectstatus.next(100);

    //!for behaviour subject
    // this.userservice.bhsubject.subscribe(item=>console.log(item));
    // setTimeout(()=>{this.userservice.bhsubject.next('imthiyas');},2000);
    // setTimeout(()=>{this.userservice.bhsubject.next('karthiga');},4000);

    //!for replay subject
    // this.userservice.resubject.subscribe(item=>console.log(item));
    // this.userservice.resubject.next(10);
    // this.userservice.resubject.next(20);
    // this.userservice.resubject.next(30);
    // this.userservice.resubject.next(40);
    // this.userservice.resubject.next(50);

    //!for async subject
    // this.userservice.asubject.subscribe(item=>console.log(item));
    // this.userservice.asubject.next('imthi');
    // this.userservice.asubject.next('karthiga');
    // this.userservice.asubject.next('kishore');
    // this.userservice.asubject.next('roshan');
    // this.userservice.asubject.complete();

    //!for rxjs operators   
    // !1.pipe
    // const result=of(1,2,3);
    // result.pipe(map(i=>i*10)).subscribe(item=>console.log(item));

    const result=from(this.array1);
    result.pipe(map(i=>i*10)).subscribe(item=>console.log(item));
    console.log(result);

   };
}

