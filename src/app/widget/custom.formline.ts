import { Component } from '@angular/core';

import { FormLineComponent } from "angularm";

@Component({
    selector: 'div [mgFormLine]',
    template:
        `<label for="{{propertyType.entityType.singular}}_{{propertyType.name}}"
            >{{propertyType.name | titleCase}}</label>
          <datalist id="{{propertyType.entityType.singular}}_{{propertyType.name}}_list">
            <option value="Open">
            <option value="Closed">
            <option value="On going">
            <option value="Review">
            <option value="Cancelled">
            </datalist>
            <input [attr.list]="propertyType.entityType.singular + '_' + propertyType.name + '_list'" id="{{propertyType.name | titleCase}}">
        <br>`,
})
export class CustomFormLineComponent extends FormLineComponent { }
