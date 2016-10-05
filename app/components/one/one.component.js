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
var rxjs_1 = require("rxjs");
var OneComponent = (function () {
    function OneComponent(employeesService, teamsService) {
        var _this = this;
        this.employeesService = employeesService;
        this.teamsService = teamsService;
        this.employeeSource = rxjs_1.Observable.create(function (observer) {
            // Runs on every search
            observer.next(_this.input);
        }).mergeMap(function (token) { return _this.getEmployeesAsObservable(token); });
    }
    OneComponent.prototype.getEmployeesAsObservable = function (token) {
        var _this = this;
        var query = new RegExp(token, 'ig');
        return rxjs_1.Observable.of(this.employees.filter(function (employee) {
            return _this.teams.selectedTeamCopy.employees.indexOf(employee) == -1 &&
                (query.test(employee.name) || query.test(employee.grade) || query.test(employee.age.toString()) || query.test(employee.job));
        }));
    };
    OneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeesService.getEmployees().then(function (employees) {
            _this.employees = employees;
            _this.teams = _this.teamsService.teams;
        });
    };
    OneComponent.prototype.refresh = function () {
        var team = this.teams.selectedTeam;
        if (team) {
            this.teamsService.syncTeams();
        }
        else {
            throw new Error('no team selected');
        }
    };
    OneComponent.prototype.typeaheadOnSelect = function (event) {
        var employee = event.item;
        this.teams.selectedTeamCopy.employees.push(employee);
        this.input = '';
    };
    OneComponent.prototype.removeEmployeeFromSelectedEmployees = function (employee) {
        this.teams.selectedTeamCopy.employees.splice(this.teams.selectedTeamCopy.employees.indexOf(employee), 1);
    };
    OneComponent = __decorate([
        core_1.Component({
            selector: 'one',
            templateUrl: 'app/components/one/one.component.html',
        }), 
        __metadata('design:paramtypes', [employees_service_1.EmployeesService, teams_service_1.TeamsService])
    ], OneComponent);
    return OneComponent;
}());
exports.OneComponent = OneComponent;
//# sourceMappingURL=one.component.js.map