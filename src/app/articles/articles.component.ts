import { Component, OnInit } from '@angular/core';
import { article } from '../core/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  tit!: string
  listeArticles: article[]=[];

  constructor() { }

  ngOnInit(): void {
    this.tit="Les articles du jour"
    this.listeArticles=[
      {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
      {titre:'Les nouveaux parents',contenu:'Les nouveaux parents. ..',auteur:'AhmedSaid',date:'11/11/2018',categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'}
      
    ]
  }
  

}
