import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent }      from './components/one/one.component';
import { TwoComponent }      from './components/two/two.component';

const appRoutes: Routes = [
    {
        path: 'one',
        component: OneComponent
    },
    {
        path: 'two',
        component: TwoComponent
    },
    {
        path: '',
        redirectTo: '/one',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);