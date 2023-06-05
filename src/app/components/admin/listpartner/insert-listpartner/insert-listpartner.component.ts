import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LearnerpartnerService } from './../../../../shared/API-Service/services/learnerpartner.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Image } from '../../../../../images/images';

@Component({
  selector: 'app-insert-listpartner',
  templateUrl: './insert-listpartner.component.html',
  styleUrls: ['./insert-listpartner.component.css']
})
export class InsertListpartnerComponent implements OnInit {
  img:string = Image;
  learnerpartnerForm:FormGroup;
  learnerpartnerFormData:FormData;
  update:boolean = false;
  button:boolean = false;
  Image: File;
  imageLogo:string;
  partner_id:number;
  constructor(private _LearnerpartnerService:LearnerpartnerService
             ,private _Router:Router
             ,private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._LearnerpartnerService.Data.subscribe((res) => {
      if( res != null){
        this.partner_id = res.partner_id;
        this.imageLogo = this.img + res.image;
      this.initiate(res);
      this.update = true;
      }else{
      this.initiate();
      }
    })  }

  initiate(record?:any){
    this.learnerpartnerForm = this._FormBuilder.group({
      name: [record?.name || '', Validators.required],
      image: [record?.image || '', Validators.required],
    });
  }
  get fc(){
    return this.learnerpartnerForm.controls;
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
  this.learnerpartnerFormData = new FormData();
  this.learnerpartnerFormData.append("name", this.learnerpartnerForm.value.name);
  this.learnerpartnerFormData.append("image", this.Image);
}
onSubmit(){    
  this.button = true;
  if(this.update == false && this.learnerpartnerForm.status == "VALID"){
   this.insertappenddata();
    this._LearnerpartnerService.Create(this.learnerpartnerFormData).subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Submitted Successfuly",
        showConfirmButton: false,
        timer: 1500,
      });
      this.learnerpartnerForm.reset();
      this._Router.navigate(['/content/admin/ViewListPartner']);
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
  } else if(this.update == true && this.learnerpartnerForm.status == "VALID"){
   this.insertappenddata();
 this._LearnerpartnerService.Update(this.learnerpartnerFormData, this.partner_id).subscribe((res) => {
  Swal.fire({
    icon: "success",
    title: "Submitted Successfuly",
    showConfirmButton: false,
    timer: 1500,
  });
  this.learnerpartnerForm.reset();
  this._Router.navigate(['/content/admin/ViewListPartner']);
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
    this.learnerpartnerForm.markAllAsTouched();
    this.button = false ;
  }
  }

ngOnDestroy(){
   this._LearnerpartnerService.Data.next(null);
}
}
