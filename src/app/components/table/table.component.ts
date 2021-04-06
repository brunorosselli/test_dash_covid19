import { Component, Input, OnInit, Output } from '@angular/core';
import { DataBrasilService } from 'src/app/services/data-brasil.service';
import { PrimeNGConfig } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  datas: Array<any> = new Array();
  filter: any;

  titulo: string = "INFORMAÇÕES SOBRE OS DADOS DO SITE";
  descricao: string = "Os dados dos Municípios e do Estado de São Paulo foram obtidos no site do Governo do Estado de São Paulo. As comparações gráficas são baseadas nos dados obtidos no site e calculadas pela nossa fórmula.";
  sitegov: string = '';
  data_dados: string = 'Esses dados foram baixados no dia 20/03/2021.';
  datatable: any;
  
  text!: string;

  results!: string[];

//Search Component Strings------
  check_code: boolean = false
  check_city: boolean = false
//th values ---------------------
  t_codigo_ibge: string = '';
  t_grande_regiao: string = '';
  t_municipios: string = '';
  t_total_casos: string = '';
  t_total_obitos: string = '';

//td values ---------------------
  codigo_ibge: string = '';
  grande_regiao: string = '';
  municipios: string = '';
  total_casos: string = '';
  total_obitos: string = '';
//--------------------------------

  constructor( private dataService: DataBrasilService , private primengConfig: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.listarData();
  }

  search() {
    this.t_codigo_ibge = "Código IBG1";
    this.t_grande_regiao = "Grande Região";
    this.t_municipios = "Municipios";
    this.t_total_casos = "Total de Casos";
    this.t_total_obitos = "Totald e Óbitos";

    if(this.check_city == true && this.check_code == false){
    this.dataService.dataList().subscribe(data => {
     const res = data.resultados.find((x: { municipios: string; }) => x.municipios == this.text)
     this.codigo_ibge = res.code_ibge;
     this.grande_regiao = res.grande_regiao;
     this.municipios = res.municipios;
     this.total_casos = res.mun_total_casos;
     this.total_obitos = res.mun_total_obitos;
    });
  }
  else if(this.check_code == true && this.check_city == false){
    this.dataService.dataList().subscribe(data => {
      console.log("Busca por código:", data.resultado)
      const res = data.resultados.find((x: { code_ibge: string; }) => x.code_ibge == this.text)
      this.codigo_ibge = res.code_ibge;
      this.grande_regiao = res.grande_regiao;
      this.municipios = res.municipios;
      this.total_casos = res.mun_total_casos;
      this.total_obitos = res.mun_total_obitos;
     });
  }else{
    alert('Por favor, selecione o tipo de Busca')
  }
  
}
  listarData(){
    this.dataService.dataList()
    .subscribe(resposta => {
      this.datas = resposta.resultados;
      console.log('Estados:', resposta);},
      () => { console.log('Falha ao Listar Livros');}
    );
  }
}
