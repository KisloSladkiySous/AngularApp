import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { DataprocessingComponent } from "./dataprocessing/dataprocessing.component";
import { PersonaldataComponent } from "./personaldata/personaldata.component";

export const routes: Routes=[
    {path: '',component:PersonaldataComponent},
    {path: 'contacts',component:ContactsComponent},
    {path:'data',component:DataprocessingComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}