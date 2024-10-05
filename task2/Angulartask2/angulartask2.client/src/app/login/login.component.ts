import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngOnInit() {

  }

  constructor(private _ser: UrlService, private _router: Router) {

  }

  loginNewUser(data: any) {
    debugger
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.loginUser(form).subscribe((response: any) => {
      alert("user logged successfully")
      if (response.email == "admin@admin.com") {
        this._router.navigate(['/dashboard'])
      } else {
        this._router.navigate(['/Services']);
      }
      
    },
      (error) => {
        alert(error.error)
      }
    )
  }
}
