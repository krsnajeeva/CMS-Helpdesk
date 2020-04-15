import { NgModule } from "@angular/core";
import { HelpDeskListViewComponent } from './list-view/list-view.component';
import { TableModule } from 'primeng/table';


@NgModule({
    declarations: [
        HelpDeskListViewComponent
    ],
    imports: [
        TableModule
    ],
    exports: [
        HelpDeskListViewComponent
    ],
    providers: [
        TableModule
    ]
})
export class HelpDeskFeatureModule { }