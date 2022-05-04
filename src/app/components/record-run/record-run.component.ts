import { Component, OnInit, OnDestroy } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DataService } from '../../service/data.service';


@Component({
	selector: 'app-record-run',
	templateUrl: './record-run.component.html',
	styleUrls: ['./record-run.component.scss']
})
export class RecordRunComponent  {
	
	public timeData: any[] = [];
	public distanceData: any[] = [];

	public isLoaded : boolean = false ;

	public chartTimeOptions: any;
	public chartDistanceOptions: any;

    constructor(
		private _DataService: DataService
	) { }
	

    ngOnInit(): void {
		this.getData();
    }
	
	getData(){

		
		this._DataService.getData().subscribe(async (data)=>{
			
			
			
			for (const iterator of data) {
				this.timeData.push(parseInt(iterator['RunTime']));
				this.distanceData.push(parseInt(iterator['TravelDistance']));

			}

			this.chartTimeLoaded();
			this.chartDistanceLoaded();
		})

		
	}
	

	chartTimeLoaded(){
		this.chartTimeOptions = {
			title: {
				text: 'The time it took you to complete the running segment in the week',
			},
			xAxis: {
			  type: 'category',
			  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			yAxis: {
			  type: 'value',
			  
			},
			series: [
			  {
				data: this.timeData,
				type: 'line',
			  },
			],
		  };
		}

	chartDistanceLoaded(){
		this.chartDistanceOptions = {
			title: {
				text: 'The progression of the distance traveled in the week ',
			},
			xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			yAxis: {
			type: 'value',
			
			},
			series: [
			{
				data: this.distanceData,
				type: 'line',
			},
			],
		};
	

	}

	
}
