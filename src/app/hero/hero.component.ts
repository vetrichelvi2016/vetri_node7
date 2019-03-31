import { Component, OnInit } from '@angular/core';
import { HeroserviceService } from "../heroservice.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(public heroS : HeroserviceService) { }

  ngOnInit() {
  }

  showContent() {
    console.log('content here....');
    this.heroS.getHeroes().subscribe(heroes =>
           console.log(heroes)
          )
    
  }

}
