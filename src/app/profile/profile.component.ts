import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  formData : any;

  constructor(private datService: DataService){

  }

  ngOnInit(): void {
    this.formData= this.datService.getFormData();
    throw new Error('Method not implemented.');
  }

}
