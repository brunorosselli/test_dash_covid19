import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() sitegov: string = '';
  @Input() data_dados: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
