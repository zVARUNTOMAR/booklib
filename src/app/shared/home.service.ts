import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {

   }

   readonly url = "https://localhost:44388/api/Library";

   submitResponse(model : any){
    return this.http.post(this.url,model);
   }
}
