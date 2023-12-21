import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  @Input() headerName: string = 'Topbank'
  @Input() headerVersion: string = '2.0'
}
