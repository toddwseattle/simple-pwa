import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
