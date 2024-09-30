import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {

  name: string = "Malik Ibdah"
  number: number = 3.1
  urlimg: string = "https://estghfar.com/img/images/islamic-images-940.jpg"

  onchange() {
    this.name = "Hello World"
  }
}
