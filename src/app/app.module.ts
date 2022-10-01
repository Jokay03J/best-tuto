import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule, NbIconModule, NbActionsModule, NbListModule, NbCardModule, NbSelectModule, NbInputModule, NbFormFieldModule, NbToastrModule, NbTagModule, NbAutocompleteModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NewPageComponent } from './new-page/new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountPageComponent,
    NewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // register http module
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbListModule,
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbFormFieldModule,
    NbToastrModule.forRoot(),
    NbTagModule,
    NbAutocompleteModule,
    NbSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
