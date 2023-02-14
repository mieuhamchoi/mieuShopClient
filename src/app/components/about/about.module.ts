import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInfoComponent } from './my-info/my-info.component';
import { CompiderComponent } from './compider/compider.component';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [AboutComponent, CompiderComponent, MyInfoComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
})
export class AboutModule { }
