import { Component } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrl: './registration-user.component.css'
})
export class RegistrationUserComponent {
  ngOnInit() {

  }

  constructor(private _ser: UrlService, private _router: Router) {

  }

  addNewUser(data: any) {
    debugger
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.addUserRegistration(form).subscribe(() => {
      alert("user added successfully")
      this._router.navigate(['/login']);
    },
      (error) => {
        alert(error.error)
      }
    )
  }
}
