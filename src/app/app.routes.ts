import { Routes } from '@angular/router';
import { ListComponent } from './features/components/list/list.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create-product',
        loadComponent: () =>
            import('./features/components/create/create.component').then(
                (m) => m.CreateComponent
            ),
    }
];
