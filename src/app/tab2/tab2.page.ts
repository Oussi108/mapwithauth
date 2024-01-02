import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import {Cities} from 'src/app/Cities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mycities = Cities;
  selectedCity: any;

  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cityId = params.get('id');
      if (cityId !== null) {
        this.selectedCity = this.mycities.find(city => city.id === parseInt(cityId, 10));
        // Above line filters the mycities array by the received ID and assigns the result to selectedCity
      }
    });
  }
  navigateToTab3() {
    if (this.selectedCity && this.selectedCity.id) {
      this.router.navigate(['/tabs/tab3', this.selectedCity.id]);
    }
  }
  
}
