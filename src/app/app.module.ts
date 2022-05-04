import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

import { RouteMapComponent } from './components/route-map/route-map.component';
import { RecordRunComponent } from './components/record-run/record-run.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        RouteMapComponent,
        RecordRunComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxEchartsModule.forRoot({
            echarts
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
