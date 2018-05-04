import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})

export class ShowcaseComponent {
  @Input() public documents;
}
