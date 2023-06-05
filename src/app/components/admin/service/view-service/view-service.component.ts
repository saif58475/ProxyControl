import { Component, OnInit } from '@angular/core';
import { ServicesService } from './../../../../shared/API-Service/services/services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Image } from './../../../../../images/images';
@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {
  services:any [] = [];
  img:string = Image; 
  constructor(private _ServicesService:ServicesService
             ,private _Router:Router) { }

  ngOnInit(): void {
    this.GetServices();
  }

  GetServices(){
    this._ServicesService.GetServices().subscribe((res) => {
      this.services = res.data;
    })
  }

  Update(data) {
    this._Router.navigate([`/content/admin/InsertService`]);
    this._ServicesService.Data.next(data);
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
        this._ServicesService.DeleteService(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.GetServices();
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
