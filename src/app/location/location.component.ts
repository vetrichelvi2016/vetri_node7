import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }
  locationList;
  ngOnInit() {
    this.locationList=[
      {
        locationName:'madurai',
        cc:11
      },
      {
        locationName:'chennai',
        cc:22
      },
      {
        locationName:'usa',
        cc:44
      }
    ]
  }

  showContent() {
    alert('inside')
    console.log('content here....');
    // this.heroS.getHeroes().subscribe(heroes =>
          //  console.log(heroes)
          // )
    
  }

}
