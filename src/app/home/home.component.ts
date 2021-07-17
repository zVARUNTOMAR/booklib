import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { User } from '../models/user.model';
import { HomeService } from '../shared/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public homeservice: HomeService) { }

  responseForm!: FormGroup;
  isCollapsed = false;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.responseForm = new FormGroup({
      id : new FormControl(0),
      firstName :  new FormControl('',[Validators.required]),
      lastName : new FormControl('',[Validators.required,Validators.minLength(3)]),
      email : new FormControl('',[Validators.required]),
      city : new FormControl('Moaradabad',[Validators.required]),
      message : new FormControl('',[Validators.required]),
      mobileNumber : new FormControl('',[Validators.required]),
    })
  }

  submitResponse(){
    this.homeservice.submitResponse(this.responseForm.value).subscribe(res=>{
      console.log("Submitted Succcessfully");
    },error=>{
      console.log("Failed1");
    });
  }

}
