import { Component, OnInit } from '@angular/core';
import { DetailsofworkService } from './../../../../shared/API-Service/services/detailsofwork.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-detailsofwork',
  templateUrl: './view-detailsofwork.component.html',
  styleUrls: ['./view-detailsofwork.component.css']
})
export class ViewDetailsofworkComponent implements OnInit {
detailsofworkservice:any [] = [];
  constructor(private _Router:Router
             ,private _DetailsofworkService:DetailsofworkService) { }

  ngOnInit(): void {
    this.GetDetails();
  }
  GetDetails(){
    this._DetailsofworkService.Get().subscribe((res) => {
      this.detailsofworkservice = res.data;
    })
  }

  Update(data) {
    this._Router.navigate([`/content/admin/InsertDetailsofwork`]);
    this._DetailsofworkService.Data.next(data);
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
        this._DetailsofworkService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.GetDetails();
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
