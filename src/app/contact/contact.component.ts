import { Component, OnInit } from '@angular/core';
import { HeroserviceService } from "../heroservice.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public hser:HeroserviceService
  ) { }
   contactList:any;
   

  ngOnInit() {
    this.hser.getHeroes().subscribe(heroes =>

      this.contactList = heroes
     )
    // this.contactList = [
    //   {
    //     name:'vikraman',
    //     age:29
    //   },
    //   {
    //     name:'vetri',
    //     age:30
    //   },
    //   {
    //     name:'vss',
    //     age:30
    //   }
    // ]
  }

}
