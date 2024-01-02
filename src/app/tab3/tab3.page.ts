import { Component,AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import {Cities} from 'src/app/Cities';
import { CommonModule } from '@angular/common';
declare var google: any; // Declare google to prevent TypeScript errors

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  id: number | undefined;
  @ViewChild('map', { static: false }) mapElement: ElementRef | undefined;

  selectedCity: any;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    // Check if mapElement is available after the view is initialized
    if (this.mapElement && this.mapElement.nativeElement) {
      const latitude = this.selectedCity.lat;
      const longitude = this.selectedCity.lng;
      this.loadMap(latitude, longitude);
    } else {
      console.error('Map element not found or not yet initialized.');
    }
  }
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.selectedCity = this.getCityDetailsById(this.id);

    if (this.selectedCity && this.selectedCity.lat && this.selectedCity.lng) {
      this.loadGoogleMaps(() => {
        this.loadMap(this.selectedCity.lat, this.selectedCity.lng);
      });
    }
  }

  loadGoogleMaps(callback: () => void) {
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
      // Google Maps API not loaded, handle it here
      console.error('Google Maps API not loaded');
      return;
    }
    callback();
  }

  loadMap(latitude: number, longitude: number) {
    if (this.mapElement && this.mapElement.nativeElement) {
      const mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
      const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: this.selectedCity.name
      });
    } else {
      console.error('Map element not found or not yet initialized.');
    }
  }
  

  getCityDetailsById(id: number): any {
    const city = Cities.find(city => city.id === id);
    const defaultCity = { id: 0, name: 'Default City', province: 'Default Province', lat: 0, lng: 0 };
    return city || defaultCity;
  }

}
