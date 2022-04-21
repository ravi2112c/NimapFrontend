import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.categoryForm = this.formBuilder.group({
      name: [''],
      type: [''],
      description: [''],
    });
  }
  ngOnInit() {}
  onSubmit(): any {
    console.log('Hii', this.categoryForm.value);
    this.crudService.add('category', this.categoryForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/category-list'));
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
