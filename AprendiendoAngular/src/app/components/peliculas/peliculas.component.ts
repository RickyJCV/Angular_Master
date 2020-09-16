import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;

  constructor() { 
    this.titulo = "Componente peliculas"
    console.log("constructor lanzado")
  }

  // ciclo de vida que se ejecuta al inicio
  ngOnInit(): void {
    console.log("Componente iniciado")
  }

  // ciclo de vida que se ejecuta cuando el componente sufre un cambio
  ngDoCheck(){
    console.log("docheck lanzado")
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado"
  }

  //Antes de eliminar el componente se ejecuta esto
  ngOnDestroy(){
    console.log("el componente se va a eliminar")
  }

}
