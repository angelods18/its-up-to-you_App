import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AppToastComponent } from './app-toast/app-toast.component';

@NgModule({
    declarations:[
        HeaderComponent,
        TabsComponent,
        DashboardComponent,
        HomePage,
        SidemenuComponent,
        AppToastComponent
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