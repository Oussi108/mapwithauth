import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import {Cities} from 'src/app/Cities'
import {Router} from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  citiesList = Cities;

  constructor(private router: Router) {}

  showCityDetails(city: any) {
    // For now, let's navigate to a dummy route passing city name as a parameter
    this.router.navigate(['/tabs/tab2', city.id]);

  }

}
