import { Component, OnInit } from '@angular/core';
import { LearnerpartnerService } from './../../../../shared/API-Service/services/learnerpartner.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Image } from './../../../../../images/images';
@Component({
  selector: 'app-view-listpartner',
  templateUrl: './view-listpartner.component.html',
  styleUrls: ['./view-listpartner.component.css']
})
export class ViewListpartnerComponent implements OnInit {

  learnerpartner:any [] = [];
  img:string = Image;
  constructor(private _LearnerpartnerService:LearnerpartnerService
             ,private _Router:Router) { }

  ngOnInit(): void {
    this.GetLearnerPartner();
  }

  GetLearnerPartner(){
    this._LearnerpartnerService.Get().subscribe((res) => {
      this.learnerpartner = res.data;
    })
  }

  Update(data) {
    this._Router.navigate([`/content/admin/InsertListPartner`]);
    this._LearnerpartnerService.Data.next(data);
  }
  
  delete(id : number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._LearnerpartnerService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.GetLearnerPartner();
        },(err) => {
          Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text:err.error.message    
          })
        },() => {
          console.log("completed");
        })
      }
    })
    
  }
}
