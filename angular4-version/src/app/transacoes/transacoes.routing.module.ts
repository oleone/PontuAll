import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransacoesComponent } from './transacoes.component';

const routes: Routes = [
  { path: '', component: TransacoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class TransacoesRoutingModule {}
