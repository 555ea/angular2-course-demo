import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <my-header></my-header>
        <div class="col-md-9">
            <router-outlet ></router-outlet>
        </div>
        <team-list class="col-md-3"></team-list>
    `,
})
export class AppComponent {

}