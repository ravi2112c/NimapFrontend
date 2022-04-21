import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  data: any;
  categoryList: any = [];
  selectedCategory: String = '';
  productForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      price: [0],
      stock: [0],
      category: [''],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.crudService.getAll('category', 20, 1, '').subscribe((res) => {
      this.data = res;
      if (this.data['response_code'] == 200) {
        this.data['response_data']['data'].forEach((element: any) => {
          this.categoryList.push(element.name);
        });
      }
    });
  }

  onSubmit(): any {
    this.data['response_data']['data'].forEach((element: any) => {
      if (element['name'] == this.productForm.value['category']) {
        this.productForm.value['category'] = element._id;
      }
    });
    this.crudService.add('product', this.productForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/product-list'));
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
