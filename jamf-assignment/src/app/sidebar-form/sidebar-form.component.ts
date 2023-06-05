import { Component } from '@angular/core';
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
  formData : FormData;
  closed$ = this.sidebarState.selectState$();
  errorMessage = 'Błedny adres URL'

  constructor(protected fb: FormBuilder,
              protected productsFacade: ProductFacadeService,
              protected sidebarState: SidebarStateService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern("^[^\\s]+(\\s+[^\\s]+)*$")])],
      price: ['', Validators.compose([Validators.required, Validators.min(0.1)])],
      imageURL: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern("^blob:|https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)")
        ])
      ],
      imageFile: ['']
    })
  }

  onSubmit() {
    this.formData  = new FormData();
    this.formData.append('file', this.form.get('imageFile')?.value);
    if (this.form.valid) {
      this.productsFacade.addProduct(this.form.value)
    }
    this.closeForm();
  }

  closeForm() {
    this.form.reset();
    this.sidebarState.close();
  }

  checkError(customMessage: string, controlName : string) : string {
    const control = this.form.controls[controlName];
    if(!control.errors || !control.touched || control.pristine) return '';

    if(control.errors['required']) {
      return 'Pole nie może być puste';
    } else if(control.invalid){
      return customMessage;
    }

    return ''
  }

  getNameInputError() {
    return this.checkError("Nazwa nie może się zaczynać lub kończyć spacją", 'name');
  }

  getPriceInputError() {
    return this.checkError("Cena musi być dodatnia", 'price');
  }

  getUrlInputError() {
    return this.checkError("Link musi się zaczynać 'https://'", 'imageURL');
  }

  onFileSelected($event: Event) {
    // @ts-ignore
    const file = $event.target.files[0];
    this.form.patchValue({
      'imageURL' : URL.createObjectURL(file)
    })
  }
}
