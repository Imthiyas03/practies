import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Emp } from '../interfaces/emp';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  apires: any[]=[];

  getbyidres: any;

  fromidform!: FormGroup;
  constructor(private fb: FormBuilder,private userservice: UserService){}

  ngOnInit(): void{
    this.userservice.getall().subscribe(
      {
        next:res=>{this.apires=res;},
        error:error=>{console.error();}
      }
    );
    this.fromidform=this.fb.group({
      id: ['', Validators.required]
    });
  }

  getEmpById(): void {
    if (this.fromidform.valid) {
      const idControl = this.fromidform.get('id');
      if (idControl) {
        const id = +idControl.value;
        this.userservice.getbyid(id).subscribe(
          response => {
            this.getbyidres = response;
            console.log('Emp retrieved successfully!', this.getbyidres);
          },
          error => {
            console.error('Error retrieving emp!', error);
          }
        );
      }
    }
  }
  
}

