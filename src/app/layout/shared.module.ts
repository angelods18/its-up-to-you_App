import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        HeaderComponent,
        TabsComponent,
        DashboardComponent,
        HomePage
    ],
    imports:[
        IonicModule,
        HttpClientModule,
        RouterModule
    ],
    exports:[
        HeaderComponent,
        DashboardComponent,
        HomePage
    ]
})
export class SharedModule {}