import { Component } from '@angular/core';
import { UrlService } from '../../url/url.service';

@Component({
  selector: 'app-services-admin',
  templateUrl: './services-admin.component.html',
  styleUrl: './services-admin.component.css'
})
export class ServicesAdminComponent {
  ngOnInit() {

    this.getServices();
  }
  constructor(private _ser: UrlService) {


  }

  servicesArray: any
  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data
      console.log(this.servicesArray, "this.servicesArray")
    })

  }

}
