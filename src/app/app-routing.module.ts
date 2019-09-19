import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitResolver } from './produit/produit.resolver';

export const appRoutes: Routes = [
  { path: 'produit',
    component: ProduitComponent,
    resolve: {
      produits: ProduitResolver
    }
  },
  {path: 'dashboard', component: DashboardComponent},
  //route par defaut
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [ RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule{

}
