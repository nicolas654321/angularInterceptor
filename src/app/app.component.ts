import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Interceptor';
  reponse: any;

  constructor(private httpsService: HttpService) { }

  getData() {
    // Création de l'observable
    this.httpsService.sendRequest()
    // Abonnement à l'observable (et donc déclenchement de la requête)
    .subscribe((data) => {
            // Réponse du serveur
            // console.log(data);
            this.reponse = data;
    });
}



}
