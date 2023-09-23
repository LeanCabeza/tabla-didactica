import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  vista: string = "colores";
  idioma: string = "espanol";
  item: string = "";

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
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
