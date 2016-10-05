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
var employees_service_1 = require("../../shared/services/employees.service");
var teams_service_1 = require("../../shared/services/teams.service");
var TwoComponent = (function () {
    function TwoComponent(EmployeesService, TeamsService) {
        this.EmployeesService = EmployeesService;
        this.TeamsService = TeamsService;
        this.feedback = { text: '', name: '' };
    }
    TwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.EmployeesService.getEmployees().then(function (employees) {
            _this.employees = employees;
            _this.foundEmployees = employees.slice(0, 20);
            _this.teams = _this.TeamsService.teams;
        });
    };
    TwoComponent.prototype.selectEmployee = function (employee) {
        if (this.selectedEmployee === employee) {
            this.selectedEmployee = null;
        }
        else {
            this.selectedEmployee = employee;
        }
    };
    TwoComponent.prototype.searchForEmployees = function () {
        var query = new RegExp(this.input, 'ig');
        this.foundEmployees = this.employees.filter(function (employee) {
            return (query.test(employee.name) || query.test(employee.grade) || query.test(employee.age.toString()) || query.test(employee.job));
        }).slice(0, 20);
    };
    TwoComponent.prototype.toggleToSelectedTeam = function (employee, $event) {
        $event.stopPropagation();
        if (this.teams.selectedTeam) {
            if (!this.selectedTeamContains(employee.id)) {
                this.TeamsService.addEmployeeToTeam(employee, this.teams.selectedTeam);
            }
            else {
                this.TeamsService.deleteEmployeeFromTeam(employee, this.teams.selectedTeam);
            }
        }
        else {
            $event.preventDefault();
        }
    };
    TwoComponent.prototype.selectedTeamContains = function (id) {
        if (this.teams && this.teams.selectedTeam) {
            return !!this.teams.selectedTeam.employees.filter(function (employee) {
                return employee.id === id;
            }).length;
        }
        return false;
    };
    TwoComponent.prototype.addFeedback = function (employee) {
        this.EmployeesService.addFeedback(employee, this.feedback);
        this.feedback = { text: '', name: '' };
    };
    TwoComponent = __decorate([
        core_1.Component({
            selector: 'two',
            templateUrl: 'app/components/two/two.component.html',
        }), 
        __metadata('design:paramtypes', [employees_service_1.EmployeesService, teams_service_1.TeamsService])
    ], TwoComponent);
    return TwoComponent;
}());
exports.TwoComponent = TwoComponent;
//# sourceMappingURL=two.component.js.map