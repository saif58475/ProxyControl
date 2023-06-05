import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public Data  = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

    // This to get the services
    GetServices():Observable<any>{
      return this._HttpClient.get(`${environment.Server_URL}/listService`);
     }
   // This to post the services
    CreateService(service):Observable<any>{
     return this._HttpClient.post(`${environment.Server_URL}/createService`, service);
    }
   // This to Update the services
    UpdateService(service, id):Observable<any>{
     return this._HttpClient.post(`${environment.Server_URL}/updateService/${id}`, service);
    }
    // This to delete the services
   DeleteService(id):Observable<any>{
     return this._HttpClient.delete(`${environment.Server_URL}/deleteService/${id}` ); 
   }
}
