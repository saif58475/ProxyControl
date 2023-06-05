import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LearnerpartnerService {

  public Data  = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

    // This to get the Learn partner
    Get():Observable<any>{
      return this._HttpClient.get(`${environment.Server_URL}/listPartner`);
     }
   // This to post the Learn partner
    Create(partner):Observable<any>{
     return this._HttpClient.post(`${environment.Server_URL}/createPartner`, partner);
    }
   // This to Update the Learn partner
    Update(partner, id):Observable<any>{
     return this._HttpClient.post(`${environment.Server_URL}/updatePartner/${id}`, partner);
    }
    // This to delete the Learn partner
   Delete(id):Observable<any>{
     return this._HttpClient.delete(`${environment.Server_URL}/deletePartner/${id}` ); 
   }
}
