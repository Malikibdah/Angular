import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private _ser: UrlService) { }

  email = ""
  ngOnInit() {
    this._ser.emailaddress.subscribe((data) => {
      debugger
      this.email = data
    })

  }
}
