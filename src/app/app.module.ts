import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './paginas/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { MessageModule } from 'primeng/message';

import {MenubarModule} from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {TableComponent} from './components/table/table.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {PanelModule} from 'primeng/panel';
import { PanelComponent } from './components/panel/panel.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';

import { FormsModule }   from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FieldsetModule} from 'primeng/fieldset';
import {CheckboxModule} from 'primeng/checkbox';
import {ChartModule} from 'primeng/chart';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TableComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MessageModule,
    AvatarModule,
    AvatarGroupModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    FormsModule,
    AutoCompleteModule,
    FieldsetModule,
    CheckboxModule,
    ChartModule
    
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
