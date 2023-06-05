import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AboutusService {

  public Data  = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

    // This to get the About Us
    Get():Observable<any>{
      return this._HttpClient.get(`${environment.Server_URL}/listAboutUs`);
     }
   // This to post the About Us
    Create(aboutus):Observable<any>{
     return this._HttpClient.post(`${environment.Server_URL}/createAboutUs`, aboutus);
    }
   // This to Update the About Us
    Update(aboutus, id):Observable<any>{
     return this._HttpClient.post(`${environment.Server_URL}/updateAboutUs/${id}`, aboutus);
    }
    // This to delete the About Us
   Delete(id):Observable<any>{
     return this._HttpClient.delete(`${environment.Server_URL}/deleteAboutUs/${id}` ); 
   }
}
