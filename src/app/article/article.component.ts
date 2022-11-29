import { Component, OnInit } from '@angular/core';
import { Article } from '../core/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor() { }

  titre:String = "Les Articles du jour"

  listeArticles:Article[] = [
    {titre:'Le championnat du monde',contenu:'Le champion du monde de cette annéeest .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'}, 
    {titre:'Les nouveauxparents',contenu:'Les nouveaux parents. ..',auteur:'AhmedSaid',date:'11/11/2018',categorie:'Education'},
    {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'} 
  ]

  numberOfArticles:number = this.listeArticles.length
  ngOnInit(): void {
  }

  changeNumberOfArticles(event:number){
    this.numberOfArticles = event
  }

  

}
