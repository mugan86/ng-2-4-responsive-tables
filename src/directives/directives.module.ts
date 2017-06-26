import { NgModule, ModuleWithProviders } from '@angular/core';

import { ResponsitablesDirective } from './responsi_tables.directive';

export const DIRECTIVES = [
  ResponsitablesDirective
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DirectivesModule,
    };
  }
}