import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateDocumentComponent } from './createDocument/createDocument.component';
import {UcWidgetComponent} from 'ngx-uploadcare-widget';
import {ShowcaseComponent} from './showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateDocumentComponent,
    UcWidgetComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    CreateDocumentComponent
  ]
})
export class AppModule { }
