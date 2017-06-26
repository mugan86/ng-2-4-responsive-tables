import { NgModule } from '@angular/core';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';

export const COMPONENTS = [
    ResponsiveTableComponent,
];

@NgModule({
  imports: [ COMPONENTS ],
  exports: [ COMPONENTS ]
})
export class DinamicResponsiveTablesModule { }