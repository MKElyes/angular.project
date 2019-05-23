import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './img/img.component';
import { BlindingComponent } from './blinding/blinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { FuncloginComponent } from './funclogin/funclogin.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NgforSwitchIfComponent } from './ngfor-switch-if/ngfor-switch-if.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    BlindingComponent,
    ClassbindingComponent,
    FuncloginComponent,
    EventbindingComponent,
    FormulaireComponent,
    NgforSwitchIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
