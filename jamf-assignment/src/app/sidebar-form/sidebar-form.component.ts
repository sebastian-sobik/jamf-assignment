import {AfterViewInit, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductFacadeService} from "../product-facade.service";
import {SidebarStateService} from "../sidebar-state.service";

@Component({
  selector: 'app-sidebar-form',
  templateUrl: './sidebar-form.component.html',
  styleUrls: ['./sidebar-form.component.scss']
})
export class SidebarFormComponent {
  form: FormGroup;
  closed$ = this.sidebarState.selectState$();

  constructor(protected fb: FormBuilder,
              protected productsFacade: ProductFacadeService,
              protected sidebarState: SidebarStateService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      imageURL: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern("https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)")
        ])
      ]
    })
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      console.log(this.form.value)
      this.productsFacade.addProduct(
        this.form.value
      )
    }

    this.closeForm();
  }

  closeForm() {
    this.form.reset();
    this.sidebarState.close();
  }

  getClassesWithError(inputName: string) {
    return {
      input__message: true,
      error: this.form.controls[inputName].invalid && this.form.controls[inputName].touched
    }
  }
}
