import {Component} from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
        <nav class="navbar navbar-fixed-top">
            <div class="container">
                <ul class="nav nav-tabs">
                    <li [routerLinkActive]="['active']"><a routerLink="/one">One</a></li>
                    <li [routerLinkActive]="['active']"><a routerLink="/two">Two</a></li>
                </ul>
            </div>
        </nav>
    `
})
export class HeaderComponent {

}