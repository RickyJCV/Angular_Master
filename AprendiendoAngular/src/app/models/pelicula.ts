export class Pelicula {
    /*
    public title: string;
    public year: number;
    public image: string;

    constructor(title, year, image) {
        this.title = title;
        this.year = year;
        this.image = image;
    }
    */

    //ES IGUAL DE AMBAS FORMAS PERO LA INFERIOR ES MAS COMODA

    constructor(
        public title: string,
        public year: number,
        public image: string,
    ) { }
}