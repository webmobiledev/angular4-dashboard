import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { HttpModule }                from '@angular/http';
import { RouterModule }              from '@angular/router';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

import { HorizontalNavbarComponent } from './components/horizontal-navbar/horizontal-navbar.component';
import { VerticalNavbarComponent }   from './components/vertical-navbar/vertical-navbar.component';
import { AdditionNavbarComponent }   from './components/addition-navbar/addition-navbar.component';
import { LogoComponent }             from './components/logo/logo.component';
import { MenuComponent }             from './components/menu/menu.component';
import { FooterComponent }           from './components/footer/footer.component';

@NgModule({
  declarations: [
    HorizontalNavbarComponent,
    VerticalNavbarComponent,
    AdditionNavbarComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent
  ],
  exports: [
    HorizontalNavbarComponent,
    VerticalNavbarComponent,
    AdditionNavbarComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    RouterModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
  ]
})
export class UIModule { }
