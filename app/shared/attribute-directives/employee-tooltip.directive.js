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
var employee_model_1 = require("../models/employee.model");
var EmployeeTooltipDirective = (function () {
    function EmployeeTooltipDirective(el, renderer) {
        el.nativeElement.removeAttribute('[employeeTooltip]');
        el.nativeElement.setAttribute('tooltip', '{{employee.grade + employee.job + employee.age}}');
    }
    EmployeeTooltipDirective.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('employeeTooltip'), 
        __metadata('design:type', employee_model_1.Employee)
    ], EmployeeTooltipDirective.prototype, "employee", void 0);
    EmployeeTooltipDirective = __decorate([
        core_1.Directive({ selector: '[employeeTooltip]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], EmployeeTooltipDirective);
    return EmployeeTooltipDirective;
}());
exports.EmployeeTooltipDirective = EmployeeTooltipDirective;
//# sourceMappingURL=employee-tooltip.directive.js.map