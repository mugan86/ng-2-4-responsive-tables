import { NgModule, ModuleWithProviders  } from '@angular/core';

import { DirectivesModule } from './directives';


export const MODULES = [
    DirectivesModule
];

@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ]
})
export class ResponsiveTablesModule { }