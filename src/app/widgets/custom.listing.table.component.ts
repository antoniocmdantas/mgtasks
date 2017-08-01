import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EntityLineComponent } from "angularm";


@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<td *ngFor="let property of entity.mountProperties()">{{property.value}}</td>
            <td>
                <div class="w3-dropdown-hover">
                    <button class="w3-button">Actions</button>
                    <div class="w3-dropdown-content w3-bar-block w3-card-4">
                    <a href="#" (click)="show()" class="w3-bar-item w3-button">Show</a>
                    <a href="#" (click)="edit()" class="w3-bar-item w3-button">Edit</a>
                    <a href="#" (click)="destroy()" class="w3-bar-item w3-button">Destroy</a>
                    </div>
                </div>
            </td>`,
})
export class CustomEntityLineComponent extends EntityLineComponent {

}
