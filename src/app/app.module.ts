import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateDocumentComponent } from './createDocument/createDocument.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateDocumentComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
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
