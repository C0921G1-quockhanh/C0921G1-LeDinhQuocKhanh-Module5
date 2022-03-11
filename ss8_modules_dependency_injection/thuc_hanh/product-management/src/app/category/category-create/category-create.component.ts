import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    });
  }

  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category);
    this.categoryForm.reset();
  }

}
