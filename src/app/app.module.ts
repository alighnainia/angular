import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { OffreEmploiComponentComponent } from './offre-emploi-component/offre-emploi-component.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ArticleComponent } from './article/article.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    OffreEmploiComponentComponent,
    NotFoundComponentComponent,
    ArticleComponent,
    AddProductComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
