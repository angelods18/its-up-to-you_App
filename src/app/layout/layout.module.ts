import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
import { HomePage } from "./home/home.page";
import { TabsComponent } from "./tabs/tabs.component";


@NgModule({
    declarations:[
        HeaderComponent,
        TabsComponent,
        HomePage
    ],
    imports: [
        IonicModule
    ],
    exports:[
        HeaderComponent,
        HomePage
    ]
})
export class LayoutModule {}