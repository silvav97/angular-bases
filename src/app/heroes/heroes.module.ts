import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";



@NgModule({
  declarations: [
    HeroComponent,      // importar todos los componentes del modulo
    ListComponent
  ],
  exports: [
    HeroComponent,     // que por fuera se pueda usar
    ListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
