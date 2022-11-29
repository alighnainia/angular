import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ArticleComponent } from './article/article.component';
import { Product } from './core/products';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

import { OffreEmploiComponentComponent } from './offre-emploi-component/offre-emploi-component.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'Offre-emploi',component:OffreEmploiComponentComponent},
  {path:'Article',component:ArticleComponent},
  {path:'Add',component:AddProductComponent},
  {path:'template',component:TemplateDrivenFormComponent},
  {path:'',redirectTo:'Products',pathMatch:'full'},//bch ycompari l kelma lkol ta3 path
  {path:'**',component:NotFoundComponentComponent}
  

  //route sous form json
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
