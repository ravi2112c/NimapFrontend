import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-record-product',
  templateUrl: './record-product.component.html',
  styleUrls: ['./record-product.component.scss'],
})
export class RecordProductComponent implements OnInit {
  items: any = 40;
  pageSize: number = 1;
  Products: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private crudService: CrudService) {}
  ngOnInit(): void {
    this.crudService.getAll('product', 10, 1, '').subscribe((res) => {
      let data: any = res;
      if (data['response_code'] == 200) {
        this.Products = data['response_data']['data'];
        this.count = data['response_data']['count'];
      }
    });
  }
  delete(id: any, i: any) {
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.delete(id, 'product').subscribe((res) => {
        this.Products.splice(i, 1);
      });
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.crudService.getAll('product', 10, this.page, '').subscribe((res) => {
      let data: any = res;
      if (data['response_code'] == 200) {
        this.Products = data['response_data']['data'];
        this.count = data['response_data']['count'];
      }
    });
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.crudService
      .getAll('product', this.tableSize, this.page, '')
      .subscribe((res) => {
        let data: any = res;
        if (data['response_code'] == 200) {
          this.Products = data['response_data']['data'];
          this.count = data['response_data']['count'];
        }
      });
  }
}
