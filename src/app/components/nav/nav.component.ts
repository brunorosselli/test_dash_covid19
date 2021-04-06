import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items!: MenuItem[];
  activeItem!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.nav();
  }

  nav(){
    this.items = [
      {
        label:'Início', icon: 'pi pi-fw pi-home'
      },
      { 
        label:'Missão', icon: 'pi pi-fw pi-globe'
      },
      {
        label:'Documentação'
      },
      {
        label:'Sobre',
        items:[
          {label: 'Código'},
          {label: 'Contato'},
          {label: 'Desenvolvedor'}
        ]
      }
  ];
  }
}
