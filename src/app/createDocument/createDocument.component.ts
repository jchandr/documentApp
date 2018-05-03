import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-document',
  templateUrl: './createDocument.component.html',
  styleUrls: ['./createDocument.component.css']
})

export class CreateDocumentComponent {
  name: String;
  description: String;
  images: Array<Object>;
  title: String;

  inputName = '';
  inputDescription = '';
  UPLOADCARE_PUBLIC_KEY = 'demopublickey';

  constructor(public bsModalRef: BsModalRef,
              private http: HttpClient) {
  }

  changeName(e) {
    this.inputName = e.target.value;
  }

  changeDescription(e) {
    this.inputDescription = e.target.value;
  }

  handleOnUploadComplete(e) {
    console.log(e);
    this.images = [];
    for (let i = 0; i < e.count; i++) {
      const tempImageLink = e.cdnUrl + 'nth/' + i + '/';
      this.images.push({
        'url': tempImageLink
      });
    }
  }

  handleSave() {
    const config = {
      headers: {
        'Authorization': 'Bearer 314a1849bfe7a604850922b4de3144aa46b69c5e-90cc387c792d007b67bc055409392c22ee85548c',
        'Content-Type': 'application/json'
      }
    };
    this.http.request(
      'POST',
      'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records',
      {
        headers: {
          ...config.headers
        },
        body: {
          'name': this.inputName,
          'description': this.inputDescription,
          'imgs': this.images
        }
      }
    ).subscribe(() => alert('Document Created Successfully'),
      ({error}) => {
        if (error.error !== undefined) {
          alert(error.error);
        } else {
          alert('There was a Unknown Problem, Try again later !');
        }
      });
    this.handleClose();
  }

  handleClose() {
    this.bsModalRef.hide();
  }
}
