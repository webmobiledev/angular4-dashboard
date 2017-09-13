import { NgModule }                        from '@angular/core';
import { CommonModule }                    from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NiComponentsModule }              from '../ni-components/ni-components.module';

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
import { CdkTableModule }                  from '@angular/cdk';
import { ChartsModule }                    from 'ng2-charts';
import { NgxChartsModule }                 from '@swimlane/ngx-charts';
import { CalendarModule }                  from 'angular-calendar';
import { AgmCoreModule }                   from '@agm/core';
import { SqueezeBoxModule }                from 'squeezebox';
import { AmChartsModule }                  from "@amcharts/amcharts3-angular";

import { PageDashboardComponent }          from './dashboards/dashboard-1/dashboard.component';
import { PageDashboard2Component }         from './dashboards/dashboard-2/dashboard-2.component';
import { PageDashboard3Component }         from './dashboards/dashboard-3/dashboard-3.component';
import { PageButtonComponent }             from './material-components/button/button.component';
import { PageCardComponent }               from './material-components/card/card.component';
import { PageCheckboxComponent }           from './material-components/checkbox/checkbox.component';
import { PageChipsComponent }              from './material-components/chips/chips.component';
import { PageDialogComponent }             from './material-components/dialog/dialog.component';
import { DialogResultComponent }           from './material-components/dialog/dialog.component';
import { PageIconComponent }               from './material-components/icon/icon.component';
import { PageInputComponent }              from './material-components/input/input.component';
import { PageListComponent }               from './material-components/list/list.component';
import { PageMenuComponent }               from './material-components/menu/menu.component';
import { PageProgressBarComponent }        from './material-components/progress-bar/progress-bar.component';
import { PageProgressSpinnerComponent }    from './material-components/progress-spinner/progress-spinner.component';
import { PageRadioButtonComponent }        from './material-components/radio-button/radio-button.component';
import { PageSelectComponent }             from './material-components/select/select.component';
import { PageSliderComponent }             from './material-components/slider/slider.component';
import { PageSlideToggleComponent }        from './material-components/slide-toggle/slide-toggle.component';
import { PageSnackbarComponent }           from './material-components/snackbar/snackbar.component';
import { PageTabsComponent }               from './material-components/tabs/tabs.component';
import { PageToolbarComponent }            from './material-components/toolbar/toolbar.component';
import { PageTooltipComponent }            from './material-components/tooltip/tooltip.component';
import { PageNiFilesComponent }            from './ni-components/file/file.component';
import { PageNiCardsComponent }            from './ni-components/card/card.component';
import { PageNiChatComponent }             from './ni-components/chat/chat.component';
import { PageNiAlertsComponent }           from './ni-components/alert/alert.component';
import { PageNiBadgesComponent }           from './ni-components/badge/badge.component';
import { PageNiBreadcrumbsComponent }      from './ni-components/breadcrumb/breadcrumb.component';
import { PageNiHTimelineComponent }        from './ni-components/h-timeline/h-timeline.component';
import { PageTypographyComponent }         from './typography/typography.component';
import { PageNotFoundComponent }           from './not-found/not-found.component';
import { PageAboutUsComponent }            from './pages-service/about-us/about-us.component';
import { PageFaqComponent }                from './pages-service/faq/faq.component';
import { PageTimelineComponent }           from './pages-service/timeline/timeline.component';
import { PageInvoiceComponent }            from './pages-service/invoice/invoice.component';
import { PageNg2ChartsComponent }          from './charts/ng2-charts/ng2-charts.component';
import { PageNgxChartsComponent }          from './charts/ngx-charts/ngx-charts.component';
import { PageAmchartsComponent }           from './charts/amcharts/amcharts.component';
import { PageCalendarComponent }           from './calendar/calendar.component';
import { CalendarDialogComponent }         from './calendar/calendar.component';
import { PageSimpleTableComponent }        from './tables/simple-table/simple-table.component';
import { PageBootstrapTablesComponent }    from './tables/bootstrap-tables/bootstrap-tables.component';
import { PageEditingTableComponent }       from './tables/editing-table/editing-table.component';
import { PageFilteringTableComponent }     from './tables/filtering-table/filtering-table.component';
import { PagePaginationTableComponent }    from './tables/pagination-table/pagination-table.component';
import { PageFormElementsComponent }       from './forms/form-elements/form-elements.component';
import { PageFormLayoutComponent }         from './forms/form-layout/form-layout.component';
import { PageFormValidationComponent }     from './forms/form-validation/form-validation.component';
import { PageGoogleMapComponent }          from './maps/google-map/google-map.component';
import { PageLeafletMapComponent }         from './maps/leaflet-map/leaflet-map.component';
import { PageWidgetsComponent }            from './widgets/widgets.component';
import { PageLayoutsComponent }            from './layouts/layouts.component';
import { PageSignIn1Component }            from './extra-pages/sign-in-1/sign-in-1.component';
import { PageSignIn2Component }            from './extra-pages/sign-in-2/sign-in-2.component';
import { PageSignIn3Component }            from './extra-pages/sign-in-3/sign-in-3.component';
import { PageSignUp1Component }            from './extra-pages/sign-up-1/sign-up-1.component';
import { PageSignUp2Component }            from './extra-pages/sign-up-2/sign-up-2.component';
import { PageForgotComponent }             from './extra-pages/forgot/forgot.component';
import { PageConfirmComponent }            from './extra-pages/confirm/confirm.component';
import { Page404Component }                from './extra-pages/page-404/page-404.component';
import { Page500Component }                from './extra-pages/page-500/page-500.component';
import { PageNiButtonsComponent }          from './ni-components/buttons/buttons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NiComponentsModule,

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
    MdTooltipModule,
    CdkTableModule,
    ChartsModule,
    NgxChartsModule,
    CalendarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    SqueezeBoxModule,
    AmChartsModule
  ],
  declarations: [
    PageDashboardComponent,
    PageDashboard2Component,
    PageDashboard3Component,
    PageButtonComponent,
    PageCardComponent,
    PageCheckboxComponent,
    PageChipsComponent,
    PageDialogComponent,
    DialogResultComponent,
    PageIconComponent,
    PageInputComponent,
    PageListComponent,
    PageMenuComponent,
    PageProgressBarComponent,
    PageProgressSpinnerComponent,
    PageRadioButtonComponent,
    PageSelectComponent,
    PageSliderComponent,
    PageSlideToggleComponent,
    PageSnackbarComponent,
    PageTabsComponent,
    PageToolbarComponent,
    PageTooltipComponent,
    PageNiFilesComponent,
    PageNiCardsComponent,
    PageNiChatComponent,
    PageNiAlertsComponent,
    PageNiBadgesComponent,
    PageNiBreadcrumbsComponent,
    PageNiHTimelineComponent,
    PageTypographyComponent,
    PageNotFoundComponent,
    PageSignIn1Component,
    PageSignIn2Component,
    PageSignIn3Component,
    PageSignUp1Component,
    PageSignUp2Component,
    PageForgotComponent,
    PageConfirmComponent,
    Page404Component,
    Page500Component,
    PageAboutUsComponent,
    PageFaqComponent,
    PageTimelineComponent,
    PageInvoiceComponent,
    PageCalendarComponent,
    CalendarDialogComponent,
    PageSimpleTableComponent,
    PageBootstrapTablesComponent,
    PageEditingTableComponent,
    PageFilteringTableComponent,
    PagePaginationTableComponent,
    PageFormElementsComponent,
    PageFormLayoutComponent,
    PageFormValidationComponent,
    PageGoogleMapComponent,
    PageLeafletMapComponent,
    PageWidgetsComponent,
    PageLayoutsComponent,
    PageNg2ChartsComponent,
    PageNgxChartsComponent,
    PageAmchartsComponent,
    PageNiButtonsComponent
  ],
  exports: [
    PageDashboardComponent,
    PageDashboard2Component,
    PageDashboard3Component,
    PageButtonComponent,
    PageCardComponent,
    PageCheckboxComponent,
    PageChipsComponent,
    PageDialogComponent,
    DialogResultComponent,
    PageIconComponent,
    PageInputComponent,
    PageListComponent,
    PageMenuComponent,
    PageProgressBarComponent,
    PageProgressSpinnerComponent,
    PageRadioButtonComponent,
    PageSelectComponent,
    PageSliderComponent,
    PageSlideToggleComponent,
    PageSnackbarComponent,
    PageTabsComponent,
    PageToolbarComponent,
    PageTooltipComponent,
    PageNiFilesComponent,
    PageNiCardsComponent,
    PageNiChatComponent,
    PageNiAlertsComponent,
    PageNiBadgesComponent,
    PageNiBreadcrumbsComponent,
    PageNiHTimelineComponent,
    PageTypographyComponent,
    PageNotFoundComponent,
    PageSignIn1Component,
    PageSignIn2Component,
    PageSignIn3Component,
    PageSignUp1Component,
    PageSignUp2Component,
    PageForgotComponent,
    PageConfirmComponent,
    Page404Component,
    Page500Component,
    PageAboutUsComponent,
    PageFaqComponent,
    PageTimelineComponent,
    PageInvoiceComponent,
    PageCalendarComponent,
    CalendarDialogComponent,
    PageSimpleTableComponent,
    PageBootstrapTablesComponent,
    PageEditingTableComponent,
    PageFilteringTableComponent,
    PagePaginationTableComponent,
    PageFormElementsComponent,
    PageFormLayoutComponent,
    PageFormValidationComponent,
    PageGoogleMapComponent,
    PageLeafletMapComponent,
    PageWidgetsComponent,
    PageLayoutsComponent,
    PageNg2ChartsComponent,
    PageNgxChartsComponent,
    PageAmchartsComponent,
    PageNiButtonsComponent
  ],
  entryComponents: [
    DialogResultComponent,
    CalendarDialogComponent
  ]
})
export class PagesModule {}
