import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
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
    this.crudService.GetBook(this.getId, 'category').subscribe((res: any) => {
      if (res['response_code'] == 200) {
        this.updateForm.setValue({
          name: res['response_data']['name'],
          type: res['response_data']['type'],
          description: res['response_data']['description'],
        });
      }
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      type: [''],
      description: [''],
    });
  }
  ngOnInit() {}
  onUpdate(): any {
    this.crudService
      .update(this.getId, this.updateForm.value, 'category')
      .subscribe(
        () => {
          console.log('Data updated successfully!');
          this.ngZone.run(() => this.router.navigateByUrl('/category-list'));
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
