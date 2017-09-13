import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { DefaultLayoutComponent }       from './layouts/default/default.component';
import { BoxedLayoutComponent }         from './layouts/boxed/boxed.component';
import { DefaultCLayoutComponent }      from './layouts/default-c/default-c.component';
import { BoxedCLayoutComponent }        from './layouts/boxed-c/boxed-c.component';
import { ExtraLayoutComponent }         from './layouts/extra/extra.component';

import { PageDashboardComponent }       from './pages/dashboards/dashboard-1/dashboard.component';
import { PageDashboard2Component }      from './pages/dashboards/dashboard-2/dashboard-2.component';
import { PageDashboard3Component }      from './pages/dashboards/dashboard-3/dashboard-3.component';
import { PageButtonComponent }          from './pages/material-components/button/button.component';
import { PageCardComponent }            from './pages/material-components/card/card.component';
import { PageCheckboxComponent }        from './pages/material-components/checkbox/checkbox.component';
import { PageChipsComponent }           from './pages/material-components/chips/chips.component';
import { PageDialogComponent }          from './pages/material-components/dialog/dialog.component';
import { PageIconComponent }            from './pages/material-components/icon/icon.component';
import { PageInputComponent }           from './pages/material-components/input/input.component';
import { PageListComponent }            from './pages/material-components/list/list.component';
import { PageMenuComponent }            from './pages/material-components/menu/menu.component';
import { PageProgressBarComponent }     from './pages/material-components/progress-bar/progress-bar.component';
import { PageProgressSpinnerComponent } from './pages/material-components/progress-spinner/progress-spinner.component';
import { PageRadioButtonComponent }     from './pages/material-components/radio-button/radio-button.component';
import { PageSelectComponent }          from './pages/material-components/select/select.component';
import { PageSliderComponent }          from './pages/material-components/slider/slider.component';
import { PageSlideToggleComponent }     from './pages/material-components/slide-toggle/slide-toggle.component';
import { PageSnackbarComponent }        from './pages/material-components/snackbar/snackbar.component';
import { PageTabsComponent }            from './pages/material-components/tabs/tabs.component';
import { PageToolbarComponent }         from './pages/material-components/toolbar/toolbar.component';
import { PageTooltipComponent }         from './pages/material-components/tooltip/tooltip.component';

import { PageNiAlertsComponent }        from './pages/ni-components/alert/alert.component';
import { PageNiBadgesComponent }        from './pages/ni-components/badge/badge.component';
import { PageNiBreadcrumbsComponent }   from './pages/ni-components/breadcrumb/breadcrumb.component';
import { PageNiButtonsComponent }       from './pages/ni-components/buttons/buttons.component';
import { PageNiCardsComponent }         from './pages/ni-components/card/card.component';
import { PageNiChatComponent }          from './pages/ni-components/chat/chat.component';
import { PageNiFilesComponent }         from './pages/ni-components/file/file.component';
import { PageNiHTimelineComponent }     from './pages/ni-components/h-timeline/h-timeline.component';

import { PageTypographyComponent }      from './pages/typography/typography.component';
import { PageNotFoundComponent }        from './pages/not-found/not-found.component';

import { PageSignIn1Component }         from './pages/extra-pages/sign-in-1/sign-in-1.component';
import { PageSignIn2Component }         from './pages/extra-pages/sign-in-2/sign-in-2.component';
import { PageSignIn3Component }         from './pages/extra-pages/sign-in-3/sign-in-3.component';
import { PageSignUp1Component }         from './pages/extra-pages/sign-up-1/sign-up-1.component';
import { PageSignUp2Component }         from './pages/extra-pages/sign-up-2/sign-up-2.component';
import { PageForgotComponent }          from './pages/extra-pages/forgot/forgot.component';
import { PageConfirmComponent }         from './pages/extra-pages/confirm/confirm.component';
import { Page404Component }             from './pages/extra-pages/page-404/page-404.component';
import { Page500Component }             from './pages/extra-pages/page-500/page-500.component';
import { PageAboutUsComponent }         from './pages/pages-service/about-us/about-us.component';
import { PageFaqComponent }             from './pages/pages-service/faq/faq.component';
import { PageTimelineComponent }        from './pages/pages-service/timeline/timeline.component';
import { PageInvoiceComponent }         from './pages/pages-service/invoice/invoice.component';
import { PageNg2ChartsComponent }       from './pages/charts/ng2-charts/ng2-charts.component';
import { PageNgxChartsComponent }       from './pages/charts/ngx-charts/ngx-charts.component';
import { PageAmchartsComponent }        from './pages/charts/amcharts/amcharts.component';
import { PageCalendarComponent }        from './pages/calendar/calendar.component';
import { PageSimpleTableComponent }     from './pages/tables/simple-table/simple-table.component';
import { PageBootstrapTablesComponent } from './pages/tables/bootstrap-tables/bootstrap-tables.component';
import { PageEditingTableComponent }    from './pages/tables/editing-table/editing-table.component';
import { PageFilteringTableComponent }  from './pages/tables/filtering-table/filtering-table.component';
import { PagePaginationTableComponent } from './pages/tables/pagination-table/pagination-table.component';
import { PageFormElementsComponent }    from './pages/forms/form-elements/form-elements.component';
import { PageFormLayoutComponent }      from './pages/forms/form-layout/form-layout.component';
import { PageFormValidationComponent }  from './pages/forms/form-validation/form-validation.component';
import { PageGoogleMapComponent }       from './pages/maps/google-map/google-map.component';
import { PageLeafletMapComponent }      from './pages/maps/leaflet-map/leaflet-map.component';
import { PageWidgetsComponent }         from './pages/widgets/widgets.component';
import { PageLayoutsComponent }         from './pages/layouts/layouts.component';

