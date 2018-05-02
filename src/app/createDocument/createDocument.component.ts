import {Component} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component ({
  selector: 'app-create-document',
  templateUrl: './createDocument.component.html',
  styleUrls: ['./createDocument.component.css']
})

export class CreateDocumentComponent {
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) {}
}

