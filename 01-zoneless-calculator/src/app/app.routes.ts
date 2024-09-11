import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'calculator',
        loadComponent: () => import('@/calculator/views/calculator_view/calculator_view.component'),
    },
    {
        path: '**',
        redirectTo: 'calculator'
    }
];
