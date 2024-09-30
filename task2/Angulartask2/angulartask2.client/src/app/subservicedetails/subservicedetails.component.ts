import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subservicedetails',
  templateUrl: './subservicedetails.component.html',
  styleUrl: './subservicedetails.component.css'
})
export class SubservicedetailsComponent {

  parameter: any
  subServiceDetails: any

  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getSubServiceswithId(this.parameter);
  }
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }
  getSubServiceswithId(id: any) {
    this._ser.getSubServicesById(id).subscribe((data) => {
      this.subServiceDetails = data
    })
  }

}
