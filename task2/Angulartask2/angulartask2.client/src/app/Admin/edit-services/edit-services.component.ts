import { Component } from '@angular/core';
import { UrlService } from '../../url/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrl: './edit-services.component.css'
})
export class EditServicesComponent {
  parameter: any;
  ngOnInit() {
    this.parameter = this._active.snapshot.paramMap.get('id');
  }
  image: any
  changeImage(event: any) {
    this.image = event.target.files[0];
  }
  constructor(private _ser: UrlService, private _active: ActivatedRoute) { }

  editService(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    form.append("ServiceImage", this.image)
    this._ser.PUTService(this.parameter, form).subscribe((data) => {
      alert("ok")
    })
  }

}
