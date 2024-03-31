import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent 
{
  message:string="";
  user:User=new User('','',0,'');

  users:User[]=[];

  ngOnInit(): void
  {
    this.getAllUsers();
  }

  // we will bind User class's object with HTML input elements


  constructor(private userservice:UserService)
  {

  }

    saveToDB()
    {
        this.userservice.saveToDB(this.user).subscribe();

    }

    getUser()
    {
      this.userservice.getUser(this.user.username).subscribe(userobject=>this.user=userobject);

      //[ () User class object subscribe() ] Observable object
      //[ () User class object get() ] ArrayList object

      // (arguments) => function defination

    }

    deleteUser(){
      this.userservice.deleteUser(this.user.username).subscribe(message=>
        {
        if(message)
          this.message="record deleted";
        else
          this.message="Something went wrong at server side"

      });
    }

    getAllUsers(){
      this.userservice.getAllUser().subscribe(arrayFromResponce=>this.users=arrayFromResponce);
    }
}