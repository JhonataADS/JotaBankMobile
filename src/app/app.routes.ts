import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Help } from './pages/help/help';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'help', component: Help},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
