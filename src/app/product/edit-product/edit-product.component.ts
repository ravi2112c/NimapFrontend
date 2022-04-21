import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  data: any;
  categoryList: any = [];
  selectedCategory: String = '';
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetBook(this.getId, 'product').subscribe((res) => {
      if (res['response_code'] == 200) {
        this.selectedCategory = res['response_data']['category']['name'];
        this.updateForm.setValue({
          name: res['response_data']['name'],
          price: res['response_data']['price'],
          description: res['response_data']['description'],
          stock: res['response_data']['stock'],
          category: res['response_data']['category']['name'],
        });
      }
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [0],
      description: [''],
      stock: [0],
      category: [''],
    });

    this.crudService.getAll('category', 20, 1, '').subscribe((res) => {
      this.data = res;
      if (this.data['response_code'] == 200) {
        this.data['response_data']['data'].forEach((element: any) => {
          if (element.name != this.selectedCategory) {
            this.categoryList.push(element.name);
          }
        });
      }
    });
  }
  ngOnInit() {}
  onUpdate(): any {
    this.data['response_data']['data'].forEach((element: any) => {
      if (element['name'] == this.updateForm.value['category']) {
        this.updateForm.value['category'] = element._id;
      }
    });
    this.crudService
      .update(this.getId, this.updateForm.value, 'product')
      .subscribe(
        () => {
          console.log('Data updated successfully!');
          this.ngZone.run(() => this.router.navigateByUrl('/product-list'));
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
}