const defaultRoutes: Routes = [
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'dashboard-2', component: PageDashboard2Component },
  { path: 'dashboard-3', component: PageDashboard3Component },
  { path: 'typography', component: PageTypographyComponent },
  { path: 'widgets', component: PageWidgetsComponent },
  { path: 'calendar', component: PageCalendarComponent },
  { path: 'button', component: PageButtonComponent },
  { path: 'card', component: PageCardComponent },
  { path: 'checkbox', component: PageCheckboxComponent },
  { path: 'chips', component: PageChipsComponent },
  { path: 'dialog', component: PageDialogComponent },
  { path: 'icon', component: PageIconComponent },
  { path: 'input', component: PageInputComponent },
  { path: 'list', component: PageListComponent },
  { path: 'menu', component: PageMenuComponent },
  { path: 'progress-bar', component: PageProgressBarComponent },
  { path: 'progress-spinner', component: PageProgressSpinnerComponent },
  { path: 'radio-button', component: PageRadioButtonComponent },
  { path: 'select', component: PageSelectComponent },
  { path: 'slider', component: PageSliderComponent },
  { path: 'slide-toggle', component: PageSlideToggleComponent },
  { path: 'snackbar', component: PageSnackbarComponent },
  { path: 'tabs', component: PageTabsComponent },
  { path: 'toolbar', component: PageToolbarComponent },
  { path: 'tooltip', component: PageTooltipComponent },
  { path: 'ni-alerts', component: PageNiAlertsComponent },
  { path: 'ni-badges', component: PageNiBadgesComponent },
  { path: 'ni-breadcrumbs', component: PageNiBreadcrumbsComponent },
  { path: 'ni-buttons', component: PageNiButtonsComponent },
  { path: 'ni-cards', component: PageNiCardsComponent },
  { path: 'ni-chat', component: PageNiChatComponent },
  { path: 'ni-files', component: PageNiFilesComponent },
  { path: 'ni-h-timeline', component: PageNiHTimelineComponent },
  { path: 'sign-in', component: PageSignIn2Component },
  { path: 'sign-up', component: PageSignUp2Component },
  { path: 'about-us', component: PageAboutUsComponent },
  { path: 'faq', component: PageFaqComponent },
  { path: 'timeline', component: PageTimelineComponent },
  { path: 'invoice', component: PageInvoiceComponent },
  { path: 'ng2-charts', component: PageNg2ChartsComponent },
  { path: 'ngx-charts', component: PageNgxChartsComponent },
  { path: 'amcharts', component: PageAmchartsComponent },
  { path: 'simple-table', component: PageSimpleTableComponent },
  { path: 'bootstrap-tables', component: PageBootstrapTablesComponent },
  { path: 'editing-table', component: PageEditingTableComponent },
  { path: 'filtering-table', component: PageFilteringTableComponent },
  { path: 'pagination-table', component: PagePaginationTableComponent },
  { path: 'form-elements', component: PageFormElementsComponent },
  { path: 'form-layout', component: PageFormLayoutComponent },
  { path: 'form-validation', component: PageFormValidationComponent },
  { path: 'google-map', component: PageGoogleMapComponent },
  { path: 'leaflet-map', component: PageLeafletMapComponent },
  { path: 'layouts', component: PageLayoutsComponent },
  { path: '**', component: PageNotFoundComponent },
];

const boxedRoutes: Routes = [
  { path: 'layouts', component: PageLayoutsComponent }
];

const boxedCRoutes: Routes = [
  { path: 'layouts', component: PageLayoutsComponent }
];

const defaultCRoutes: Routes = [
  { path: 'layouts', component: PageLayoutsComponent }
];

const extraRoutes: Routes = [
  { path: 'sign-in', component: PageSignIn1Component },
  { path: 'sign-in-social', component: PageSignIn3Component },
  { path: 'sign-up', component: PageSignUp1Component },
  { path: 'forgot', component: PageForgotComponent },
  { path: 'confirm', component: PageConfirmComponent },
  { path: 'page-404', component: Page404Component },
  { path: 'page-500', component: Page500Component },
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/default-layout/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'default-layout',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  },
  {
    path: 'default-c-layout',
    component: DefaultCLayoutComponent,
    children: defaultCRoutes
  },
  {
    path: 'boxed-layout',
    component: BoxedLayoutComponent,
    children: boxedRoutes
  },
  {
    path: 'boxed-c-layout',
    component: BoxedCLayoutComponent,
    children: boxedCRoutes
  },
  {
    path: 'extra-layout',
    component: ExtraLayoutComponent,
    children: extraRoutes
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  }
];

@NgModule({
  imports: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}