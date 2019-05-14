import { Component } from '@angular/core';

@Component({
  selector: 'app-dome-sku',
  templateUrl: './dome-sku.component.html',
  styleUrls: ['./dome-sku.component.css']
})
export class DomeSkuComponent {

  constructor() {

  }
  onSubmit(form: any) {
    console.log('you submitted value:', form);
  }



}






