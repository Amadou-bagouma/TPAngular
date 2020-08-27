import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TPCVANG';
  nomNom ='Amadou Bagouma';
  nomAge = 34;
  monPhoto ='/assets/moi.jpeg';
  mesLiens:any[] = [];

}
