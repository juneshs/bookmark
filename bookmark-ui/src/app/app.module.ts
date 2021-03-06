import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProjectService} from './shared/project/project.service';

import {
  MatAutocompleteModule,
  MatOptionModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule
} from '@angular/material';

import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import {SearchpocComponent} from './searchpoc/searchpoc.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectbookmarkComponent} from './projectbookmark/projectbookmark.component';
import {GlobalService} from "./global.service";
import {AtsearchComponent} from './atsearch/atsearch.component';
import {AddprojectComponent} from './addproject/addproject.component';
import {ProjectEditComponent} from './project-edit/project-edit.component';
import { AddbookmarkComponent } from './addbookmark/addbookmark.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SearchpocComponent,
    HomeComponent,
    ProjectbookmarkComponent,
    AtsearchComponent,
    AddprojectComponent,
    ProjectEditComponent,
    AddbookmarkComponent
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GlobalService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

