import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
//import { LayoutModule } from '@angular/cdk/layout';error conflicto con componente FlexLayoutModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';




import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';


import { HttpClientModule } from '@angular/common/http';
//https://github.com/angular-university/angular-http-guide


import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
// Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. This module provides Angular developers with component layout features using a custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.

//https://github.com/angular/flex-layout



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
