import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;

    if (this.spotify.token ){
      console.log('existe');
      this.cargarDatos();
    }else{
      console.log('no existe');
      setTimeout(() => {
        this.cargarDatos();
      }, 2000);
    }
  }

  ngOnInit(): void {
  }

  cargarDatos(): any {
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      console.log(data);
      this.loading = false;
    }, ( errorServicio ) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.mesage;
      console.log( errorServicio);
    });
  }

}
