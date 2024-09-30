import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';

@Component({
  selector: 'app-subsecribtion',
  templateUrl: './subsecribtion.component.html',
  styleUrl: './subsecribtion.component.css'
})
export class SubsecribtionComponent {

  ngOnInit() {

    this.getMalik();
  }

  constructor(private _ser : UrlService) { }

  subscriptionArray : any
  getMalik() { 
  this._ser.getSubscribtionData().subscribe((data) => {
    this.subscriptionArray = data
    console.log(this.subscriptionArray)
  })
  }

  data = {
    "userId": 3,
    "subscriptionId": 3,
    "subServiceId": 1
  }
  adduserSubscription(id: any) {

    this.data.subscriptionId = id
    this._ser.addUserSubscription(this.data).subscribe(() => {
      
      alert("User Subscribtion Successfuly")

    })
  }
}
