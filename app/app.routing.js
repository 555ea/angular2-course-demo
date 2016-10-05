"use strict";
var router_1 = require('@angular/router');
var one_component_1 = require('./components/one/one.component');
var two_component_1 = require('./components/two/two.component');
var appRoutes = [
    {
        path: 'one',
        component: one_component_1.OneComponent
    },
    {
        path: 'two',
        component: two_component_1.TwoComponent
    },
    {
        path: '',
        redirectTo: '/one',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map