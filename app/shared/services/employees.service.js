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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var EmployeesService = (function () {
    function EmployeesService(http) {
        this.http = http;
    }
    EmployeesService.prototype.getEmployees = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.employees) {
                resolve(_this.employees);
            }
            else {
                if (!_this.loading) {
                    _this.loading = _this.http.get("https://raw.githubusercontent.com/javascript-awesome/angular-911/master/datasources/staff.json").toPromise()
                        .then(function (res) {
                        console.log(res);
                        _this.employees = res.json();
                        _this.loading = null;
                        resolve(_this.employees);
                    })
                        .catch(function (err) {
                        console.error(err);
                        reject(err);
                    });
                }
                else {
                    _this.loading
                        .then(function () {
                        resolve(_this.employees);
                    })
                        .catch(function (err) {
                        console.error(err);
                        reject(err);
                    });
                }
            }
        });
    };
    EmployeesService.prototype.addFeedback = function (employee, feedback) {
        employee.feedbacks = employee.feedbacks || [];
        employee.feedbacks.push(feedback);
    };
    EmployeesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeesService);
    return EmployeesService;
}());
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map