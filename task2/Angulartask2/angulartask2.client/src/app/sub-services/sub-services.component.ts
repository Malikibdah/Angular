import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrl: './sub-services.component.css'
})
export class SubServicesComponent {

  parameter: any
  subServiceData: any
  
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getsubServices(this.parameter);
  }
  
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }
  getsubServices(id: any) {
    this._ser.getSubServicesbyServiceId(id).subscribe((data) => {
      this.subServiceData = data
      console.log("this.subServiceData", this.subServiceData)
    })
  }

}
