  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { DetailsofworkService } from './../../../../shared/API-Service/services/detailsofwork.service';
  import Swal from 'sweetalert2';
  import { Router } from '@angular/router';
  import { Image } from '../../../../../images/images';

@Component({
  selector: 'app-insert-detailsofwork',
  templateUrl: './insert-detailsofwork.component.html',
  styleUrls: ['./insert-detailsofwork.component.css']
})
export class InsertDetailsofworkComponent implements OnInit {
img:string = Image;
DetailsForm:FormGroup;
DetailsFormData:FormData;
update:boolean = false;
button:boolean = false;
Image: File;
imageLogo:string;
work_id:number;
  constructor(private _DetailsofworkService:DetailsofworkService
             ,private _Router:Router
             ,private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._DetailsofworkService.Data.subscribe((res) => {
      if( res != null){
        this.work_id = res.work_id;
        this.imageLogo = this.img + res.image;
      this.initiate(res);
      this.update = true;
      }else{
      this.initiate();
      }
    })
  }

  initiate(record?:any){
    this.DetailsForm = this._FormBuilder.group({
      label: [record?.label || '', Validators.required],
      image: [record?.image || '', Validators.required],
    });
  }
  get fc(){
    return this.DetailsForm.controls;
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
  this.DetailsFormData = new FormData();
  this.DetailsFormData.append("label", this.DetailsForm.value.label);
  this.DetailsFormData.append("image", this.Image);
}
  onSubmit(){    
     this.button = true;
     if(this.update == false && this.DetailsForm.status == "VALID"){
      this.insertappenddata();
       this._DetailsofworkService.Create(this.DetailsFormData).subscribe((res) => {
         Swal.fire({
           icon: "success",
           title: "Submitted Successfuly",
           showConfirmButton: false,
           timer: 1500,
         });
         this.DetailsForm.reset();
         this._Router.navigate(['/content/admin/ViewDetailsofwork']);
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
     } else if(this.update == true && this.DetailsForm.status == "VALID"){
      this.insertappenddata();
    this._DetailsofworkService.Update(this.DetailsFormData, this.work_id).subscribe((res) => {
     Swal.fire({
       icon: "success",
       title: "Submitted Successfuly",
       showConfirmButton: false,
       timer: 1500,
     });
     this.DetailsForm.reset();
     this._Router.navigate(['/content/admin/ViewDetailsofwork']);
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
       this.DetailsForm.markAllAsTouched();
       this.button = false ;
     }
     }

  ngOnDestroy(){
      this._DetailsofworkService.Data.next(null);
  }
}
