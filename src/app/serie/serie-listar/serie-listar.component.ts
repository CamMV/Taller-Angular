import { Component, OnInit } from '@angular/core';
import { serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListarComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<serie> = [];
  promedio: number = 0;
  selectedSerie: serie | null = null;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;  
      this.calcularPromedio(); 
    });
  }
  
  calcularPromedio() {
    let numSeries = 0;
    let seasons = 0;
    for (let serie of this.series) {
      numSeries++;
      seasons += serie.seasons;
    }
    this.promedio = seasons / numSeries;
  }

  ngOnInit() {
    this.getSeries();
  }

  selectSerie(serie: serie) {
    this.selectedSerie = serie;
  }

  setDefaultImage(event: Event) {
    const element = event.target as HTMLImageElement;
    if (!element.classList.contains('image-error')) {
      element.src = 'assets/images/default-image.jpg'; // Ruta a la imagen alternativa general
      element.classList.add('image-error'); 
    }
  }    
}
