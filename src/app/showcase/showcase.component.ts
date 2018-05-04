import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})

export class ShowcaseComponent {
  @Input() public documents;
  @Output() public deleteDocument: EventEmitter<any> = new EventEmitter();

  handleDelete(id) {
    this.deleteDocument.emit(id);
  }
}
