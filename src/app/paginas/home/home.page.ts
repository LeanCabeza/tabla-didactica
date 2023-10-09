import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { IonFab } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('fab') fab: IonFab ;
  backgroundImg: string = '/assets/images/background.jpeg'; 
  vista: string = "colores";
  idioma: string = "espanol";
  item: string = "";

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  }
  
  onClose() {
    this.fab.close();
  }

  generarSonido(idioma:any,item: string ) {
    if (item == ""){
      const ruta = `/assets/audios/${idioma}.mp3`
      const audio = new Audio(ruta);
      audio.play();
    }else{
      const ruta = `/assets/audios/${idioma}-${item}.mp3`
      const audio = new Audio(ruta);
      audio.play();
    }
  }

  logout() {
    this.firebaseService.logout();
  }

}
