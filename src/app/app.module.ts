import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
