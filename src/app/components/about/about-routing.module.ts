import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { CompiderComponent } from './compider/compider.component';
import { MyInfoComponent } from './my-info/my-info.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
        children: [
            {
                path: 'myinfo',
                component: MyInfoComponent
            },
            {
                path: 'compider',
                component: CompiderComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
