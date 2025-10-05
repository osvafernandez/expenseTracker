import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'expenses',
    pathMatch: 'full'
  },
  {
    path: 'expenses',
    loadComponent: () => import('./pages/gastos/expenses.component').then(m => m.ExpensesComponent)
  },
  {
    path: 'shop-list',
    loadComponent: () => import('./pages/shopList/shop-list.component').then(m => m.ShopListComponent)
  }
];
