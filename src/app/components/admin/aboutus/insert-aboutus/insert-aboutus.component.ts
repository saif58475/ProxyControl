import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutusService } from './../../../../shared/API-Service/services/aboutus.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Image } from '../../../../../images/images';

@Component({
  selector: 'app-insert-aboutus',
  templateUrl: './insert-aboutus.component.html',
  styleUrls: ['./insert-aboutus.component.css']
})
export class InsertAboutusComponent implements OnInit {
AboutUsForm:FormGroup;
AboutUsFormData:FormData;
update:boolean = false;
button:boolean = false;
Image: File;
img : string = Image;
imageLogo:string;
aboutus_id:number;
  constructor(private _AboutusService:AboutusService
            ,private _Router:Router
            ,private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._AboutusService.Data.subscribe((res) => {
      if( res != null){
        this.aboutus_id = res.about_id;
        this.imageLogo = this.img + res.image;
      this.initiate(res);
      this.update = true;
      }else{
      this.initiate();
      }
    })
  }

  initiate(record?:any){
    this.AboutUsForm = this._FormBuilder.group({
      content: [record?.content || '', Validators.required],
      label: [record?.label || '', Validators.required],
      image: [record?.image || '', Validators.required],
    });
  }
  get fc(){
    return this.AboutUsForm.controls;
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
  this.AboutUsFormData = new FormData();
  this.AboutUsFormData.append("label", this.AboutUsForm.value.label);
  this.AboutUsFormData.append("content", this.AboutUsForm.value.content);
  this.AboutUsFormData.append("image", this.Image);
}
  onSubmit(){    
     this.button = true;
     if(this.update == false && this.AboutUsForm.status == "VALID"){
      this.insertappenddata();
       this._AboutusService.Create(this.AboutUsFormData).subscribe((res) => {
         Swal.fire({
           icon: "success",
           title: "Submitted Successfuly",
           showConfirmButton: false,
           timer: 1500,
         });
         this.AboutUsForm.reset();
         this._Router.navigate(['/content/admin/ViewAboutus']);
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
     } else if(this.update == true && this.AboutUsForm.status == "VALID"){
      this.insertappenddata();
    this._AboutusService.Update(this.AboutUsFormData , this.aboutus_id).subscribe((res) => {
     Swal.fire({
       icon: "success",
       title: "Submitted Successfuly",
       showConfirmButton: false,
       timer: 1500,
     });
     this.AboutUsForm.reset();
     this._Router.navigate(['/content/admin/ViewAboutus']);
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
       this.AboutUsForm.markAllAsTouched();
       this.button = false ;
     }
     }


  ngOnDestroy(){
      this._AboutusService.Data.next(null);
     }
}
