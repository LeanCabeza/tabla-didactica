import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  vista: string = "colores";
  idioma: string = "espanol";
  item: string = "";

  constructor() { }

  ngOnInit() {
  }

  generarSonido(idioma:any,item: string ) {
    const ruta = `/assets/audios/${idioma}-${item}.mp3`
    const audio = new Audio(ruta);
    audio.play();
  }

}
