import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{

  public titulo: string;
  public peliculas: Array<any>;

  constructor() { 
    this.titulo = "Componente peliculas"
    this.peliculas = [
      {year: 2019, title: "Spiderman 4" , image: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg'},
      {year: 2020,title: "Vengadores 4" , image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hobbyconsolas.com%2Fentretenimiento%2Fvengadores-4-2019&psig=AOvVaw19cb3z1kv5UkvPEH7ZAAlT&ust=1600456574577000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCPsr7z8OsCFQAAAAAdAAAAABAK'},
      {year: 2019,title: "Batman 2" , image: 'https://pmcvariety.files.wordpress.com/2020/08/1182-the-batman-dc-fandome-teaser-youtube-5.png?w=681&h=383&crop=1'},
      {year: 2029,title: "Batman 2" , image: 'https://pmcvariety.files.wordpress.com/2020/08/1182-the-batman-dc-fandome-teaser-youtube-5.png?w=681&h=383&crop=1'},
    ]
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
