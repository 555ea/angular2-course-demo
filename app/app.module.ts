import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routing';
import {FormsModule} from "@angular/forms";
import { HttpModule }    from '@angular/http';

import {AppComponent} from './app.component';
import {OneComponent} from './components/one/one.component';
import {TwoComponent} from './components/two/two.component';

import {HeaderComponent} from './shared/components/header/header.component';
import {TeamListComponent} from './shared/components/team-list/team-list.component'
import {EmployeeTooltipDirective} from "./shared/attribute-directives/employee-tooltip.directive";

import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';
import {EmployeesService} from "./shared/services/employees.service";
import {TeamsService} from "./shared/services/teams.service";


@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule, Ng2BootstrapModule],
    declarations: [AppComponent, OneComponent, TwoComponent, EmployeeTooltipDirective, HeaderComponent, TeamListComponent],
    providers:[TeamsService, EmployeesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}