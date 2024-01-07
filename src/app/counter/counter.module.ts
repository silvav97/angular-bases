import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";



@NgModule({
  declarations: [
    CounterComponent      // importar todos los componentes del modulo
  ],
  exports: [
    CounterComponent     // que por fuera se pueda usar
  ]
})
export class CounterModule {}
