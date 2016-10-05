import {Injectable} from '@angular/core';
import {Employee} from '../models/employee.model';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeesService {

    constructor(private http: Http) {
    }

    private employees: Employee[];
    private loading: Promise<any>;

    getEmployees(): Promise<Employee[]> {
        return new Promise((resolve, reject) => {
            if (this.employees) {
                resolve(this.employees);
            }
            else {
                if (!this.loading) {
                    this.loading = this.http.get(`https://raw.githubusercontent.com/javascript-awesome/angular-911/master/datasources/staff.json`).toPromise()
                        .then((res) => {
                            console.log(res);
                            this.employees = res.json();
                            this.loading = null;
                            resolve(this.employees);
                        })
                        .catch((err) => {
                            console.error(err);
                            reject(err);
                        })
                }
                else {
                    this.loading
                        .then(() => {
                            resolve(this.employees);
                        })
                        .catch((err) => {
                            console.error(err);
                            reject(err);
                        })
                }
            }
        })
    }

    addFeedback(employee, feedback): void {
        employee.feedbacks = employee.feedbacks || [];
        employee.feedbacks.push(feedback);
    }
}