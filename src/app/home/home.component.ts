import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
redirectToRegisterPage():void {

  this.router.navigate(['/register']);
throw new Error('Method not implemented.');
}

  constructor(private router: Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
