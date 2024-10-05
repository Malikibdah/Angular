import { Component } from '@angular/core';
import { UrlService } from '../../url/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {
  ngOnInit() {  }

  constructor(private _ser: UrlService, private _router: Router) { }

  // هذا الكود حتى يتم الصورة من ملف اسمه تارجيت وداخل ملف ملف اخر اسمه فايلز والانديكس صفر
  image: any
  changeImage(event: any) {

    debugger
    this.image = event.target.files[0]

  }

  addNewService(data: any) {
    debugger
    var form = new FormData();//تحويل الداتا التي تأتي من الفورم لشكل يفهمه سواجر وهو الفورم داتا
    for (let key in data) {
      form.append(key, data[key])
    }
    form.append("ServiceImage", this.image);
    this._ser.addServiceAPI(form).subscribe(() => {
      alert("services added succesfully")
    },
      (error) => {
        //هذا الكود يظهر رسالة الخطأ التي وضعتها في سواجر على شكل اليرت  في حال حدوث خطأ
        alert(error.error)
      })
  }
}
