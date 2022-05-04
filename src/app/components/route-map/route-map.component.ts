import { Component, OnInit } from '@angular/core';
import Leaflet from 'leaflet';
import { LocateService } from 'src/app/service/locate.service';
import { environment } from '../../../environments/environment.prod';



@Component({
	selector: 'app-route-map',
	templateUrl: './route-map.component.html',
	styleUrls: ['./route-map.component.scss']
})
export class RouteMapComponent implements OnInit {


	public hour : number = 0;
	public minute: number = 0;
	public second : number = 0;
	public onRun : boolean = false;
	public Timer : any;



	constructor(
		private _locateService: LocateService
	) { }
	
	ngOnInit(): void {
	
		this._locateService.getIpInfo().subscribe(
			(data: any) => {
				this.setMap(data.loc);
			}
		);


	}

	
	
	private setMap(latLng: string) {
		
		let cords = latLng.split(',');
		
		let map = Leaflet.map('map').setView([51.4823, -0.0836], 15);
		

		Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 20,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			
		}).addTo(map);


		let markerRouteStart = Leaflet.marker([51.481116, -0.0931356]).addTo(map);
		markerRouteStart.bindPopup('<b>You running session going to end</b><br> HERE').openPopup();
		
		let markerRouteEnd = Leaflet.marker([51.484185, -0.074748]).addTo(map);
		markerRouteEnd.bindPopup('<b>You running session going to start</b><br> HERE').openPopup();
		

		

		let polyline = Leaflet.polyline([
			[51.484185, -0.074748],
			[51.481116, -0.0931356]
		],{color:'red'}).addTo(map);
		

	}


	public StartRunning() {
		this.onRun = true;
		
		this.Timer =	setInterval(() => {
			this.second++;
			if(this.second == 60) {
				this.second = 0;
				this.minute++;
			}
			if(this.minute == 60) {
				this.minute = 0;
				this.hour++;
			}
		} , 100);
		
	}

	public StopRunning() {
		this.onRun = false;
		clearInterval(this.Timer);
	}
}
