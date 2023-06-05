import { Component, OnInit } from '@angular/core';
import { AboutusService } from './../../../../shared/API-Service/services/aboutus.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-aboutus',
  templateUrl: './view-aboutus.component.html',
  styleUrls: ['./view-aboutus.component.css']
})
export class ViewAboutusComponent implements OnInit {
aboutus:any [] = [];
  constructor(private _AboutusService:AboutusService
            ,private _Router:Router) { }

  ngOnInit(): void {
    this.GetAboutUs();
  }

  GetAboutUs(){
    this._AboutusService.Get().subscribe((res) => {
      this.aboutus = res.data;
    })
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertAboutus`]);
    this._AboutusService.Data.next(data);
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
        this._AboutusService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.GetAboutUs();
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
