import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-records-category',
  templateUrl: './records-category.component.html',
  styleUrls: ['./records-category.component.scss'],
})
export class RecordsCategoryComponent implements OnInit {
  p: number = 1;
  //collection: any = [];
  Category: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private crudService: CrudService) {}
  ngOnInit(): void {
    this.crudService.getAll('category', 10, 1, '').subscribe((res) => {
      let data: any = res;
      if (data['response_code'] == 200) {
        this.Category = data['response_data']['data'];
        this.count = data['response_data']['count'];
      }
    });
  }
  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.delete(id, 'category').subscribe((res) => {
        this.Category.splice(i, 1);
      });
    }
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.crudService.getAll('category', 10, this.page, '').subscribe((res) => {
      let data: any = res;
      if (data['response_code'] == 200) {
        this.Category = data['response_data']['data'];
        this.count = data['response_data']['count'];
      }
    });
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.crudService
      .getAll('category', this.tableSize, this.page, '')
      .subscribe((res) => {
        let data: any = res;
        if (data['response_code'] == 200) {
          this.Category = data['response_data']['data'];
          this.count = data['response_data']['count'];
        }
      });
  }
}
