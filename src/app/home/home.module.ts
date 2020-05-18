import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {HomePageComponent} from './pages/home/home.page';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomePageComponent,
    ],
    exports: [

    ],
    providers: [

    ],
})

export class HomeModule {}
