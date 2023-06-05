import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// ChangePassword Component

import { InsertAboutusComponent } from "./aboutus/insert-aboutus/insert-aboutus.component";
import { ViewAboutusComponent } from "./aboutus/view-aboutus/view-aboutus.component";
import { ViewServiceComponent } from "./service/view-service/view-service.component";
import { InsertServiceComponent } from "./service/insert-service/insert-service.component";
import { ViewDetailsofworkComponent } from "./detailsofwork/view-detailsofwork/view-detailsofwork.component";
import { InsertDetailsofworkComponent } from "./detailsofwork/insert-detailsofwork/insert-detailsofwork.component";
import { ViewListpartnerComponent } from "./listpartner/view-listpartner/view-listpartner.component";
import { InsertListpartnerComponent } from "./listpartner/insert-listpartner/insert-listpartner.component";



const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "ViewService",
                component: ViewServiceComponent,
            },  
            {
                path: "InsertService",
                component: InsertServiceComponent,
            },  
            {
                path: "ViewAboutus",
                component: ViewAboutusComponent,
            },  
            {
                path: "InsertAboutus",
                component: InsertAboutusComponent,
            },  
            {
                path: "ViewDetailsofwork",
                component: ViewDetailsofworkComponent,
            },  
            {
                path: "InsertDetailsofwork",
                component: InsertDetailsofworkComponent,
            },  
            {
                path: "ViewListPartner",
                component: ViewListpartnerComponent,
            },  
            {
                path: "InsertListPartner",
                component: InsertListpartnerComponent,
            },  
],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule { }
