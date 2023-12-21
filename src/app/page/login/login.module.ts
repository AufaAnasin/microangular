import { HeaderModule } from './../../../../projects/header/src/lib/header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    HeaderModule
  ]
})
export class LoginModule { }
