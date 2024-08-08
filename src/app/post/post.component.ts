import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Emp } from '../interfaces/emp';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  empForm!: FormGroup;

  constructor(private fb: FormBuilder, private empService: UserService) {
    // this.empService.subjectstatus.subscribe(item =>console.log("post"+item));
    // this.empService.subjectstatus.next(1000);

    //this.empService.bhsubject.next('kishor from post');

    // this.empService.resubject.subscribe(item=>console.log("post "+item));

    //this.empService.asubject.subscribe(item=>console.log(item+" from "));

    // const result=of(1,2,3,4);
    // result.pipe(map(i=>i*10)).subscribe(item=>console.log(item));
  }

  ngOnInit(): void {
    this.empForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  
  }

  onSubmit() {
    if (this.empForm.valid) {
      const emp: Emp = this.empForm.value;
      this.empService.postEmp(emp).subscribe(
        response => {
          console.log('Emp saved successfully!', response);
          this.empForm.reset();
        },
        error => {
          console.error('Error saving emp!', error);
        }
      );
    }
  }
}
