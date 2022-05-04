import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LocateService {
	

  	constructor( private _http: HttpClient) { }

	private _getIpInfoUrl = "https://ipinfo.io/?token=" + environment.tokenIp;

	getIpInfo(): Observable<any> {
		return this._http.get(this._getIpInfoUrl);
	}

	
}
