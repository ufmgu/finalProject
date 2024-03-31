import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit
{

  message:any="";

  user:User=new User('','',0,'');
  
  constructor(private userservice:UserService,private router:Router)
  {

  }

  ngOnInit(): void 
  {
    this.message=sessionStorage.getItem("message");
  }

  showRegister()
  {
    this.router.navigate(['register'])
  }

  validate()
  {
      this.userservice.validate(this.user).subscribe(answer=>{

        if(answer)
        {
          this.router.navigate(['welcome']);

          sessionStorage.setItem("welcomemessage"," welcome " + this.user.username);
        }

        else
        {
          this.router.navigate(['login']);

          this.message="invalid credentials";

        }


      });

  }
}
