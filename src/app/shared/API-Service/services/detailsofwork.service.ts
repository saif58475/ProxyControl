import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DetailsofworkService {

  public Data  = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

    // This to get the DetailsOfWork
    Get():Observable<any>{
      return this._HttpClient.get(`${environment.Server_URL}/listDetailsOfWork`);
     }
   // This to post the DetailsOfWork
    Create(DetailsOfWork):Observable<any>{
     return this._HttpClient.post(`${environment.Server_URL}/createDetailsOfWork`, DetailsOfWork);
    }
   // This to Update the DetailsOfWork
    Update(DetailsOfWork, id):Observable<any>{
     return this._HttpClient.post(`${environment.Server_URL}/updateDetailsOfWork/${id}`, DetailsOfWork);
    }
    // This to delete the DetailsOfWork
   Delete(id):Observable<any>{
     return this._HttpClient.delete(`${environment.Server_URL}/deleteDetailsOfWork/${id}` ); 
   }
}
