import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  template!:TemplateDrivenFormComponent;

  titre:String = "Informations generales"
  Nom!:string;
  email!:string;
  titre1:String = "Informations de payement"
  Type!:string;
  Num!:number;
  Date!:Date;
  code!:number;
  constructor() { }

  ngOnInit(): void {
    this.template = new TemplateDrivenFormComponent();
  }
  ajouter(){
    console.log(this.template)// aafficher eli ajoutetou
  }


}
