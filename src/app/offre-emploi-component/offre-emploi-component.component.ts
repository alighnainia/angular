import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/Emploi';

@Component({
  selector: 'app-offre-emploi-component',
  templateUrl: './offre-emploi-component.component.html',
  styleUrls: ['./offre-emploi-component.component.css']
})
export class OffreEmploiComponentComponent implements OnInit {
listEmploi!:Emploi[]
nbr!:number
searchtxt!:string
  constructor() { }

  ngOnInit(): void {
    this.listEmploi=[{reference:'001',titre:'ahmed',entreprise:'esprit',etat:true},{reference:'123',titre:'Med',entreprise:'talan',etat:true}]
  }
Bilan(){
  this.nbr=0;
  for(let i=0;i<this.listEmploi.length;i++)
  if(this.listEmploi[i].etat==true) this.nbr++ ;
}
search(){

this.listEmploi=this.listEmploi.filter((x)=>x.entreprise.match(this.searchtxt))
} //filtre tparcouri w tfalter w traja3 lista mfaltra 
//(match)=t9ren beha 
}
