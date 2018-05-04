import {Component, EventEmitter} from '@angular/core';
import {CreateDocumentComponent} from './createDocument/createDocument.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {HttpClient} from '@angular/common/http';
import apiHeaders from '../apiHeaders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bsModalRef: BsModalRef;
  documents;

  constructor(private modalService: BsModalService,
              public http: HttpClient) {
  }

  setDocuments() {
    this.http.request(
      'GET',
      'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records',
      {
        headers: {
          ...apiHeaders
        }
      }
    ).subscribe((d) => {
        this.documents = d;
      },
      () => {
        alert('Problem retrieving documents');
      });
  }

  openModalWithComponent() {
    const initialState = {
      name: 'Type your Name',
      description: 'Add Some Description',
      images: [],
      title: 'Create a Document'
    };
    this.modalService.onHide = new EventEmitter<any>();
    this.modalService.onHide.subscribe(() => {
      this.setDocuments();
    });
    this.bsModalRef = this.modalService.show(CreateDocumentComponent,
      {initialState});
    this.bsModalRef.content.closeBtnName = 'Cancel';
    this.bsModalRef.content.saveBtnName = 'Save';
  }

  ngOnInit() {
    this.setDocuments();
  }
}
