import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import apiHeaders from '../../apiHeaders';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})

export class ShowcaseComponent {
  documents;
  noDocumentAlert: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.noDocumentAlert = false;
    this.http.request(
      'GET',
      'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records',
      {
        headers: {
          ...apiHeaders
        }
      }
    ).subscribe((data) => {
        this.documents = data;
        console.log(this.documents);
        if(this.documents.isEmpty) {
          this.noDocumentAlert = true;
        }
      },
      (e) => {
        console.log(e);
      });
  }
}
