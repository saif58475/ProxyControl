import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from './../../../../shared/API-Service/services/services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Image } from '../../../../../images/images';

@Component({
  selector: 'app-insert-service',
  templateUrl: './insert-service.component.html',
  styleUrls: ['./insert-service.component.css']
})
export class InsertServiceComponent implements OnInit {
  serviceForm:FormGroup;
  serviceFormData:FormData;
  update:boolean = false;
  button:boolean = false;
  Image: File;
  img : string = Image;
  imageLogo:string;
  service_id:number;
  constructor(private _FormBuilder:FormBuilder
             ,private _ServicesService:ServicesService
             ,private _Router:Router) { }

  ngOnInit(): void {
    this._ServicesService.Data.subscribe((res) => {
      if( res != null){
        this.service_id = res.service_id;
        this.imageLogo = this.img + res.image;
      this.initiate(res);
      this.update = true;
      }else{
      this.initiate();
      }
    })
  }

  initiate(record?:any){
    this.serviceForm = this._FormBuilder.group({
      name: [record?.name || '', Validators.required],
      price: [record?.price || '', Validators.required],
      details: [record?.details || '', Validators.required],
      image: [record?.image || '', Validators.required],
    });
  }
  get fc(){
    return this.serviceForm.controls;
  }
      // imgFile
getLogoUrl(event: any) {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    this.Image = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageLogo = reader.result as string;
    };
  }
}

insertappenddata(){
  this.serviceFormData = new FormData();
  this.serviceFormData.append("name", this.serviceForm.value.name);
  this.serviceFormData.append("price", this.serviceForm.value.price);
  this.serviceFormData.append("details", this.serviceForm.value.details);
  this.serviceFormData.append("image", this.Image);
}
  onSubmit(){    
     this.button = true;
     if(this.update == false && this.serviceForm.status == "VALID"){
      this.insertappenddata();
       this._ServicesService.CreateService(this.serviceFormData).subscribe((res) => {
         Swal.fire({
           icon: "success",
           title: "Submitted Successfuly",
           showConfirmButton: false,
           timer: 1500,
         });
         this.serviceForm.reset();
         this._Router.navigate(['/content/admin/ViewService']);
       },(err) => {
         Swal.fire({
           icon: 'error',
           title: 'Error',
           text:err.message    
         }) 
         this.button = false ;
       },() => {
         console.log('completed');
       })
     } else if(this.update == true && this.serviceForm.status == "VALID"){
      this.insertappenddata();
    this._ServicesService.UpdateService(this.serviceFormData , this.service_id).subscribe((res) => {
     Swal.fire({
       icon: "success",
       title: "Submitted Successfuly",
       showConfirmButton: false,
       timer: 1500,
     });
     this.serviceForm.reset();
     this._Router.navigate(['/content/admin/ViewService']);
    },(err) => {
     Swal.fire({
       icon: 'error',
       title: 'Error',
       text:err.message    
     })
    }, () => {
     console.log('completed');
    })
     } else {
       Swal.fire({
         icon: 'error',
         title: 'Error',
         text:"Please check that all the fields are written"     
       })
       this.serviceForm.markAllAsTouched();
       this.button = false ;
     }
     }


  ngOnDestroy(){
      this._ServicesService.Data.next(null);
     }
}
