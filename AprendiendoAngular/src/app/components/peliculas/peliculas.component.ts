import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor() {
    this.titulo = "Componente peliculas"
    this.peliculas = [
      new Pelicula("Spiderman 4", 2019, 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg'),
      new Pelicula("Spiderman 3", 2029, 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg'),
      new Pelicula("Spiderman 2", 2019, 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg'),
      new Pelicula("Spiderman 2", 2099, 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg'),
      new Pelicula("Spiderman", 2079, 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg'),
    ]
    console.log("constructor lanzado")
    this.fecha = new Date(2020, 8, 12);
  }

  // ciclo de vida que se ejecuta al inicio
  ngOnInit(): void {
    console.log("Componente iniciado")
  }

  // ciclo de vida que se ejecuta cuando el componente sufre un cambio
  ngDoCheck() {
    console.log("docheck lanzado")
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado"
  }

  //Antes de eliminar el componente se ejecuta esto
  ngOnDestroy() {
    console.log("el componente se va a eliminar")
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }

}
