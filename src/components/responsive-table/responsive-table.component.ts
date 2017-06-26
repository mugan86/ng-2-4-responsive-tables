import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveTableInterface } from './responsive-table.interface';

@Component({
  selector: 'responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {

    // @Input() tableData: ResponsiveTableInterface;
    // Dentro de data tendremos un array bidimensional donde en el primer nivel se guardarán los elementos como filas
    // y luego en cada elemento, los items de esa fila (intentando) que sea el mismo número que titles
    // Con ancho de columnas asignado 'widths': ['40%', '45%', '15%'],
    @Input() data: any;
    /****************************************************************
     * if titleStyle contain css style rules, take priority about
     * component css style rules that contain background-color: yellow
     ***************************************************************/
    @Input() titleStyle = {};
    constructor() {}

    ngOnInit(): void {
      // Check if titles and widths equal
      // this.tableTitleStyle = {'background-color': 'orange', 'color': 'white'};
      if (this.data.widths.length !== this.data.titles.length) {
        let index = 0;
        this.data.titles.map(titles => {
          this.data.widths.push(this.getWidthOfColumns() + '%');
          index++;
        });
      } else {
        // Check if widths different length of titles
        // Check if all widths no more of 100%
        console.log('Equal values');
        this.data.widths.map((width: any, index: number) => {
          // Check if contains '%'
          if (width.indexOf('%') === -1) {
            this.data.widths[index] = width + '%';
            console.log('Update with add %');
          }
        });
      }

    }

    private getWidthOfColumns(): string {
      if (this.data.widths === undefined ||
                this.data.widths.length === 0 ||
                this.data.widths.length < this.data.titles.length) {
          return `${100 / this.data.titles.length}`;
      }
      return '';
    }

    createRange(number: number) {
      const items: number[] = [];
      for (let i = 1; i <= number; i++) {
        items.push(i);
      }
      return items;
    }

    getDataExampleWithSpecificColumnsAndRows() {
      let data: string [][];
      for (let i = 0; i < 10; i++) {
          data[i] = [];
          for (let j = 0; j < 10; j++) {
              data[i][j] = '';
          }
      }
      return data;
    }

}
