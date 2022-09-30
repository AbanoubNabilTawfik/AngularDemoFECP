import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { FooterComponent } from './footer/footer.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructualDirectivesComponent } from './structual-directives/structual-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { CielnumberPipe } from './cielnumber.pipe';
import { SquarePipe } from './square.pipe';
import { EgyptionPoundPipe } from './egyption-pound.pipe';
import { MaxarrayPipe } from './maxarray.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './overview/overview.component';
import { PricingComponent } from './pricing/pricing.component';
import { AuthModule } from 'src/auth/auth.module';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LeftNavComponent,
    RightNavComponent,
    FooterComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructualDirectivesComponent,
    PipesComponent,
    CielnumberPipe,
    SquarePipe,
    EgyptionPoundPipe,
    MaxarrayPipe,
    ParentComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ProductComponent,
    DepartmentsComponent,
    PageNotFoundComponent,
    DepartmentDetailsComponent,
    ContactComponent,
    OverviewComponent,
    PricingComponent,
    TdfComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
