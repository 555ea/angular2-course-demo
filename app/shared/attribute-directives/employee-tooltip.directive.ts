import {Directive, ElementRef, Input, Renderer, OnInit} from '@angular/core';
import {Employee} from "../models/employee.model";

@Directive({ selector: '[employeeTooltip]' })

export class EmployeeTooltipDirective implements OnInit{
    @Input('employeeTooltip') employee: Employee;

    constructor(el: ElementRef, renderer: Renderer) {
        el.nativeElement.removeAttribute('[employeeTooltip]');
        el.nativeElement.setAttribute('tooltip', '{{employee.grade + employee.job + employee.age}}');
    }

    ngOnInit(){

    }
}