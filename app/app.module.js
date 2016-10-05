"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var forms_1 = require("@angular/forms");
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var one_component_1 = require('./components/one/one.component');
var two_component_1 = require('./components/two/two.component');
var header_component_1 = require('./shared/components/header/header.component');
var team_list_component_1 = require('./shared/components/team-list/team-list.component');
var employee_tooltip_directive_1 = require("./shared/attribute-directives/employee-tooltip.directive");
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var employees_service_1 = require("./shared/services/employees.service");
var teams_service_1 = require("./shared/services/teams.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule, ng2_bootstrap_1.Ng2BootstrapModule],
            declarations: [app_component_1.AppComponent, one_component_1.OneComponent, two_component_1.TwoComponent, employee_tooltip_directive_1.EmployeeTooltipDirective, header_component_1.HeaderComponent, team_list_component_1.TeamListComponent],
            providers: [teams_service_1.TeamsService, employees_service_1.EmployeesService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map