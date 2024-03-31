import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {


onFileSelcted(event: any) {
  const file : File = event.target.files[0];
  if(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=() => {
      this.imageUrl= reader.result;
    }
  }
throw new Error('Method not implemented.');
}

  registraftionForm: FormGroup;

  imageUrl : string | ArrayBuffer |null= null;

  user:User=new User('','',0,'');

  constructor(private userservice:UserService,private router:Router,private fb: FormBuilder,private dataService: DataService)
  {

    this.registraftionForm = this.fb.group({
      
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    if(this.registraftionForm.valid){
      console.log(this.registraftionForm.valid);
    }

    if (this.registraftionForm.valid) {
      this.dataService.setFormData(this.registraftionForm.value);
      console.log("Form Data Submitted:", this.registraftionForm.value);
      this.router.navigateByUrl('/profile')
    }
  }

  
    saveToDB()
    {
        this.userservice.saveToDB(this.user).subscribe();

        this.router.navigate(['login']);

        sessionStorage.setItem("message","Registration successful. please login now");

    }


  
}