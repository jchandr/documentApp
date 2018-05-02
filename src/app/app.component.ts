import { Component } from '@angular/core';
import {CreateDocumentComponent} from './createDocument/createDocument.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  openModalWithComponent() {
    const initialState = {
      name: '',
      description: '',
      images: [],
      title: 'Create a Document'
    };
    this.bsModalRef = this.modalService.show(CreateDocumentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Cancel';
    this.bsModalRef.content.saveBtnName = 'Save';
  }
}
