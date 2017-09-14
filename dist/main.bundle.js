webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__ = __webpack_require__("../../../../../src/app/services/user-access-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_confirm_email_service__ = __webpack_require__("../../../../../src/app/services/user-confirm-email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_default_default_component__ = __webpack_require__("../../../../../src/app/layouts/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_boxed_boxed_component__ = __webpack_require__("../../../../../src/app/layouts/boxed/boxed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_default_c_default_c_component__ = __webpack_require__("../../../../../src/app/layouts/default-c/default-c.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_boxed_c_boxed_c_component__ = __webpack_require__("../../../../../src/app/layouts/boxed-c/boxed-c.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_extra_extra_component__ = __webpack_require__("../../../../../src/app/layouts/extra/extra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboards_dashboard_1_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-1/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboards_dashboard_2_dashboard_2_component__ = __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-2/dashboard-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboards_dashboard_3_dashboard_3_component__ = __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-3/dashboard-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_material_components_button_button_component__ = __webpack_require__("../../../../../src/app/pages/material-components/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_material_components_card_card_component__ = __webpack_require__("../../../../../src/app/pages/material-components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_material_components_checkbox_checkbox_component__ = __webpack_require__("../../../../../src/app/pages/material-components/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_material_components_chips_chips_component__ = __webpack_require__("../../../../../src/app/pages/material-components/chips/chips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_material_components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/pages/material-components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_material_components_icon_icon_component__ = __webpack_require__("../../../../../src/app/pages/material-components/icon/icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_material_components_input_input_component__ = __webpack_require__("../../../../../src/app/pages/material-components/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_material_components_list_list_component__ = __webpack_require__("../../../../../src/app/pages/material-components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_material_components_menu_menu_component__ = __webpack_require__("../../../../../src/app/pages/material-components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_material_components_progress_bar_progress_bar_component__ = __webpack_require__("../../../../../src/app/pages/material-components/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_material_components_progress_spinner_progress_spinner_component__ = __webpack_require__("../../../../../src/app/pages/material-components/progress-spinner/progress-spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_material_components_radio_button_radio_button_component__ = __webpack_require__("../../../../../src/app/pages/material-components/radio-button/radio-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_material_components_select_select_component__ = __webpack_require__("../../../../../src/app/pages/material-components/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_material_components_slider_slider_component__ = __webpack_require__("../../../../../src/app/pages/material-components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_material_components_slide_toggle_slide_toggle_component__ = __webpack_require__("../../../../../src/app/pages/material-components/slide-toggle/slide-toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_material_components_snackbar_snackbar_component__ = __webpack_require__("../../../../../src/app/pages/material-components/snackbar/snackbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_material_components_tabs_tabs_component__ = __webpack_require__("../../../../../src/app/pages/material-components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_material_components_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/pages/material-components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_material_components_tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/pages/material-components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_ni_components_alert_alert_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_ni_components_badge_badge_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/badge/badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_ni_components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_ni_components_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_ni_components_card_card_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_ni_components_chat_chat_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_ni_components_file_file_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/file/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_ni_components_h_timeline_h_timeline_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/h-timeline/h-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_typography_typography_component__ = __webpack_require__("../../../../../src/app/pages/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_extra_pages_sign_in_1_sign_in_1_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/sign-in-1/sign-in-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_extra_pages_sign_up_1_sign_up_1_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/sign-up-1/sign-up-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_extra_pages_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_extra_pages_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_extra_pages_page_404_page_404_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/page-404/page-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_extra_pages_page_500_page_500_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/page-500/page-500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_pages_service_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/pages/pages-service/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_pages_service_faq_faq_component__ = __webpack_require__("../../../../../src/app/pages/pages-service/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_pages_service_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/pages/pages-service/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_pages_service_invoice_invoice_component__ = __webpack_require__("../../../../../src/app/pages/pages-service/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_charts_ng2_charts_ng2_charts_component__ = __webpack_require__("../../../../../src/app/pages/charts/ng2-charts/ng2-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_charts_ngx_charts_ngx_charts_component__ = __webpack_require__("../../../../../src/app/pages/charts/ngx-charts/ngx-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_charts_amcharts_amcharts_component__ = __webpack_require__("../../../../../src/app/pages/charts/amcharts/amcharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/pages/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_tables_simple_table_simple_table_component__ = __webpack_require__("../../../../../src/app/pages/tables/simple-table/simple-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_tables_bootstrap_tables_bootstrap_tables_component__ = __webpack_require__("../../../../../src/app/pages/tables/bootstrap-tables/bootstrap-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_tables_editing_table_editing_table_component__ = __webpack_require__("../../../../../src/app/pages/tables/editing-table/editing-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_tables_filtering_table_filtering_table_component__ = __webpack_require__("../../../../../src/app/pages/tables/filtering-table/filtering-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_tables_pagination_table_pagination_table_component__ = __webpack_require__("../../../../../src/app/pages/tables/pagination-table/pagination-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_forms_form_elements_form_elements_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-elements/form-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_forms_form_layout_form_layout_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-layout/form-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_forms_form_validation_form_validation_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-validation/form-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_maps_google_map_google_map_component__ = __webpack_require__("../../../../../src/app/pages/maps/google-map/google-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_maps_leaflet_map_leaflet_map_component__ = __webpack_require__("../../../../../src/app/pages/maps/leaflet-map/leaflet-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_widgets_widgets_component__ = __webpack_require__("../../../../../src/app/pages/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_layouts_layouts_component__ = __webpack_require__("../../../../../src/app/pages/layouts/layouts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































































var defaultRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboards_dashboard_1_dashboard_component__["a" /* PageDashboardComponent */] },
    { path: 'dashboard-2', component: __WEBPACK_IMPORTED_MODULE_10__pages_dashboards_dashboard_2_dashboard_2_component__["a" /* PageDashboard2Component */] },
    { path: 'dashboard-3', component: __WEBPACK_IMPORTED_MODULE_11__pages_dashboards_dashboard_3_dashboard_3_component__["a" /* PageDashboard3Component */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_39__pages_typography_typography_component__["a" /* PageTypographyComponent */] },
    { path: 'widgets', component: __WEBPACK_IMPORTED_MODULE_65__pages_widgets_widgets_component__["a" /* PageWidgetsComponent */] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_54__pages_calendar_calendar_component__["b" /* PageCalendarComponent */] },
    { path: 'button', component: __WEBPACK_IMPORTED_MODULE_12__pages_material_components_button_button_component__["a" /* PageButtonComponent */] },
    { path: 'card', component: __WEBPACK_IMPORTED_MODULE_13__pages_material_components_card_card_component__["a" /* PageCardComponent */] },
    { path: 'checkbox', component: __WEBPACK_IMPORTED_MODULE_14__pages_material_components_checkbox_checkbox_component__["a" /* PageCheckboxComponent */] },
    { path: 'chips', component: __WEBPACK_IMPORTED_MODULE_15__pages_material_components_chips_chips_component__["a" /* PageChipsComponent */] },
    { path: 'dialog', component: __WEBPACK_IMPORTED_MODULE_16__pages_material_components_dialog_dialog_component__["a" /* PageDialogComponent */] },
    { path: 'icon', component: __WEBPACK_IMPORTED_MODULE_17__pages_material_components_icon_icon_component__["a" /* PageIconComponent */] },
    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_18__pages_material_components_input_input_component__["a" /* PageInputComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_19__pages_material_components_list_list_component__["a" /* PageListComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_20__pages_material_components_menu_menu_component__["a" /* PageMenuComponent */] },
    { path: 'progress-bar', component: __WEBPACK_IMPORTED_MODULE_21__pages_material_components_progress_bar_progress_bar_component__["a" /* PageProgressBarComponent */] },
    { path: 'progress-spinner', component: __WEBPACK_IMPORTED_MODULE_22__pages_material_components_progress_spinner_progress_spinner_component__["a" /* PageProgressSpinnerComponent */] },
    { path: 'radio-button', component: __WEBPACK_IMPORTED_MODULE_23__pages_material_components_radio_button_radio_button_component__["a" /* PageRadioButtonComponent */] },
    { path: 'select', component: __WEBPACK_IMPORTED_MODULE_24__pages_material_components_select_select_component__["a" /* PageSelectComponent */] },
    { path: 'slider', component: __WEBPACK_IMPORTED_MODULE_25__pages_material_components_slider_slider_component__["a" /* PageSliderComponent */] },
    { path: 'slide-toggle', component: __WEBPACK_IMPORTED_MODULE_26__pages_material_components_slide_toggle_slide_toggle_component__["a" /* PageSlideToggleComponent */] },
    { path: 'snackbar', component: __WEBPACK_IMPORTED_MODULE_27__pages_material_components_snackbar_snackbar_component__["a" /* PageSnackbarComponent */] },
    { path: 'tabs', component: __WEBPACK_IMPORTED_MODULE_28__pages_material_components_tabs_tabs_component__["a" /* PageTabsComponent */] },
    { path: 'toolbar', component: __WEBPACK_IMPORTED_MODULE_29__pages_material_components_toolbar_toolbar_component__["a" /* PageToolbarComponent */] },
    { path: 'tooltip', component: __WEBPACK_IMPORTED_MODULE_30__pages_material_components_tooltip_tooltip_component__["a" /* PageTooltipComponent */] },
    { path: 'ni-alerts', component: __WEBPACK_IMPORTED_MODULE_31__pages_ni_components_alert_alert_component__["a" /* PageNiAlertsComponent */] },
    { path: 'ni-badges', component: __WEBPACK_IMPORTED_MODULE_32__pages_ni_components_badge_badge_component__["a" /* PageNiBadgesComponent */] },
    { path: 'ni-breadcrumbs', component: __WEBPACK_IMPORTED_MODULE_33__pages_ni_components_breadcrumb_breadcrumb_component__["a" /* PageNiBreadcrumbsComponent */] },
    { path: 'ni-buttons', component: __WEBPACK_IMPORTED_MODULE_34__pages_ni_components_buttons_buttons_component__["a" /* PageNiButtonsComponent */] },
    { path: 'ni-cards', component: __WEBPACK_IMPORTED_MODULE_35__pages_ni_components_card_card_component__["a" /* PageNiCardsComponent */] },
    { path: 'ni-chat', component: __WEBPACK_IMPORTED_MODULE_36__pages_ni_components_chat_chat_component__["a" /* PageNiChatComponent */] },
    { path: 'ni-files', component: __WEBPACK_IMPORTED_MODULE_37__pages_ni_components_file_file_component__["a" /* PageNiFilesComponent */] },
    { path: 'ni-h-timeline', component: __WEBPACK_IMPORTED_MODULE_38__pages_ni_components_h_timeline_h_timeline_component__["a" /* PageNiHTimelineComponent */] },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_41__pages_extra_pages_sign_in_1_sign_in_1_component__["a" /* PageSignIn1Component */] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_42__pages_extra_pages_sign_up_1_sign_up_1_component__["b" /* PageSignUp1Component */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_47__pages_pages_service_about_us_about_us_component__["a" /* PageAboutUsComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_48__pages_pages_service_faq_faq_component__["a" /* PageFaqComponent */] },
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_49__pages_pages_service_timeline_timeline_component__["a" /* PageTimelineComponent */] },
    { path: 'invoice', component: __WEBPACK_IMPORTED_MODULE_50__pages_pages_service_invoice_invoice_component__["a" /* PageInvoiceComponent */] },
    { path: 'ng2-charts', component: __WEBPACK_IMPORTED_MODULE_51__pages_charts_ng2_charts_ng2_charts_component__["a" /* PageNg2ChartsComponent */] },
    { path: 'ngx-charts', component: __WEBPACK_IMPORTED_MODULE_52__pages_charts_ngx_charts_ngx_charts_component__["a" /* PageNgxChartsComponent */] },
    { path: 'amcharts', component: __WEBPACK_IMPORTED_MODULE_53__pages_charts_amcharts_amcharts_component__["a" /* PageAmchartsComponent */] },
    { path: 'simple-table', component: __WEBPACK_IMPORTED_MODULE_55__pages_tables_simple_table_simple_table_component__["a" /* PageSimpleTableComponent */] },
    { path: 'bootstrap-tables', component: __WEBPACK_IMPORTED_MODULE_56__pages_tables_bootstrap_tables_bootstrap_tables_component__["a" /* PageBootstrapTablesComponent */] },
    { path: 'editing-table', component: __WEBPACK_IMPORTED_MODULE_57__pages_tables_editing_table_editing_table_component__["a" /* PageEditingTableComponent */] },
    { path: 'filtering-table', component: __WEBPACK_IMPORTED_MODULE_58__pages_tables_filtering_table_filtering_table_component__["a" /* PageFilteringTableComponent */] },
    { path: 'pagination-table', component: __WEBPACK_IMPORTED_MODULE_59__pages_tables_pagination_table_pagination_table_component__["a" /* PagePaginationTableComponent */] },
    { path: 'form-elements', component: __WEBPACK_IMPORTED_MODULE_60__pages_forms_form_elements_form_elements_component__["a" /* PageFormElementsComponent */] },
    { path: 'form-layout', component: __WEBPACK_IMPORTED_MODULE_61__pages_forms_form_layout_form_layout_component__["a" /* PageFormLayoutComponent */] },
    { path: 'form-validation', component: __WEBPACK_IMPORTED_MODULE_62__pages_forms_form_validation_form_validation_component__["a" /* PageFormValidationComponent */] },
    { path: 'google-map', component: __WEBPACK_IMPORTED_MODULE_63__pages_maps_google_map_google_map_component__["a" /* PageGoogleMapComponent */] },
    { path: 'leaflet-map', component: __WEBPACK_IMPORTED_MODULE_64__pages_maps_leaflet_map_leaflet_map_component__["a" /* PageLeafletMapComponent */] },
    { path: 'layouts', component: __WEBPACK_IMPORTED_MODULE_66__pages_layouts_layouts_component__["a" /* PageLayoutsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_40__pages_not_found_not_found_component__["a" /* PageNotFoundComponent */] },
];
var boxedRoutes = [
    { path: 'layouts', component: __WEBPACK_IMPORTED_MODULE_66__pages_layouts_layouts_component__["a" /* PageLayoutsComponent */] }
];
var boxedCRoutes = [
    { path: 'layouts', component: __WEBPACK_IMPORTED_MODULE_66__pages_layouts_layouts_component__["a" /* PageLayoutsComponent */] }
];
var defaultCRoutes = [
    { path: 'layouts', component: __WEBPACK_IMPORTED_MODULE_66__pages_layouts_layouts_component__["a" /* PageLayoutsComponent */] }
];
var extraRoutes = [
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_41__pages_extra_pages_sign_in_1_sign_in_1_component__["a" /* PageSignIn1Component */] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_42__pages_extra_pages_sign_up_1_sign_up_1_component__["b" /* PageSignUp1Component */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_43__pages_extra_pages_forgot_forgot_component__["a" /* PageForgotComponent */] },
    {
        path: 'confirm',
        component: __WEBPACK_IMPORTED_MODULE_44__pages_extra_pages_confirm_confirm_component__["a" /* PageConfirmComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_user_confirm_email_service__["a" /* UserConfirmEmailService */]]
    },
    { path: 'page-404', component: __WEBPACK_IMPORTED_MODULE_45__pages_extra_pages_page_404_page_404_component__["a" /* Page404Component */] },
    { path: 'page-500', component: __WEBPACK_IMPORTED_MODULE_46__pages_extra_pages_page_500_page_500_component__["a" /* Page500Component */] },
];
var routes = [
    {
        path: '',
        redirectTo: '/extra-layout/sign-in',
        pathMatch: 'full'
    },
    {
        path: 'default-layout',
        component: __WEBPACK_IMPORTED_MODULE_4__layouts_default_default_component__["a" /* DefaultLayoutComponent */],
        children: defaultRoutes,
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]]
    },
    {
        path: 'default-c-layout',
        component: __WEBPACK_IMPORTED_MODULE_6__layouts_default_c_default_c_component__["a" /* DefaultCLayoutComponent */],
        children: defaultCRoutes,
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]]
    },
    {
        path: 'boxed-layout',
        component: __WEBPACK_IMPORTED_MODULE_5__layouts_boxed_boxed_component__["a" /* BoxedLayoutComponent */],
        children: boxedRoutes,
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]]
    },
    {
        path: 'boxed-c-layout',
        component: __WEBPACK_IMPORTED_MODULE_7__layouts_boxed_c_boxed_c_component__["a" /* BoxedCLayoutComponent */],
        children: boxedCRoutes,
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]]
    },
    {
        path: 'extra-layout',
        component: __WEBPACK_IMPORTED_MODULE_8__layouts_extra_extra_component__["a" /* ExtraLayoutComponent */],
        children: extraRoutes
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__layouts_default_default_component__["a" /* DefaultLayoutComponent */],
        children: defaultRoutes,
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, translate) {
        this.auth = auth;
        this.translate = translate;
        auth.getConfirmParams(window.location.href);
        translate.addLangs(['en', 'fr', 'es', 'pt']);
        translate.setDefaultLang('en');
        translate.use('en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export translateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_access_guard_service__ = __webpack_require__("../../../../../src/app/services/user-access-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_confirm_email_service__ = __webpack_require__("../../../../../src/app/services/user-confirm-email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_ui_module__ = __webpack_require__("../../../../../src/app/ui/ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ni_components_ni_components_module__ = __webpack_require__("../../../../../src/app/ni-components/ni-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layouts_default_default_component__ = __webpack_require__("../../../../../src/app/layouts/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layouts_boxed_boxed_component__ = __webpack_require__("../../../../../src/app/layouts/boxed/boxed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__layouts_default_c_default_c_component__ = __webpack_require__("../../../../../src/app/layouts/default-c/default-c.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layouts_boxed_c_boxed_c_component__ = __webpack_require__("../../../../../src/app/layouts/boxed-c/boxed-c.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__layouts_extra_extra_component__ = __webpack_require__("../../../../../src/app/layouts/extra/extra.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function translateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["d" /* TranslateStaticLoader */](http, 'assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__layouts_default_default_component__["a" /* DefaultLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__layouts_boxed_boxed_component__["a" /* BoxedLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__layouts_default_c_default_c_component__["a" /* DefaultCLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__layouts_boxed_c_boxed_c_component__["a" /* BoxedCLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__layouts_extra_extra_component__["a" /* ExtraLayoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routing_module__["b" /* routes */], { useHash: false }),
                __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["b" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__ui_ui_module__["a" /* UIModule */],
                __WEBPACK_IMPORTED_MODULE_13__ni_components_ni_components_module__["a" /* NiComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pages_module__["a" /* PagesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_user_access_guard_service__["a" /* UserAccessGuardService */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__services_user_confirm_email_service__["a" /* UserConfirmEmailService */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: translateLoader,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/boxed-c/boxed-c.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\" [ngClass]=\"getClasses()\" [attr.dir]=\"rtl ? 'rtl' : null\">\r\n  <horizontal-navbar [title]=\"pageTitle\" (sidebarState)=\"sidebarState()\"></horizontal-navbar>\r\n\r\n  <vertical-navbar></vertical-navbar>\r\n\r\n  <addition-navbar></addition-navbar>\r\n\r\n  <main class=\"main-content\">\r\n    <div class=\"main-content-wrap\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </main>\r\n\r\n  <div class=\"app-overlay\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/boxed-c/boxed-c.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxedCLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxedCLayoutComponent = (function () {
    function BoxedCLayoutComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.openedSidebar = false;
        this.boxed = true;
        this.compress = true;
        this.menuStyle = 'style-3';
        this.rtl = false;
        _sharedService.changeEmitted$.subscribe(function (title) {
            _this.pageTitle = title;
        });
    }
    BoxedCLayoutComponent.prototype.ngOnInit = function () { };
    BoxedCLayoutComponent.prototype.getClasses = function () {
        var menu = (this.menuStyle);
        return _a = {},
            _a['menu-' + menu] = menu,
            _a['boxed'] = this.boxed,
            _a['compress-vertical-navbar'] = this.compress,
            _a['open-sidebar'] = this.openedSidebar,
            _a['rtl'] = this.rtl,
            _a;
        var _a;
    };
    BoxedCLayoutComponent.prototype.sidebarState = function () {
        this.openedSidebar = !this.openedSidebar;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BoxedCLayoutComponent.prototype, "openedSidebar", void 0);
    BoxedCLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'boxed-c-layout',
            template: __webpack_require__("../../../../../src/app/layouts/boxed-c/boxed-c.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/layouts.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], BoxedCLayoutComponent);
    return BoxedCLayoutComponent;
    var _a;
}());

//# sourceMappingURL=boxed-c.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/boxed/boxed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\" [ngClass]=\"getClasses()\" [attr.dir]=\"rtl ? 'rtl' : null\">\r\n  <horizontal-navbar [title]=\"pageTitle\" (sidebarState)=\"sidebarState()\"></horizontal-navbar>\r\n\r\n  <vertical-navbar></vertical-navbar>\r\n\r\n  <addition-navbar></addition-navbar>\r\n\r\n  <main class=\"main-content\">\r\n    <div class=\"main-content-wrap\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </main>\r\n\r\n  <div class=\"app-overlay\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/boxed/boxed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxedLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxedLayoutComponent = (function () {
    function BoxedLayoutComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.openedSidebar = false;
        this.boxed = true;
        this.compress = false;
        this.menuStyle = 'style-3';
        this.rtl = false;
        _sharedService.changeEmitted$.subscribe(function (title) {
            _this.pageTitle = title;
        });
    }
    BoxedLayoutComponent.prototype.ngOnInit = function () { };
    BoxedLayoutComponent.prototype.getClasses = function () {
        var menu = (this.menuStyle);
        return _a = {},
            _a['menu-' + menu] = menu,
            _a['boxed'] = this.boxed,
            _a['compress-vertical-navbar'] = this.compress,
            _a['open-sidebar'] = this.openedSidebar,
            _a['rtl'] = this.rtl,
            _a;
        var _a;
    };
    BoxedLayoutComponent.prototype.sidebarState = function () {
        this.openedSidebar = !this.openedSidebar;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BoxedLayoutComponent.prototype, "openedSidebar", void 0);
    BoxedLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'boxed-layout',
            template: __webpack_require__("../../../../../src/app/layouts/boxed/boxed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/layouts.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], BoxedLayoutComponent);
    return BoxedLayoutComponent;
    var _a;
}());

//# sourceMappingURL=boxed.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/default-c/default-c.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\" [ngClass]=\"getClasses()\" [attr.dir]=\"rtl ? 'rtl' : null\">\r\n  <horizontal-navbar [title]=\"pageTitle\" (sidebarState)=\"sidebarState()\"></horizontal-navbar>\r\n\r\n  <vertical-navbar></vertical-navbar>\r\n\r\n  <addition-navbar></addition-navbar>\r\n\r\n  <main class=\"main-content\">\r\n    <div class=\"main-content-wrap\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </main>\r\n\r\n  <div class=\"app-overlay\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/default-c/default-c.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultCLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultCLayoutComponent = (function () {
    function DefaultCLayoutComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.openedSidebar = false;
        this.boxed = false;
        this.compress = true;
        this.menuStyle = 'style-3';
        this.rtl = false;
        _sharedService.changeEmitted$.subscribe(function (title) {
            _this.pageTitle = title;
        });
    }
    DefaultCLayoutComponent.prototype.ngOnInit = function () { };
    DefaultCLayoutComponent.prototype.getClasses = function () {
        var menu = (this.menuStyle);
        return _a = {},
            _a['menu-' + menu] = menu,
            _a['boxed'] = this.boxed,
            _a['compress-vertical-navbar'] = this.compress,
            _a['open-sidebar'] = this.openedSidebar,
            _a['rtl'] = this.rtl,
            _a;
        var _a;
    };
    DefaultCLayoutComponent.prototype.sidebarState = function () {
        this.openedSidebar = !this.openedSidebar;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DefaultCLayoutComponent.prototype, "openedSidebar", void 0);
    DefaultCLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'default-c-layout',
            template: __webpack_require__("../../../../../src/app/layouts/default-c/default-c.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/layouts.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], DefaultCLayoutComponent);
    return DefaultCLayoutComponent;
    var _a;
}());

//# sourceMappingURL=default-c.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\" [ngClass]=\"getClasses()\" [attr.dir]=\"rtl ? 'rtl' : null\">\r\n  <horizontal-navbar [title]=\"pageTitle\" (sidebarState)=\"sidebarState()\"></horizontal-navbar>\r\n\r\n  <vertical-navbar></vertical-navbar>\r\n\r\n  <addition-navbar></addition-navbar>\r\n\r\n  <main class=\"main-content\">\r\n    <div class=\"main-content-wrap\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </main>\r\n\r\n  <div class=\"app-overlay\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultLayoutComponent = (function () {
    function DefaultLayoutComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.openedSidebar = false;
        this.boxed = false;
        this.compress = false;
        this.menuStyle = 'style-3';
        this.rtl = false;
        _sharedService.changeEmitted$.subscribe(function (title) {
            _this.pageTitle = title;
        });
    }
    DefaultLayoutComponent.prototype.ngOnInit = function () { };
    DefaultLayoutComponent.prototype.getClasses = function () {
        var menu = (this.menuStyle);
        return _a = {},
            _a['menu-' + menu] = menu,
            _a['boxed'] = this.boxed,
            _a['compress-vertical-navbar'] = this.compress,
            _a['open-sidebar'] = this.openedSidebar,
            _a['rtl'] = this.rtl,
            _a;
        var _a;
    };
    DefaultLayoutComponent.prototype.sidebarState = function () {
        this.openedSidebar = !this.openedSidebar;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DefaultLayoutComponent.prototype, "openedSidebar", void 0);
    DefaultLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'default-layout',
            template: __webpack_require__("../../../../../src/app/layouts/default/default.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/layouts.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
    var _a;
}());

//# sourceMappingURL=default.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/extra/extra.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\" [ngClass]=\"{'rtl': rtl}\" [attr.dir]=\"rtl ? 'rtl' : null\">\r\n  <main class=\"main-content\">\r\n    <div class=\"main-content-wrap\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/extra/extra.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .main-content {\n  height: 100%;\n  padding: 0; }\n  :host .main-content .main-content-wrap {\n    height: 100%;\n    padding: 0;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/extra/extra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtraLayoutComponent = (function () {
    function ExtraLayoutComponent() {
        this.rtl = false;
    }
    ExtraLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'extra-layout',
            template: __webpack_require__("../../../../../src/app/layouts/extra/extra.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/extra/extra.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraLayoutComponent);
    return ExtraLayoutComponent;
}());

//# sourceMappingURL=extra.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/layouts.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .site-container .main-content {\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 3.4375rem 0 0 15.125rem;\n  transition: padding 0.2s ease-in-out; }\n  @media (max-width: 991px) {\n    :host .site-container .main-content {\n      padding-left: 0; } }\n  :host .site-container .main-content .main-content-wrap {\n    height: calc(100% - 2.75rem); }\n\n:host .site-container .app-navbar {\n  transition: left 0.2s ease-in-out, right 0.2s ease-in-out; }\n  @media (max-width: 991px) {\n    :host .site-container .app-navbar {\n      width: 100%; } }\n\n:host .site-container.open-sidebar .app-navbar {\n  left: 15.125rem; }\n\n:host .site-container.open-sidebar .vertical-navbar {\n  left: 0; }\n  @media (max-width: 991px) {\n    :host .site-container.open-sidebar .vertical-navbar /deep/ .sidebar-overlay {\n      opacity: 1;\n      transition: 0.2s opacity 0s ease-in-out, 0s visibility 0s ease-in-out;\n      visibility: visible; } }\n\n:host .site-container.rtl .main-content {\n  padding-left: 0;\n  padding-right: 15.125rem; }\n  @media (max-width: 991px) {\n    :host .site-container.rtl .main-content {\n      padding-right: 0; } }\n\n:host .site-container.rtl.open-sidebar .app-navbar {\n  left: 0;\n  right: 15.125rem; }\n\n:host .site-container.rtl.open-sidebar .vertical-navbar {\n  right: 0; }\n\n:host .site-container.boxed {\n  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.25);\n  margin: 0 auto;\n  max-width: 1200px;\n  position: relative; }\n\n@media (min-width: 992px) {\n  :host .site-container.compress-vertical-navbar .app-navbar {\n    left: 4.125rem; }\n  :host .site-container.compress-vertical-navbar .vertical-navbar {\n    overflow: hidden;\n    transition: width 0.2s ease-in-out;\n    width: 4.125rem;\n    z-index: 9997; }\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .text,\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .item-badge,\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .caret {\n      opacity: 0;\n      transition: opacity 0.2s ease-in-out; }\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group {\n      background: rgba(37, 45, 71, 0.1);\n      transition: background 0.2s ease-in-out; }\n      :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group .group-title {\n        opacity: 0;\n        transition: opacity 0.2s ease-in-out; }\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.has-sub.active > .sub {\n      max-height: 0; }\n    :host .site-container.compress-vertical-navbar .vertical-navbar:hover, :host .site-container.compress-vertical-navbar .vertical-navbar.show {\n      width: 15.125rem; }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-logo:before, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-logo:before {\n        -webkit-transform: scale(0);\n                transform: scale(0); }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-logo:after, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-logo:after {\n        -webkit-transform: scale(1);\n                transform: scale(1); }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .text,\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .item-badge,\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .caret, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .text,\n      :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .item-badge,\n      :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .caret {\n        opacity: 1; }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group {\n        background: none; }\n        :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group .group-title, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group .group-title {\n          opacity: 1; }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.has-sub.active > .sub, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.has-sub.active > .sub {\n        max-height: 1000px; }\n  :host .site-container.compress-vertical-navbar.menu-style-2 .vertical-navbar, :host .site-container.compress-vertical-navbar.menu-style-3 .vertical-navbar, :host .site-container.compress-vertical-navbar.menu-style-4 .vertical-navbar {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  :host .site-container.compress-vertical-navbar .main-content {\n    padding-left: 4.125rem; } }\n\n@media (min-width: 992px) {\n  :host .site-container.compress-vertical-navbar.rtl .app-navbar {\n    left: 0;\n    right: 4.125rem; }\n  :host .site-container.compress-vertical-navbar.rtl .main-content {\n    padding-left: 0;\n    padding-right: 4.125rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/shared-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedService = (function () {
    function SharedService() {
        // Observable string sources
        this.emitChangeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    // Service message commands
    SharedService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared-service.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/directives/auto-grow/auto-grow.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoGrowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoGrowDirective = (function () {
    function AutoGrowDirective(element) {
        this.element = element;
    }
    AutoGrowDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutoGrowDirective.prototype.ngAfterContentChecked = function () {
        this.adjust();
    };
    AutoGrowDirective.prototype.adjust = function () {
        var nativeElement = this.element.nativeElement;
        nativeElement.style.overflow = 'hidden';
        nativeElement.style.height = 'auto';
        nativeElement.style.height = nativeElement.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AutoGrowDirective.prototype, "onInput", null);
    AutoGrowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[autoGrow]',
            host: {
                '(input)': 'setHeight()'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AutoGrowDirective);
    return AutoGrowDirective;
    var _a;
}());

//# sourceMappingURL=auto-grow.directive.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/directives/bg/bg.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BgDirective = (function () {
    function BgDirective() {
        this.outline = false;
    }
    BgDirective.prototype.ngOnInit = function () {
        this.defaultBg = (typeof this.bg === 'string') ? this.bg : this.bg[0];
        this.hoveredBg = (typeof this.bg === 'string') ? this.bg : this.bg[1];
        this.currentBg = (!this.outline) ? this.defaultBg : 'transparent';
        this.outlineColor = this.defaultBg;
    };
    Object.defineProperty(BgDirective.prototype, "getBg", {
        get: function () {
            return this.currentBg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BgDirective.prototype, "getOutline", {
        get: function () {
            return this.outlineColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BgDirective.prototype, "getClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    BgDirective.prototype.onMouseEnter = function () {
        this.currentBg = this.hoveredBg;
    };
    BgDirective.prototype.onMouseLeave = function () {
        this.currentBg = (!this.outline) ? this.defaultBg : 'transparent';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BgDirective.prototype, "bg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BgDirective.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.background'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BgDirective.prototype, "getBg", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.borderColor'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BgDirective.prototype, "getOutline", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.custom-bg'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BgDirective.prototype, "getClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BgDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BgDirective.prototype, "onMouseLeave", null);
    BgDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[bg]'
        }),
        __metadata("design:paramtypes", [])
    ], BgDirective);
    return BgDirective;
}());

//# sourceMappingURL=bg.directive.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/directives/color/color.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorDirective = (function () {
    function ColorDirective() {
    }
    ColorDirective.prototype.ngOnInit = function () {
        this.defaultColor = (typeof this.color === 'string') ? this.color : this.color[0];
        this.hoveredColor = (typeof this.color === 'string') ? this.color : this.color[1];
        this.currentColor = this.defaultColor;
    };
    Object.defineProperty(ColorDirective.prototype, "getColor", {
        get: function () {
            return this.currentColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorDirective.prototype, "getClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ColorDirective.prototype.onMouseEnter = function () {
        this.currentColor = this.hoveredColor;
    };
    ColorDirective.prototype.onMouseLeave = function () {
        this.currentColor = this.defaultColor;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ColorDirective.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.color'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ColorDirective.prototype, "getColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.custom-color'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ColorDirective.prototype, "getClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ColorDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ColorDirective.prototype, "onMouseLeave", null);
    ColorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[color]'
        }),
        __metadata("design:paramtypes", [])
    ], ColorDirective);
    return ColorDirective;
}());

//# sourceMappingURL=color.directive.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/directives/gradient/gradient.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradientDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GradientDirective = (function () {
    function GradientDirective() {
    }
    GradientDirective.prototype.ngOnInit = function () {
        this.firstColor = this.gradient[0];
        this.secondColor = this.gradient[1];
        this.linearGradient = 'linear-gradient(to right, ' + this.firstColor + ' 0%, ' + this.secondColor + ' 51%, ' + this.firstColor + ' 100%)';
    };
    Object.defineProperty(GradientDirective.prototype, "getGradient", {
        get: function () {
            return this.linearGradient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GradientDirective.prototype, "getClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GradientDirective.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.backgroundImage'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GradientDirective.prototype, "getGradient", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.custom-gradient'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GradientDirective.prototype, "getClass", null);
    GradientDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[gradient]'
        }),
        __metadata("design:paramtypes", [])
    ], GradientDirective);
    return GradientDirective;
}());

//# sourceMappingURL=gradient.directive.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-alert/ni-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"alert\"\n  [ngClass]=\"{\n    'success-alert': color === 'success',\n    'info-alert': color === 'info',\n    'warning-alert': color === 'warning',\n    'danger-alert': color === 'danger',\n    'outline-alert': outline,\n    'with-close': close\n  }\"\n  [ngStyle]=\"{\n   'background': customColor,\n   'border-color': customColor\n  }\"\n  #alert\n>\n  <ng-content></ng-content>\n  <a href=\"#\" class=\"close\" *ngIf=\"close\" (click)=\"delete($event, alert)\"><i class=\"material-icons\">clear</i></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-alert/ni-alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin-bottom: 1.375rem; }\n  :host:last-child {\n    margin-bottom: 0; }\n  :host .alert {\n    background: #252d47;\n    border: 1px solid #252d47;\n    border-radius: 3px;\n    padding: 0.91666667rem 1.375rem;\n    position: relative; }\n    :host .alert:not(.outline-alert) {\n      color: #ffffff; }\n      :host .alert:not(.outline-alert) /deep/ a {\n        color: rgba(255, 255, 255, 0.8); }\n        :host .alert:not(.outline-alert) /deep/ a:hover {\n          color: #ffffff; }\n    :host .alert .close {\n      background: rgba(0, 0, 0, 0.1);\n      font-size: 20px;\n      line-height: 1;\n      position: absolute;\n      right: 0;\n      top: 0;\n      transition: background 0.2s ease-in-out, color 0.2s ease-in-out; }\n      .rtl :host .alert .close {\n        left: 0;\n        right: auto; }\n      :host .alert .close:hover {\n        background: rgba(255, 255, 255, 0.3);\n        color: #f00; }\n      :host .alert .close .material-icons {\n        color: inherit;\n        font-size: inherit;\n        margin: 0;\n        vertical-align: top; }\n    :host .alert /deep/ .material-icons {\n      color: #2196f3;\n      margin: 0 1.375rem 0 0;\n      vertical-align: top; }\n      .rtl :host .alert /deep/ .material-icons {\n        margin: 0 0 0 1.375rem; }\n    :host .alert.success-alert {\n      background: #81C784;\n      border-color: #81C784; }\n      :host .alert.success-alert /deep/ .material-icons {\n        color: #81C784; }\n    :host .alert.info-alert {\n      background: #64B5F6;\n      border-color: #64B5F6; }\n      :host .alert.info-alert /deep/ .material-icons {\n        color: #64B5F6; }\n    :host .alert.warning-alert {\n      background: #FFB74D;\n      border-color: #FFB74D; }\n      :host .alert.warning-alert /deep/ .material-icons {\n        color: #FFB74D; }\n    :host .alert.danger-alert {\n      background: #e24d4d;\n      border-color: #e24d4d; }\n      :host .alert.danger-alert /deep/ .material-icons {\n        color: #e24d4d; }\n    :host .alert.outline-alert {\n      background: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-alert/ni-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiAlertComponent = (function () {
    function NiAlertComponent() {
        this.color = '';
        this.customColor = '';
        this.outline = false;
        this.close = false;
    }
    NiAlertComponent.prototype.ngOnInit = function () { };
    NiAlertComponent.prototype.delete = function (event, alert) {
        event.preventDefault();
        alert.remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiAlertComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiAlertComponent.prototype, "customColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiAlertComponent.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiAlertComponent.prototype, "close", void 0);
    NiAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-alert',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-alert/ni-alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-alert/ni-alert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiAlertComponent);
    return NiAlertComponent;
}());

//# sourceMappingURL=ni-alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-badge/ni-badge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"badge\" [ngClass]=\"getClasses()\" [ngStyle]=\"getStyles()\">\n  <div class=\"arrow\" [ngClass]=\"getArrowClasses()\" *ngIf=\"arrow\"></div>\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-badge/ni-badge.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n  :host .badge {\n    background: #252d47;\n    border: 1px solid #252d47;\n    color: #ffffff;\n    font-size: .75rem;\n    font-family: \"Josefin Sans\", sans-serif;\n    line-height: 1.375;\n    min-width: 20px;\n    padding: 1px 6px;\n    position: relative;\n    text-align: center; }\n    :host .badge .arrow {\n      border: 6px solid transparent;\n      height: 0;\n      position: absolute;\n      width: 0; }\n      :host .badge .arrow.arrow-top {\n        border-bottom-color: inherit;\n        bottom: 100%;\n        left: 50%;\n        margin-left: -6px; }\n      :host .badge .arrow.arrow-right {\n        border-left-color: inherit;\n        left: 100%;\n        margin-top: -6px;\n        top: 50%; }\n      :host .badge .arrow.arrow-bottom {\n        border-top-color: inherit;\n        left: 50%;\n        margin-left: -6px;\n        top: 100%; }\n      :host .badge .arrow.arrow-left {\n        border-right-color: inherit;\n        margin-top: -6px;\n        right: 100%;\n        top: 50%; }\n    :host .badge.border-radius-badge {\n      border-radius: 10px; }\n      :host .badge.border-radius-badge .arrow.arrow-right {\n        margin-left: -2px; }\n      :host .badge.border-radius-badge .arrow.arrow-left {\n        margin-right: -2px; }\n    :host .badge.success-badge {\n      background: #81C784;\n      border-color: #81C784; }\n    :host .badge.info-badge {\n      background: #64B5F6;\n      border-color: #64B5F6; }\n    :host .badge.warning-badge {\n      background: #FFB74D;\n      border-color: #FFB74D; }\n    :host .badge.danger-badge {\n      background: #e24d4d;\n      border-color: #e24d4d; }\n    :host .badge.outline-badge {\n      background: none !important;\n      color: inherit; }\n      :host .badge.outline-badge.success-badge {\n        color: #81C784; }\n      :host .badge.outline-badge.info-badge {\n        color: #64B5F6; }\n      :host .badge.outline-badge.warning-badge {\n        color: #FFB74D; }\n      :host .badge.outline-badge.danger-badge {\n        color: #e24d4d; }\n    :host .badge.custom-badge:not(.outline-badge) {\n      color: #fff !important; }\n    :host .badge.arrow-right-badge {\n      margin-right: 6px; }\n    :host .badge.arrow-left-badge {\n      margin-left: 6px; }\n    :host .badge.large-badge {\n      padding: 6px 20px; }\n      :host .badge.large-badge.border-radius-badge {\n        border-radius: 15px; }\n    :host .badge.medium-badge {\n      padding: 3px 12px; }\n      :host .badge.medium-badge.border-radius-badge {\n        border-radius: 12px; }\n  md-icon :host .badge {\n    bottom: 100%;\n    left: 100%;\n    margin: 0 0 -10px -10px;\n    position: absolute;\n    z-index: 1; }\n    md-icon :host .badge.top-left {\n      left: auto;\n      margin: 0 -10px -10px 0;\n      right: 100%; }\n    md-icon :host .badge.bottom-left {\n      bottom: auto;\n      left: auto;\n      margin: -10px -10px 0 0;\n      right: 100%;\n      top: 100%; }\n    md-icon :host .badge.bottom-right {\n      bottom: auto;\n      margin: -10px 0 0 -10px;\n      top: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-badge/ni-badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiBadgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiBadgeComponent = (function () {
    function NiBadgeComponent() {
        this.color = '';
        this.customColor = '';
        this.outline = false;
        this.borderRadius = true;
        this.arrow = '';
        this.size = '';
        this.position = '';
    }
    NiBadgeComponent.prototype.ngOnInit = function () { };
    NiBadgeComponent.prototype.getClasses = function () {
        return {
            'success-badge': this.color === 'success',
            'info-badge': this.color === 'info',
            'warning-badge': this.color === 'warning',
            'danger-badge': this.color === 'danger',
            'custom-badge': this.customColor,
            'outline-badge': this.outline,
            'border-radius-badge': this.borderRadius,
            'arrow-right-badge': this.arrow === 'right',
            'arrow-left-badge': this.arrow === 'left',
            'large-badge': this.size === 'large',
            'medium-badge': this.size === 'medium',
            'top-left': this.position === 'top-left',
            'bottom-left': this.position === 'bottom-left',
            'bottom-right': this.position === 'bottom-right'
        };
    };
    NiBadgeComponent.prototype.getStyles = function () {
        return {
            'background-color': this.customColor,
            'border-color': this.customColor,
            'color': this.customColor
        };
    };
    NiBadgeComponent.prototype.getArrowClasses = function () {
        return {
            'arrow-top': this.arrow === 'top',
            'arrow-right': this.arrow === 'right',
            'arrow-bottom': this.arrow === 'bottom',
            'arrow-left': this.arrow === 'left'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "customColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiBadgeComponent.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiBadgeComponent.prototype, "borderRadius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "arrow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "position", void 0);
    NiBadgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-badge',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-badge/ni-badge.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-badge/ni-badge.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiBadgeComponent);
    return NiBadgeComponent;
}());

//# sourceMappingURL=ni-badge.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\" [ngClass]=\"getClasses()\">\n  <li *ngFor=\"let item of menu; let last = last\">\n    <a href=\"{{item.link}}\" *ngIf=\"item.link\"><span class=\"icon {{item.icon}}\" *ngIf=\"item.icon\"></span>{{item.title}}</a><!--\n    --><span class=\"static\" *ngIf=\"!item.link\"><span class=\"icon {{item.icon}}\" *ngIf=\"item.icon\"></span>{{item.title}}</span><!--\n    --><span class=\"separator\" *ngIf=\"!last\">{{separator}}</span>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  overflow: hidden; }\n  :host .breadcrumb {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    font-size: 1.2rem;\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n    @media (max-width: 767px) {\n      :host .breadcrumb {\n        font-size: 1rem; } }\n    :host .breadcrumb li a .icon,\n    :host .breadcrumb li .static .icon {\n      font-size: 1rem;\n      margin-right: 6px; }\n      .rtl :host .breadcrumb li a .icon, .rtl\n      :host .breadcrumb li .static .icon {\n        margin-left: 6px;\n        margin-right: 0; }\n    :host .breadcrumb li .separator {\n      color: rgba(0, 0, 0, 0.4);\n      margin: 0 0.6875rem; }\n    :host .breadcrumb.custom-1 {\n      margin: -2px -7px; }\n      @media (max-width: 767px) {\n        :host .breadcrumb.custom-1 {\n          margin-left: -2px;\n          margin-right: -2px; } }\n      :host .breadcrumb.custom-1 li {\n        margin: 2px 7px; }\n        @media (max-width: 767px) {\n          :host .breadcrumb.custom-1 li {\n            margin-left: 2px;\n            margin-right: 2px; } }\n        :host .breadcrumb.custom-1 li a,\n        :host .breadcrumb.custom-1 li .static {\n          background: #252d47;\n          border-color: #252d47;\n          color: #ffffff;\n          display: inline-block;\n          height: 36px;\n          padding: 5px 1.375rem;\n          position: relative;\n          transition: background 0.2s ease-in-out, color 0.2s ease-in-out;\n          vertical-align: top; }\n          @media (max-width: 767px) {\n            :host .breadcrumb.custom-1 li a,\n            :host .breadcrumb.custom-1 li .static {\n              height: auto;\n              padding: 2px 0.6875rem; } }\n          :host .breadcrumb.custom-1 li a:before, :host .breadcrumb.custom-1 li a:after,\n          :host .breadcrumb.custom-1 li .static:before,\n          :host .breadcrumb.custom-1 li .static:after {\n            border-style: solid;\n            border-color: transparent;\n            content: '';\n            display: block;\n            height: 0px;\n            position: absolute;\n            top: 0px;\n            transition: border-color 0.2s ease-in-out;\n            width: 0px; }\n            @media (max-width: 767px) {\n              :host .breadcrumb.custom-1 li a:before, :host .breadcrumb.custom-1 li a:after,\n              :host .breadcrumb.custom-1 li .static:before,\n              :host .breadcrumb.custom-1 li .static:after {\n                display: none; }\n                .rtl :host .breadcrumb.custom-1 li a:before, .rtl :host .breadcrumb.custom-1 li a:after, .rtl\n                :host .breadcrumb.custom-1 li .static:before, .rtl\n                :host .breadcrumb.custom-1 li .static:after {\n                  display: none !important; } }\n          :host .breadcrumb.custom-1 li a:before,\n          :host .breadcrumb.custom-1 li .static:before {\n            border-width: 36px 10px 0 0;\n            border-right-color: inherit;\n            left: -10px; }\n          :host .breadcrumb.custom-1 li a:after,\n          :host .breadcrumb.custom-1 li .static:after {\n            border-width: 0 0 36px 10px;\n            border-left-color: inherit;\n            right: -10px; }\n        :host .breadcrumb.custom-1 li a:hover {\n          color: #64b6f7; }\n        :host .breadcrumb.custom-1 li .static {\n          opacity: .6; }\n        :host .breadcrumb.custom-1 li .separator {\n          display: none; }\n        :host .breadcrumb.custom-1 li:first-child a:before,\n        :host .breadcrumb.custom-1 li:first-child .static:before {\n          display: none; }\n        .rtl :host .breadcrumb.custom-1 li:first-child a:before, .rtl\n        :host .breadcrumb.custom-1 li:first-child .static:before {\n          display: block; }\n        .rtl :host .breadcrumb.custom-1 li:first-child a:after, .rtl\n        :host .breadcrumb.custom-1 li:first-child .static:after {\n          display: none; }\n        :host .breadcrumb.custom-1 li:last-child a:after,\n        :host .breadcrumb.custom-1 li:last-child .static:after {\n          display: none; }\n        .rtl :host .breadcrumb.custom-1 li:last-child a:before, .rtl\n        :host .breadcrumb.custom-1 li:last-child .static:before {\n          display: none; }\n        .rtl :host .breadcrumb.custom-1 li:last-child a:after, .rtl\n        :host .breadcrumb.custom-1 li:last-child .static:after {\n          display: block; }\n    :host .breadcrumb.custom-2 {\n      margin: -2px -7px; }\n      @media (max-width: 767px) {\n        :host .breadcrumb.custom-2 {\n          margin-left: -2px;\n          margin-right: -2px; } }\n      :host .breadcrumb.custom-2 li {\n        margin: 2px 7px; }\n        @media (max-width: 767px) {\n          :host .breadcrumb.custom-2 li {\n            margin-left: 2px;\n            margin-right: 2px; } }\n        :host .breadcrumb.custom-2 li a,\n        :host .breadcrumb.custom-2 li .static {\n          background: #252d47;\n          border-color: #252d47;\n          color: #ffffff;\n          display: inline-block;\n          height: 36px;\n          padding: 5px 1.375rem;\n          position: relative;\n          transition: background 0.2s ease-in-out, color 0.2s ease-in-out;\n          vertical-align: top; }\n          @media (max-width: 767px) {\n            :host .breadcrumb.custom-2 li a,\n            :host .breadcrumb.custom-2 li .static {\n              height: auto;\n              padding: 2px 0.6875rem; } }\n          :host .breadcrumb.custom-2 li a:before, :host .breadcrumb.custom-2 li a:after,\n          :host .breadcrumb.custom-2 li .static:before,\n          :host .breadcrumb.custom-2 li .static:after {\n            border-style: solid;\n            border-color: transparent;\n            content: '';\n            display: block;\n            height: 0px;\n            position: absolute;\n            top: 0px;\n            transition: border-color 0.2s ease-in-out;\n            width: 0px; }\n            @media (max-width: 767px) {\n              :host .breadcrumb.custom-2 li a:before, :host .breadcrumb.custom-2 li a:after,\n              :host .breadcrumb.custom-2 li .static:before,\n              :host .breadcrumb.custom-2 li .static:after {\n                display: none; } }\n          :host .breadcrumb.custom-2 li a:before,\n          :host .breadcrumb.custom-2 li .static:before {\n            border-width: 18px 0 18px 10px;\n            border-top-color: inherit;\n            border-bottom-color: inherit;\n            left: -10px; }\n            .rtl :host .breadcrumb.custom-2 li a:before, .rtl\n            :host .breadcrumb.custom-2 li .static:before {\n              border-style: solid;\n              border-color: transparent;\n              border-width: 18px 0 18px 10px;\n              border-left-color: inherit;\n              left: auto;\n              right: -10px; }\n          :host .breadcrumb.custom-2 li a:after,\n          :host .breadcrumb.custom-2 li .static:after {\n            border-width: 18px 0 18px 10px;\n            border-left-color: inherit;\n            right: -10px; }\n            .rtl :host .breadcrumb.custom-2 li a:after, .rtl\n            :host .breadcrumb.custom-2 li .static:after {\n              border-style: solid;\n              border-color: transparent;\n              border-width: 18px 0 18px 10px;\n              border-top-color: inherit;\n              border-bottom-color: inherit;\n              left: -10px;\n              right: auto; }\n        :host .breadcrumb.custom-2 li a:hover {\n          color: #64b6f7; }\n        :host .breadcrumb.custom-2 li .static {\n          opacity: .6; }\n        :host .breadcrumb.custom-2 li .separator {\n          display: none; }\n        :host .breadcrumb.custom-2 li:first-child a:before,\n        :host .breadcrumb.custom-2 li:first-child .static:before {\n          display: none; }\n        :host .breadcrumb.custom-2 li:last-child a:after,\n        :host .breadcrumb.custom-2 li:last-child .static:after {\n          display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiBreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiBreadcrumbComponent = (function () {
    function NiBreadcrumbComponent() {
        this.menu = [];
        this.separator = '/';
        this.style = 'default'; //custom1 | custom2
    }
    NiBreadcrumbComponent.prototype.ngOnInit = function () { };
    NiBreadcrumbComponent.prototype.getClasses = function () {
        return {
            'custom-1': this.style === 'custom1',
            'custom-2': this.style === 'custom2'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NiBreadcrumbComponent.prototype, "menu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBreadcrumbComponent.prototype, "separator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBreadcrumbComponent.prototype, "style", void 0);
    NiBreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-breadcrumb',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiBreadcrumbComponent);
    return NiBreadcrumbComponent;
}());

//# sourceMappingURL=ni-breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-button/ni-button.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"btn-line\" *ngIf=\"outline\" [ngStyle]=\"{'border-style': lineStyle}\"></span>\r\n<span class=\"btn-icon before-icon {{beforeIcon}}\" *ngIf=\"beforeIcon\"></span>\r\n<span class=\"btn-text\"><ng-content></ng-content></span>\r\n<span class=\"btn-icon after-icon {{afterIcon}}\" *ngIf=\"afterIcon\"></span>"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-button/ni-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0;\n  border-radius: 3px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 1rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.375;\n  outline: none;\n  padding: 0.34375rem 1.375rem;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  transition: background 0.2s ease-in-out, border 0.2s ease-in-out, color 0.2s ease-in-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n  will-change: background, border, color;\n  -webkit-appearance: none; }\n  :host .btn-text {\n    margin: 0 0.34375rem;\n    min-height: 1.375rem; }\n    :host .btn-text:empty {\n      margin: 0; }\n  :host .btn-line {\n    border-width: 2px;\n    border-style: solid;\n    border-color: inherit;\n    border-radius: inherit;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  :host .btn-icon {\n    margin: 0 0.34375rem; }\n  :host.ni-btn-block {\n    display: block;\n    width: 100%; }\n  :host.ni-btn-left {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    text-align: left; }\n  :host.ni-btn-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    text-align: right; }\n  :host.ni-btn-large {\n    font-size: 1.2rem;\n    padding: 0.6875rem 2.0625rem; }\n    :host.ni-btn-large .btn-text {\n      min-height: 1.65rem; }\n  :host.ni-btn-small {\n    font-size: 0.8rem;\n    padding: 0.171875rem 0.6875rem; }\n    :host.ni-btn-small .btn-text {\n      min-height: 1.1rem; }\n  :host.ni-btn-default {\n    background: #252d47;\n    color: #ffffff; }\n    :host.ni-btn-default:hover, :host.ni-btn-default:focus {\n      background: #464d63;\n      color: #ffffff; }\n    :host.ni-btn-default.ni-btn-outline {\n      border-color: #252d47;\n      color: #252d47; }\n      :host.ni-btn-default.ni-btn-outline:hover, :host.ni-btn-default.ni-btn-outline:focus {\n        background: #252d47;\n        color: #ffffff; }\n  :host.ni-btn-accent {\n    background: #2196f3;\n    color: #ffffff; }\n    :host.ni-btn-accent:hover, :host.ni-btn-accent:focus {\n      background: #1883ef;\n      color: #ffffff; }\n    :host.ni-btn-accent.ni-btn-outline {\n      border-color: #2196f3;\n      color: #2196f3; }\n      :host.ni-btn-accent.ni-btn-outline:hover, :host.ni-btn-accent.ni-btn-outline:focus {\n        background: #2196f3;\n        color: #ffffff; }\n  :host.ni-btn-success {\n    background: #81C784;\n    color: #000; }\n    :host.ni-btn-success:hover, :host.ni-btn-success:focus {\n      background: #5eb762;\n      color: black; }\n    :host.ni-btn-success.ni-btn-outline {\n      border-color: #81C784;\n      color: #81C784; }\n      :host.ni-btn-success.ni-btn-outline:hover, :host.ni-btn-success.ni-btn-outline:focus {\n        background: #81C784;\n        color: #000; }\n  :host.ni-btn-info {\n    background: #64B5F6;\n    color: #000; }\n    :host.ni-btn-info:hover, :host.ni-btn-info:focus {\n      background: #349ef3;\n      color: black; }\n    :host.ni-btn-info.ni-btn-outline {\n      border-color: #64B5F6;\n      color: #64B5F6; }\n      :host.ni-btn-info.ni-btn-outline:hover, :host.ni-btn-info.ni-btn-outline:focus {\n        background: #64B5F6;\n        color: #000; }\n  :host.ni-btn-warning {\n    background: #FFB74D;\n    color: #000; }\n    :host.ni-btn-warning:hover, :host.ni-btn-warning:focus {\n      background: #ffa21a;\n      color: black; }\n    :host.ni-btn-warning.ni-btn-outline {\n      border-color: #FFB74D;\n      color: #FFB74D; }\n      :host.ni-btn-warning.ni-btn-outline:hover, :host.ni-btn-warning.ni-btn-outline:focus {\n        background: #FFB74D;\n        color: #000; }\n  :host.ni-btn-error {\n    background: #e24d4d;\n    color: #fff; }\n    :host.ni-btn-error:hover, :host.ni-btn-error:focus {\n      background: #d92323;\n      color: #e6e5e5; }\n    :host.ni-btn-error.ni-btn-outline {\n      border-color: #e24d4d;\n      color: #e24d4d; }\n      :host.ni-btn-error.ni-btn-outline:hover, :host.ni-btn-error.ni-btn-outline:focus {\n        background: #e24d4d;\n        color: #fff; }\n  :host.ni-btn-outline {\n    background: transparent; }\n  :host.ni-btn-gradient {\n    background-size: 200% auto; }\n    :host.ni-btn-gradient:hover, :host.ni-btn-gradient:focus {\n      background-position: right center;\n      background-size: 200% auto; }\n  :host.ni-btn-disabled {\n    cursor: not-allowed;\n    opacity: .6;\n    pointer-events: none; }\n  :host.ni-btn-icon-animation .btn-icon {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: -webkit-transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    will-change: transform; }\n  :host.ni-btn-icon-animation .btn-text {\n    transition: opacity 0.2s ease-in-out;\n    will-change: opacity; }\n  :host.ni-btn-icon-animation:hover .btn-icon, :host.ni-btn-icon-animation:focus .btn-icon {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  :host.ni-btn-icon-animation:hover .btn-text, :host.ni-btn-icon-animation:focus .btn-text {\n    opacity: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-button/ni-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiButtonComponent = (function () {
    function NiButtonComponent() {
        this.block = false;
        this.gradient = false;
        this.disabled = false;
        this.outline = false;
        this.align = 'center';
        this.size = 'default';
        this.type = 'default';
        this.iconAnimation = false;
    }
    NiButtonComponent.prototype.ngOnInit = function () {
        //console.log(this.disabled);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "block", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "lineStyle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "align", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NiButtonComponent.prototype, "shape", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "beforeIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "afterIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "iconAnimation", void 0);
    NiButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[ni-button]',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-button/ni-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-button/ni-button.component.scss")],
            host: {
                '[class.ni-btn]': 'true',
                '[class.ni-btn-block]': 'block',
                '[class.ni-btn-left]': 'align === "left"',
                '[class.ni-btn-right]': 'align === "right"',
                '[class.ni-btn-large]': 'size === "large"',
                '[class.ni-btn-small]': 'size === "small"',
                '[class.ni-btn-default]': 'type === "default"',
                '[class.ni-btn-accent]': 'type === "accent"',
                '[class.ni-btn-info]': 'type === "info"',
                '[class.ni-btn-success]': 'type === "success"',
                '[class.ni-btn-warning]': 'type === "warning"',
                '[class.ni-btn-error]': 'type === "error"',
                '[class.ni-btn-outline]': 'outline',
                '[class.ni-btn-gradient]': 'gradient',
                '[class.ni-btn-disabled]': 'disabled',
                '[class.ni-btn-icon-animation]': 'iconAnimation',
                '[style.border-radius]': 'shape'
            }
        }),
        __metadata("design:paramtypes", [])
    ], NiButtonComponent);
    return NiButtonComponent;
}());

//# sourceMappingURL=ni-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-card/ni-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"card-wrap\"\n  [ngClass]=\"{\n    'success-card': bgColor === 'success',\n    'info-card': bgColor === 'info',\n    'warning-card': bgColor === 'warning',\n    'danger-card': bgColor === 'danger',\n    'success-color-card': color === 'success',\n    'info-color-card': color === 'info',\n    'warning-color-card': color === 'warning',\n    'danger-color-card': color === 'danger',\n    'bg-image-card': bgImage,\n    'outline-card': outline\n  }\"\n  [ngStyle]=\"{\n   'background-color': customBgColor,\n   'background-image': 'url(' + bgImage + ')',\n   'border-color': customBgColor,\n   'color': customColor\n  }\"\n>\n  <h3\n    class=\"card-header h5\"\n    *ngIf=\"title\"\n    [ngClass]=\"{\n      'text-right': align === 'right',\n      'text-center': align === 'center'\n    }\"\n  >{{title}}</h3>\n\n  <div\n    class=\"card-content\"\n    [ngClass]=\"{\n      'text-right': align === 'right',\n      'text-center': align === 'center'\n    }\"\n    [ngStyle]=\"{'padding': indents}\"\n  >\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-card/ni-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin: 0 0 1.375rem; }\n  :host .card-wrap {\n    background-color: #fff;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 1px solid #e5e6e9;\n    border-radius: 3px;\n    box-shadow: 1px 1px 5px 0px rgba(37, 45, 71, 0.25);\n    position: relative; }\n    :host .card-wrap:not(.outline-card) {\n      border: 0 !important; }\n    :host .card-wrap .card-header {\n      background: #e5e6e9;\n      border-radius: 3px 3px 0 0;\n      color: #000000;\n      display: block;\n      margin: 0;\n      padding: 0.6875rem 1.375rem;\n      position: relative; }\n      :host .card-wrap .card-header + .card-content {\n        border-radius: 0 0 3px 3px; }\n    :host .card-wrap .card-content {\n      border-radius: 3px;\n      display: block;\n      padding: 1.375rem;\n      position: relative; }\n    :host .card-wrap.success-card {\n      background: #81C784;\n      border-color: #81C784; }\n      :host .card-wrap.success-card:not(.outline-card) {\n        color: #fff; }\n    :host .card-wrap.info-card {\n      background: #64B5F6;\n      border-color: #64B5F6; }\n      :host .card-wrap.info-card:not(.outline-card) {\n        color: #fff; }\n    :host .card-wrap.warning-card {\n      background: #FFB74D;\n      border-color: #FFB74D; }\n      :host .card-wrap.warning-card:not(.outline-card) {\n        color: #fff; }\n    :host .card-wrap.danger-card {\n      background: #e24d4d;\n      border-color: #e24d4d; }\n      :host .card-wrap.danger-card:not(.outline-card) {\n        color: #fff; }\n    :host .card-wrap.success-color-card {\n      color: #81C784; }\n    :host .card-wrap.info-color-card {\n      color: #64B5F6; }\n    :host .card-wrap.warning-color-card {\n      color: #FFB74D; }\n    :host .card-wrap.danger-color-card {\n      color: #e24d4d; }\n    :host .card-wrap.outline-card {\n      background: none !important;\n      box-shadow: none !important; }\n    :host .card-wrap.bg-image-card {\n      border: none !important; }\n      :host .card-wrap.bg-image-card:before {\n        background-color: inherit;\n        border-radius: 3px;\n        content: '';\n        display: block;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-card/ni-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiCardComponent = (function () {
    function NiCardComponent() {
        this.title = '';
        this.bgColor = '';
        this.customBgColor = '';
        this.color = '';
        this.customColor = '';
        this.bgImage = '';
        this.outline = false;
        this.indents = '';
        this.align = 'left';
    }
    NiCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "bgColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "customBgColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "customColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "bgImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiCardComponent.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NiCardComponent.prototype, "indents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "align", void 0);
    NiCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-card',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-card/ni-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-card/ni-card.component.scss")],
            host: {
                '[class.ni-card]': 'true'
            }
        }),
        __metadata("design:paramtypes", [])
    ], NiCardComponent);
    return NiCardComponent;
}());

//# sourceMappingURL=ni-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-chat/ni-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-wrap\">\n  <div class=\"dialog\">\n    <div class=\"dialog-header\">\n      <div class=\"user-avatar\">\n        <div *ngIf=\"activeUser.avatar && activeUser.avatar !== ''; then imageAvatar else textAvatar\"></div>\n\n        <ng-template #imageAvatar>\n          <div class=\"image-avatar\"><img src=\"{{ activeUser.avatar }}\" alt=\"\"></div>\n        </ng-template>\n        <ng-template #textAvatar>\n          <div class=\"text-avatar\">{{ firstLetter }}</div>\n        </ng-template>\n      </div>\n      <div class=\"user-info\">\n        <h3 class=\"user-name\">{{ activeUser.name }}</h3>\n        <div class=\"user-last-seen\" [ngClass]=\"{'online': activeUser.lastSeen === 'online'}\">{{ activeUser.lastSeen }}</div>\n      </div>\n      <button class=\"btn call\"><i class=\"sli-options-vertical\"></i></button>\n    </div>\n\n    <div class=\"dialog-messages\">\n      <div class=\"messages-list\">\n        <div *ngFor=\"let message of messages\" class=\"message\" [ngClass]=\"{'my-message': message.my}\">\n          <div class=\"message-content\" [innerHtml]=\"message.content\"></div>\n          <div class=\"message-date\">{{ message.date }}</div>\n        </div>\n      </div>\n    </div>\n\n    <form class=\"dialog-footer\" #messageForm=\"ngForm\" (ngSubmit)=\"onSubmit(messageForm)\" (keydown.enter)=\"onSubmit(messageForm)\">\n      <button class=\"btn load-file\" (click)=\"loadFile($event); false\"><i class=\"sli-paper-clip\"></i></button>\n      <div class=\"message-box\">\n        <textarea required ngModel class=\"enter-message\" rows=\"1\" name=\"message\" placeholder=\"Write a message...\"></textarea>\n      </div>\n      <button class=\"btn send-message\" type=\"submit\"><i class=\"sli-paper-plane\"></i></button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-chat/ni-chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #fff;\n  border-radius: 3px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-family: inherit;\n  height: 500px;\n  max-height: 100%;\n  width: 100%; }\n  :host .chat-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    max-height: inherit; }\n    :host .chat-wrap .dialog {\n      background: #e5e6e9;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      max-height: inherit;\n      width: 100%; }\n      :host .chat-wrap .dialog .btn {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background: none;\n        border: none;\n        border-radius: 0;\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.3);\n        cursor: pointer;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 20px;\n        height: 2.75rem;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        outline: none;\n        padding: 0;\n        transition: color 0.2s ease-in-out;\n        width: 2.75rem; }\n        :host .chat-wrap .dialog .btn:hover, :host .chat-wrap .dialog .btn:focus {\n          color: #000; }\n      :host .chat-wrap .dialog .dialog-header {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background: #fff;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0.6875rem 0.6875rem; }\n        :host .chat-wrap .dialog .dialog-header .user-avatar {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          background: #666c7e;\n          border-radius: 50%;\n          color: #ffffff;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 36px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin: 0 0.6875rem;\n          overflow: hidden;\n          width: 36px; }\n          :host .chat-wrap .dialog .dialog-header .user-avatar .text-avatar {\n            font-size: 20px;\n            line-height: 1; }\n        :host .chat-wrap .dialog .dialog-header .user-info {\n          -webkit-box-flex: 2;\n              -ms-flex-positive: 2;\n                  flex-grow: 2; }\n          :host .chat-wrap .dialog .dialog-header .user-info .user-name {\n            font-size: 16px;\n            margin: 0; }\n          :host .chat-wrap .dialog .dialog-header .user-info .user-last-seen {\n            line-height: 1;\n            opacity: .8; }\n            :host .chat-wrap .dialog .dialog-header .user-info .user-last-seen.online {\n              color: #64B5F6;\n              opacity: 1; }\n      :host .chat-wrap .dialog .dialog-messages {\n        height: 100%;\n        min-height: 300px;\n        overflow: auto; }\n        :host .chat-wrap .dialog .dialog-messages .messages-list {\n          padding: 0.34375rem 1.375rem 0; }\n          :host .chat-wrap .dialog .dialog-messages .messages-list .message {\n            padding: 0.34375rem 0;\n            transition: -webkit-transform 0.2s ease-in-out;\n            transition: transform 0.2s ease-in-out;\n            transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n            width: 90%; }\n            :host .chat-wrap .dialog .dialog-messages .messages-list .message .message-content {\n              background: #fff;\n              border-radius: 5px;\n              display: inline-block;\n              padding: 0.34375rem 0.6875rem;\n              position: relative; }\n              :host .chat-wrap .dialog .dialog-messages .messages-list .message .message-content:before {\n                border: 5px solid transparent;\n                border-bottom-color: #fff;\n                bottom: 0;\n                content: '';\n                display: block;\n                height: 0;\n                left: -5px;\n                position: absolute;\n                width: 0; }\n                .rtl :host .chat-wrap .dialog .dialog-messages .messages-list .message .message-content:before {\n                  left: auto;\n                  right: -5px; }\n            :host .chat-wrap .dialog .dialog-messages .messages-list .message .message-date {\n              font-size: 90%;\n              margin-top: 0.171875rem;\n              opacity: .8; }\n            :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message {\n              margin-left: auto;\n              text-align: right; }\n              .rtl :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message {\n                margin-left: 0;\n                margin-right: auto;\n                text-align: left; }\n              :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message .message-content {\n                background: #0bd237;\n                color: #fff; }\n                :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message .message-content:before {\n                  border-bottom-color: #0bd237;\n                  left: auto;\n                  right: -5px; }\n                  .rtl :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message .message-content:before {\n                    left: -5px;\n                    right: auto; }\n        :host .chat-wrap .dialog .dialog-messages.add-message .messages-list .message:last-child {\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\n      :host .chat-wrap .dialog .dialog-footer {\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        background: #fff;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        min-height: 2.75rem;\n        padding: 0 0.6875rem; }\n        :host .chat-wrap .dialog .dialog-footer .btn.send-message {\n          color: #64B5F6; }\n          :host .chat-wrap .dialog .dialog-footer .btn.send-message:hover, :host .chat-wrap .dialog .dialog-footer .btn.send-message:focus {\n            color: #000; }\n        :host .chat-wrap .dialog .dialog-footer .message-box {\n          -webkit-box-flex: 2;\n              -ms-flex-positive: 2;\n                  flex-grow: 2;\n          padding: 0.6875rem 0; }\n          :host .chat-wrap .dialog .dialog-footer .message-box .enter-message {\n            background: none;\n            border: 0;\n            display: block;\n            font-family: inherit;\n            font-size: 14px;\n            height: auto;\n            line-height: 1.6;\n            max-height: 5.5rem;\n            min-height: 1.375rem;\n            outline: none;\n            overflow: hidden;\n            padding: 0;\n            resize: none;\n            width: 100%; }\n            :host .chat-wrap .dialog .dialog-footer .message-box .enter-message::-webkit-input-placeholder {\n              color: rgba(0, 0, 0, 0.5); }\n            :host .chat-wrap .dialog .dialog-footer .message-box .enter-message::-moz-placeholder {\n              color: rgba(0, 0, 0, 0.5); }\n            :host .chat-wrap .dialog .dialog-footer .message-box .enter-message:-ms-input-placeholder {\n              color: rgba(0, 0, 0, 0.5); }\n            :host .chat-wrap .dialog .dialog-footer .message-box .enter-message:-moz-placeholder {\n              color: rgba(0, 0, 0, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-chat/ni-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/ni-components/ni-chat/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__user__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NiChatComponent = (function () {
    function NiChatComponent(elementRef) {
        this.elementRef = elementRef;
        this.contacts = [];
        this.messages = [];
        this.dialogMessages = this.elementRef.nativeElement.getElementsByClassName('dialog-messages');
    }
    NiChatComponent.prototype.ngOnInit = function () {
        this.firstLetter = this.activeUser.name.charAt(0);
        this.scrollToBottom(this.dialogMessages);
    };
    NiChatComponent.prototype.onSubmit = function (form) {
        var messageContent = form.value.message;
        var newMessage = (messageContent !== '' && messageContent !== null) ? messageContent.replace(/(?:\r\n|\r|\n)/g, '') : messageContent;
        if (newMessage !== '' && newMessage !== null) {
            messageContent = messageContent.replace(/(?:\r\n|\r|\n)/g, ' ');
            var date = new Date();
            var minutes = date.getMinutes();
            this.message = {
                date: date.getHours() + ' : ' + ((minutes > 9) ? minutes : '0' + minutes),
                content: messageContent,
                my: true
            };
            this.messages.push(this.message);
            form.reset();
            var chatDialogMessages_1 = this.dialogMessages[0];
            chatDialogMessages_1.classList.add('add-message');
            setTimeout(function () {
                chatDialogMessages_1.classList.remove('add-message');
            }, 200);
            //Scroll to bottom
            this.scrollToBottom(this.dialogMessages);
        }
    };
    NiChatComponent.prototype.scrollToBottom = function (elem) {
        var eleArray = Array.prototype.slice.call(elem);
        setTimeout(function () {
            eleArray.map(function (val) {
                val.scrollTop = val.scrollHeight;
            });
        }, 0);
    };
    NiChatComponent.prototype.loadFile = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NiChatComponent.prototype, "contacts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user__["User"]) === "function" && _a || Object)
    ], NiChatComponent.prototype, "activeUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NiChatComponent.prototype, "messages", void 0);
    NiChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-chat',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-chat/ni-chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-chat/ni-chat.component.scss")],
            host: {
                '[class.ni-chat]': 'true'
            }
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
    ], NiChatComponent);
    return NiChatComponent;
    var _a, _b;
}());

//# sourceMappingURL=ni-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-chat/user.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ni_alert_ni_alert_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-alert/ni-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ni_badge_ni_badge_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-badge/ni-badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ni_breadcrumb_ni_breadcrumb_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ni_button_ni_button_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-button/ni-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ni_card_ni_card_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-card/ni-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ni_chat_ni_chat_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-chat/ni-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ni_file_ni_file_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-file/ni-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ni_h_timeline_ni_h_timeline_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_color_color_directive__ = __webpack_require__("../../../../../src/app/ni-components/directives/color/color.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_bg_bg_directive__ = __webpack_require__("../../../../../src/app/ni-components/directives/bg/bg.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_gradient_gradient_directive__ = __webpack_require__("../../../../../src/app/ni-components/directives/gradient/gradient.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_auto_grow_auto_grow_directive__ = __webpack_require__("../../../../../src/app/ni-components/directives/auto-grow/auto-grow.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var NiComponentsModule = (function () {
    function NiComponentsModule() {
    }
    NiComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ni_alert_ni_alert_component__["a" /* NiAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ni_badge_ni_badge_component__["a" /* NiBadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ni_breadcrumb_ni_breadcrumb_component__["a" /* NiBreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ni_button_ni_button_component__["a" /* NiButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ni_card_ni_card_component__["a" /* NiCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__ni_chat_ni_chat_component__["a" /* NiChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ni_file_ni_file_component__["a" /* NiFileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ni_h_timeline_ni_h_timeline_component__["a" /* NiHTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_color_color_directive__["a" /* ColorDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_bg_bg_directive__["a" /* BgDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_gradient_gradient_directive__["a" /* GradientDirective */],
                __WEBPACK_IMPORTED_MODULE_14__directives_auto_grow_auto_grow_directive__["a" /* AutoGrowDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ni_alert_ni_alert_component__["a" /* NiAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ni_badge_ni_badge_component__["a" /* NiBadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ni_breadcrumb_ni_breadcrumb_component__["a" /* NiBreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ni_button_ni_button_component__["a" /* NiButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ni_card_ni_card_component__["a" /* NiCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__ni_chat_ni_chat_component__["a" /* NiChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ni_file_ni_file_component__["a" /* NiFileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ni_h_timeline_ni_h_timeline_component__["a" /* NiHTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_color_color_directive__["a" /* ColorDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_bg_bg_directive__["a" /* BgDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_gradient_gradient_directive__["a" /* GradientDirective */]
            ]
        })
    ], NiComponentsModule);
    return NiComponentsModule;
}());

//# sourceMappingURL=ni-components.module.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-file/ni-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"file\"\n  [ngClass]=\"{\n    'doc-file': type === 'doc',\n    'xlx-file': type === 'xlx',\n    'pdf-file': type === 'pdf',\n    'archive-file': type === 'zip',\n    'audio-file': type === 'mp3',\n    'video-file': (type === 'mp4') || (type === 'webm') || (type === 'ogv'),\n    'image-file': (type === 'jpg') || (type === 'jpeg') || (type === 'png') || (type === 'gif'),\n    'size-small': size === 'small',\n    'size-large': size === 'large',\n    'spinner-file': spinner\n  }\"\n>\n  <div class=\"file-prev\">\n    <div class=\"icon\" [ngStyle]=\"{'background-image': 'url('+image+')'}\">\n      <i\n        class=\"fa\"\n        [ngClass]=\"{\n          'fa-paperclip': type === '*',\n          'fa-file-word-o': type === 'doc',\n          'fa-file-excel-o': type === 'xlx',\n          'fa-file-pdf-o': type === 'pdf',\n          'fa-file-archive-o': type === 'zip',\n          'fa-file-audio-o': type === 'mp3',\n          'fa-file-video-o': (type === 'mp4') || (type === 'webm') || (type === 'ogv'),\n          'fa-file-image-o': (type === 'jpg') || (type === 'jpeg') || (type === 'png') || (type === 'gif')\n        }\"\n        *ngIf=\"!image\"\n        aria-hidden=\"true\"\n      ></i>\n      <i class=\"material-icons delete\" *ngIf=\"delete\">clear</i>\n    </div>\n    <div class=\"spinner\" *ngIf=\"spinner\"><i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i></div>\n  </div>\n  <div class=\"file-name\"><span class=\"name\">{{title}}</span><span class=\"type\">.{{type}}</span></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-file/ni-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block;\n  margin: 0 4px 10px;\n  position: relative; }\n  :host .file {\n    display: block;\n    width: 120px; }\n    :host .file .file-prev {\n      background: #9296a3;\n      border-radius: 3px;\n      color: #fff;\n      display: block;\n      font-size: 40px;\n      overflow: hidden;\n      padding-top: 100%;\n      position: relative;\n      width: 100%; }\n      :host .file .file-prev .icon {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 100%; }\n        :host .file .file-prev .icon .delete {\n          background: rgba(0, 0, 0, 0.1);\n          cursor: pointer;\n          font-size: 20px;\n          position: absolute;\n          right: 0;\n          top: 0;\n          transition: background 0.2s ease-in-out, color 0.2s ease-in-out; }\n          .rtl :host .file .file-prev .icon .delete {\n            left: 0;\n            right: auto; }\n          :host .file .file-prev .icon .delete:hover {\n            background: rgba(255, 255, 255, 0.3);\n            color: #f00; }\n      :host .file .file-prev .spinner {\n        background: inherit;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 100%; }\n        :host .file .file-prev .spinner .fa {\n          font-size: inherit; }\n    :host .file .file-name {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      font-size: 11px;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      margin-top: 3px;\n      white-space: nowrap; }\n      .rtl :host .file .file-name {\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start; }\n      :host .file .file-name .name {\n        overflow: hidden;\n        text-overflow: ellipsis; }\n    :host .file.doc-file .file-prev {\n      background: #029acf; }\n    :host .file.xlx-file .file-prev {\n      background: #469408; }\n    :host .file.pdf-file .file-prev {\n      background: #d9831f; }\n    :host .file.archive-file .file-prev {\n      background: #9b479f; }\n    :host .file.audio-file .file-prev {\n      background: #FF9800; }\n    :host .file.video-file .file-prev {\n      background: #FF5722; }\n    :host .file.image-file .file-prev .icon {\n      background-position: 50% 50%;\n      background-repeat: no-repeat;\n      background-size: cover; }\n    :host .file.size-small {\n      width: 50px; }\n      :host .file.size-small .file-prev {\n        font-size: 20px; }\n    :host .file.size-large {\n      width: 180px; }\n      :host .file.size-large .file-prev {\n        font-size: 60px; }\n    :host .file.spinner-file .file-prev .icon {\n      visibility: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-file/ni-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiFileComponent = (function () {
    function NiFileComponent() {
        this.title = 'no-name';
        this.type = '*';
        this.image = '';
        this.size = 'normal';
        this.delete = false;
        this.spinner = false;
        this.link = false;
    }
    NiFileComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiFileComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiFileComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiFileComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiFileComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiFileComponent.prototype, "delete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiFileComponent.prototype, "spinner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NiFileComponent.prototype, "link", void 0);
    NiFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-file',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-file/ni-file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-file/ni-file.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiFileComponent);
    return NiFileComponent;
}());

//# sourceMappingURL=ni-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"line\"></span>\n\n<div class=\"timeline-box\" *ngFor=\"let box of data\">\n  <div class=\"box-label\" *ngIf=\"showYears && box.label\">\n    <div class=\"label-text\">{{ box.label }}</div>\n  </div>\n\n  <div class=\"box-items\">\n    <div class=\"item\" *ngFor=\"let item of box.timeline\">\n      <div class=\"item-point\" [ngStyle]=\"{ 'border-color': item.pointColor }\"></div>\n      <div class=\"item-date\" *ngIf=\"showDate && item.date\"><span>{{ item.date }}</span></div>\n      <div class=\"item-content\">\n        <h2 class=\"h6 item-title\" *ngIf=\"item.title\">{{ item.title }}</h2>\n        <div class=\"item-desc\" [innerHTML]=\"item.content\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  direction: ltr;\n  display: block;\n  position: relative; }\n  :host .line {\n    border-left: 2px solid #e5e6e9;\n    height: 100%;\n    left: 6px;\n    margin-left: -1px;\n    position: absolute;\n    top: 0; }\n  :host .timeline-box .box-label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0.6875rem 0; }\n    :host .timeline-box .box-label .label-text {\n      background: #2196f3;\n      border-radius: 3px;\n      color: #ffffff;\n      display: inline-block;\n      min-width: 5.5rem;\n      padding: 0.34375rem 0.6875rem;\n      position: relative;\n      text-align: center; }\n  :host .timeline-box .box-items {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    :host .timeline-box .box-items .item {\n      margin: 1.375rem 0;\n      padding-left: 50px;\n      position: relative; }\n      @media (max-width: 543px) {\n        :host .timeline-box .box-items .item {\n          padding-left: 32px; } }\n      :host .timeline-box .box-items .item .item-point {\n        background: #fff;\n        border: 2px solid #252d47;\n        border-radius: 50%;\n        display: block;\n        height: 12px;\n        left: 0;\n        position: absolute;\n        top: calc(1.03125rem + 1px);\n        width: 12px; }\n      :host .timeline-box .box-items .item .item-date {\n        font-size: 0.875rem;\n        margin-bottom: 0.6875rem; }\n      :host .timeline-box .box-items .item .item-content {\n        background: #fff;\n        border-radius: 3px;\n        display: inline-block;\n        padding: 1.03125rem 1.375rem;\n        position: relative;\n        width: auto; }\n        .rtl :host .timeline-box .box-items .item .item-content {\n          direction: rtl; }\n        :host .timeline-box .box-items .item .item-content:before, :host .timeline-box .box-items .item .item-content:after {\n          border: 10px solid transparent;\n          content: '';\n          display: block;\n          height: 0;\n          position: absolute;\n          top: 14px;\n          width: 0; }\n        :host .timeline-box .box-items .item .item-content:before {\n          border-right-color: #fff;\n          right: 100%; }\n        :host .timeline-box .box-items .item .item-content:after {\n          display: none;\n          left: 100%;\n          border-left-color: #fff; }\n        :host .timeline-box .box-items .item .item-content .item-title {\n          margin-top: 0; }\n  :host.show-date .timeline-box .box-items .item .item-point {\n    top: calc(2.8875rem + 1px); }\n  :host.align-right .line {\n    left: auto;\n    margin: 0 -1px 0 auto;\n    right: 6px; }\n  :host.align-right .timeline-box .box-label {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  :host.align-right .timeline-box .box-items {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    :host.align-right .timeline-box .box-items .item {\n      padding: 0 50px 0 0; }\n      @media (max-width: 543px) {\n        :host.align-right .timeline-box .box-items .item {\n          padding: 0 32px 0 0; } }\n      :host.align-right .timeline-box .box-items .item .item-point {\n        left: auto;\n        right: 0; }\n      :host.align-right .timeline-box .box-items .item .item-date {\n        text-align: right; }\n      :host.align-right .timeline-box .box-items .item .item-content:before {\n        display: none; }\n      :host.align-right .timeline-box .box-items .item .item-content:after {\n        display: block; }\n  :host.align-center .line {\n    left: 50%; }\n  :host.align-center .timeline-box .box-label {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  :host.align-center .timeline-box .box-items {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    :host.align-center .timeline-box .box-items .item {\n      padding: 0;\n      text-align: center; }\n      @media (max-width: 543px) {\n        :host.align-center .timeline-box .box-items .item {\n          padding: 0; } }\n      :host.align-center .timeline-box .box-items .item .item-point {\n        left: 50%;\n        margin: -26px 0 0 -6px;\n        top: 0; }\n      :host.align-center .timeline-box .box-items .item .item-date {\n        margin-bottom: 33px;\n        text-align: center; }\n        :host.align-center .timeline-box .box-items .item .item-date span {\n          background: #fff;\n          border: 1px solid #e5e6e9;\n          border-radius: 3px;\n          display: inline-block;\n          padding: 0.34375rem 0.6875rem; }\n      :host.align-center .timeline-box .box-items .item .item-content:before {\n        border-color: transparent transparent #fff transparent;\n        left: 50%;\n        margin: -20px 0 0 -10px;\n        top: 0; }\n  :host.align-center.show-date .timeline-box .box-items .item .item-point {\n    margin-top: 40px; }\n  @media (min-width: 768px) {\n    :host.align-between .line {\n      left: 50%; }\n    :host.align-between .timeline-box .box-label {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    :host.align-between .timeline-box .box-items .item {\n      width: 50%; }\n      :host.align-between .timeline-box .box-items .item:nth-child(even) {\n        -ms-flex-item-align: end;\n            align-self: flex-end; }\n        :host.align-between .timeline-box .box-items .item:nth-child(even) .item-point {\n          left: 0;\n          margin-left: -6px; }\n      :host.align-between .timeline-box .box-items .item:nth-child(odd) {\n        padding: 0 50px 0 0;\n        text-align: right; } }\n    @media (min-width: 768px) and (max-width: 543px) {\n      :host.align-between .timeline-box .box-items .item:nth-child(odd) {\n        padding: 0 32px 0 0; } }\n  @media (min-width: 768px) {\n        :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-point {\n          left: 100%;\n          margin-left: -6px; }\n        :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-content {\n          text-align: left; }\n          .rtl :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-content {\n            text-align: right; }\n          :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-content:before {\n            display: none; }\n          :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-content:after {\n            display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiHTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiHTimelineComponent = (function () {
    function NiHTimelineComponent() {
        this.showYears = false;
        this.showDate = true;
        this.align = 'left';
        this.style = '';
        this.data = [];
        this.alignLeft = false;
        this.alignCenter = false;
        this.alignRight = false;
        this.alignBetween = false;
    }
    NiHTimelineComponent.prototype.ngOnInit = function () {
        this.alignLeft = (this.align === 'left');
        this.alignCenter = (this.align === 'center');
        this.alignRight = (this.align === 'right');
        this.alignBetween = (this.align === 'between');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "showYears", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "showDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiHTimelineComponent.prototype, "align", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NiHTimelineComponent.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NiHTimelineComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.align-left'),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "alignLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.align-center'),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "alignCenter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.align-right'),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "alignRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.align-between'),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "alignBetween", void 0);
    NiHTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-h-timeline',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.scss")],
            host: {
                '[class.ni-h-timeline]': 'true',
                '[class.show-years]': 'showYears',
                '[class.show-date]': 'showDate'
            }
        }),
        __metadata("design:paramtypes", [])
    ], NiHTimelineComponent);
    return NiHTimelineComponent;
}());

//# sourceMappingURL=ni-h-timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [customBgColor]=\"'#ccc'\" [outline]=\"true\">\r\n  <div [ngSwitch]=\"view\">\r\n    <mwl-calendar-month-view\r\n      *ngSwitchCase=\"'month'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      [activeDayIsOpen]=\"activeDayIsOpen\"\r\n      (dayClicked)=\"dayClicked($event.day)\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-month-view>\r\n    <mwl-calendar-week-view\r\n      *ngSwitchCase=\"'week'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-week-view>\r\n    <mwl-calendar-day-view\r\n      *ngSwitchCase=\"'day'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-day-view>\r\n  </div>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  overflow-x: auto; }\n  :host /deep/card {\n    margin: 0;\n    min-width: 600px; }\n    :host /deep/card .card-wrap .card-content {\n      padding: 0 !important; }\n  :host /deep/.cal-month-view {\n    display: block; }\n    :host /deep/.cal-month-view .cal-day-badge {\n      background: #dc143c; }\n    :host /deep/.cal-month-view .cal-days {\n      border-left: 0;\n      border-right: 0; }\n    :host /deep/.cal-month-view .cal-open-day-events {\n      background: #666c7e;\n      box-shadow: none; }\n      :host /deep/.cal-month-view .cal-open-day-events .cal-event-action {\n        color: rgba(255, 255, 255, 0.5);\n        display: inline-block;\n        font-size: 16px;\n        margin: 0 2px;\n        vertical-align: top; }\n        :host /deep/.cal-month-view .cal-open-day-events .cal-event-action:hover {\n          color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BREADCRUMBS = [
    {
        title: 'Main',
        link: '#'
    },
    {
        title: 'Calendar',
        link: ''
    }
];
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var PageCalendarComponent = (function () {
    function PageCalendarComponent(dialog, doc, _sharedService) {
        var _this = this;
        this.dialog = dialog;
        this._sharedService = _sharedService;
        this.pageTitle = 'Calendar';
        this.breadcrumb = BREADCRUMBS;
        this.config = {
            disableClose: false,
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                action: '',
                event: []
            }
        };
        this.numTemplateOpens = 0;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [{
                label: '<i class="fa fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            }, {
                label: '<i class="fa fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.events = [{
                start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
        this.activeDayIsOpen = true;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageCalendarComponent.prototype.ngOnInit = function () { };
    PageCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    PageCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    PageCalendarComponent.prototype.handleEvent = function (action, event) {
        var _this = this;
        this.config.data = { event: event, action: action };
        this.dialogRef = this.dialog.open(CalendarDialogComponent, this.config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    PageCalendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    PageCalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__("../../../../../src/app/pages/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/calendar/calendar.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageCalendarComponent);
    return PageCalendarComponent;
    var _a, _b;
}());

var CalendarDialogComponent = (function () {
    function CalendarDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CalendarDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar-dialog',
            template: "\n  <h5 class=\"mt-0\">Event action occurred</h5>\n  <div class=\"mb-4\">\n    <strong>Action:</strong>\n    <pre>{{ data?.action }}</pre>\n  </div>\n  <div class=\"mb-4\">\n    <strong>Event:</strong>\n    <pre>{{ data?.event | json }}</pre>\n  </div>\n  <button md-button type=\"button\" (click)=\"dialogRef.close()\">Close dialog</button>"
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, Object])
    ], CalendarDialogComponent);
    return CalendarDialogComponent;
    var _a;
}());

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/amcharts/amcharts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-6\">\n    <ni-card title=\"Column chart\">\n      <div id=\"amchart-1\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\n    </ni-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <ni-card title=\"Lines chart\">\n      <div id=\"amchart-2\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-xl-6\">\n    <ni-card title=\"Column and line chart\">\n      <div id=\"amchart-3\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\n    </ni-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <ni-card title=\"Pie chart\">\n      <div id=\"amchart-4\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-xl-6\">\n    <ni-card title=\"Donut chart\">\n      <div id=\"amchart-5\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\n    </ni-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <ni-card title=\"Radar chart\">\n      <div id=\"amchart-6\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-xl-6\">\n    <ni-card title=\"CSS animations chart\" class=\"mb-xl-0\">\n      <div id=\"amchart-7\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\n    </ni-card>\n  </div>\n  <div class=\"col-xl-6\">\n    <ni-card title=\"Bubble chart\" class=\"mb-0\">\n      <div id=\"amchart-8\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\n    </ni-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/charts/amcharts/amcharts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .amcharts-graph-g2 .amcharts-graph-stroke {\n  stroke-dasharray: 3px 3px;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  -webkit-animation: am-moving-dashes 1s linear infinite;\n          animation: am-moving-dashes 1s linear infinite; }\n\n@-webkit-keyframes am-moving-dashes {\n  100% {\n    stroke-dashoffset: -31px; } }\n\n@keyframes am-moving-dashes {\n  100% {\n    stroke-dashoffset: -31px; } }\n\n:host /deep/ .lastBullet {\n  -webkit-animation: am-pulsating 1s ease-out infinite;\n          animation: am-pulsating 1s ease-out infinite; }\n\n@-webkit-keyframes am-pulsating {\n  0% {\n    stroke-opacity: 1;\n    stroke-width: 0px; }\n  100% {\n    stroke-opacity: 0;\n    stroke-width: 50px; } }\n\n@keyframes am-pulsating {\n  0% {\n    stroke-opacity: 1;\n    stroke-width: 0px; }\n  100% {\n    stroke-opacity: 0;\n    stroke-width: 50px; } }\n\n:host /deep/ .amcharts-graph-column-front {\n  transition: all .3s .3s ease-out; }\n\n:host /deep/ .amcharts-graph-column-front:hover {\n  fill: #496375;\n  stroke: #496375;\n  transition: all .3s ease-out; }\n\n:host /deep/ .amcharts-graph-g3 {\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  stroke-dasharray: 500%;\n  stroke-dasharray: 0;\n  stroke-dashoffset: 0;\n  -webkit-animation: am-draw 40s;\n          animation: am-draw 40s; }\n\n@-webkit-keyframes am-draw {\n  0% {\n    stroke-dashoffset: 500%; }\n  100% {\n    stroke-dashoffset: 0%; } }\n\n@keyframes am-draw {\n  0% {\n    stroke-dashoffset: 500%; }\n  100% {\n    stroke-dashoffset: 0%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charts/amcharts/amcharts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAmchartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageAmchartsComponent = (function () {
    function PageAmchartsComponent(AmCharts, _sharedService) {
        this.AmCharts = AmCharts;
        this._sharedService = _sharedService;
        this.pageTitle = 'Amcharts';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageAmchartsComponent.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('amchart-1', {
            'type': 'serial',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Angular',
                    'visits': 1232
                }, {
                    'country': 'AngularJS',
                    'visits': 1882
                }, {
                    'country': 'React',
                    'visits': 1809
                }, {
                    'country': 'Vue.js',
                    'visits': 1322
                }, {
                    'country': 'Backbone.js',
                    'visits': 1542
                }, {
                    'country': 'Ember.js',
                    'visits': 1497
                }, {
                    'country': 'Meteor.js',
                    'visits': 1240
                }, {
                    'country': 'jQuery',
                    'visits': 711
                }
            ],
            'valueAxes': [{
                    'gridColor': '#FFFFFF',
                    'gridAlpha': 0.2,
                    'dashLength': 0
                }],
            'gridAboveGraphs': true,
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[category]]: <b>[[value]]</b>',
                    'fillAlphas': 0.8,
                    'lineAlpha': 0.2,
                    'type': 'column',
                    'valueField': 'visits'
                }],
            'chartCursor': {
                'categoryBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false
            },
            'categoryField': 'country',
            'categoryAxis': {
                'gridPosition': 'start',
                'gridAlpha': 0,
                'tickPosition': 'start',
                'tickLength': 20
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-2', {
            'type': 'serial',
            'theme': 'light',
            //'autoMarginOffset':20,
            'dataDateFormat': 'YYYY-MM-DD HH:NN',
            'dataProvider': [
                {
                    'date': '2012-01-01',
                    'value': 8
                }, {
                    'date': '2012-01-02',
                    'color': '#CC0000',
                    'value': 10
                }, {
                    'date': '2012-01-03',
                    'value': 12
                }, {
                    'date': '2012-01-04',
                    'value': 14
                }, {
                    'date': '2012-01-05',
                    'value': 11
                }, {
                    'date': '2012-01-06',
                    'value': 6
                }, {
                    'date': '2012-01-07',
                    'value': 7
                }, {
                    'date': '2012-01-08',
                    'value': 9
                }, {
                    'date': '2012-01-09',
                    'value': 13
                }, {
                    'date': '2012-01-10',
                    'value': 15
                }, {
                    'date': '2012-01-11',
                    'color': '#CC0000',
                    'value': 19
                }, {
                    'date': '2012-01-12',
                    'value': 21
                }, {
                    'date': '2012-01-13',
                    'value': 22
                }, {
                    'date': '2012-01-14',
                    'value': 20
                }, {
                    'date': '2012-01-15',
                    'value': 18
                }, {
                    'date': '2012-01-16',
                    'value': 14
                }, {
                    'date': '2012-01-17',
                    'color': '#CC0000',
                    'value': 16
                }, {
                    'date': '2012-01-18',
                    'value': 18
                }, {
                    'date': '2012-01-19',
                    'value': 17
                }, {
                    'date': '2012-01-20',
                    'value': 15
                }, {
                    'date': '2012-01-21',
                    'value': 12
                }, {
                    'date': '2012-01-22',
                    'color': '#CC0000',
                    'value': 10
                }, {
                    'date': '2012-01-23',
                    'value': 8
                }
            ],
            'valueAxes': [{
                    'axisAlpha': 0,
                    'guides': [{
                            'fillAlpha': 0.1,
                            'fillColor': '#888888',
                            'lineAlpha': 0,
                            'toValue': 16,
                            'value': 10
                        }],
                    'position': 'left',
                    'tickLength': 0
                }],
            'graphs': [{
                    'balloonText': '[[category]]<br><b><span style="font-size:14px;">value:[[value]]</span></b>',
                    'bullet': 'round',
                    'dashLength': 3,
                    'colorField': 'color',
                    'valueField': 'value'
                }],
            'trendLines': [{
                    'finalDate': '2012-01-11 12',
                    'finalValue': 19,
                    'initialDate': '2012-01-02 12',
                    'initialValue': 10,
                    'lineColor': '#CC0000'
                }, {
                    'finalDate': '2012-01-22 12',
                    'finalValue': 10,
                    'initialDate': '2012-01-17 12',
                    'initialValue': 16,
                    'lineColor': '#CC0000'
                }],
            'chartCursor': {
                'fullWidth': true,
                'valueLineEabled': true,
                'valueLineBalloonEnabled': true,
                'valueLineAlpha': 0.5,
                'cursorAlpha': 0
            },
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'axisAlpha': 0,
                'gridAlpha': 0.1,
                'minorGridAlpha': 0.1,
                'minorGridEnabled': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-3', {
            'type': 'serial',
            'addClassNames': true,
            'theme': 'light',
            'autoMargins': false,
            'marginLeft': 30,
            'marginRight': 8,
            'marginTop': 10,
            'marginBottom': 26,
            'balloon': {
                'adjustBorderColor': false,
                'horizontalPadding': 10,
                'verticalPadding': 8,
                'color': '#ffffff'
            },
            'dataProvider': [{
                    'year': 2012,
                    'income': 23.5,
                    'expenses': 21.1
                }, {
                    'year': 2013,
                    'income': 26.2,
                    'expenses': 30.5
                }, {
                    'year': 2014,
                    'income': 30.1,
                    'expenses': 34.9
                }, {
                    'year': 2015,
                    'income': 29.5,
                    'expenses': 31.1
                }, {
                    'year': 2016,
                    'income': 30.6,
                    'expenses': 28.2,
                    'dashLengthLine': 5
                }, {
                    'year': 2017,
                    'income': 34.1,
                    'expenses': 32.9,
                    'dashLengthColumn': 5,
                    'alpha': 0.2,
                    'additional': '(projection)'
                }],
            'valueAxes': [{
                    'axisAlpha': 0,
                    'position': 'left'
                }],
            'startDuration': 1,
            'graphs': [{
                    'alphaField': 'alpha',
                    'balloonText': '<span style="font-size:12px;">[[title]] in [[category]]:<br><span style="font-size:20px;">[[value]]</span> [[additional]]</span>',
                    'fillAlphas': 1,
                    'title': 'Income',
                    'type': 'column',
                    'valueField': 'income',
                    'dashLengthField': 'dashLengthColumn'
                }, {
                    'id': 'graph2',
                    'balloonText': '<span style="font-size:12px;">[[title]] in [[category]]:<br><span style="font-size:20px;">[[value]]</span> [[additional]]</span>',
                    'bullet': 'round',
                    'lineThickness': 3,
                    'bulletSize': 7,
                    'bulletBorderAlpha': 1,
                    'bulletColor': '#FFFFFF',
                    'useLineColorForBulletBorder': true,
                    'bulletBorderThickness': 3,
                    'fillAlphas': 0,
                    'lineAlpha': 1,
                    'title': 'Expenses',
                    'valueField': 'expenses',
                    'dashLengthField': 'dashLengthLine'
                }],
            'categoryField': 'year',
            'categoryAxis': {
                'gridPosition': 'start',
                'axisAlpha': 0,
                'tickLength': 0
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-4', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Lithuania',
                    'litres': 501.9
                }, {
                    'country': 'Czech Republic',
                    'litres': 301.9
                }, {
                    'country': 'Ireland',
                    'litres': 201.1
                }, {
                    'country': 'Germany',
                    'litres': 165.8
                }, {
                    'country': 'Australia',
                    'litres': 139.9
                }, {
                    'country': 'Austria',
                    'litres': 128.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }, {
                    'country': 'Belgium',
                    'litres': 60
                }, {
                    'country': 'The Netherlands',
                    'litres': 50
                }
            ],
            'valueField': 'litres',
            'titleField': 'country',
            'balloon': {
                'fixedPosition': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-5', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'title': 'New',
                    'value': 4852
                }, {
                    'title': 'Returning',
                    'value': 9899
                }
            ],
            'titleField': 'title',
            'valueField': 'value',
            'labelRadius': 5,
            'radius': '42%',
            'innerRadius': '60%',
            'labelText': '[[title]]'
        });
        this.chart = this.AmCharts.makeChart('amchart-6', {
            'type': 'radar',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Czech Republic',
                    'litres': 156.9
                }, {
                    'country': 'Ireland',
                    'litres': 131.1
                }, {
                    'country': 'Germany',
                    'litres': 115.8
                }, {
                    'country': 'Australia',
                    'litres': 109.9
                }, {
                    'country': 'Austria',
                    'litres': 108.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }
            ],
            'valueAxes': [{
                    'axisTitleOffset': 20,
                    'minimum': 0,
                    'axisAlpha': 0.15
                }],
            'startDuration': 2,
            'graphs': [{
                    'balloonText': '[[value]] litres of beer per year',
                    'bullet': 'round',
                    'lineThickness': 2,
                    'valueField': 'litres'
                }],
            'categoryField': 'country'
        });
        this.chart = this.AmCharts.makeChart('amchart-7', {
            'type': 'serial',
            'theme': 'light',
            'dataDateFormat': 'YYYY-MM-DD',
            'dataProvider': [
                {
                    'date': '2012-01-01',
                    'distance': 227,
                    'townName': 'New York',
                    'townName2': 'New York',
                    'townSize': 25,
                    'latitude': 40.71,
                    'duration': 408
                }, {
                    'date': '2012-01-02',
                    'distance': 371,
                    'townName': 'Washington',
                    'townSize': 14,
                    'latitude': 38.89,
                    'duration': 482
                }, {
                    'date': '2012-01-03',
                    'distance': 433,
                    'townName': 'Wilmington',
                    'townSize': 6,
                    'latitude': 34.22,
                    'duration': 562
                }, {
                    'date': '2012-01-04',
                    'distance': 345,
                    'townName': 'Jacksonville',
                    'townSize': 7,
                    'latitude': 30.35,
                    'duration': 379
                }, {
                    'date': '2012-01-05',
                    'distance': 480,
                    'townName': 'Miami',
                    'townName2': 'Miami',
                    'townSize': 10,
                    'latitude': 25.83,
                    'duration': 501
                }, {
                    'date': '2012-01-06',
                    'distance': 386,
                    'townName': 'Tallahassee',
                    'townSize': 7,
                    'latitude': 30.46,
                    'duration': 443
                }, {
                    'date': '2012-01-07',
                    'distance': 348,
                    'townName': 'New Orleans',
                    'townSize': 10,
                    'latitude': 29.94,
                    'duration': 405
                }, {
                    'date': '2012-01-08',
                    'distance': 238,
                    'townName': 'Houston',
                    'townName2': 'Houston',
                    'townSize': 16,
                    'latitude': 29.76,
                    'duration': 309
                }, {
                    'date': '2012-01-09',
                    'distance': 218,
                    'townName': 'Dalas',
                    'townSize': 17,
                    'latitude': 32.8,
                    'duration': 287
                }, {
                    'date': '2012-01-10',
                    'distance': 349,
                    'townName': 'Oklahoma City',
                    'townSize': 11,
                    'latitude': 35.49,
                    'duration': 485
                }, {
                    'date': '2012-01-11',
                    'distance': 603,
                    'townName': 'Kansas City',
                    'townSize': 10,
                    'latitude': 39.1,
                    'duration': 890
                }, {
                    'date': '2012-01-12',
                    'distance': 534,
                    'townName': 'Denver',
                    'townName2': 'Denver',
                    'townSize': 18,
                    'latitude': 39.74,
                    'duration': 810
                }, {
                    'date': '2012-01-13',
                    'townName': 'Salt Lake City',
                    'townSize': 12,
                    'distance': 425,
                    'duration': 670,
                    'latitude': 40.75,
                    'alpha': 0.4
                }, {
                    'date': '2012-01-14',
                    'latitude': 36.1,
                    'duration': 470,
                    'townName': 'Las Vegas',
                    'townName2': 'Las Vegas',
                    'bulletClass': 'lastBullet'
                }, {
                    'date': '2012-01-15'
                }, {
                    'date': '2012-01-16'
                }, {
                    'date': '2012-01-17'
                }, {
                    'date': '2012-01-18'
                }, {
                    'date': '2012-01-19'
                }
            ],
            'addClassNames': true,
            'startDuration': 1,
            //'color': '#FFFFFF',
            'marginLeft': 0,
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'minPeriod': 'DD',
                'autoGridCount': false,
                'gridCount': 50,
                'gridAlpha': 0.1,
                'gridColor': '#FFFFFF',
                'axisColor': '#555555',
                'dateFormats': [{
                        'period': 'DD',
                        'format': 'DD'
                    }, {
                        'period': 'WW',
                        'format': 'MMM DD'
                    }, {
                        'period': 'MM',
                        'format': 'MMM'
                    }, {
                        'period': 'YYYY',
                        'format': 'YYYY'
                    }]
            },
            'valueAxes': [{
                    'id': 'a1',
                    'title': 'distance',
                    'gridAlpha': 0,
                    'axisAlpha': 0
                }, {
                    'id': 'a2',
                    'position': 'right',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'labelsEnabled': false
                }, {
                    'id': 'a3',
                    'title': 'duration',
                    'position': 'right',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'inside': true,
                    'duration': 'mm',
                    'durationUnits': {
                        'DD': 'd. ',
                        'hh': 'h ',
                        'mm': 'min',
                        'ss': ''
                    }
                }],
            'graphs': [{
                    'id': 'g1',
                    'valueField': 'distance',
                    'title': 'distance',
                    'type': 'column',
                    'fillAlphas': 0.9,
                    'valueAxis': 'a1',
                    'balloonText': '[[value]] miles',
                    'legendValueText': '[[value]] mi',
                    'legendPeriodValueText': 'total: [[value.sum]] mi',
                    'lineColor': '#263138',
                    'alphaField': 'alpha'
                }, {
                    'id': 'g2',
                    'valueField': 'latitude',
                    'classNameField': 'bulletClass',
                    'title': 'latitude/city',
                    'type': 'line',
                    'valueAxis': 'a2',
                    'lineColor': '#786c56',
                    'lineThickness': 1,
                    'legendValueText': '[[value]]/[[description]]',
                    'descriptionField': 'townName',
                    'bullet': 'round',
                    'bulletSizeField': 'townSize',
                    'bulletBorderColor': '#786c56',
                    'bulletBorderAlpha': 1,
                    'bulletBorderThickness': 2,
                    'bulletColor': '#000000',
                    'labelText': '[[townName2]]',
                    'labelPosition': 'right',
                    'balloonText': 'latitude:[[value]]',
                    'showBalloon': true,
                    'animationPlayed': true
                }, {
                    'id': 'g3',
                    'title': 'duration',
                    'valueField': 'duration',
                    'type': 'line',
                    'valueAxis': 'a3',
                    'lineColor': '#ff5755',
                    'balloonText': '[[value]]',
                    'lineThickness': 1,
                    'legendValueText': '[[value]]',
                    'bullet': 'square',
                    'bulletBorderColor': '#ff5755',
                    'bulletBorderThickness': 1,
                    'bulletBorderAlpha': 1,
                    'dashLengthField': 'dashLength',
                    'animationPlayed': true
                }],
            'chartCursor': {
                'zoomable': false,
                'categoryBalloonDateFormat': 'DD',
                'cursorAlpha': 0,
                'valueBalloonsEnabled': false
            },
            'legend': {
                'bulletType': 'round',
                'equalWidths': false,
                'valueWidth': 120,
                'useGraphSettings': true,
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-8', {
            'type': 'xy',
            'theme': 'light',
            'balloon': {
                'fixedPosition': true,
            },
            'dataProvider': [{
                    'y': 10,
                    'x': 14,
                    'value': 59,
                    'y2': -5,
                    'x2': -3,
                    'value2': 44
                }, {
                    'y': 5,
                    'x': 3,
                    'value': 50,
                    'y2': -15,
                    'x2': -8,
                    'value2': 12
                }, {
                    'y': -10,
                    'x': 8,
                    'value': 19,
                    'y2': -4,
                    'x2': 6,
                    'value2': 35
                }, {
                    'y': -6,
                    'x': 5,
                    'value': 65,
                    'y2': -5,
                    'x2': -6,
                    'value2': 168
                }, {
                    'y': 15,
                    'x': -4,
                    'value': 92,
                    'y2': -10,
                    'x2': -8,
                    'value2': 102
                }, {
                    'y': 13,
                    'x': 1,
                    'value': 8,
                    'y2': -2,
                    'x2': 0,
                    'value2': 41
                }, {
                    'y': 1,
                    'x': 6,
                    'value': 35,
                    'y2': 0,
                    'x2': -3,
                    'value2': 16
                }],
            'valueAxes': [{
                    'position': 'bottom',
                    'axisAlpha': 0
                }, {
                    'minMaxMultiplier': 1.2,
                    'axisAlpha': 0,
                    'position': 'left'
                }],
            'startDuration': 1.5,
            'graphs': [{
                    'balloonText': 'x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>',
                    'bullet': 'circle',
                    'bulletBorderAlpha': 0.2,
                    'bulletAlpha': 0.8,
                    'lineAlpha': 0,
                    'fillAlphas': 0,
                    'valueField': 'value',
                    'xField': 'x',
                    'yField': 'y',
                    'maxBulletSize': 100
                }, {
                    'balloonText': 'x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>',
                    'bullet': 'diamond',
                    'bulletBorderAlpha': 0.2,
                    'bulletAlpha': 0.8,
                    'lineAlpha': 0,
                    'fillAlphas': 0,
                    'valueField': 'value2',
                    'xField': 'x2',
                    'yField': 'y2',
                    'maxBulletSize': 100
                }],
            'marginLeft': 46,
            'marginBottom': 35
        });
    };
    PageAmchartsComponent.prototype.ngOnDestroy = function () {
        this.AmCharts.destroyChart(this.chart);
    };
    PageAmchartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-amcharts',
            template: __webpack_require__("../../../../../src/app/pages/charts/amcharts/amcharts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/charts/amcharts/amcharts.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageAmchartsComponent);
    return PageAmchartsComponent;
    var _a, _b;
}());

//# sourceMappingURL=amcharts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/ng2-charts/ng2-charts.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Line Chart\">\n      <canvas\n        baseChart\n        [datasets]=\"lineChartData\"\n        [labels]=\"lineChartLabels\"\n        [options]=\"lineChartOptions\"\n        [colors]=\"lineChartColors\"\n        [legend]=\"lineChartLegend\"\n        [chartType]=\"lineChartType\"></canvas>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Bar Chart\">\n      <canvas\n        baseChart\n        [datasets]=\"barChartData\"\n        [labels]=\"barChartLabels\"\n        [options]=\"barChartOptions\"\n        [legend]=\"barChartLegend\"\n        [chartType]=\"barChartType\"></canvas>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Doughnut Chart\">\n      <canvas\n        baseChart\n        [data]=\"doughnutChartData\"\n        [labels]=\"doughnutChartLabels\"\n        [chartType]=\"doughnutChartType\"></canvas>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Radar Chart\">\n      <canvas\n        baseChart\n        [datasets]=\"radarChartData\"\n        [labels]=\"radarChartLabels\"\n        [chartType]=\"radarChartType\"></canvas>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Pie Chart\" class=\"mb-lg-0\">\n      <canvas\n        baseChart\n        [data]=\"pieChartData\"\n        [labels]=\"pieChartLabels\"\n        [chartType]=\"pieChartType\"></canvas>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Polar Area Chart\" class=\"mb-0\">\n      <canvas\n        baseChart\n        [data]=\"polarAreaChartData\"\n        [labels]=\"polarAreaChartLabels\"\n        [legend]=\"polarAreaLegend\"\n        [chartType]=\"polarAreaChartType\"\n        [options]=\"polarAreaChartOptions\"></canvas>\n    </ni-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/charts/ng2-charts/ng2-charts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charts/ng2-charts/ng2-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNg2ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Charts',
        link: '#'
    },
    {
        title: 'Ng2 Charts',
        link: ''
    }
];
var PageNg2ChartsComponent = (function () {
    function PageNg2ChartsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Ng2 Charts';
        this.breadcrumb = BREADCRUMBS;
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(255,116,19,0.2)',
                borderColor: 'rgba(255,116,19,1)',
                pointBackgroundColor: 'rgba(255,116,19,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,116,19,0.8)'
            },
            {
                backgroundColor: 'rgba(225,122,180,0.2)',
                borderColor: 'rgba(225,122,180,1)',
                pointBackgroundColor: 'rgba(225,122,180,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(225,122,180,1)'
            },
            {
                backgroundColor: 'rgba(145,55,63,0.2)',
                borderColor: 'rgba(145,55,63,1)',
                pointBackgroundColor: 'rgba(145,55,63,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(145,55,63,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        //Bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        //Doughnut chart
        this.doughnutChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail-Order Sales'
        ];
        this.doughnutChartData = [
            350,
            450,
            100
        ];
        this.doughnutChartType = 'doughnut';
        // Radar chart
        this.radarChartLabels = [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales'
        ];
        this.pieChartData = [
            300,
            500,
            100
        ];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales',
            'Telesales',
            'Corporate Sales'
        ];
        this.polarAreaChartData = [
            300,
            500,
            100,
            40,
            120
        ];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartOptions = {
            responsiveAnimationDuration: 500
        };
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNg2ChartsComponent.prototype.ngOnInit = function () { };
    PageNg2ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ng2-charts',
            template: __webpack_require__("../../../../../src/app/pages/charts/ng2-charts/ng2-charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/charts/ng2-charts/ng2-charts.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNg2ChartsComponent);
    return PageNg2ChartsComponent;
    var _a;
}());

//# sourceMappingURL=ng2-charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/ngx-charts/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return single1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return single2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return multi1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return multi2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return multi3; });
var single1 = [
    {
        'name': 'Angular',
        'value': 8940
    },
    {
        'name': 'React',
        'value': 5000
    },
    {
        'name': 'Vue.js',
        'value': 7200
    },
    {
        'name': 'Backbone.js',
        'value': 4300
    },
    {
        'name': 'Ember.js',
        'value': 2500
    },
    {
        'name': 'Meteor.js',
        'value': 6500
    }
];
var single2 = [
    {
        'name': 'Angular',
        'value': 8940
    },
    {
        'name': 'React',
        'value': 5000
    },
    {
        'name': 'Vue.js',
        'value': 7200
    },
    {
        'name': 'Backbone.js',
        'value': 4300
    }
];
var multi1 = [
    {
        'name': 'Angular',
        'series': [
            {
                'name': '2016',
                'value': 7300
            },
            {
                'name': '2017',
                'value': 8940
            }
        ]
    },
    {
        'name': 'React',
        'series': [
            {
                'name': '2016',
                'value': 7870
            },
            {
                'name': '2017',
                'value': 8270
            }
        ]
    },
    {
        'name': 'Vue.js',
        'series': [
            {
                'name': '2016',
                'value': 7870
            },
            {
                'name': '2017',
                'value': 2270
            }
        ]
    },
    {
        'name': 'Backbone.js',
        'series': [
            {
                'name': '2016',
                'value': 5000
            },
            {
                'name': '2017',
                'value': 5800
            }
        ]
    },
    {
        'name': 'Ember.js',
        'series': [
            {
                'name': '2016',
                'value': 7500
            },
            {
                'name': '2017',
                'value': 6900
            }
        ]
    },
    {
        'name': 'Meteor.js',
        'series': [
            {
                'name': '2016',
                'value': 3000
            },
            {
                'name': '2017',
                'value': 7800
            }
        ]
    }
];
var multi2 = [
    {
        'name': 'Angular',
        'series': [
            {
                'name': '2016',
                'value': 7300
            },
            {
                'name': '2017',
                'value': 8940
            }
        ]
    },
    {
        'name': 'React',
        'series': [
            {
                'name': '2016',
                'value': 7870
            },
            {
                'name': '2017',
                'value': 8270
            }
        ]
    },
    {
        'name': 'Vue.js',
        'series': [
            {
                'name': '2016',
                'value': 7870
            },
            {
                'name': '2017',
                'value': 2270
            }
        ]
    },
    {
        'name': 'Backbone.js',
        'series': [
            {
                'name': '2016',
                'value': 5000
            },
            {
                'name': '2017',
                'value': 5800
            }
        ]
    }
];
var multi3 = [
    {
        'name': 'Angular',
        'series': [
            {
                'name': '2013',
                'value': 1500
            },
            {
                'name': '2014',
                'value': 2300
            },
            {
                'name': '2015',
                'value': 3000
            },
            {
                'name': '2016',
                'value': 5000
            },
            {
                'name': '2017',
                'value': 7600
            }
        ]
    },
    {
        'name': 'React',
        'series': [
            {
                'name': '2013',
                'value': 980
            },
            {
                'name': '2014',
                'value': 1200
            },
            {
                'name': '2015',
                'value': 4000
            },
            {
                'name': '2016',
                'value': 4500
            },
            {
                'name': '2017',
                'value': 6000
            }
        ]
    },
    {
        'name': 'Vue.js',
        'series': [
            {
                'name': '2013',
                'value': 5200
            },
            {
                'name': '2014',
                'value': 6000
            },
            {
                'name': '2015',
                'value': 5400
            },
            {
                'name': '2016',
                'value': 5000
            },
            {
                'name': '2017',
                'value': 6560
            }
        ]
    },
    {
        'name': 'Backbone.js',
        'series': [
            {
                'name': '2013',
                'value': 6540
            },
            {
                'name': '2014',
                'value': 5300
            },
            {
                'name': '2015',
                'value': 5460
            },
            {
                'name': '2016',
                'value': 4680
            },
            {
                'name': '2017',
                'value': 6240
            }
        ]
    }
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/ngx-charts/ngx-charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Vertical Bar Chart\">\n      <div class=\"chart-container\">\n        <ngx-charts-bar-vertical\n          [scheme]=\"colorScheme\"\n          [results]=\"single1\"\n          [gradient]=\"false\"\n          [xAxis]=\"true\"\n          [yAxis]=\"true\"\n          [legend]=\"false\"\n          [showXAxisLabel]=\"false\"\n          [showYAxisLabel]=\"false\">\n        </ngx-charts-bar-vertical>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Horizontal Bar Chart\">\n      <div class=\"chart-container\">\n        <ngx-charts-bar-horizontal\n          [scheme]=\"colorScheme\"\n          [results]=\"single2\"\n          [gradient]=\"false\"\n          [xAxis]=\"true\"\n          [yAxis]=\"true\"\n          [legend]=\"false\"\n          [showXAxisLabel]=\"false\"\n          [showYAxisLabel]=\"false\">\n        </ngx-charts-bar-horizontal>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Stacked Vertical Bar Chart\">\n      <div class=\"chart-container\">\n        <ngx-charts-bar-vertical-stacked\n          [scheme]=\"colorScheme\"\n          [results]=\"multi1\"\n          [gradient]=\"false\"\n          [xAxis]=\"true\"\n          [yAxis]=\"true\"\n          [legend]=\"false\"\n          [showXAxisLabel]=\"false\"\n          [showYAxisLabel]=\"false\">\n        </ngx-charts-bar-vertical-stacked>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Stacked Horizontal Bar Chart\">\n      <div class=\"chart-container\">\n        <ngx-charts-bar-horizontal-stacked\n          [scheme]=\"colorScheme\"\n          [results]=\"multi2\"\n          [gradient]=\"false\"\n          [xAxis]=\"true\"\n          [yAxis]=\"true\"\n          [legend]=\"false\"\n          [showXAxisLabel]=\"false\"\n          [showYAxisLabel]=\"false\">\n        </ngx-charts-bar-horizontal-stacked>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Pie Chart\">\n      <div class=\"chart-container\">\n        <ngx-charts-pie-chart\n          [scheme]=\"colorScheme\"\n          [results]=\"single1\"\n          [gradient]=\"false\"\n          [legend]=\"false\"\n          [explodeSlices]=\"false\"\n          [labels]=\"true\"\n          [doughnut]=\"false\">\n        </ngx-charts-pie-chart>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Doughnut Pie Chart\">\n      <div class=\"chart-container\">\n        <ngx-charts-pie-chart\n          [scheme]=\"colorScheme\"\n          [results]=\"single2\"\n          [gradient]=\"false\"\n          [legend]=\"false\"\n          [explodeSlices]=\"false\"\n          [labels]=\"true\"\n          [doughnut]=\"true\">\n        </ngx-charts-pie-chart>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Area Chart\">\n      <div class=\"chart-container\">\n        <ngx-charts-area-chart\n          [scheme]=\"colorScheme\"\n          [results]=\"multi3\"\n          [gradient]=\"false\"\n          [xAxis]=\"true\"\n          [yAxis]=\"true\"\n          [legend]=\"false\"\n          [showXAxisLabel]=\"false\"\n          [showYAxisLabel]=\"false\"\n          [autoScale]=\"true\">\n        </ngx-charts-area-chart>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Line Chart\">\n      <div class=\"chart-container\">\n        <ngx-charts-line-chart\n          [scheme]=\"colorScheme\"\n          [results]=\"multi3\"\n          [gradient]=\"false\"\n          [xAxis]=\"true\"\n          [yAxis]=\"true\"\n          [legend]=\"false\"\n          [showXAxisLabel]=\"false\"\n          [showYAxisLabel]=\"false\"\n          [autoScale]=\"true\">\n        </ngx-charts-line-chart>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Polar Chart\" class=\"mb-lg-0\">\n      <div class=\"chart-container\">\n        <ngx-charts-polar-chart\n          [scheme]=\"colorScheme\"\n          [results]=\"multi3\"\n          [xAxis]=\"true\"\n          [yAxis]=\"true\"\n        >\n        </ngx-charts-polar-chart>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <ni-card title=\"Gauge Chart\" class=\"mb-0\">\n      <div class=\"chart-container\">\n        <ngx-charts-gauge\n          [scheme]=\"colorScheme\"\n          [results]=\"single2\"\n          [min]=\"0\"\n          [max]=\"100\"\n          [angleSpan]=\"240\"\n          [startAngle]=\"-120\"\n          [units]=\"'alerts'\"\n          [bigSegments]=\"10\"\n          [smallSegments]=\"5\">\n        </ngx-charts-gauge>\n      </div>\n    </ni-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/charts/ngx-charts/ngx-charts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  display: block;\n  height: 300px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charts/ngx-charts/ngx-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNgxChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("../../../../../src/app/pages/charts/ngx-charts/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Charts',
        link: '#'
    },
    {
        title: 'Ngx Charts',
        link: ''
    }
];
var PageNgxChartsComponent = (function () {
    function PageNgxChartsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Ngx Charts';
        this.breadcrumb = BREADCRUMBS;
        // Color scheme
        this.colorScheme = {
            domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#a95963', '#50abcc']
        };
        Object.assign(this, { single1: __WEBPACK_IMPORTED_MODULE_2__data__["d" /* single1 */], single2: __WEBPACK_IMPORTED_MODULE_2__data__["e" /* single2 */], multi1: __WEBPACK_IMPORTED_MODULE_2__data__["a" /* multi1 */], multi2: __WEBPACK_IMPORTED_MODULE_2__data__["b" /* multi2 */], multi3: __WEBPACK_IMPORTED_MODULE_2__data__["c" /* multi3 */] });
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNgxChartsComponent.prototype.ngOnInit = function () { };
    PageNgxChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ngx-charts',
            template: __webpack_require__("../../../../../src/app/pages/charts/ngx-charts/ngx-charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/charts/ngx-charts/ngx-charts.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNgxChartsComponent);
    return PageNgxChartsComponent;
    var _a;
}());

//# sourceMappingURL=ngx-charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-1/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-xl-6 mb-lg-4\">\r\n      <div class=\"chart-container\">\r\n        <div id=\"amchart-1\" [style.width.%]=\"100\" [style.height.%]=\"100\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3 flex-xl-first mb-4 mb-md-0\">\r\n      <h5 class=\"mt-0\">Last sales</h5>\r\n      <div class=\"table-responsive mb-3\">\r\n        <table class=\"table table-sm\">\r\n          <tbody>\r\n          <tr>\r\n            <td>Samsung Galaxy S8</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Meizu M3</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Meizu Pro 6</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">5</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Apple iPhone SE</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'warning'\" [borderRadius]=\"false\">7</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>iPhone 6</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>iPhone 7</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Huawei P8</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">4</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Xiaomi Mi Band 2</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'danger'\" [borderRadius]=\"false\">10</ni-badge>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <button ni-button block=\"true\" type=\"accent\" outline=\"true\" lineStyle=\"dashed\" beforeIcon=\"fa fa-shopping-basket\">Look all</button>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <p class=\"mb-1\"><strong>Angular</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>React</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"warn\" [value]=\"85\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>Vue.js</strong></p>\r\n      <md-progress-bar mode=\"determinate\" [value]=\"40\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>Backbone.js</strong></p>\r\n      <md-progress-bar mode=\"determinate\" [value]=\"38\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>Ember.js</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"54\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>Meteor.js</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"warn\" [value]=\"38\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>jQuery</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"warn\" [value]=\"61\"></md-progress-bar>\r\n    </div>\r\n  </div>\r\n</ni-card>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" [outline]=\"true\" class=\"info-card\">\r\n      <h6 class=\"mt-0 title\">Orders</h6>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n      <md-icon>shopping_basket</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" [outline]=\"true\" class=\"info-card\">\r\n      <h6 class=\"mt-0 title\">Revenue</h6>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n      <md-icon>equalizer</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" [outline]=\"true\" class=\"info-card\">\r\n      <h6 class=\"mt-0 title\">Products</h6>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">+210</ni-badge>\r\n      <md-icon>monetization_on</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" [outline]=\"true\" class=\"info-card\">\r\n      <h6 class=\"mt-0 title\">Sold</h6>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n      <md-icon>donut_large</md-icon>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<ni-card>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div id=\"amchart-2\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div id=\"amchart-3\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div id=\"amchart-4\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </div>\r\n  </div>\r\n</ni-card>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'Changelog'\" [outline]=\"true\" class=\"mb-lg-0\">\r\n      <ni-h-timeline [showYears]=\"false\" [showDate]=\"false\" [align]=\"'left'\" [data]=\"timelineData\"></ni-h-timeline>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'To do list'\" class=\"mb-0\">\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let folder of folders\">\r\n          <md-icon md-list-avatar>{{folder.icon}}<ni-badge *ngIf=\"folder.badge\" [color]=\"'danger'\" [position]=\"'top-right'\">{{folder.badge}}</ni-badge></md-icon>\r\n          <h4 md-line>{{folder.name}}</h4>\r\n          <p md-line><i>{{folder.updated}}</i></p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-1/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 400px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; }\n  @media (max-width: 767px) {\n    .chart-container {\n      height: 300px; } }\n  .chart-container canvas {\n    margin: 0 auto;\n    max-height: 100%;\n    width: auto !important; }\n\n:host /deep/ .amcharts-graph-g2 .amcharts-graph-stroke {\n  stroke-dasharray: 3px 3px;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  -webkit-animation: am-moving-dashes 1s linear infinite;\n          animation: am-moving-dashes 1s linear infinite; }\n\n@-webkit-keyframes am-moving-dashes {\n  100% {\n    stroke-dashoffset: -31px; } }\n\n@keyframes am-moving-dashes {\n  100% {\n    stroke-dashoffset: -31px; } }\n\n:host /deep/ .lastBullet {\n  -webkit-animation: am-pulsating 1s ease-out infinite;\n          animation: am-pulsating 1s ease-out infinite; }\n\n@-webkit-keyframes am-pulsating {\n  0% {\n    stroke-opacity: 1;\n    stroke-width: 0px; }\n  100% {\n    stroke-opacity: 0;\n    stroke-width: 50px; } }\n\n@keyframes am-pulsating {\n  0% {\n    stroke-opacity: 1;\n    stroke-width: 0px; }\n  100% {\n    stroke-opacity: 0;\n    stroke-width: 50px; } }\n\n:host /deep/ .amcharts-graph-column-front {\n  transition: all .3s .3s ease-out; }\n\n:host /deep/ .amcharts-graph-column-front:hover {\n  fill: #496375;\n  stroke: #496375;\n  transition: all .3s ease-out; }\n\n:host /deep/ .amcharts-graph-g3 {\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  stroke-dasharray: 500%;\n  stroke-dasharray: 0;\n  stroke-dashoffset: 0;\n  -webkit-animation: am-draw 40s;\n          animation: am-draw 40s; }\n\n@-webkit-keyframes am-draw {\n  0% {\n    stroke-dashoffset: 500%; }\n  100% {\n    stroke-dashoffset: 0%; } }\n\n@keyframes am-draw {\n  0% {\n    stroke-dashoffset: 500%; }\n  100% {\n    stroke-dashoffset: 0%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-1/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BREADCRUMBS = [
    {
        title: 'Main',
        link: '#'
    },
    {
        title: 'Dashboards',
        link: '#'
    },
    {
        title: 'Dashboard v1',
        link: ''
    }
];
var folders = [
    {
        icon: 'android',
        badge: false,
        name: 'Android app',
        updated: 'July 21, 2017'
    },
    {
        icon: 'update',
        badge: false,
        name: 'Update plugins',
        updated: 'July 19, 2017'
    },
    {
        icon: 'bug_report',
        badge: false,
        name: 'Fix bugs',
        updated: 'July 22, 2017'
    },
    {
        icon: 'unarchive',
        badge: false,
        name: 'Create app design',
        updated: 'July 25, 2017'
    },
    {
        icon: 'content_copy',
        badge: 8,
        name: 'Create widgets',
        updated: 'July 16, 2017'
    },
    {
        icon: 'folder_open',
        badge: false,
        name: 'Documentation',
        updated: 'July 28, 2017'
    },
    {
        icon: 'folder_open',
        badge: false,
        name: 'Upload',
        updated: 'July 30, 2017'
    }
];
var timelineData = [
    {
        'timeline': [
            {
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'pointColor': '#ea8080'
            },
            {
                'content': "Aenean lacinia bibendum nulla.",
                'pointColor': '#915035'
            },
            {
                'content': "Lorem ipsum dolor sit amet.",
                'pointColor': '#B925FF'
            },
            {
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                'pointColor': '#C5CAE9'
            },
            {
                'content': "Lorem ipsum dolor sit.",
                'pointColor': '#FF8A65'
            }
        ]
    }
];
var PageDashboardComponent = (function () {
    function PageDashboardComponent(AmCharts, _sharedService) {
        this.AmCharts = AmCharts;
        this._sharedService = _sharedService;
        this.pageTitle = 'Dashboard';
        this.breadcrumb = BREADCRUMBS;
        this.folders = folders;
        this.timelineData = timelineData;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageDashboardComponent.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('amchart-1', {
            'type': 'serial',
            'theme': 'light',
            'dataDateFormat': 'YYYY-MM-DD',
            'dataProvider': [
                {
                    'date': '2012-01-01',
                    'distance': 227,
                    'townName': 'New York',
                    'townName2': 'New York',
                    'townSize': 25,
                    'latitude': 40.71,
                    'duration': 408
                }, {
                    'date': '2012-01-02',
                    'distance': 371,
                    'townName': 'Washington',
                    'townSize': 14,
                    'latitude': 38.89,
                    'duration': 482
                }, {
                    'date': '2012-01-03',
                    'distance': 433,
                    'townName': 'Wilmington',
                    'townSize': 6,
                    'latitude': 34.22,
                    'duration': 562
                }, {
                    'date': '2012-01-04',
                    'distance': 345,
                    'townName': 'Jacksonville',
                    'townSize': 7,
                    'latitude': 30.35,
                    'duration': 379
                }, {
                    'date': '2012-01-05',
                    'distance': 480,
                    'townName': 'Miami',
                    'townName2': 'Miami',
                    'townSize': 10,
                    'latitude': 25.83,
                    'duration': 501
                }, {
                    'date': '2012-01-06',
                    'distance': 386,
                    'townName': 'Tallahassee',
                    'townSize': 7,
                    'latitude': 30.46,
                    'duration': 443
                }, {
                    'date': '2012-01-07',
                    'distance': 348,
                    'townName': 'New Orleans',
                    'townSize': 10,
                    'latitude': 29.94,
                    'duration': 405
                }, {
                    'date': '2012-01-08',
                    'distance': 238,
                    'townName': 'Houston',
                    'townName2': 'Houston',
                    'townSize': 16,
                    'latitude': 29.76,
                    'duration': 309
                }, {
                    'date': '2012-01-09',
                    'distance': 218,
                    'townName': 'Dalas',
                    'townSize': 17,
                    'latitude': 32.8,
                    'duration': 287
                }, {
                    'date': '2012-01-10',
                    'distance': 349,
                    'townName': 'Oklahoma City',
                    'townSize': 11,
                    'latitude': 35.49,
                    'duration': 485
                }, {
                    'date': '2012-01-11',
                    'distance': 603,
                    'townName': 'Kansas City',
                    'townSize': 10,
                    'latitude': 39.1,
                    'duration': 890
                }, {
                    'date': '2012-01-12',
                    'distance': 534,
                    'townName': 'Denver',
                    'townName2': 'Denver',
                    'townSize': 18,
                    'latitude': 39.74,
                    'duration': 810
                }, {
                    'date': '2012-01-13',
                    'townName': 'Salt Lake City',
                    'townSize': 12,
                    'distance': 425,
                    'duration': 670,
                    'latitude': 40.75,
                    'alpha': 0.4
                }, {
                    'date': '2012-01-14',
                    'latitude': 36.1,
                    'duration': 470,
                    'townName': 'Las Vegas',
                    'bulletClass': 'lastBullet'
                }
            ],
            'addClassNames': true,
            'startDuration': 1,
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'minPeriod': 'DD',
                'autoGridCount': false,
                'gridCount': 50,
                'gridAlpha': 0.1,
                'gridColor': '#FFFFFF',
                'axisColor': '#555555',
                'dateFormats': [{
                        'period': 'DD',
                        'format': 'DD'
                    }, {
                        'period': 'WW',
                        'format': 'MMM DD'
                    }, {
                        'period': 'MM',
                        'format': 'MMM'
                    }, {
                        'period': 'YYYY',
                        'format': 'YYYY'
                    }]
            },
            'valueAxes': [{
                    'id': 'a1',
                    'title': 'distance',
                    'gridAlpha': 0,
                    'axisAlpha': 0
                }, {
                    'id': 'a2',
                    'position': 'right',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'labelsEnabled': false
                }],
            'graphs': [{
                    'id': 'g1',
                    'valueField': 'distance',
                    'title': 'distance',
                    'type': 'column',
                    'fillAlphas': 0.9,
                    'valueAxis': 'a1',
                    'balloonText': '[[value]] miles',
                    'legendValueText': '[[value]] mi',
                    'legendPeriodValueText': 'total: [[value.sum]] mi',
                    'lineColor': '#B3E5FC',
                    'alphaField': 'alpha'
                }, {
                    'id': 'g2',
                    'valueField': 'latitude',
                    'classNameField': 'bulletClass',
                    'title': 'latitude/city',
                    'type': 'line',
                    'valueAxis': 'a2',
                    'lineColor': '#d50000',
                    'lineThickness': 1,
                    'legendValueText': '[[value]]/[[description]]',
                    'descriptionField': 'townName',
                    'bullet': 'round',
                    'bulletSizeField': 'townSize',
                    'bulletBorderColor': '#ca0000',
                    'bulletBorderAlpha': 1,
                    'bulletBorderThickness': 2,
                    'bulletColor': '#f2b3b3',
                    'labelText': '[[townName2]]',
                    'labelPosition': 'right',
                    'balloonText': 'latitude:[[value]]',
                    'showBalloon': true,
                    'animationPlayed': true
                }, {
                    'id': 'g3',
                    'title': 'duration',
                    'valueField': 'duration',
                    'type': 'line',
                    'valueAxis': 'a3',
                    'lineColor': '#64B5F6',
                    'balloonText': '[[value]]',
                    'lineThickness': 1,
                    'legendValueText': '[[value]]',
                    'bullet': 'square',
                    'bulletBorderColor': '#64B5F6',
                    'bulletBorderThickness': 1,
                    'bulletBorderAlpha': 1,
                    'dashLengthField': 'dashLength',
                    'animationPlayed': true
                }],
            'chartCursor': {
                'zoomable': false,
                'categoryBalloonDateFormat': 'DD',
                'cursorAlpha': 0,
                'valueBalloonsEnabled': false
            },
            'legend': {
                'bulletType': 'round',
                'equalWidths': false,
                'valueWidth': 120,
                'useGraphSettings': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-2', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Lithuania',
                    'litres': 501.9
                }, {
                    'country': 'Czech Republic',
                    'litres': 301.9
                }, {
                    'country': 'Ireland',
                    'litres': 201.1
                }, {
                    'country': 'Germany',
                    'litres': 165.8
                }, {
                    'country': 'Australia',
                    'litres': 139.9
                }, {
                    'country': 'Austria',
                    'litres': 128.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }, {
                    'country': 'Belgium',
                    'litres': 60
                }, {
                    'country': 'The Netherlands',
                    'litres': 50
                }
            ],
            'pullOutRadius': 0,
            'labelRadius': -40,
            'valueField': 'litres',
            'titleField': 'country',
            'labelText': '[[litres]]',
            'balloon': {
                'fixedPosition': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-3', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'title': 'Chrome',
                    'value': 70
                }, {
                    'title': 'Firefox',
                    'value': 15
                }, {
                    'title': 'Opera',
                    'value': 10
                }, {
                    'title': 'Safari',
                    'value': 12
                }, {
                    'title': 'Edge',
                    'value': 5
                }
            ],
            'titleField': 'title',
            'valueField': 'value',
            'labelRadius': -40,
            'radius': '46%',
            'innerRadius': '60%',
            'labelText': '[[title]]'
        });
        this.chart = this.AmCharts.makeChart('amchart-4', {
            'type': 'radar',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Czech Republic',
                    'litres': 156.9
                }, {
                    'country': 'Ireland',
                    'litres': 131.1
                }, {
                    'country': 'Germany',
                    'litres': 115.8
                }, {
                    'country': 'Australia',
                    'litres': 109.9
                }, {
                    'country': 'Austria',
                    'litres': 108.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }
            ],
            'valueAxes': [{
                    'axisTitleOffset': 20,
                    'minimum': 0,
                    'axisAlpha': 0.15
                }],
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[value]] litres of beer per year',
                    'bullet': 'round',
                    'lineThickness': 2,
                    'valueField': 'litres'
                }],
            'categoryField': 'country'
        });
    };
    PageDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-1/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboards/dashboard-1/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageDashboardComponent);
    return PageDashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-2/dashboard-2.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <ni-card title=\"Column chart\">\r\n      <div id=\"amchart-1\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </ni-card>\r\n\r\n    <ni-card title=\"Lines chart\">\r\n      <div id=\"amchart-2\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </ni-card>\r\n\r\n    <ni-card [title]=\"'What we doing'\" class=\"mb-md-0\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut\r\n        et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis\r\n        rerum ullam velit veritatis vitae.</p>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Wordpress</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"90\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Magento</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"80\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Opencart</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"60\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Drupal</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"30\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Angular</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>React</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"85\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Vue.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"40\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Backbone.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"38\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam cumque dicta earum, iure maiores neque\r\n        nesciunt officia quisquam ullam.</p>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <ni-card [title]=\"'Recent activities'\" [outline]=\"true\">\r\n      <ni-h-timeline [showYears]=\"false\" [align]=\"'left'\" [data]=\"timelineData\"></ni-h-timeline>\r\n    </ni-card>\r\n\r\n    <ni-card [customBgColor]=\"'rgba(226,77,77,0.6)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-4.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n    </ni-card>\r\n\r\n    <ni-card [customBgColor]=\"'rgba(255,183,77,0.9)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-5.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n    </ni-card>\r\n\r\n    <ni-card [customBgColor]=\"'rgba(100,181,246,0.9)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-6.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+210</ni-badge>\r\n    </ni-card>\r\n\r\n    <ni-card [customBgColor]=\"'rgba(129,199,132,0.8)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-7.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n    </ni-card>\r\n\r\n    <ni-card title=\"Last uploaded files\" class=\"mb-0\">\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'bulb'\" [image]=\"'assets/content/file-1.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'doc'\" [title]=\"'resume'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'main-image'\" [image]=\"'assets/content/file-2.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'watch'\" [image]=\"'assets/content/file-3.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'camera'\" [image]=\"'assets/content/file-4.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'pdf'\" [title]=\"'documentation'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'mp4'\" [title]=\"'video-tutorial'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'best-work'\" [image]=\"'assets/content/file.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'smart'\" [image]=\"'assets/content/file-5.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'zip'\" [title]=\"'theme'\"></ni-file>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-2/dashboard-2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/.ni-h-timeline .timeline-box .box-items .item {\n  margin: 0.6875rem 0 !important;\n  padding-left: 30px !important; }\n  :host /deep/.ni-h-timeline .timeline-box .box-items .item .item-content {\n    padding: 0.6875rem !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-2/dashboard-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDashboard2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BREADCRUMBS = [
    {
        title: 'Main',
        link: '#'
    },
    {
        title: 'Dashboards',
        link: '#'
    },
    {
        title: 'Dashboard v2',
        link: ''
    }
];
var timelineData = [
    {
        'timeline': [
            {
                'date': '12 minutes ago',
                'content': "You <span class=\"text-info\">recommended</span> Sem B.",
                'pointColor': '#ea8080'
            },
            {
                'date': '37 minutes ago',
                'content': "You followed Sydney N.",
                'pointColor': '#915035'
            },
            {
                'date': '2 hours ago',
                'content': "You <span class=\"text-danger\">subscribed</span> to Harold Fuller",
                'pointColor': '#B925FF'
            },
            {
                'date': '7 hours ago',
                'content': "You updated your profile picture",
                'pointColor': '#C5CAE9'
            },
            {
                'date': '8 hours ago',
                'content': "You deleted <i>homepage.psd</i>",
                'pointColor': '#FF8A65'
            }
        ]
    }
];
var PageDashboard2Component = (function () {
    function PageDashboard2Component(AmCharts, _sharedService) {
        this.AmCharts = AmCharts;
        this._sharedService = _sharedService;
        this.pageTitle = 'Dashboard';
        this.breadcrumb = BREADCRUMBS;
        this.timelineData = timelineData;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageDashboard2Component.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('amchart-1', {
            'type': 'serial',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Angular',
                    'visits': 1232
                }, {
                    'country': 'AngularJS',
                    'visits': 1882
                }, {
                    'country': 'React',
                    'visits': 1809
                }, {
                    'country': 'Vue.js',
                    'visits': 1322
                }, {
                    'country': 'Backbone.js',
                    'visits': 1542
                }, {
                    'country': 'Ember.js',
                    'visits': 1497
                }, {
                    'country': 'Meteor.js',
                    'visits': 1240
                }, {
                    'country': 'jQuery',
                    'visits': 711
                }
            ],
            'valueAxes': [{
                    'gridColor': '#FFFFFF',
                    'gridAlpha': 0.2,
                    'dashLength': 0
                }],
            'gridAboveGraphs': true,
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[category]]: <b>[[value]]</b>',
                    'fillAlphas': 0.8,
                    'lineAlpha': 0.2,
                    'type': 'column',
                    'valueField': 'visits'
                }],
            'chartCursor': {
                'categoryBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false
            },
            'categoryField': 'country',
            'categoryAxis': {
                'gridPosition': 'start',
                'gridAlpha': 0,
                'tickPosition': 'start',
                'tickLength': 20
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-2', {
            'type': 'serial',
            'theme': 'light',
            //'autoMarginOffset':20,
            'dataDateFormat': 'YYYY-MM-DD HH:NN',
            'dataProvider': [
                {
                    'date': '2012-01-01',
                    'value': 8
                }, {
                    'date': '2012-01-02',
                    'color': '#CC0000',
                    'value': 10
                }, {
                    'date': '2012-01-03',
                    'value': 12
                }, {
                    'date': '2012-01-04',
                    'value': 14
                }, {
                    'date': '2012-01-05',
                    'value': 11
                }, {
                    'date': '2012-01-06',
                    'value': 6
                }, {
                    'date': '2012-01-07',
                    'value': 7
                }, {
                    'date': '2012-01-08',
                    'value': 9
                }, {
                    'date': '2012-01-09',
                    'value': 13
                }, {
                    'date': '2012-01-10',
                    'value': 15
                }, {
                    'date': '2012-01-11',
                    'color': '#CC0000',
                    'value': 19
                }, {
                    'date': '2012-01-12',
                    'value': 21
                }, {
                    'date': '2012-01-13',
                    'value': 22
                }, {
                    'date': '2012-01-14',
                    'value': 20
                }, {
                    'date': '2012-01-15',
                    'value': 18
                }, {
                    'date': '2012-01-16',
                    'value': 14
                }, {
                    'date': '2012-01-17',
                    'color': '#CC0000',
                    'value': 16
                }, {
                    'date': '2012-01-18',
                    'value': 18
                }, {
                    'date': '2012-01-19',
                    'value': 17
                }, {
                    'date': '2012-01-20',
                    'value': 15
                }, {
                    'date': '2012-01-21',
                    'value': 12
                }, {
                    'date': '2012-01-22',
                    'color': '#CC0000',
                    'value': 10
                }, {
                    'date': '2012-01-23',
                    'value': 8
                }
            ],
            'valueAxes': [{
                    'axisAlpha': 0,
                    'guides': [{
                            'fillAlpha': 0.1,
                            'fillColor': '#888888',
                            'lineAlpha': 0,
                            'toValue': 16,
                            'value': 10
                        }],
                    'position': 'left',
                    'tickLength': 0
                }],
            'graphs': [{
                    'balloonText': '[[category]]<br><b><span style="font-size:14px;">value:[[value]]</span></b>',
                    'bullet': 'round',
                    'dashLength': 3,
                    'colorField': 'color',
                    'valueField': 'value'
                }],
            'trendLines': [{
                    'finalDate': '2012-01-11 12',
                    'finalValue': 19,
                    'initialDate': '2012-01-02 12',
                    'initialValue': 10,
                    'lineColor': '#CC0000'
                }, {
                    'finalDate': '2012-01-22 12',
                    'finalValue': 10,
                    'initialDate': '2012-01-17 12',
                    'initialValue': 16,
                    'lineColor': '#CC0000'
                }],
            'chartCursor': {
                'fullWidth': true,
                'valueLineEabled': true,
                'valueLineBalloonEnabled': true,
                'valueLineAlpha': 0.5,
                'cursorAlpha': 0
            },
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'axisAlpha': 0,
                'gridAlpha': 0.1,
                'minorGridAlpha': 0.1,
                'minorGridEnabled': true
            }
        });
    };
    PageDashboard2Component.prototype.ngOnDestroy = function () {
        this.AmCharts.destroyChart(this.chart);
    };
    PageDashboard2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard-2',
            template: __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-2/dashboard-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboards/dashboard-2/dashboard-2.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageDashboard2Component);
    return PageDashboard2Component;
    var _a, _b;
}());

//# sourceMappingURL=dashboard-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-3/dashboard-3.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-4\">\r\n    <ni-card>\r\n      <div id=\"amchart-1\" [style.width.%]=\"100\" [style.height.px]=\"300\"></div>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <ni-card>\r\n      <div id=\"amchart-2\" [style.width.%]=\"100\" [style.height.px]=\"300\"></div>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <ni-card>\r\n      <div id=\"amchart-3\" [style.width.%]=\"100\" [style.height.px]=\"300\"></div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-xl-8\">\r\n    <ni-card [title]=\"'What we doing'\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut\r\n        et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis\r\n        rerum ullam velit veritatis vitae.</p>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Wordpress</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"90\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Magento</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"80\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Opencart</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"60\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Drupal</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"30\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Angular</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>React</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"85\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Vue.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"40\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Backbone.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"38\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at corporis deleniti dicta doloremque\r\n        doloribus, ea ex excepturi fugiat labore minima possimus quia repellat similique soluta ut voluptate! Ad et hic\r\n        incidunt molestiae mollitia officiis omnis, perspiciatis quaerat qui quibusdam.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-xl-4\">\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"pieChartData\"\r\n          [colors]=\"pieChartColors\"\r\n          [labels]=\"pieChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"pieChartOptions\"\r\n          [chartType]=\"pieChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>930</strong> <small>Resolved</small></div>\r\n        <div class=\"small\">More than 70% resolved issues</div>\r\n      </div>\r\n    </ni-card>\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"doughnutChartData\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"doughnutChartOptions\"\r\n          [chartType]=\"doughnutChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>466</strong> <small>Unresolved</small></div>\r\n        <div class=\"small\">Less than 30% unresolved issues</div>\r\n      </div>\r\n    </ni-card>\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"polarAreaChartData\"\r\n          [colors]=\"polarAreaChartColors\"\r\n          [labels]=\"polarAreaChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"polarAreaChartOptions\"\r\n          [chartType]=\"polarAreaChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>1,547</strong> <small>Issues</small></div>\r\n        <div class=\"small\">8 issues are unassigned</div>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <ni-card [title]=\"'Recent activities'\" [outline]=\"true\" class=\"mb-md-0\">\r\n      <ni-h-timeline [showYears]=\"false\" [align]=\"'left'\" [data]=\"timelineData\"></ni-h-timeline>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <ni-card [title]=\"'Last sales'\" class=\"mb-md-0\">\r\n      <div class=\"table-responsive mb-3\">\r\n        <table class=\"table table-sm\">\r\n          <tbody>\r\n          <tr>\r\n            <td>Samsung Galaxy S8</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Meizu M3</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Meizu Pro 6</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">5</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Apple iPhone SE</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'warning'\" [borderRadius]=\"false\">7</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>iPhone 6</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>iPhone 7</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Huawei P8</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">4</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Ipad Mini</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">15</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Ipad Pro</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">6</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Xiaomi Mi Band 2</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'danger'\" [borderRadius]=\"false\">10</ni-badge>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <button ni-button block=\"true\" type=\"accent\" outline=\"true\" lineStyle=\"dashed\" beforeIcon=\"fa fa-shopping-basket\">Look all</button>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <ni-chat [activeUser]=\"activeUser\" [messages]=\"messages\" [style.height.px]=\"474\"></ni-chat>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-3/dashboard-3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/.ni-h-timeline .timeline-box .box-items .item {\n  margin: 0.6875rem 0 !important;\n  padding-left: 30px !important; }\n  :host /deep/.ni-h-timeline .timeline-box .box-items .item .item-content {\n    padding: 0.6875rem !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboards/dashboard-3/dashboard-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDashboard3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BREADCRUMBS = [
    {
        title: 'Main',
        link: '#'
    },
    {
        title: 'Dashboards',
        link: '#'
    },
    {
        title: 'Dashboard v3',
        link: ''
    }
];
var timelineData = [
    {
        'timeline': [
            {
                'date': '12 minutes ago',
                'content': "You <span class=\"text-info\">recommended</span> Sem B.",
                'pointColor': '#ea8080'
            },
            {
                'date': '37 minutes ago',
                'content': "You followed Sydney N.",
                'pointColor': '#915035'
            },
            {
                'date': '2 hours ago',
                'content': "You <span class=\"text-danger\">subscribed</span> to Harold Fuller",
                'pointColor': '#B925FF'
            },
            {
                'date': '7 hours ago',
                'content': "You updated your profile picture",
                'pointColor': '#C5CAE9'
            }
        ]
    }
];
var PageDashboard3Component = (function () {
    function PageDashboard3Component(AmCharts, _sharedService) {
        this.AmCharts = AmCharts;
        this._sharedService = _sharedService;
        this.pageTitle = 'Dashboard';
        this.breadcrumb = BREADCRUMBS;
        this.timelineData = timelineData;
        this.activeUser = {
            name: 'Amanda Li',
            lastSeen: 'last seen 10 minutes ago',
            avatar: 'assets/content/avatar-4.jpg'
        };
        this.messages = [
            {
                'date': '8 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'my': false
            },
            {
                'date': '7 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'my': true
            },
            {
                'date': '2 hours ago',
                'content': "Contrary to popular belief,",
                'my': false
            },
            {
                'date': '15 minutes ago',
                'content': "Lorem ipsum dolor sit.",
                'my': true
            },
            {
                'date': '14 minutes ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'my': false
            },
            {
                'date': '12 minutes ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'my': true
            }
        ];
        // Pie
        this.pieChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.pieChartData = [
            300,
            500,
            100
        ];
        this.pieChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#5dade0",
                    "#3c4e62"
                ],
            }
        ];
        this.pieChartType = 'pie';
        this.pieChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        //Doughnut
        this.doughnutChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.doughnutChartData = [
            350,
            450,
            100
        ];
        this.doughnutChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#ff8c00",
                    "#3c4e62"
                ],
            }
        ];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        // PolarArea
        this.polarAreaChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.polarAreaChartData = [
            300,
            400,
            500
        ];
        this.polarAreaChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#dc143c",
                    "#3c4e62"
                ],
            }
        ];
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        this._sharedService.emitChange(this.pageTitle);
    }
    PageDashboard3Component.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('amchart-1', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Lithuania',
                    'litres': 501.9
                }, {
                    'country': 'Czech Republic',
                    'litres': 301.9
                }, {
                    'country': 'Ireland',
                    'litres': 201.1
                }, {
                    'country': 'Germany',
                    'litres': 165.8
                }, {
                    'country': 'Australia',
                    'litres': 139.9
                }, {
                    'country': 'Austria',
                    'litres': 128.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }, {
                    'country': 'Belgium',
                    'litres': 60
                }, {
                    'country': 'The Netherlands',
                    'litres': 50
                }
            ],
            'pullOutRadius': 0,
            'labelRadius': -40,
            'valueField': 'litres',
            'titleField': 'country',
            'labelText': '[[litres]]',
            'balloon': {
                'fixedPosition': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-2', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'title': 'Chrome',
                    'value': 70
                }, {
                    'title': 'Firefox',
                    'value': 15
                }, {
                    'title': 'Opera',
                    'value': 10
                }, {
                    'title': 'Safari',
                    'value': 12
                }, {
                    'title': 'Edge',
                    'value': 5
                }
            ],
            'titleField': 'title',
            'valueField': 'value',
            'labelRadius': -40,
            'radius': '46%',
            'innerRadius': '60%',
            'labelText': '[[title]]'
        });
        this.chart = this.AmCharts.makeChart('amchart-3', {
            'type': 'radar',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Czech Republic',
                    'litres': 156.9
                }, {
                    'country': 'Ireland',
                    'litres': 131.1
                }, {
                    'country': 'Germany',
                    'litres': 115.8
                }, {
                    'country': 'Australia',
                    'litres': 109.9
                }, {
                    'country': 'Austria',
                    'litres': 108.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }
            ],
            'valueAxes': [{
                    'axisTitleOffset': 20,
                    'minimum': 0,
                    'axisAlpha': 0.15
                }],
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[value]] litres of beer per year',
                    'bullet': 'round',
                    'lineThickness': 2,
                    'valueField': 'litres'
                }],
            'categoryField': 'country'
        });
    };
    PageDashboard3Component.prototype.ngOnDestroy = function () {
        this.AmCharts.destroyChart(this.chart);
    };
    PageDashboard3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard-3',
            template: __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-3/dashboard-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboards/dashboard-3/dashboard-3.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageDashboard3Component);
    return PageDashboard3Component;
    var _a, _b;
}());

//# sourceMappingURL=dashboard-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Confirm Email'\" [align]=\"'center'\">\r\n  <span class=\"material-icons\">mail_outline</span>\r\n  <p class=\"small\">An email has been send to username@mail.com. Please check for an email from us and click on the included link to reset your password.</p>\r\n  <div class=\"additional-info\">\r\n    <a [routerLink]=\"'/extra-layout/sign-in'\">Return to Sign in</a>\r\n  </div>\r\n</ni-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/confirm/confirm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #666c7e;\n  display: table-cell;\n  height: 100%;\n  vertical-align: middle;\n  width: 100%; }\n  :host .ni-card {\n    margin: 0 auto;\n    max-width: 400px; }\n    :host .ni-card /deep/ .card-wrap {\n      border: 0; }\n    :host .ni-card .material-icons {\n      color: #666c7e;\n      font-size: 100px; }\n    :host .ni-card .additional-info {\n      background: rgba(0, 0, 0, 0.1);\n      margin: 1.375rem -1.375rem -1.375rem;\n      padding: 0.6875rem 1.375rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageConfirmComponent = (function () {
    function PageConfirmComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    PageConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.validateEmail().then(function (res) {
            if (res === 'yes') {
                _this.router.navigate(['/default-layout/dashboard']);
            }
        });
    };
    PageConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirm',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/confirm/confirm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/confirm/confirm.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], PageConfirmComponent);
    return PageConfirmComponent;
    var _a, _b;
}());

//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Reset Your Password'\" [align]=\"'center'\">\r\n  <form (ngSubmit)=\"onSubmit()\">\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Email\" value=\"\">\r\n    </md-input-container>\r\n\r\n    <p class=\"text-left small\">Enter your email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>\r\n\r\n    <button md-raised-button color=\"primary\" type=\"submit\">Reset</button>\r\n\r\n    <div class=\"additional-info\">\r\n      <a [routerLink]=\"'/extra-layout/sign-in'\">Sign In</a>\r\n      <span class=\"divider\"></span>\r\n      <a [routerLink]=\"'/extra-layout/sign-up'\">Sign up</a>\r\n    </div>\r\n  </form>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/forgot/forgot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #666c7e;\n  display: table-cell;\n  height: 100%;\n  vertical-align: middle;\n  width: 100%; }\n  :host .ni-card {\n    margin: 0 auto;\n    max-width: 400px; }\n    :host .ni-card /deep/ .card-wrap {\n      border: 0; }\n    :host .ni-card form button {\n      width: 100%; }\n    :host .ni-card form .additional-info {\n      background: rgba(0, 0, 0, 0.1);\n      margin: 1.375rem -1.375rem -1.375rem;\n      padding: 0.6875rem 1.375rem; }\n      :host .ni-card form .additional-info .divider {\n        border-left: 1px solid rgba(0, 0, 0, 0.2);\n        display: inline-block;\n        height: 18px;\n        margin: 0 10px;\n        vertical-align: bottom; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageForgotComponent = (function () {
    function PageForgotComponent() {
    }
    PageForgotComponent.prototype.ngOnInit = function () { };
    PageForgotComponent.prototype.onSubmit = function () { };
    PageForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/forgot/forgot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageForgotComponent);
    return PageForgotComponent;
}());

//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-404/page-404.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\r\n<h2>Page not found!</h2>\r\n<p>Sorry, but the page you were trying to view does not exist. Report this error?</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-404/page-404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #FFB74D;\n  color: #fff;\n  display: table-cell;\n  height: 100%;\n  padding: 1.375rem;\n  text-align: center;\n  vertical-align: middle;\n  width: 100%; }\n  :host h1 {\n    font-size: 8rem;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: 9.5rem;\n    position: relative; }\n    @media (max-width: 767px) {\n      :host h1 {\n        margin-bottom: 6rem; } }\n    :host h1:before {\n      content: \"\\F29C\";\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font: normal normal normal 14px/1 FontAwesome;\n      font-size: 26rem;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      left: 0;\n      line-height: 1;\n      margin-top: -13rem;\n      opacity: .2;\n      position: absolute;\n      right: 0;\n      text-rendering: auto;\n      top: 50%;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale; }\n      @media (max-width: 767px) {\n        :host h1:before {\n          font-size: 20rem;\n          margin-top: -10rem; } }\n  :host h2 {\n    font-size: 2rem;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: .5rem; }\n  :host p {\n    color: rgba(255, 255, 255, 0.5);\n    margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-404/page-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () { };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-404',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/page-404/page-404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/page-404/page-404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());

//# sourceMappingURL=page-404.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-500/page-500.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Server Error</h1>\r\n<h2>Sorry, server goes wrong</h2>\r\n<p>We track these errors automatically, but if the problem persists feel free to <a href=\"#\">contact us</a>.</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-500/page-500.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #FFB74D;\n  color: #fff;\n  display: table-cell;\n  height: 100%;\n  padding: 1.375rem;\n  text-align: center;\n  vertical-align: middle;\n  width: 100%; }\n  :host h1 {\n    font-size: 3.5rem;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: 9.5rem;\n    position: relative; }\n    @media (max-width: 767px) {\n      :host h1 {\n        margin-bottom: 6rem; } }\n    :host h1:before {\n      content: \"\\F29C\";\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font: normal normal normal 14px/1 FontAwesome;\n      font-size: 26rem;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      left: 0;\n      line-height: 1;\n      margin-top: -13rem;\n      opacity: .2;\n      position: absolute;\n      right: 0;\n      text-rendering: auto;\n      top: 50%;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale; }\n      @media (max-width: 767px) {\n        :host h1:before {\n          font-size: 20rem;\n          margin-top: -10rem; } }\n  :host h2 {\n    font-size: 2rem;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: .5rem; }\n  :host p {\n    color: rgba(255, 255, 255, 0.5);\n    margin: 0; }\n  :host a {\n    color: rgba(255, 255, 255, 0.7); }\n    :host a:hover {\n      color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-500/page-500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page500Component = (function () {
    function Page500Component() {
    }
    Page500Component.prototype.ngOnInit = function () { };
    Page500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-500',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/page-500/page-500.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/page-500/page-500.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page500Component);
    return Page500Component;
}());

//# sourceMappingURL=page-500.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/sign-in-1/sign-in-1.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'signin' | translate\" [align]=\"'left'\">\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n    <md-input-container>\r\n      <input mdInput [placeholder]=\"'email' | translate\" value=\"\" [formControl]=\"form.controls['email']\" type=\"email\">\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n      <input mdInput [placeholder]=\"'password' | translate\" value=\"\" [formControl]=\"form.controls['password']\" type=\"password\">\r\n    </md-input-container>\r\n\r\n    <div class=\"text-left mb-module\">\r\n      <md-checkbox>\r\n        {{'keepSigned' | translate}}\r\n      </md-checkbox>\r\n    </div>\r\n\r\n    <button md-raised-button color=\"primary\" type=\"submit\">{{'signin' | translate}}</button>\r\n\r\n    <md-select [placeholder]=\"'selectLanguage' | translate\" class=\"mt-4 col-sm-12\" (ngModelChange)=\"changeLanguage()\" [formControl]=\"form.controls['langCode']\">\r\n      <md-option *ngFor=\"let lang of languages\" [value]=\"lang.code\">\r\n        {{ lang.value }}\r\n      </md-option>\r\n    </md-select>\r\n\r\n    <div class=\"additional-info\">\r\n      <a [routerLink]=\"'/extra-layout/sign-up'\">{{'signup' | translate}}</a>\r\n      <span class=\"divider\"></span>\r\n      <a [routerLink]=\"'/extra-layout/forgot'\">{{'forgotPassword' | translate}}</a>\r\n    </div>\r\n  </form>\r\n</ni-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/sign-in-1/sign-in-1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: url(" + __webpack_require__("../../../../../src/assets/content/login-bg.jpg") + ") 50% 50% no-repeat;\n  background-size: cover;\n  display: table-cell;\n  height: 100%;\n  padding: 1.375rem 0;\n  vertical-align: middle;\n  width: 100%; }\n  :host .ni-card {\n    margin: 0 auto;\n    max-width: 400px; }\n    :host .ni-card /deep/ .card-wrap {\n      border: 0; }\n    :host .ni-card form button {\n      width: 100%; }\n    :host .ni-card form .additional-info {\n      background: rgba(0, 0, 0, 0.1);\n      margin: 1.375rem -1.375rem -1.375rem;\n      padding: 0.6875rem 1.375rem; }\n      :host .ni-card form .additional-info .divider {\n        border-left: 1px solid rgba(0, 0, 0, 0.2);\n        display: inline-block;\n        height: 18px;\n        margin: 0 10px;\n        vertical-align: bottom; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/sign-in-1/sign-in-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSignIn1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageSignIn1Component = (function () {
    function PageSignIn1Component(router, auth, fb, translate) {
        this.router = router;
        this.auth = auth;
        this.fb = fb;
        this.translate = translate;
        this.languages = [
            { code: 'en', value: 'English' },
            { code: 'fr', value: 'French' },
            { code: 'pt', value: 'Portuguese' },
            { code: 'es', value: 'Spanish' }
        ];
        this.form = this.fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            langCode: ['en']
        });
        translate.addLangs(['en', 'fr', 'es', 'pt']);
        translate.setDefaultLang('en');
        translate.use('en');
    }
    PageSignIn1Component.prototype.ngOnInit = function () {
        this.auth.isConfirm = false;
        this.auth.isLogged = false;
    };
    PageSignIn1Component.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.form.value).then(function (res) {
            if (res === 'yes') {
                _this.router.navigate(['/default-layout/dashboard']);
            }
        });
    };
    PageSignIn1Component.prototype.changeLanguage = function () {
        var _this = this;
        this.form.controls.langCode.valueChanges.subscribe(function (d) {
            _this.translate.use(d);
        });
    };
    PageSignIn1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-in-1',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/sign-in-1/sign-in-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/sign-in-1/sign-in-1.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]) === "function" && _d || Object])
    ], PageSignIn1Component);
    return PageSignIn1Component;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=sign-in-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/sign-up-1/dialog-result.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Privacy and Terms</h2>\n<div md-dialog-content>Combining data\n    We also combine data among our services and across your devices for these purposes. For example, we show you ads based on information from your use of Search and Gmail, and we use data from trillions of search queries to build spell-correction models that we use across all of our services.</div>\n<div md-dialog-actions>\n  <button md-raised-button (click)=\"dialogRef.close('no')\">CANCEL</button>\n  <button md-raised-button (click)=\"dialogRef.close('yes')\" color=\"accent\">I AGREE</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/sign-up-1/sign-up-1.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Create your account'\" [align]=\"'left'\">\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"First name\" [formControl]=\"form.controls['fname']\">\r\n      <small *ngIf=\"form.controls['fname'].hasError('required') && form.controls['fname'].touched\" class=\"form-message text-danger\">You must include a first name.</small>\r\n      <small *ngIf=\"form.controls['fname'].hasError('minlength') && form.controls['fname'].touched\" class=\"form-message text-danger\">Your first name must be at least 5 characters long.</small>\r\n      <small *ngIf=\"form.controls['fname'].hasError('maxlength') && form.controls['fname'].touched\" class=\"form-message text-danger\">Your first name cannot exceed 10 characters.</small>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n        <input mdInput placeholder=\"Email address\" [formControl]=\"form.controls['email']\" type=\"email\">\r\n        <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"form-message text-danger\">You must include an email address.</small>\r\n        <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"form-message text-danger\">You must include a valid email address.</small>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Password\" [formControl]=\"form.controls['password']\" type=\"password\">\r\n      <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"form-message text-danger\">You must include password.</small>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Confirm Password\" [formControl]=\"form.controls['confirmPassword']\" type=\"password\">\r\n      <small *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched\" class=\"form-message text-danger\">You must include confirm password.</small>\r\n      <small *ngIf=\"form.controls['confirmPassword'].errors?.equalTo\" class=\"form-message text-danger\">Passwords do not math.</small>\r\n    </md-input-container>\r\n\r\n    <div class=\"text-left mb-4 mt-2\">\r\n      <label>Gender</label>\r\n      <md-radio-group [formControl]=\"form.controls['gender']\">\r\n        <md-radio-button value=\"male\">Male</md-radio-button>\r\n        <md-radio-button value=\"female\">Female</md-radio-button>\r\n        <small *ngIf=\"!form.controls['gender'].valid && form.controls['gender'].touched\" class=\"text-danger\">You must select a gender.</small>\r\n      </md-radio-group>\r\n    </div>\r\n\r\n    <div class=\"text-left mb-module\">\r\n      <md-checkbox [formControl]=\"form.controls['agree']\" (click)=\"openDialog()\">\r\n        I have read and agree to the terms of service.\r\n      </md-checkbox>\r\n      <small *ngIf=\"!form.controls['agree'].valid && form.controls['agree'].touched\" class=\"text-danger\">You must agree to the terms of service.</small>\r\n    </div>\r\n\r\n    <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Sign Up</button>\r\n\r\n    <md-select placeholder=\"Select Language\" class=\"mt-4\">\r\n      <md-option *ngFor=\"let lang of languages\" [value]=\"lang.code\">\r\n        {{ lang.value }}\r\n      </md-option>\r\n    </md-select>\r\n\r\n    <div class=\"additional-info\">\r\n      Already have an account?\r\n      <a [routerLink]=\"'/extra-layout/sign-in'\">Sign in</a>\r\n    </div>\r\n  </form>\r\n</ni-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/sign-up-1/sign-up-1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: url(" + __webpack_require__("../../../../../src/assets/content/signup-bg.jpg") + ") 50% 50% no-repeat;\n  background-size: cover;\n  display: table-cell;\n  height: 100%;\n  vertical-align: middle;\n  width: 100%; }\n  :host .ni-card {\n    margin: 0 auto;\n    max-width: 400px; }\n    :host .ni-card /deep/ .card-wrap {\n      border: 0; }\n    :host .ni-card form button {\n      width: 100%; }\n    :host .ni-card form .additional-info {\n      background: rgba(0, 0, 0, 0.1);\n      margin: 1.375rem -1.375rem -1.375rem;\n      padding: 0.6875rem 1.375rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/sign-up-1/sign-up-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageSignUp1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
var confirmPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(password));
var PageSignUp1Component = (function () {
    function PageSignUp1Component(fb, auth, router, dialog, translate) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
        this.translate = translate;
        this.languages = [
            { code: 'en', value: 'English' },
            { code: 'fr', value: 'French' },
            { code: 'pt', value: 'Portuguese' },
            { code: 'es', value: 'Spanish' }
        ];
        translate.addLangs(['en', 'fr', 'es', 'pt']);
        translate.setDefaultLang('en');
        translate.use('en');
    }
    PageSignUp1Component.prototype.ngOnInit = function () {
        this.auth.isConfirm = false;
        this.auth.isLogged = false;
        this.form = this.fb.group({
            fname: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            gender: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            agree: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].requiredTrue],
            password: password,
            confirmPassword: confirmPassword
        });
    };
    PageSignUp1Component.prototype.onSubmit = function () {
        var _this = this;
        this.auth.signup(this.form.value).then(function (data) {
            console.log(data);
            _this.router.navigate(['/extra-layout/confirm']);
        });
    };
    PageSignUp1Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result === 'yes') {
                _this.form.patchValue({ agree: true });
            }
            else {
                _this.form.patchValue({ agree: false });
            }
        });
    };
    PageSignUp1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up-1',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/sign-up-1/sign-up-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/sign-up-1/sign-up-1.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */]) === "function" && _e || Object])
    ], PageSignUp1Component);
    return PageSignUp1Component;
    var _a, _b, _c, _d, _e;
}());

var DialogResultComponent = (function () {
    function DialogResultComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-result',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/sign-up-1/dialog-result.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object])
    ], DialogResultComponent);
    return DialogResultComponent;
    var _a;
}());

//# sourceMappingURL=sign-up-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-elements/form-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card title=\"Material inputs\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <md-input-container class=\"md-icon-left\">\r\n        <md-icon>perm_identity</md-icon>\r\n        <input mdInput placeholder=\"First Name\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <md-input-container class=\"md-icon-left\">\r\n        <md-icon>people_outline</md-icon>\r\n        <input mdInput placeholder=\"Last Name\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n  </div>\r\n\r\n  <md-input-container>\r\n    <textarea mdInput placeholder=\"Address\"></textarea>\r\n  </md-input-container>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <md-input-container class=\"mb-0\">\r\n        <input mdInput placeholder=\"State\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n      </md-input-container>\r\n\r\n      <md-autocomplete #auto=\"mdAutocomplete\">\r\n        <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\r\n          {{ state }}\r\n        </md-option>\r\n      </md-autocomplete>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"City\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Postal Code\" maxlength=\"100\" value=\"\" #characterCountHintExample>\r\n        <md-hint align=\"end\">{{characterCountHintExample.value.length}} / 5</md-hint>\r\n      </md-input-container>\r\n    </div>\r\n  </div>\r\n\r\n  <md-input-container class=\"mb-0\">\r\n    <textarea mdInput placeholder=\"Biography\" rows=\"5\"></textarea>\r\n  </md-input-container>\r\n</ni-card>\r\n\r\n<ni-card title=\"Material checkboxes\">\r\n  <div class=\"mb-4\">\r\n    <md-checkbox [checked]=\"true\" color=\"accent\">\r\n      Accent checkbox\r\n    </md-checkbox>\r\n  </div>\r\n\r\n  <div class=\"mb-4\">\r\n    <md-checkbox [checked]=\"false\" color=\"primary\">\r\n      Primary checkbox\r\n    </md-checkbox>\r\n  </div>\r\n\r\n  <div class=\"\">\r\n    <md-checkbox [checked]=\"false\" [indeterminate]=\"true\" color=\"warn\">\r\n      Warning checkbox\r\n    </md-checkbox>\r\n  </div>\r\n</ni-card>\r\n\r\n<ni-card title=\"Material radio buttons\">\r\n  <md-radio-group name=\"ngModel-options\" [(ngModel)]=\"favoriteSeason\" class=\"column-layout\">\r\n    <md-radio-button *ngFor=\"let season of seasons\" [value]=\"season\" [checked]=\"i === 0\">\r\n      {{season}}\r\n    </md-radio-button>\r\n  </md-radio-group>\r\n  <p>Your favorite season is: <strong>{{favoriteSeason}}</strong></p>\r\n</ni-card>\r\n\r\n<ni-card title=\"Material sliders\">\r\n  <md-slider thumbLabel tickInterval=\"1\"></md-slider>\r\n</ni-card>\r\n\r\n<ni-card title=\"Material slides\">\r\n  <md-slide-toggle color=\"primary\" [checked]=\"false\">\r\n    Primary Slide Toggle\r\n  </md-slide-toggle>\r\n\r\n  <md-slide-toggle color=\"accent\" [checked]=\"true\">\r\n    Accent Slide Toggle\r\n  </md-slide-toggle>\r\n\r\n  <md-slide-toggle color=\"warn\" [checked]=\"true\">\r\n    Warning Slide Toggle\r\n  </md-slide-toggle>\r\n</ni-card>\r\n\r\n<ni-card title=\"Material chips\" class=\"mb-0\">\r\n  <md-chip-list class=\"md-chip-list example-chips\">\r\n    <md-chip *ngFor=\"let chipColor of availableColors\" selected=\"true\" color=\"{{chipColor.color}}\">\r\n      {{chipColor.name}}\r\n    </md-chip>\r\n  </md-chip-list>\r\n</ni-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-elements/form-elements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-chips .mat-chip {\n  margin: 4px !important;\n  max-width: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-elements/form-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFormElementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Forms',
        link: '#'
    },
    {
        title: 'Form elements',
        link: ''
    }
];
var PageFormElementsComponent = (function () {
    function PageFormElementsComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.pageTitle = 'Form elements';
        this.breadcrumb = BREADCRUMBS;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
        this.favoriteSeason = 'Winter';
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn'
        ];
        this.availableColors = [
            { name: 'Default', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warning', color: 'warn' }
        ];
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
        this._sharedService.emitChange(this.pageTitle);
    }
    PageFormElementsComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp(val, 'gi').test(s); }) : this.states;
    };
    PageFormElementsComponent.prototype.ngOnInit = function () { };
    PageFormElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-elements',
            template: __webpack_require__("../../../../../src/app/pages/forms/form-elements/form-elements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forms/form-elements/form-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageFormElementsComponent);
    return PageFormElementsComponent;
    var _a;
}());

//# sourceMappingURL=form-elements.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layout/form-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card title=\"Basic form layout\">\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Email address\" type=\"email\" value=\"\">\r\n  </md-input-container>\r\n\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Password\" type=\"password\" value=\"\">\r\n  </md-input-container>\r\n\r\n  <button md-raised-button color=\"accent\">Submit</button>\r\n</ni-card>\r\n\r\n<ni-card title=\"Inline form layout\">\r\n  <div class=\"form-group row\">\r\n    <label for=\"inputEmail\" class=\"col-sm-3 col-md-2 col-form-label mb-0\">Email</label>\r\n    <div class=\"col-sm-9 col-md-10\">\r\n      <md-input-container class=\"mb-2\">\r\n        <input mdInput id=\"inputEmail\" placeholder=\"Enter email\" type=\"email\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label for=\"inputPass\" class=\"col-sm-3 col-md-2 col-form-label mb-0\">Password</label>\r\n    <div class=\"col-sm-9 col-md-10\">\r\n      <md-input-container class=\"mb-2\">\r\n        <input mdInput id=\"inputPass\" placeholder=\"Enter password\" type=\"password\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-md-2\"></div>\r\n    <div class=\"col-sm-9 col-md-10\">\r\n      <button md-raised-button color=\"warn\">Submit</button>\r\n    </div>\r\n  </div>\r\n</ni-card>\r\n\r\n<ni-card title=\"Grid form\" class=\"mb-0\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 3\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 9\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 6\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 6\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 9\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 3\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 4\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 4\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <md-input-container>\r\n        <input mdInput placeholder=\"Col 4\" type=\"text\" value=\"\">\r\n      </md-input-container>\r\n    </div>\r\n  </div>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layout/form-layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layout/form-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFormLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Forms',
        link: '#'
    },
    {
        title: 'Form layout',
        link: ''
    }
];
var PageFormLayoutComponent = (function () {
    function PageFormLayoutComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Form layout';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageFormLayoutComponent.prototype.ngOnInit = function () { };
    PageFormLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-layout',
            template: __webpack_require__("../../../../../src/app/pages/forms/form-layout/form-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forms/form-layout/form-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageFormLayoutComponent);
    return PageFormLayoutComponent;
    var _a;
}());

//# sourceMappingURL=form-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-validation/form-validation.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <md-input-container class=\"mb-4\">\r\n          <input mdInput placeholder=\"First name\" [formControl]=\"form.controls['fname']\">\r\n          <small *ngIf=\"form.controls['fname'].hasError('required') && form.controls['fname'].touched\" class=\"form-message text-danger\">You must include a first name.</small>\r\n          <small *ngIf=\"form.controls['fname'].hasError('minlength') && form.controls['fname'].touched\" class=\"form-message text-danger\">Your first name must be at least 5 characters long.</small>\r\n          <small *ngIf=\"form.controls['fname'].hasError('maxlength') && form.controls['fname'].touched\" class=\"form-message text-danger\">Your first name cannot exceed 10 characters.</small>\r\n        </md-input-container>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <md-input-container class=\"mb-4\">\r\n          <input mdInput placeholder=\"Email address\" [formControl]=\"form.controls['email']\" type=\"email\">\r\n          <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"form-message text-danger\">You must include an email address.</small>\r\n          <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"form-message text-danger\">You must include a valid email address.</small>\r\n        </md-input-container>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <md-input-container class=\"mb-4\">\r\n          <input mdInput placeholder=\"Website address\" [formControl]=\"form.controls['url']\" type=\"url\">\r\n          <small *ngIf=\"form.controls['url'].hasError('required') && form.controls['url'].touched\" class=\"form-message text-danger\">You must include a web address.</small>\r\n          <small *ngIf=\"form.controls['url'].errors?.url && form.controls['url'].touched\" class=\"form-message text-danger\">You must include a valid web address.</small>\r\n        </md-input-container>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <md-input-container>\r\n          <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\" [formControl]=\"form.controls['date']\">\r\n          <button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n          <small *ngIf=\"form.controls['date'].hasError('required') && form.controls['date'].touched\" class=\"form-message text-danger\">You must include a date.</small>\r\n          <small *ngIf=\"form.controls['date'].errors?.date && form.controls['date'].touched\" class=\"form-message text-danger\">You must include a valid date.</small>\r\n        </md-input-container>\r\n        <md-datepicker #picker></md-datepicker>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <md-input-container class=\"mb-4\">\r\n          <input mdInput placeholder=\"Number range (between 5 and 9)\" [formControl]=\"form.controls['range']\">\r\n          <small *ngIf=\"form.controls['range'].hasError('required') && form.controls['range'].touched\" class=\"form-message text-danger\">You must enter a number.</small>\r\n          <small *ngIf=\"form.controls['range'].errors?.range && form.controls['range'].touched\" class=\"form-message text-danger\">Number should be between 5 and 9.</small>\r\n        </md-input-container>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <md-input-container class=\"mb-4\">\r\n          <input mdInput placeholder=\"Credit card\" [formControl]=\"form.controls['creditCard']\">\r\n          <small *ngIf=\"form.controls['creditCard'].hasError('required') && form.controls['creditCard'].touched\" class=\"form-message text-danger\">You must enter a credit card.</small>\r\n          <small *ngIf=\"form.controls['creditCard'].errors?.creditCard && form.controls['creditCard'].touched\" class=\"form-message text-danger\">You must enter a valid credit card number.</small>\r\n        </md-input-container>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <md-input-container class=\"mb-4\">\r\n          <input mdInput placeholder=\"US Phone number (15417543010)\" [formControl]=\"form.controls['phone']\" type=\"text\">\r\n          <small *ngIf=\"form.controls['phone'].hasError('required') && form.controls['phone'].touched\" class=\"form-message text-danger\">You must include phone number.</small>\r\n          <small *ngIf=\"form.controls['phone'].errors?.phone && form.controls['phone'].touched\" class=\"form-message text-danger\">You must include a valid phone number.</small>\r\n        </md-input-container>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <md-input-container class=\"mb-4\">\r\n          <input mdInput placeholder=\"Password\" [formControl]=\"form.controls['password']\" type=\"password\">\r\n          <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"form-message text-danger\">You must include password.</small>\r\n        </md-input-container>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <md-input-container class=\"mb-4\">\r\n          <input mdInput placeholder=\"Confirm Password\" [formControl]=\"form.controls['confirmPassword']\" type=\"password\">\r\n          <small *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched\" class=\"form-message text-danger\">You must include confirm password.</small>\r\n          <small *ngIf=\"form.controls['confirmPassword'].errors?.equalTo\" class=\"form-message text-danger\">Passwords do not math.</small>\r\n        </md-input-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"mb-4\">\r\n      <label>Gender</label>\r\n      <md-radio-group [formControl]=\"form.controls['gender']\">\r\n        <md-radio-button value=\"male\">Male</md-radio-button>\r\n        <md-radio-button value=\"female\">Female</md-radio-button>\r\n        <small *ngIf=\"!form.controls['gender'].valid && form.controls['gender'].touched\" class=\"form-message text-danger\">You must select a gender.</small>\r\n      </md-radio-group>\r\n    </div>\r\n\r\n    <button md-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\r\n  </form>\r\n</ni-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-validation/form-validation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-validation/form-validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFormValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Forms',
        link: '#'
    },
    {
        title: 'Form validation',
        link: ''
    }
];
var password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
var confirmPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(password));
var PageFormValidationComponent = (function () {
    function PageFormValidationComponent(fb, _sharedService) {
        this.fb = fb;
        this._sharedService = _sharedService;
        this.pageTitle = 'Form validation';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageFormValidationComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            fname: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            range: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].range([5, 9])])],
            url: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].url])],
            date: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].date])],
            creditCard: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].creditCard])],
            phone: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].phone('en-US')])],
            gender: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: password,
            confirmPassword: confirmPassword
        });
    };
    PageFormValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-validation',
            template: __webpack_require__("../../../../../src/app/pages/forms/form-validation/form-validation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forms/form-validation/form-validation.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageFormValidationComponent);
    return PageFormValidationComponent;
    var _a, _b;
}());

//# sourceMappingURL=form-validation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/layouts/layouts.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Headers'\">\n  <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Heading 1</h1>\n      <h2>Heading 2</h2>\n      <h3>Heading 3</h3>\n      <h4>Heading 4</h4>\n      <h5>Heading 5</h5>\n      <h6>Heading 6</h6>\n    </div>\n    <div class=\"col-md-6\">\n      <h1 class=\"text-uppercase\">Heading 1</h1>\n      <h2 class=\"text-uppercase\">Heading 2</h2>\n      <h3 class=\"text-uppercase\">Heading 3</h3>\n      <h4 class=\"text-uppercase\">Heading 4</h4>\n      <h5 class=\"text-uppercase\">Heading 5</h5>\n      <h6 class=\"text-uppercase\">Heading 6</h6>\n    </div>\n  </div>\n</ni-card>\n\n<ni-card [title]=\"'Text style'\">\n  <p><code>.mark</code> and <code>.small</code> classes are also available to apply the same styles as <code>&lt;mark&gt;</code> and <code>&lt;small&gt;</code> while avoiding any unwanted semantic implications that the tags would bring.</p>\n  <p>You can use the mark tag to <mark>highlight</mark> text.</p>\n  <p><del>This line of text is meant to be treated as deleted text.</del></p>\n  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n  <p><u>This line of text will render as underlined</u></p>\n  <p><small>This line of text is meant to be treated as fine print.</small></p>\n  <p><strong>This line rendered as bold text.</strong></p>\n  <p><em>This line rendered as italicized text.</em></p>\n</ni-card>\n\n<ni-card [title]=\"'Blockquotes'\">\n  <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class=\"blockquote\"&gt;</code> around any <abbr title=\"HyperText Markup Language\">HTML</abbr> as the quote.</p>\n  <blockquote class=\"blockquote\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n    <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n  </blockquote>\n\n  <blockquote class=\"blockquote blockquote-reverse\">\n    <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n    <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n  </blockquote>\n</ni-card>\n\n<ni-card [title]=\"'Lists'\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <ul>\n        <li>Lorem ipsum dolor sit amet</li>\n        <li>Consectetur adipiscing elit</li>\n        <li>Integer molestie lorem at massa</li>\n        <li>Facilisis in pretium nisl aliquet</li>\n        <li>Nulla volutpat aliquam velit\n          <ul>\n            <li>Phasellus iaculis neque</li>\n            <li>Purus sodales ultricies</li>\n            <li>Vestibulum laoreet porttitor sem</li>\n            <li>Ac tristique libero volutpat at</li>\n          </ul>\n        </li>\n        <li>Faucibus porta lacus fringilla vel</li>\n        <li>Aenean sit amet erat nunc</li>\n        <li>Eget porttitor lorem</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <ol>\n        <li>Lorem ipsum dolor sit amet</li>\n        <li>Consectetur adipiscing elit</li>\n        <li>Integer molestie lorem at massa</li>\n        <li>Facilisis in pretium nisl aliquet</li>\n        <li>Nulla volutpat aliquam velit\n          <ol>\n            <li>Phasellus iaculis neque</li>\n            <li>Purus sodales ultricies</li>\n            <li>Vestibulum laoreet porttitor sem</li>\n            <li>Ac tristique libero volutpat at</li>\n          </ol>\n        </li>\n        <li>Faucibus porta lacus fringilla vel</li>\n        <li>Aenean sit amet erat nunc</li>\n        <li>Eget porttitor lorem</li>\n      </ol>\n    </div>\n  </div>\n</ni-card>\n\n<ni-card [title]=\"'Text alignment'\">\n  <p>Easily realign text to components with text alignment classes.</p>\n  <p class=\"text-left\">Left aligned text on all viewport sizes.</p>\n  <p class=\"text-center\">Center aligned text on all viewport sizes.</p>\n  <p class=\"text-right\">Right aligned text on all viewport sizes.</p>\n</ni-card>\n\n<ni-card [title]=\"'Text transform'\" class=\"mb-0\">\n  <p>Transform text in components with text capitalization classes.</p>\n  <p class=\"text-lowercase\">Lowercased text.</p>\n  <p class=\"text-uppercase\">Uppercased text.</p>\n  <p class=\"text-capitalize\">CapiTaliZed text.</p>\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/layouts/layouts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/layouts/layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLayoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageLayoutsComponent = (function () {
    function PageLayoutsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Layouts';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageLayoutsComponent.prototype.ngOnInit = function () { };
    PageLayoutsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-layouts',
            template: __webpack_require__("../../../../../src/app/pages/layouts/layouts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/layouts/layouts.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageLayoutsComponent);
    return PageLayoutsComponent;
    var _a;
}());

//# sourceMappingURL=layouts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/maps/google-map/google-map.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card>\r\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n  </agm-map>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/maps/google-map/google-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: table-cell;\n  height: 100%;\n  width: 100%; }\n  :host /deep/ .ni-card {\n    height: 100%;\n    min-height: 400px;\n    padding: 0; }\n    :host /deep/ .ni-card .card-wrap,\n    :host /deep/ .ni-card .card-content {\n      border: 0 !important;\n      height: 100%;\n      padding: 0 !important; }\n  :host .sebm-google-map-container {\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/maps/google-map/google-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageGoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageGoogleMapComponent = (function () {
    function PageGoogleMapComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Google Map';
        this.lat = 50.4664212;
        this.lng = 30.6;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageGoogleMapComponent.prototype.ngOnInit = function () { };
    PageGoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-google-map',
            template: __webpack_require__("../../../../../src/app/pages/maps/google-map/google-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/maps/google-map/google-map.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageGoogleMapComponent);
    return PageGoogleMapComponent;
    var _a;
}());

//# sourceMappingURL=google-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/maps/leaflet-map/leaflet-map.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card>\r\n  <div id=\"map\"></div>\r\n</ni-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/maps/leaflet-map/leaflet-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: table-cell;\n  height: 100%;\n  width: 100%; }\n  :host /deep/ .ni-card {\n    height: 100%;\n    min-height: 400px;\n    padding: 0; }\n    :host /deep/ .ni-card .card-wrap,\n    :host /deep/ .ni-card .card-content {\n      border: 0 !important;\n      height: 100%;\n      padding: 0 !important; }\n  :host #map {\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/maps/leaflet-map/leaflet-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLeafletMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageLeafletMapComponent = (function () {
    function PageLeafletMapComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Leaflet Map';
        this.lat = 50.4664212;
        this.lng = 30.6;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageLeafletMapComponent.prototype.ngOnInit = function () {
        var mymap = __WEBPACK_IMPORTED_MODULE_2_leaflet__["map"]('map').setView([this.lat, this.lng], 13);
        var circle = __WEBPACK_IMPORTED_MODULE_2_leaflet__["circle"]([this.lat, this.lng], {
            color: '#dc143c',
            fillColor: '#dc143c',
            fillOpacity: 0.2,
            radius: 800
        }).addTo(mymap);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmV4dC1pdGVtIiwiYSI6ImNqMDFlYWRqeTAyNzEyd3FuNjQxdmVvMjgifQ.Ff8pEWrzeJ3uipr78e69uw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);
    };
    PageLeafletMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-leaflet-map',
            template: __webpack_require__("../../../../../src/app/pages/maps/leaflet-map/leaflet-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/maps/leaflet-map/leaflet-map.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageLeafletMapComponent);
    return PageLeafletMapComponent;
    var _a;
}());

//# sourceMappingURL=leaflet-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Flat buttons'\">\r\n  <button md-button>Default</button>\r\n  <button md-button color=\"primary\">Primary</button>\r\n  <button md-button color=\"accent\">Accent</button>\r\n  <button md-button color=\"warn\">Warning</button>\r\n  <button md-button disabled>Disabled</button>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Raised buttons'\">\r\n  <button md-raised-button>Default</button>\r\n  <button md-raised-button color=\"primary\">Primary</button>\r\n  <button md-raised-button color=\"accent\">Accent</button>\r\n  <button md-raised-button color=\"warn\">Warning</button>\r\n  <button md-raised-button disabled>Disabled</button>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Icon buttons'\">\r\n  <button md-icon-button><md-icon>home</md-icon></button>\r\n  <button md-icon-button color=\"primary\"><md-icon>add</md-icon></button>\r\n  <button md-icon-button color=\"accent\"><md-icon>settings</md-icon></button>\r\n  <button md-icon-button color=\"warn\"><md-icon>thumb_up</md-icon></button>\r\n  <button md-icon-button disabled><md-icon>check</md-icon></button>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Floating Action Buttons (FABs)'\">\r\n  <button md-fab><md-icon>home</md-icon></button>\r\n  <button md-fab color=\"primary\"><md-icon>add</md-icon></button>\r\n  <button md-fab color=\"accent\"><md-icon>settings</md-icon></button>\r\n  <button md-fab color=\"warn\"><md-icon>thumb_up</md-icon></button>\r\n  <button md-fab disabled><md-icon>check</md-icon></button>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Mini Floating Action Buttons (Mini FABs)'\">\r\n  <button md-mini-fab><md-icon>home</md-icon></button>\r\n  <button md-mini-fab color=\"primary\"><md-icon>add</md-icon></button>\r\n  <button md-mini-fab color=\"accent\"><md-icon>settings</md-icon></button>\r\n  <button md-mini-fab color=\"warn\"><md-icon>thumb_up</md-icon></button>\r\n  <button md-mini-fab disabled><md-icon>check</md-icon></button>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Button toggles'\" class=\"mb-0\">\r\n  <md-button-toggle-group #group=\"mdButtonToggleGroup\">\r\n    <md-button-toggle value=\"left\">\r\n      <md-icon>format_align_left</md-icon>\r\n    </md-button-toggle>\r\n    <md-button-toggle value=\"center\">\r\n      <md-icon>format_align_center</md-icon>\r\n    </md-button-toggle>\r\n    <md-button-toggle value=\"right\">\r\n      <md-icon>format_align_right</md-icon>\r\n    </md-button-toggle>\r\n    <md-button-toggle value=\"justify\">\r\n      <md-icon>format_align_justify</md-icon>\r\n    </md-button-toggle>\r\n  </md-button-toggle-group>\r\n  <div class=\"mt-4\">Selected value: {{group.value}}</div>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/button/button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Button',
        link: ''
    }
];
var PageButtonComponent = (function () {
    function PageButtonComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Buttons';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageButtonComponent.prototype.ngOnInit = function () { };
    PageButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-button',
            template: __webpack_require__("../../../../../src/app/pages/material-components/button/button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageButtonComponent);
    return PageButtonComponent;
    var _a;
}());

//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<h5>Basic cards</h5>\r\n<md-card class=\"example-card\">\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo nihil non omnis temporibus? Blanditiis culpa labore velit.</p>\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, provident?</p>\r\n</md-card>\r\n\r\n<h5>Cards with header</h5>\r\n<md-card class=\"example-card\">\r\n  <md-card-header>\r\n    <div md-card-avatar><img src=\"assets/content/avatar-1.jpg\" width=\"40\" height=\"40\"></div>\r\n    <md-card-title><strong>Header title</strong></md-card-title>\r\n    <md-card-subtitle>Header subtitle</md-card-subtitle>\r\n  </md-card-header>\r\n  <md-card-content>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi cupiditate dicta ducimus enim esse eum eveniet explicabo id in, quae rerum.\r\n    </p>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<h5>Card with multiple sections</h5>\r\n<md-card class=\"example-card\">\r\n  <md-card-header>\r\n    <div md-card-avatar><img src=\"assets/content/avatar-2.jpg\" width=\"40\" height=\"40\"></div>\r\n    <md-card-title><strong>Header title</strong></md-card-title>\r\n    <md-card-subtitle>Header subtitle</md-card-subtitle>\r\n  </md-card-header>\r\n  <img md-card-image src=\"assets/content/card-1.jpg\">\r\n  <md-card-content>\r\n    <p>\r\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n      bred for hunting.\r\n    </p>\r\n  </md-card-content>\r\n  <md-card-actions>\r\n    <button md-button color=\"accent\">LIKE</button>\r\n    <button md-button>SHARE</button>\r\n  </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n  max-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Card',
        link: ''
    }
];
var PageCardComponent = (function () {
    function PageCardComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Cards';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageCardComponent.prototype.ngOnInit = function () { };
    PageCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-card',
            template: __webpack_require__("../../../../../src/app/pages/material-components/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageCardComponent);
    return PageCardComponent;
    var _a;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Configurable checkbox'\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-auto\">\r\n      <md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox>\r\n    </div>\r\n    <div class=\"col col-auto\">\r\n      <md-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</md-checkbox>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div class=\"row align-content-center\">\r\n    <div class=\"col col-auto\">\r\n      <label class=\"mb-0\"><strong>Align:</strong></label>\r\n    </div>\r\n    <div class=\"col col-auto\">\r\n      <md-radio-group [(ngModel)]=\"align\">\r\n        <md-radio-button class=\"example-margin\" value=\"start\">Start</md-radio-button>\r\n        <md-radio-button class=\"example-margin\" value=\"end\">End</md-radio-button>\r\n      </md-radio-group>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div>\r\n    <md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox>\r\n  </div>\r\n\r\n  <h6>Result</h6>\r\n\r\n  <div>\r\n    <md-checkbox\r\n      class=\"example-margin\"\r\n      [checked]=\"checked\"\r\n      [indeterminate]=\"indeterminate\"\r\n      [align]=\"align\"\r\n      [disabled]=\"disabled\">\r\n      I'm a checkbox\r\n    </md-checkbox>\r\n  </div>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Theming'\" class=\"mb-0\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-auto\">\r\n      <md-checkbox [checked]=\"true\" color=\"primary\">Primary</md-checkbox>\r\n    </div>\r\n    <div class=\"col col-auto\">\r\n      <md-checkbox [checked]=\"true\" color=\"accent\">Accent</md-checkbox>\r\n    </div>\r\n    <div class=\"col col-auto\">\r\n      <md-checkbox [checked]=\"true\" color=\"warn\">Warning</md-checkbox>\r\n    </div>\r\n  </div>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/checkbox/checkbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageCheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Checkbox',
        link: ''
    }
];
var PageCheckboxComponent = (function () {
    function PageCheckboxComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Checkbox';
        this.breadcrumb = BREADCRUMBS;
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageCheckboxComponent.prototype.ngOnInit = function () { };
    PageCheckboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkbox',
            template: __webpack_require__("../../../../../src/app/pages/material-components/checkbox/checkbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageCheckboxComponent);
    return PageCheckboxComponent;
    var _a;
}());

//# sourceMappingURL=checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/chips/chips.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Inline chips'\" class=\"mb-0\">\r\n  <md-chip-list class=\"md-chip-list example-chips\">\r\n    <md-chip *ngFor=\"let chipColor of availableColors\" selected=\"true\" color=\"{{chipColor.color}}\">\r\n      {{chipColor.name}}\r\n    </md-chip>\r\n  </md-chip-list>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/chips/chips.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-chips .mat-chip {\n  margin: 4px !important;\n  max-width: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/chips/chips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageChipsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Chips',
        link: ''
    }
];
var PageChipsComponent = (function () {
    function PageChipsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Chips';
        this.breadcrumb = BREADCRUMBS;
        this.availableColors = [
            { name: 'Default', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warning', color: 'warn' }
        ];
        this._sharedService.emitChange(this.pageTitle);
    }
    PageChipsComponent.prototype.ngOnInit = function () { };
    PageChipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chips',
            template: __webpack_require__("../../../../../src/app/pages/material-components/chips/chips.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/chips/chips.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageChipsComponent);
    return PageChipsComponent;
    var _a;
}());

//# sourceMappingURL=chips.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/dialog/dialog-result.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Dialog</h2>\r\n<div md-dialog-content>What would you like to do?</div>\r\n<div md-dialog-actions>\r\n  <button md-button (click)=\"dialogRef.close('Option 1')\" color=\"accent\">Option 1</button>\r\n  <button md-button (click)=\"dialogRef.close('Option 2')\" color=\"warn\">Option 2</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic dialog'\">\r\n  <p><button md-raised-button color=\"accent\" (click)=\"openDialog()\">Launch dialog</button></p>\r\n  <p>You chose: {{selectedOption}}</p>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/dialog/dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDialogComponent; });
/* unused harmony export DialogResultComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Dialog',
        link: ''
    }
];
var PageDialogComponent = (function () {
    function PageDialogComponent(dialog, _sharedService) {
        this.dialog = dialog;
        this._sharedService = _sharedService;
        this.pageTitle = "Dialog";
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageDialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    PageDialogComponent.prototype.ngOnInit = function () { };
    PageDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dialog',
            template: __webpack_require__("../../../../../src/app/pages/material-components/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageDialogComponent);
    return PageDialogComponent;
    var _a, _b;
}());

var DialogResultComponent = (function () {
    function DialogResultComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.jazzMessage = 'Jazzy jazz jazz';
    }
    DialogResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-result',
            template: __webpack_require__("../../../../../src/app/pages/material-components/dialog/dialog-result.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object])
    ], DialogResultComponent);
    return DialogResultComponent;
    var _a;
}());

//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/icon/icon.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Action icons'\">\r\n  <md-icon>3d_rotation</md-icon>\r\n  <md-icon>accessibility</md-icon>\r\n  <md-icon>accessible</md-icon>\r\n  <md-icon>account_balance</md-icon>\r\n  <md-icon>account_balance_wallet</md-icon>\r\n  <md-icon>account_box</md-icon>\r\n  <md-icon>account_circle</md-icon>\r\n  <md-icon>add_shopping_cart</md-icon>\r\n  <md-icon>alarm</md-icon>\r\n  <md-icon>alarm_add</md-icon>\r\n  <md-icon>alarm_off</md-icon>\r\n  <md-icon>alarm_on</md-icon>\r\n  <md-icon>all_out</md-icon>\r\n  <md-icon>android</md-icon>\r\n  <md-icon>announcement</md-icon>\r\n  <md-icon>aspect_ratio</md-icon>\r\n  <md-icon>assessment</md-icon>\r\n  <md-icon>assignment</md-icon>\r\n  <md-icon>assignment_ind</md-icon>\r\n  <md-icon>assignment_late</md-icon>\r\n  <md-icon>assignment_return</md-icon>\r\n  <md-icon>assignment_returned</md-icon>\r\n  <md-icon>assignment_turned_in</md-icon>\r\n  <md-icon>autorenew</md-icon>\r\n  <md-icon>backup</md-icon>\r\n  <md-icon>book</md-icon>\r\n  <md-icon>bookmark</md-icon>\r\n  <md-icon>bookmark_outline</md-icon>\r\n  <md-icon>bug_report</md-icon>\r\n  <md-icon>build</md-icon>\r\n  <md-icon>cached</md-icon>\r\n  <md-icon>camera_enhanced</md-icon>\r\n  <md-icon>card_giftcard</md-icon>\r\n  <md-icon>card_membership</md-icon>\r\n  <md-icon>card_travel</md-icon>\r\n  <md-icon>change_history</md-icon>\r\n  <md-icon>check_circle</md-icon>\r\n  <md-icon>chrome_reader_mode</md-icon>\r\n  <md-icon>class</md-icon>\r\n  <md-icon>code</md-icon>\r\n  <md-icon>compare_arrows</md-icon>\r\n  <md-icon>copyright</md-icon>\r\n  <md-icon>credit_card</md-icon>\r\n  <md-icon>dashboard</md-icon>\r\n  <md-icon>date_range</md-icon>\r\n  <md-icon>delete</md-icon>\r\n  <md-icon>delete_forever</md-icon>\r\n  <md-icon>description</md-icon>\r\n  <md-icon>dns</md-icon>\r\n  <md-icon>done</md-icon>\r\n  <md-icon>done_all</md-icon>\r\n  <md-icon>donut_large</md-icon>\r\n  <md-icon>donut_small</md-icon>\r\n  <md-icon>eject</md-icon>\r\n  <md-icon>euro_symbol</md-icon>\r\n  <md-icon>event</md-icon>\r\n  <md-icon>event_seat</md-icon>\r\n  <md-icon>exit_to_app</md-icon>\r\n  <md-icon>explore</md-icon>\r\n  <md-icon>extension</md-icon>\r\n  <md-icon>face</md-icon>\r\n  <md-icon>favorite</md-icon>\r\n  <md-icon>favorite_border</md-icon>\r\n  <md-icon>feedback</md-icon>\r\n  <md-icon>find_in_page</md-icon>\r\n  <md-icon>find_replace</md-icon>\r\n  <md-icon>fingerprint</md-icon>\r\n  <md-icon>flight_land</md-icon>\r\n  <md-icon>flight_takeoff</md-icon>\r\n  <md-icon>flip_to_back</md-icon>\r\n  <md-icon>flip_to_front</md-icon>\r\n  <md-icon>g_translate</md-icon>\r\n  <md-icon>gavel</md-icon>\r\n  <md-icon>get_app</md-icon>\r\n  <md-icon>gif</md-icon>\r\n  <md-icon>grade</md-icon>\r\n  <md-icon>group_work</md-icon>\r\n  <md-icon>help</md-icon>\r\n  <md-icon>help_outline</md-icon>\r\n  <md-icon>highlight_off</md-icon>\r\n  <md-icon>history</md-icon>\r\n  <md-icon>home</md-icon>\r\n  <md-icon>hourglass_empty</md-icon>\r\n  <md-icon>hourglass_full</md-icon>\r\n  <md-icon>http</md-icon>\r\n  <md-icon>https</md-icon>\r\n  <md-icon>important_devices</md-icon>\r\n  <md-icon>info</md-icon>\r\n  <md-icon>info_outline</md-icon>\r\n  <md-icon>input</md-icon>\r\n  <md-icon>invert_colors</md-icon>\r\n  <md-icon>label</md-icon>\r\n  <md-icon>label_outline</md-icon>\r\n  <md-icon>language</md-icon>\r\n  <md-icon>launch</md-icon>\r\n  <md-icon>lightbulb_outline</md-icon>\r\n  <md-icon>line_style</md-icon>\r\n  <md-icon>line_weight</md-icon>\r\n  <md-icon>list</md-icon>\r\n  <md-icon>lock</md-icon>\r\n  <md-icon>lock_open</md-icon>\r\n  <md-icon>lock_outline</md-icon>\r\n  <md-icon>loyalty</md-icon>\r\n  <md-icon>markunread_mailbox</md-icon>\r\n  <md-icon>motorcycle</md-icon>\r\n  <md-icon>note_add</md-icon>\r\n  <md-icon>offline_pin</md-icon>\r\n  <md-icon>opacity</md-icon>\r\n  <md-icon>open_in_browser</md-icon>\r\n  <md-icon>open_in_new</md-icon>\r\n  <md-icon>open_with</md-icon>\r\n  <md-icon>pageview</md-icon>\r\n  <md-icon>pan_tool</md-icon>\r\n  <md-icon>payment</md-icon>\r\n  <md-icon>perm_camera_mic</md-icon>\r\n  <md-icon>perm_contact_calendar</md-icon>\r\n  <md-icon>perm_data_setting</md-icon>\r\n  <md-icon>perm_device_information</md-icon>\r\n  <md-icon>perm_identity</md-icon>\r\n  <md-icon>perm_media</md-icon>\r\n  <md-icon>perm_phone_msg</md-icon>\r\n  <md-icon>perm_scan_wifi</md-icon>\r\n  <md-icon>pets</md-icon>\r\n  <md-icon>picture_in_picture</md-icon>\r\n  <md-icon>picture_in_picture_alt</md-icon>\r\n  <md-icon>play_for_work</md-icon>\r\n  <md-icon>polymer</md-icon>\r\n  <md-icon>power_settings_new</md-icon>\r\n  <md-icon>pregnant_woman</md-icon>\r\n  <md-icon>print</md-icon>\r\n  <md-icon>query_builder</md-icon>\r\n  <md-icon>question_answer</md-icon>\r\n  <md-icon>receipt</md-icon>\r\n  <md-icon>record_voice_over</md-icon>\r\n  <md-icon>redeem</md-icon>\r\n  <md-icon>remove_shopping_cart</md-icon>\r\n  <md-icon>reorder</md-icon>\r\n  <md-icon>report_problem</md-icon>\r\n  <md-icon>restore</md-icon>\r\n  <md-icon>restore_page</md-icon>\r\n  <md-icon>room</md-icon>\r\n  <md-icon>rounded_corner</md-icon>\r\n  <md-icon>rowing</md-icon>\r\n  <md-icon>schedule</md-icon>\r\n  <md-icon>search</md-icon>\r\n  <md-icon>settings</md-icon>\r\n  <md-icon>settings_applications</md-icon>\r\n  <md-icon>settings_backup_restore</md-icon>\r\n  <md-icon>settings_bluetooth</md-icon>\r\n  <md-icon>settings_brightness</md-icon>\r\n  <md-icon>settings_cell</md-icon>\r\n  <md-icon>settings_ethernet</md-icon>\r\n  <md-icon>settings_input_antenna</md-icon>\r\n  <md-icon>settings_input_component</md-icon>\r\n  <md-icon>settings_input_composite</md-icon>\r\n  <md-icon>settings_input_hdmi</md-icon>\r\n  <md-icon>settings_input_svideo</md-icon>\r\n  <md-icon>settings_overscan</md-icon>\r\n  <md-icon>settings_phone</md-icon>\r\n  <md-icon>settings_power</md-icon>\r\n  <md-icon>settings_remote</md-icon>\r\n  <md-icon>settings_voice</md-icon>\r\n  <md-icon>shop</md-icon>\r\n  <md-icon>shop_two</md-icon>\r\n  <md-icon>shopping_basket</md-icon>\r\n  <md-icon>shopping_cart</md-icon>\r\n  <md-icon>speaker_notes</md-icon>\r\n  <md-icon>speaker_notes_off</md-icon>\r\n  <md-icon>spellcheck</md-icon>\r\n  <md-icon>star_rate</md-icon>\r\n  <md-icon>stars</md-icon>\r\n  <md-icon>store</md-icon>\r\n  <md-icon>subject</md-icon>\r\n  <md-icon>supervisor_account</md-icon>\r\n  <md-icon>swap_horiz</md-icon>\r\n  <md-icon>swap_vert</md-icon>\r\n  <md-icon>swap_vertial_circle</md-icon>\r\n  <md-icon>system_update_alt</md-icon>\r\n  <md-icon>tab</md-icon>\r\n  <md-icon>tab_unselected</md-icon>\r\n  <md-icon>theaters</md-icon>\r\n  <md-icon>thumb_down</md-icon>\r\n  <md-icon>thumb_up</md-icon>\r\n  <md-icon>thumbs_up_down</md-icon>\r\n  <md-icon>timeline</md-icon>\r\n  <md-icon>toc</md-icon>\r\n  <md-icon>today</md-icon>\r\n  <md-icon>toll</md-icon>\r\n  <md-icon>touch_app</md-icon>\r\n  <md-icon>track_changes</md-icon>\r\n  <md-icon>translate</md-icon>\r\n  <md-icon>trending_down</md-icon>\r\n  <md-icon>trending_flat</md-icon>\r\n  <md-icon>trending_up</md-icon>\r\n  <md-icon>turned_in</md-icon>\r\n  <md-icon>turned_in_not</md-icon>\r\n  <md-icon>update</md-icon>\r\n  <md-icon>verified_user</md-icon>\r\n  <md-icon>view_agenda</md-icon>\r\n  <md-icon>view_array</md-icon>\r\n  <md-icon>view_carousel</md-icon>\r\n  <md-icon>view_column</md-icon>\r\n  <md-icon>view_day</md-icon>\r\n  <md-icon>view_headline</md-icon>\r\n  <md-icon>view_list</md-icon>\r\n  <md-icon>view_module</md-icon>\r\n  <md-icon>view_quilt</md-icon>\r\n  <md-icon>view_stream</md-icon>\r\n  <md-icon>view_week</md-icon>\r\n  <md-icon>visibility</md-icon>\r\n  <md-icon>visibility_off</md-icon>\r\n  <md-icon>watch_later</md-icon>\r\n  <md-icon>work</md-icon>\r\n  <md-icon>youtube_searched_for</md-icon>\r\n  <md-icon>zoom_in</md-icon>\r\n  <md-icon>zoom_out</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Alert icons'\">\r\n  <md-icon>add_alert</md-icon>\r\n  <md-icon>error</md-icon>\r\n  <md-icon>error_outline</md-icon>\r\n  <md-icon>warning</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Av icons'\">\r\n  <md-icon>add_to_queue</md-icon>\r\n  <md-icon>airplay</md-icon>\r\n  <md-icon>album</md-icon>\r\n  <md-icon>art_track</md-icon>\r\n  <md-icon>av_timer</md-icon>\r\n  <md-icon>branding_watermark</md-icon>\r\n  <md-icon>call_to_action</md-icon>\r\n  <md-icon>closed_caption</md-icon>\r\n  <md-icon>equalizer</md-icon>\r\n  <md-icon>explicit</md-icon>\r\n  <md-icon>fast_forward</md-icon>\r\n  <md-icon>fast_rewind</md-icon>\r\n  <md-icon>featured_play_list</md-icon>\r\n  <md-icon>featured_video</md-icon>\r\n  <md-icon>fiber_manual_record</md-icon>\r\n  <md-icon>forward_10</md-icon>\r\n  <md-icon>forward_30</md-icon>\r\n  <md-icon>forward_5</md-icon>\r\n  <md-icon>games</md-icon>\r\n  <md-icon>hd</md-icon>\r\n  <md-icon>hearing</md-icon>\r\n  <md-icon>high_quality</md-icon>\r\n  <md-icon>my_library_add</md-icon>\r\n  <md-icon>my_library_books</md-icon>\r\n  <md-icon>my_library_music</md-icon>\r\n  <md-icon>loop</md-icon>\r\n  <md-icon>mic</md-icon>\r\n  <md-icon>mic_none</md-icon>\r\n  <md-icon>mic_off</md-icon>\r\n  <md-icon>movie</md-icon>\r\n  <md-icon>music_video</md-icon>\r\n  <md-icon>new_releases</md-icon>\r\n  <md-icon>not_interested</md-icon>\r\n  <md-icon>note</md-icon>\r\n  <md-icon>pause</md-icon>\r\n  <md-icon>pause_circle_filled</md-icon>\r\n  <md-icon>pause_circle_outline</md-icon>\r\n  <md-icon>play_arrow</md-icon>\r\n  <md-icon>play_circle_fill</md-icon>\r\n  <md-icon>play_circle_outline</md-icon>\r\n  <md-icon>playlist_add</md-icon>\r\n  <md-icon>playlist_add_check</md-icon>\r\n  <md-icon>playlist_play</md-icon>\r\n  <md-icon>queue</md-icon>\r\n  <md-icon>queue_music</md-icon>\r\n  <md-icon>queue_play_next</md-icon>\r\n  <md-icon>radio</md-icon>\r\n  <md-icon>recent_actors</md-icon>\r\n  <md-icon>remove_from_queue</md-icon>\r\n  <md-icon>repeat</md-icon>\r\n  <md-icon>repeat_one</md-icon>\r\n  <md-icon>replay</md-icon>\r\n  <md-icon>replay_10</md-icon>\r\n  <md-icon>replay_30</md-icon>\r\n  <md-icon>replay_5</md-icon>\r\n  <md-icon>shuffle</md-icon>\r\n  <md-icon>skip_next</md-icon>\r\n  <md-icon>skip_previous</md-icon>\r\n  <md-icon>slow_motion_video</md-icon>\r\n  <md-icon>snooze</md-icon>\r\n  <md-icon>sort_by_alpha</md-icon>\r\n  <md-icon>stop</md-icon>\r\n  <md-icon>subscriptions</md-icon>\r\n  <md-icon>subtitles</md-icon>\r\n  <md-icon>surround_sound</md-icon>\r\n  <md-icon>video_call</md-icon>\r\n  <md-icon>video_label</md-icon>\r\n  <md-icon>video_library</md-icon>\r\n  <md-icon>videocam</md-icon>\r\n  <md-icon>videocam_off</md-icon>\r\n  <md-icon>volume_down</md-icon>\r\n  <md-icon>volume_mute</md-icon>\r\n  <md-icon>volume_off</md-icon>\r\n  <md-icon>volume_up</md-icon>\r\n  <md-icon>web</md-icon>\r\n  <md-icon>web_asset</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Cummunikation icons'\">\r\n  <md-icon>business</md-icon>\r\n  <md-icon>call</md-icon>\r\n  <md-icon>call_end</md-icon>\r\n  <md-icon>call_made</md-icon>\r\n  <md-icon>call_merge</md-icon>\r\n  <md-icon>call_missed</md-icon>\r\n  <md-icon>call_missed_outgoing</md-icon>\r\n  <md-icon>call_received</md-icon>\r\n  <md-icon>call_split</md-icon>\r\n  <md-icon>chat</md-icon>\r\n  <md-icon>chat_bubble</md-icon>\r\n  <md-icon>chat_bubble_outline</md-icon>\r\n  <md-icon>clear_all</md-icon>\r\n  <md-icon>comment</md-icon>\r\n  <md-icon>contact_mail</md-icon>\r\n  <md-icon>contact_phone</md-icon>\r\n  <md-icon>contacts</md-icon>\r\n  <md-icon>dialer_sip</md-icon>\r\n  <md-icon>dialpad</md-icon>\r\n  <md-icon>email</md-icon>\r\n  <md-icon>forum</md-icon>\r\n  <md-icon>import_contacts</md-icon>\r\n  <md-icon>import_export</md-icon>\r\n  <md-icon>invert_colors_off</md-icon>\r\n  <md-icon>live_help</md-icon>\r\n  <md-icon>location_off</md-icon>\r\n  <md-icon>location_on</md-icon>\r\n  <md-icon>mail_outline</md-icon>\r\n  <md-icon>message</md-icon>\r\n  <md-icon>no_sim</md-icon>\r\n  <md-icon>phone</md-icon>\r\n  <md-icon>phonelink_erase</md-icon>\r\n  <md-icon>phonelink_lock</md-icon>\r\n  <md-icon>phonelink_ring</md-icon>\r\n  <md-icon>phonelink_setup</md-icon>\r\n  <md-icon>portable_wifi_off</md-icon>\r\n  <md-icon>present_to_all</md-icon>\r\n  <md-icon>ring_volume</md-icon>\r\n  <md-icon>rss_feed</md-icon>\r\n  <md-icon>screen_share</md-icon>\r\n  <md-icon>stay_current_landscape</md-icon>\r\n  <md-icon>stay_current_portrait</md-icon>\r\n  <md-icon>stay_primary_landscape</md-icon>\r\n  <md-icon>stay_primary_portrait</md-icon>\r\n  <md-icon>stop_screen_share</md-icon>\r\n  <md-icon>swap_calls</md-icon>\r\n  <md-icon>textsms</md-icon>\r\n  <md-icon>voicemail</md-icon>\r\n  <md-icon>vpn_key</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Content icons'\">\r\n  <md-icon>add</md-icon>\r\n  <md-icon>add_box</md-icon>\r\n  <md-icon>add_circle</md-icon>\r\n  <md-icon>add_circle_outline</md-icon>\r\n  <md-icon>archive</md-icon>\r\n  <md-icon>backspace</md-icon>\r\n  <md-icon>block</md-icon>\r\n  <md-icon>clear</md-icon>\r\n  <md-icon>content_copy</md-icon>\r\n  <md-icon>content_cut</md-icon>\r\n  <md-icon>content_paste</md-icon>\r\n  <md-icon>create</md-icon>\r\n  <md-icon>delete_sweep</md-icon>\r\n  <md-icon>drafts</md-icon>\r\n  <md-icon>filter_list</md-icon>\r\n  <md-icon>flag</md-icon>\r\n  <md-icon>font_download</md-icon>\r\n  <md-icon>forward</md-icon>\r\n  <md-icon>gesture</md-icon>\r\n  <md-icon>inbox</md-icon>\r\n  <md-icon>link</md-icon>\r\n  <md-icon>low_priority</md-icon>\r\n  <md-icon>mail</md-icon>\r\n  <md-icon>markunread</md-icon>\r\n  <md-icon>move_to_inbox</md-icon>\r\n  <md-icon>next_week</md-icon>\r\n  <md-icon>redo</md-icon>\r\n  <md-icon>remove</md-icon>\r\n  <md-icon>remove_circle</md-icon>\r\n  <md-icon>remove_circle_outline</md-icon>\r\n  <md-icon>reply</md-icon>\r\n  <md-icon>reply_all</md-icon>\r\n  <md-icon>report</md-icon>\r\n  <md-icon>save</md-icon>\r\n  <md-icon>select_all</md-icon>\r\n  <md-icon>send</md-icon>\r\n  <md-icon>sort</md-icon>\r\n  <md-icon>text_format</md-icon>\r\n  <md-icon>unarchive</md-icon>\r\n  <md-icon>undo</md-icon>\r\n  <md-icon>weekend</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Device icons'\">\r\n  <md-icon>access_alarms</md-icon>\r\n  <md-icon>access_alarm</md-icon>\r\n  <md-icon>access_time</md-icon>\r\n  <md-icon>add_alarm</md-icon>\r\n  <md-icon>airplanemode_on</md-icon>\r\n  <md-icon>airplanemode_inactive</md-icon>\r\n  <md-icon>battery_charging_full</md-icon>\r\n  <md-icon>battery_full</md-icon>\r\n  <md-icon>battery_std</md-icon>\r\n  <md-icon>battery_unknown</md-icon>\r\n  <md-icon>bluetooth</md-icon>\r\n  <md-icon>bluetooth_connected</md-icon>\r\n  <md-icon>bluetooth_disabled</md-icon>\r\n  <md-icon>bluetooth_searching</md-icon>\r\n  <md-icon>brightness_auto</md-icon>\r\n  <md-icon>brightness_high</md-icon>\r\n  <md-icon>brightness_low</md-icon>\r\n  <md-icon>brightness_medium</md-icon>\r\n  <md-icon>data_usage</md-icon>\r\n  <md-icon>developer_mode</md-icon>\r\n  <md-icon>devices</md-icon>\r\n  <md-icon>dvr</md-icon>\r\n  <md-icon>gps_fixed</md-icon>\r\n  <md-icon>gps_not_fixed</md-icon>\r\n  <md-icon>gps_off</md-icon>\r\n  <md-icon>graphic_eq</md-icon>\r\n  <md-icon>location_disabled</md-icon>\r\n  <md-icon>location_searching</md-icon>\r\n  <md-icon>network_cell</md-icon>\r\n  <md-icon>network_wifi</md-icon>\r\n  <md-icon>nfc</md-icon>\r\n  <md-icon>screen_lock_landscape</md-icon>\r\n  <md-icon>screen_lock_portrait</md-icon>\r\n  <md-icon>screen_lock_rotation</md-icon>\r\n  <md-icon>screen_rotation</md-icon>\r\n  <md-icon>sd_storage</md-icon>\r\n  <md-icon>settings_system_daydream</md-icon>\r\n  <md-icon>signal_cellular_4_bar</md-icon>\r\n  <md-icon>signal_cellular_connected_no_internet_4_bar</md-icon>\r\n  <md-icon>signal_cellular_no_sim</md-icon>\r\n  <md-icon>signal_cellular_null</md-icon>\r\n  <md-icon>signal_cellular_off</md-icon>\r\n  <md-icon>signal_wifi_4_bar</md-icon>\r\n  <md-icon>signal_wifi_4_bar_lock</md-icon>\r\n  <md-icon>signal_wifi_off</md-icon>\r\n  <md-icon>storage</md-icon>\r\n  <md-icon>usb</md-icon>\r\n  <md-icon>wallpaper</md-icon>\r\n  <md-icon>wifi_lock</md-icon>\r\n  <md-icon>wifi_tethering</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Editor icons'\">\r\n  <md-icon>attach_file</md-icon>\r\n  <md-icon>attach_money</md-icon>\r\n  <md-icon>border_all</md-icon>\r\n  <md-icon>border_bottom</md-icon>\r\n  <md-icon>border_clear</md-icon>\r\n  <md-icon>border_color</md-icon>\r\n  <md-icon>border_horizontal</md-icon>\r\n  <md-icon>border_inner</md-icon>\r\n  <md-icon>border_left</md-icon>\r\n  <md-icon>border_outer</md-icon>\r\n  <md-icon>border_right</md-icon>\r\n  <md-icon>border_style</md-icon>\r\n  <md-icon>border_top</md-icon>\r\n  <md-icon>border_vertical</md-icon>\r\n  <md-icon>bubble_chart</md-icon>\r\n  <md-icon>drag_handle</md-icon>\r\n  <md-icon>format_align_center</md-icon>\r\n  <md-icon>format_align_justify</md-icon>\r\n  <md-icon>format_align_left</md-icon>\r\n  <md-icon>format_align_right</md-icon>\r\n  <md-icon>format_bold</md-icon>\r\n  <md-icon>format_clear</md-icon>\r\n  <md-icon>format_color_fill</md-icon>\r\n  <md-icon>format_color_reset</md-icon>\r\n  <md-icon>format_color_text</md-icon>\r\n  <md-icon>format_indent_decrease</md-icon>\r\n  <md-icon>format_indent_increase</md-icon>\r\n  <md-icon>format_italic</md-icon>\r\n  <md-icon>format_line_spacing</md-icon>\r\n  <md-icon>format_list_bulleted</md-icon>\r\n  <md-icon>format_list_numbered</md-icon>\r\n  <md-icon>format_paint</md-icon>\r\n  <md-icon>format_quote</md-icon>\r\n  <md-icon>format_shapes</md-icon>\r\n  <md-icon>format_size</md-icon>\r\n  <md-icon>format_strikethrough</md-icon>\r\n  <md-icon>format_textdirection_l_to_r</md-icon>\r\n  <md-icon>format_textdirection_r_to_l</md-icon>\r\n  <md-icon>format_underline</md-icon>\r\n  <md-icon>functions</md-icon>\r\n  <md-icon>highlight</md-icon>\r\n  <md-icon>insert_chart</md-icon>\r\n  <md-icon>insert_comment</md-icon>\r\n  <md-icon>insert_drive_file</md-icon>\r\n  <md-icon>insert_emoticon</md-icon>\r\n  <md-icon>insert_invitation</md-icon>\r\n  <md-icon>insert_link</md-icon>\r\n  <md-icon>insert_photo</md-icon>\r\n  <md-icon>linear_scale</md-icon>\r\n  <md-icon>merge_type</md-icon>\r\n  <md-icon>mode_comment</md-icon>\r\n  <md-icon>mode_edit</md-icon>\r\n  <md-icon>monetization_on</md-icon>\r\n  <md-icon>money_off</md-icon>\r\n  <md-icon>multiline_chart</md-icon>\r\n  <md-icon>pie_chart</md-icon>\r\n  <md-icon>pie_chart_outline</md-icon>\r\n  <md-icon>publish</md-icon>\r\n  <md-icon>short_text</md-icon>\r\n  <md-icon>show_chart</md-icon>\r\n  <md-icon>space_bar</md-icon>\r\n  <md-icon>strikethrough_s</md-icon>\r\n  <md-icon>text_fields</md-icon>\r\n  <md-icon>title</md-icon>\r\n  <md-icon>vertical_align_bottom</md-icon>\r\n  <md-icon>vertical_align_center</md-icon>\r\n  <md-icon>vertical_align_top</md-icon>\r\n  <md-icon>wrap_text</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'File icons'\">\r\n  <md-icon>attachment</md-icon>\r\n  <md-icon>cloud</md-icon>\r\n  <md-icon>cloud_circle</md-icon>\r\n  <md-icon>cloud_done</md-icon>\r\n  <md-icon>cloud_download</md-icon>\r\n  <md-icon>cloud_off</md-icon>\r\n  <md-icon>cloud_queue</md-icon>\r\n  <md-icon>cloud_upload</md-icon>\r\n  <md-icon>create_new_folder</md-icon>\r\n  <md-icon>file_download</md-icon>\r\n  <md-icon>file_upload</md-icon>\r\n  <md-icon>folder</md-icon>\r\n  <md-icon>folder_open</md-icon>\r\n  <md-icon>folder_shared</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Hardware icons'\">\r\n  <md-icon>cast</md-icon>\r\n  <md-icon>cast_connected</md-icon>\r\n  <md-icon>computer</md-icon>\r\n  <md-icon>desktop_mac</md-icon>\r\n  <md-icon>desktop_windows</md-icon>\r\n  <md-icon>device_hub</md-icon>\r\n  <md-icon>devices_other</md-icon>\r\n  <md-icon>dock</md-icon>\r\n  <md-icon>gamepad</md-icon>\r\n  <md-icon>headset</md-icon>\r\n  <md-icon>headset_mic</md-icon>\r\n  <md-icon>keyboard</md-icon>\r\n  <md-icon>keyboard_arrow_down</md-icon>\r\n  <md-icon>keyboard_arrow_left</md-icon>\r\n  <md-icon>keyboard_arrow_right</md-icon>\r\n  <md-icon>keyboard_arrow_up</md-icon>\r\n  <md-icon>keyboard_backspace</md-icon>\r\n  <md-icon>keyboard_capslock</md-icon>\r\n  <md-icon>keyboard_hide</md-icon>\r\n  <md-icon>keyboard_return</md-icon>\r\n  <md-icon>keyboard_tab</md-icon>\r\n  <md-icon>keyboard_voice</md-icon>\r\n  <md-icon>laptop</md-icon>\r\n  <md-icon>laptop_chromebook</md-icon>\r\n  <md-icon>laptop_mac</md-icon>\r\n  <md-icon>laptop_windows</md-icon>\r\n  <md-icon>memory</md-icon>\r\n  <md-icon>mouse</md-icon>\r\n  <md-icon>phone_android</md-icon>\r\n  <md-icon>phone_iphone</md-icon>\r\n  <md-icon>phonelink</md-icon>\r\n  <md-icon>phonelink_off</md-icon>\r\n  <md-icon>power_input</md-icon>\r\n  <md-icon>router</md-icon>\r\n  <md-icon>scanner</md-icon>\r\n  <md-icon>security</md-icon>\r\n  <md-icon>sim_card</md-icon>\r\n  <md-icon>smartphone</md-icon>\r\n  <md-icon>speaker</md-icon>\r\n  <md-icon>speaker_group</md-icon>\r\n  <md-icon>tablet</md-icon>\r\n  <md-icon>tablet_android</md-icon>\r\n  <md-icon>tablet_mac</md-icon>\r\n  <md-icon>toys</md-icon>\r\n  <md-icon>tv</md-icon>\r\n  <md-icon>watch</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Image icons'\">\r\n  <md-icon>add_a_photo</md-icon>\r\n  <md-icon>add_to_photos</md-icon>\r\n  <md-icon>adjust</md-icon>\r\n  <md-icon>assistant_photo</md-icon>\r\n  <md-icon>audiotrack</md-icon>\r\n  <md-icon>blur_circular</md-icon>\r\n  <md-icon>blur_linear</md-icon>\r\n  <md-icon>blur_off</md-icon>\r\n  <md-icon>blur_on</md-icon>\r\n  <md-icon>brightness_1</md-icon>\r\n  <md-icon>brightness_2</md-icon>\r\n  <md-icon>brightness_3</md-icon>\r\n  <md-icon>brightness_4</md-icon>\r\n  <md-icon>brightness_5</md-icon>\r\n  <md-icon>brightness_6</md-icon>\r\n  <md-icon>brightness_7</md-icon>\r\n  <md-icon>broken_image</md-icon>\r\n  <md-icon>brush</md-icon>\r\n  <md-icon>burst_mode</md-icon>\r\n  <md-icon>camera</md-icon>\r\n  <md-icon>camera_alt</md-icon>\r\n  <md-icon>camera_front</md-icon>\r\n  <md-icon>camera_rear</md-icon>\r\n  <md-icon>camera_roll</md-icon>\r\n  <md-icon>center_focus_strong</md-icon>\r\n  <md-icon>center_focus_weak</md-icon>\r\n  <md-icon>collections</md-icon>\r\n  <md-icon>collections_bookmark</md-icon>\r\n  <md-icon>color_lens</md-icon>\r\n  <md-icon>colorize</md-icon>\r\n  <md-icon>compare</md-icon>\r\n  <md-icon>control_point</md-icon>\r\n  <md-icon>control_point_duplicate</md-icon>\r\n  <md-icon>crop</md-icon>\r\n  <md-icon>crop_16_9</md-icon>\r\n  <md-icon>crop_3_2</md-icon>\r\n  <md-icon>crop_5_4</md-icon>\r\n  <md-icon>crop_7_5</md-icon>\r\n  <md-icon>crop_din</md-icon>\r\n  <md-icon>crop_free</md-icon>\r\n  <md-icon>crop_landscape</md-icon>\r\n  <md-icon>crop_original</md-icon>\r\n  <md-icon>crop_portrait</md-icon>\r\n  <md-icon>crop_rotate</md-icon>\r\n  <md-icon>crop_square</md-icon>\r\n  <md-icon>dehaze</md-icon>\r\n  <md-icon>details</md-icon>\r\n  <md-icon>edit</md-icon>\r\n  <md-icon>exposure</md-icon>\r\n  <md-icon>exposure_neg_1</md-icon>\r\n  <md-icon>exposure_neg_2</md-icon>\r\n  <md-icon>exposure_plus_1</md-icon>\r\n  <md-icon>exposure_plus_2</md-icon>\r\n  <md-icon>exposure_zero</md-icon>\r\n  <md-icon>filter</md-icon>\r\n  <md-icon>filter_1</md-icon>\r\n  <md-icon>filter_2</md-icon>\r\n  <md-icon>filter_3</md-icon>\r\n  <md-icon>filter_4</md-icon>\r\n  <md-icon>filter_5</md-icon>\r\n  <md-icon>filter_6</md-icon>\r\n  <md-icon>filter_7</md-icon>\r\n  <md-icon>filter_8</md-icon>\r\n  <md-icon>filter_9</md-icon>\r\n  <md-icon>filter_9_plus</md-icon>\r\n  <md-icon>filter_b_and_w</md-icon>\r\n  <md-icon>filter_center_focus</md-icon>\r\n  <md-icon>filter_drama</md-icon>\r\n  <md-icon>filter_frames</md-icon>\r\n  <md-icon>filter_hdr</md-icon>\r\n  <md-icon>filter_none</md-icon>\r\n  <md-icon>filter_tilt_shift</md-icon>\r\n  <md-icon>filter_vintage</md-icon>\r\n  <md-icon>flare</md-icon>\r\n  <md-icon>flash_auto</md-icon>\r\n  <md-icon>flash_off</md-icon>\r\n  <md-icon>flash_on</md-icon>\r\n  <md-icon>flip</md-icon>\r\n  <md-icon>gradient</md-icon>\r\n  <md-icon>grain</md-icon>\r\n  <md-icon>grid_off</md-icon>\r\n  <md-icon>grid_on</md-icon>\r\n  <md-icon>hdr_off</md-icon>\r\n  <md-icon>hdr_on</md-icon>\r\n  <md-icon>hdr_strong</md-icon>\r\n  <md-icon>hdr_weak</md-icon>\r\n  <md-icon>healing</md-icon>\r\n  <md-icon>image</md-icon>\r\n  <md-icon>image_aspect_ratio</md-icon>\r\n  <md-icon>iso</md-icon>\r\n  <md-icon>landscape</md-icon>\r\n  <md-icon>leak_add</md-icon>\r\n  <md-icon>leak_remove</md-icon>\r\n  <md-icon>lens</md-icon>\r\n  <md-icon>linked_camera</md-icon>\r\n  <md-icon>looks</md-icon>\r\n  <md-icon>looks_3</md-icon>\r\n  <md-icon>looks_4</md-icon>\r\n  <md-icon>looks_5</md-icon>\r\n  <md-icon>looks_6</md-icon>\r\n  <md-icon>looks_one</md-icon>\r\n  <md-icon>looks_two</md-icon>\r\n  <md-icon>loupe</md-icon>\r\n  <md-icon>monochrome_photos</md-icon>\r\n  <md-icon>movie_creation</md-icon>\r\n  <md-icon>movie_filter</md-icon>\r\n  <md-icon>music_note</md-icon>\r\n  <md-icon>nature</md-icon>\r\n  <md-icon>nature_people</md-icon>\r\n  <md-icon>navigate_before</md-icon>\r\n  <md-icon>navigate_next</md-icon>\r\n  <md-icon>palette</md-icon>\r\n  <md-icon>panorama</md-icon>\r\n  <md-icon>panorama_fisheye</md-icon>\r\n  <md-icon>panorama_horizontal</md-icon>\r\n  <md-icon>panorama_vertical</md-icon>\r\n  <md-icon>panorama_wide_angle</md-icon>\r\n  <md-icon>photo</md-icon>\r\n  <md-icon>photo_album</md-icon>\r\n  <md-icon>photo_camera</md-icon>\r\n  <md-icon>photo_filter</md-icon>\r\n  <md-icon>photo_library</md-icon>\r\n  <md-icon>photo_size_select_actual</md-icon>\r\n  <md-icon>photo_size_select_large</md-icon>\r\n  <md-icon>photo_size_select_small</md-icon>\r\n  <md-icon>picture_as_pdf</md-icon>\r\n  <md-icon>portrait</md-icon>\r\n  <md-icon>remove_red_eye</md-icon>\r\n  <md-icon>rotate_90_degrees_ccw</md-icon>\r\n  <md-icon>rotate_left</md-icon>\r\n  <md-icon>rotate_right</md-icon>\r\n  <md-icon>slideshow</md-icon>\r\n  <md-icon>straighten</md-icon>\r\n  <md-icon>style</md-icon>\r\n  <md-icon>switch_camera</md-icon>\r\n  <md-icon>switch_video</md-icon>\r\n  <md-icon>tag_faces</md-icon>\r\n  <md-icon>texture</md-icon>\r\n  <md-icon>timelapse</md-icon>\r\n  <md-icon>timer</md-icon>\r\n  <md-icon>timer_10</md-icon>\r\n  <md-icon>timer_3</md-icon>\r\n  <md-icon>timer_off</md-icon>\r\n  <md-icon>tonality</md-icon>\r\n  <md-icon>transform</md-icon>\r\n  <md-icon>tune</md-icon>\r\n  <md-icon>view_comfy</md-icon>\r\n  <md-icon>view_compact</md-icon>\r\n  <md-icon>vignette</md-icon>\r\n  <md-icon>wb_auto</md-icon>\r\n  <md-icon>wb_cloudy</md-icon>\r\n  <md-icon>wb_incandescent</md-icon>\r\n  <md-icon>wb_sunny</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Maps icons'\">\r\n  <md-icon>add_location</md-icon>\r\n  <md-icon>beenhere</md-icon>\r\n  <md-icon>directions</md-icon>\r\n  <md-icon>directions_bike</md-icon>\r\n  <md-icon>directions_bus</md-icon>\r\n  <md-icon>directions_car</md-icon>\r\n  <md-icon>directions_ferry</md-icon>\r\n  <md-icon>directions_subway</md-icon>\r\n  <md-icon>directions_train</md-icon>\r\n  <md-icon>directions_transit</md-icon>\r\n  <md-icon>directions_walk</md-icon>\r\n  <md-icon>edit_location</md-icon>\r\n  <md-icon>ev_station</md-icon>\r\n  <md-icon>flight</md-icon>\r\n  <md-icon>hotel</md-icon>\r\n  <md-icon>layers</md-icon>\r\n  <md-icon>layers_clear</md-icon>\r\n  <md-icon>local_activity</md-icon>\r\n  <md-icon>local_airport</md-icon>\r\n  <md-icon>local_atm</md-icon>\r\n  <md-icon>local_bar</md-icon>\r\n  <md-icon>local_cafe</md-icon>\r\n  <md-icon>local_car_wash</md-icon>\r\n  <md-icon>local_convenience_store</md-icon>\r\n  <md-icon>local_dining</md-icon>\r\n  <md-icon>local_drink</md-icon>\r\n  <md-icon>local_florist</md-icon>\r\n  <md-icon>local_gas_station</md-icon>\r\n  <md-icon>local_grocery_store</md-icon>\r\n  <md-icon>local_hospital</md-icon>\r\n  <md-icon>local_hotel</md-icon>\r\n  <md-icon>local_laundry_service</md-icon>\r\n  <md-icon>local_library</md-icon>\r\n  <md-icon>local_mall</md-icon>\r\n  <md-icon>local_movies</md-icon>\r\n  <md-icon>local_offer</md-icon>\r\n  <md-icon>local_parking</md-icon>\r\n  <md-icon>local_pharmacy</md-icon>\r\n  <md-icon>local_phone</md-icon>\r\n  <md-icon>local_pizza</md-icon>\r\n  <md-icon>local_play</md-icon>\r\n  <md-icon>local_post_office</md-icon>\r\n  <md-icon>local_print_shop</md-icon>\r\n  <md-icon>local_restaurant</md-icon>\r\n  <md-icon>local_see</md-icon>\r\n  <md-icon>local_shipping</md-icon>\r\n  <md-icon>local_taxi</md-icon>\r\n  <md-icon>map</md-icon>\r\n  <md-icon>my_location</md-icon>\r\n  <md-icon>navigation</md-icon>\r\n  <md-icon>near_me</md-icon>\r\n  <md-icon>person_pin_circle</md-icon>\r\n  <md-icon>person_pin</md-icon>\r\n  <md-icon>pin_drop</md-icon>\r\n  <md-icon>place</md-icon>\r\n  <md-icon>rate_review</md-icon>\r\n  <md-icon>restaurant</md-icon>\r\n  <md-icon>restaurant_menu</md-icon>\r\n  <md-icon>satellite</md-icon>\r\n  <md-icon>store_mall_directory</md-icon>\r\n  <md-icon>streetview</md-icon>\r\n  <md-icon>subway</md-icon>\r\n  <md-icon>terrain</md-icon>\r\n  <md-icon>traffic</md-icon>\r\n  <md-icon>train</md-icon>\r\n  <md-icon>tram</md-icon>\r\n  <md-icon>transfer_within_a_station</md-icon>\r\n  <md-icon>zoom_out_map</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Navigation icons'\">\r\n  <md-icon>apps</md-icon>\r\n  <md-icon>arrow_back</md-icon>\r\n  <md-icon>arrow_downward</md-icon>\r\n  <md-icon>arrow_drop_down</md-icon>\r\n  <md-icon>arrow_drop_down_circle</md-icon>\r\n  <md-icon>arrow_drop_up</md-icon>\r\n  <md-icon>arrow_forward</md-icon>\r\n  <md-icon>arrow_upwards</md-icon>\r\n  <md-icon>cancel</md-icon>\r\n  <md-icon>check</md-icon>\r\n  <md-icon>chevron_left</md-icon>\r\n  <md-icon>chevron_right</md-icon>\r\n  <md-icon>close</md-icon>\r\n  <md-icon>expand_less</md-icon>\r\n  <md-icon>expand_more</md-icon>\r\n  <md-icon>first_page</md-icon>\r\n  <md-icon>fullscreen</md-icon>\r\n  <md-icon>fullscreen_exit</md-icon>\r\n  <md-icon>last_page</md-icon>\r\n  <md-icon>menu</md-icon>\r\n  <md-icon>more_horiz</md-icon>\r\n  <md-icon>more_vert</md-icon>\r\n  <md-icon>refresh</md-icon>\r\n  <md-icon>subdirectory_arrow_left</md-icon>\r\n  <md-icon>subdirectory_arrow_right</md-icon>\r\n  <md-icon>adb</md-icon>\r\n  <md-icon>airline_seat_flat</md-icon>\r\n  <md-icon>airline_seat_individual_suite</md-icon>\r\n  <md-icon>airline_seat_legroom_extra</md-icon>\r\n  <md-icon>airline_seat_legroom_normal</md-icon>\r\n  <md-icon>airline_seat_legroom_reduced</md-icon>\r\n  <md-icon>airline_seat_recline_extra</md-icon>\r\n  <md-icon>airline_seat_recline_normal</md-icon>\r\n  <md-icon>bluetooth_audio</md-icon>\r\n  <md-icon>confirmation_number</md-icon>\r\n  <md-icon>disc_full</md-icon>\r\n  <md-icon>do_not_disturb</md-icon>\r\n  <md-icon>do_not_disturb_alt</md-icon>\r\n  <md-icon>do_not_disturb_off</md-icon>\r\n  <md-icon>do_not_disturb_on</md-icon>\r\n  <md-icon>drive_eta</md-icon>\r\n  <md-icon>enhanced_encryption</md-icon>\r\n  <md-icon>event_available</md-icon>\r\n  <md-icon>event_busy</md-icon>\r\n  <md-icon>event_note</md-icon>\r\n  <md-icon>folder_special</md-icon>\r\n  <md-icon>live_tv</md-icon>\r\n  <md-icon>mms</md-icon>\r\n  <md-icon>more</md-icon>\r\n  <md-icon>network_check</md-icon>\r\n  <md-icon>network_locked</md-icon>\r\n  <md-icon>no_encryption</md-icon>\r\n  <md-icon>ondemand_video</md-icon>\r\n  <md-icon>personal_video</md-icon>\r\n  <md-icon>phone_bluetooth_speaker</md-icon>\r\n  <md-icon>phone_forwarded</md-icon>\r\n  <md-icon>phone_in_talk</md-icon>\r\n  <md-icon>phone_locked</md-icon>\r\n  <md-icon>phone_missed</md-icon>\r\n  <md-icon>phone_paused</md-icon>\r\n  <md-icon>power</md-icon>\r\n  <md-icon>priority_high</md-icon>\r\n  <md-icon>sd_card</md-icon>\r\n  <md-icon>sim_card_alert</md-icon>\r\n  <md-icon>sms</md-icon>\r\n  <md-icon>sms_failed</md-icon>\r\n  <md-icon>sync</md-icon>\r\n  <md-icon>sync_disabled</md-icon>\r\n  <md-icon>sync_problem</md-icon>\r\n  <md-icon>system_update</md-icon>\r\n  <md-icon>tap_and_play</md-icon>\r\n  <md-icon>time_to_leave</md-icon>\r\n  <md-icon>vibration</md-icon>\r\n  <md-icon>voice_chat</md-icon>\r\n  <md-icon>vpn_lock</md-icon>\r\n  <md-icon>wc</md-icon>\r\n  <md-icon>wifi</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Places icons'\">\r\n  <md-icon>ac_unit</md-icon>\r\n  <md-icon>airport_shuttle</md-icon>\r\n  <md-icon>all_inclusive</md-icon>\r\n  <md-icon>beach_access</md-icon>\r\n  <md-icon>business_center</md-icon>\r\n  <md-icon>casino</md-icon>\r\n  <md-icon>child_care</md-icon>\r\n  <md-icon>fitness_center</md-icon>\r\n  <md-icon>free_breakfast</md-icon>\r\n  <md-icon>golf_course</md-icon>\r\n  <md-icon>hot_tub</md-icon>\r\n  <md-icon>kitchen</md-icon>\r\n  <md-icon>pool</md-icon>\r\n  <md-icon>room_service</md-icon>\r\n  <md-icon>rv_hookup</md-icon>\r\n  <md-icon>smoke_free</md-icon>\r\n  <md-icon>spa</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Social icons'\">\r\n  <md-icon>cake</md-icon>\r\n  <md-icon>domain</md-icon>\r\n  <md-icon>group</md-icon>\r\n  <md-icon>group_add</md-icon>\r\n  <md-icon>location_city</md-icon>\r\n  <md-icon>mood</md-icon>\r\n  <md-icon>mood_bad</md-icon>\r\n  <md-icon>notifications</md-icon>\r\n  <md-icon>notifications_none</md-icon>\r\n  <md-icon>notifications_off</md-icon>\r\n  <md-icon>notifications_active</md-icon>\r\n  <md-icon>notifications_paused</md-icon>\r\n  <md-icon>pages</md-icon>\r\n  <md-icon>party_mode</md-icon>\r\n  <md-icon>people</md-icon>\r\n  <md-icon>people_outline</md-icon>\r\n  <md-icon>person</md-icon>\r\n  <md-icon>person_add</md-icon>\r\n  <md-icon>person_outline</md-icon>\r\n  <md-icon>plus_one</md-icon>\r\n  <md-icon>poll</md-icon>\r\n  <md-icon>public</md-icon>\r\n  <md-icon>school</md-icon>\r\n  <md-icon>sentiment_dissatisfied</md-icon>\r\n  <md-icon>sentiment_neutral</md-icon>\r\n  <md-icon>sentiment_satisfied</md-icon>\r\n  <md-icon>sentiment_very_dissatisfied</md-icon>\r\n  <md-icon>sentiment_very_satisfied</md-icon>\r\n  <md-icon>share</md-icon>\r\n  <md-icon>whatshot</md-icon>\r\n</ni-card>\r\n<ni-card [title]=\"'Toggle icons'\" class=\"mb-0\">\r\n  <md-icon>check_box</md-icon>\r\n  <md-icon>check_box_outline_blank</md-icon>\r\n  <md-icon>indeterminate_check_box</md-icon>\r\n  <md-icon>radio_button_unchecked</md-icon>\r\n  <md-icon>radio_button_checked</md-icon>\r\n  <md-icon>star</md-icon>\r\n  <md-icon>star_half</md-icon>\r\n  <md-icon>star_border</md-icon>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/icon/icon.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .mat-icon {\n  background: #bec0c8;\n  color: #000000;\n  font-size: 32px;\n  height: 50px;\n  padding: 9px;\n  margin: 0.6875rem;\n  text-align: center;\n  width: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/icon/icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Icons',
        link: ''
    }
];
var PageIconComponent = (function () {
    function PageIconComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Icon';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageIconComponent.prototype.ngOnInit = function () { };
    PageIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-icon',
            template: __webpack_require__("../../../../../src/app/pages/material-components/icon/icon.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/icon/icon.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageIconComponent);
    return PageIconComponent;
    var _a;
}());

//# sourceMappingURL=icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic input'\">\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Input placeholder\" value=\"\">\r\n  </md-input-container>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Prefix and Suffix'\">\r\n  <md-input-container>\r\n    <span mdPrefix>Prefix</span>\r\n    <input mdInput placeholder=\"Input placeholder\" value=\"\">\r\n    <span mdSuffix>Suffix</span>\r\n  </md-input-container>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Hint Labels'\">\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Input placeholder\" maxlength=\"100\" value=\"Value\" #characterCountHintExample>\r\n    <md-hint align=\"end\">{{characterCountHintExample.value.length}} / 100</md-hint>\r\n  </md-input-container>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Divider Color'\">\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Default color\" value=\"\">\r\n  </md-input-container>\r\n  <md-input-container dividerColor=\"accent\">\r\n    <input mdInput placeholder=\"Accent color\" value=\"\">\r\n  </md-input-container>\r\n  <md-input-container dividerColor=\"warn\">\r\n    <input mdInput placeholder=\"Warning color\" value=\"\">\r\n  </md-input-container>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Textarea'\">\r\n  <md-input-container>\r\n    <textarea mdInput placeholder=\"Textarea placeholder\">1600 Amphitheatre Pkwy</textarea>\r\n  </md-input-container>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Autocomplete'\" class=\"mb-0\">\r\n  <md-input-container class=\"mb-0\">\r\n    <input mdInput placeholder=\"State\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n  </md-input-container>\r\n\r\n  <md-autocomplete #auto=\"mdAutocomplete\">\r\n    <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\r\n      {{ state }}\r\n    </md-option>\r\n  </md-autocomplete>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/input/input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Input',
        link: ''
    }
];
var PageInputComponent = (function () {
    function PageInputComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.pageTitle = 'Input';
        this.breadcrumb = BREADCRUMBS;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
        this._sharedService.emitChange(this.pageTitle);
    }
    PageInputComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp(val, 'gi').test(s); }) : this.states;
    };
    PageInputComponent.prototype.ngOnInit = function () { };
    PageInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-input',
            template: __webpack_require__("../../../../../src/app/pages/material-components/input/input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/input/input.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageInputComponent);
    return PageInputComponent;
    var _a;
}());

//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Simple lists'\">\r\n  <md-list>\r\n    <md-list-item>Pepper</md-list-item>\r\n    <md-list-item>Salt</md-list-item>\r\n    <md-list-item>Paprika</md-list-item>\r\n  </md-list>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Navigation lists'\">\r\n  <md-nav-list>\r\n    <md-list-item *ngFor=\"let link of links\">\r\n      <a md-line href=\"#\">{{ link }}</a>\r\n      <button md-icon-button (click)=\"showInfo(link)\">\r\n        <md-icon>info</md-icon>\r\n      </button>\r\n    </md-list-item>\r\n  </md-nav-list>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Multi-line lists'\">\r\n  <md-list>\r\n    <md-list-item *ngFor=\"let message of messages\">\r\n      <h3 md-line>{{ message.from }}</h3>\r\n      <p md-line>\r\n        <span>{{ message.subject }}</span>\r\n        <span class=\"demo-2\"> -- {{ message.content }}</span>\r\n      </p>\r\n    </md-list-item>\r\n  </md-list>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Lists with avatars'\">\r\n  <md-list>\r\n    <md-list-item *ngFor=\"let message of messages\">\r\n      <img md-list-avatar src=\"{{ message.avatar }}\" width=\"40\" height=\"40\" alt=\"\">\r\n      <h3 md-line class=\"h3\">{{ message.from }}</h3>\r\n      <p md-line>\r\n        <span>{{message.subject}}</span>\r\n        <span class=\"demo-2\"> -- {{ message.content }}</span>\r\n      </p>\r\n    </md-list-item>\r\n  </md-list>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Dense lists'\">\r\n  <md-list dense>\r\n    <md-list-item>Pepper</md-list-item>\r\n    <md-list-item>Salt</md-list-item>\r\n    <md-list-item>Paprika</md-list-item>\r\n  </md-list>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Lists with multiple sections'\" class=\"mb-0\">\r\n  <md-list>\r\n    <h3 md-subheader>Folders</h3>\r\n    <md-list-item *ngFor=\"let folder of folders\">\r\n      <md-icon md-list-avatar>folder</md-icon>\r\n      <h4 md-line>{{folder.name}}</h4>\r\n      <p md-line class=\"demo-2\"> {{folder.updated}} </p>\r\n    </md-list-item>\r\n    <md-divider></md-divider>\r\n    <h3 md-subheader>Notes</h3>\r\n    <md-list-item *ngFor=\"let note of notes\">\r\n      <md-icon md-list-avatar>note</md-icon>\r\n      <h4 md-line>{{note.name}}</h4>\r\n      <p md-line class=\"demo-2\"> {{note.updated}} </p>\r\n    </md-list-item>\r\n  </md-list>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'List',
        link: ''
    }
];
var links = ['Link 1', 'Link 2', 'Link 3'];
var messages = [
    {
        from: 'Nancy',
        subject: 'HTML',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        avatar: 'assets/content/avatar-1.jpg'
    },
    {
        from: 'Mary',
        subject: 'Css',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: 'assets/content/avatar-2.jpg'
    },
    {
        from: 'Bobby',
        subject: 'Angular 2',
        content: 'It is a long established fact that a reader will be distracted by the readable content',
        avatar: 'assets/content/avatar-3.jpg'
    },
    {
        from: 'Roma',
        subject: 'Type Script',
        content: 'There are many variations of passages of',
        avatar: 'assets/content/avatar-4.jpg'
    }
];
var folders = [
    {
        name: 'Nancy',
        updated: 'Jan 21, 2017'
    },
    {
        name: 'Mary',
        updated: 'Jan 19, 2017'
    }
];
var notes = [
    {
        name: 'Bobby',
        updated: 'Jan 18, 2017'
    },
    {
        name: 'Roma',
        updated: 'Jan 17, 2017'
    }
];
var PageListComponent = (function () {
    function PageListComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'List';
        this.breadcrumb = BREADCRUMBS;
        this.links = links;
        this.messages = messages;
        this.folders = folders;
        this.notes = notes;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageListComponent.prototype.ngOnInit = function () { };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',
            template: __webpack_require__("../../../../../src/app/pages/material-components/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageListComponent);
    return PageListComponent;
    var _a;
}());

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Simple menu'\">\r\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n    <md-icon>more_vert</md-icon>\r\n  </button>\r\n  <md-menu #menu=\"mdMenu\">\r\n    <button md-menu-item>\r\n      <span>Redial</span>\r\n    </button>\r\n    <button md-menu-item disabled>\r\n      <span>Check voicemail</span>\r\n    </button>\r\n    <button md-menu-item>\r\n      <span>Disable alerts</span>\r\n    </button>\r\n  </md-menu>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Icons'\">\r\n  <button md-icon-button [mdMenuTriggerFor]=\"menu2\">\r\n    <md-icon>more_vert</md-icon>\r\n  </button>\r\n  <md-menu #menu2=\"mdMenu\">\r\n    <button md-menu-item>\r\n      <md-icon>dialpad</md-icon>\r\n      <span>Redial</span>\r\n    </button>\r\n    <button md-menu-item disabled>\r\n      <md-icon>voicemail</md-icon>\r\n      <span>Check voicemail</span>\r\n    </button>\r\n    <button md-menu-item>\r\n      <md-icon>notifications_off</md-icon>\r\n      <span>Disable alerts</span>\r\n    </button>\r\n  </md-menu>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Customizing menu position'\" class=\"mb-0\">\r\n  <button md-icon-button [mdMenuTriggerFor]=\"menu3\">\r\n    <md-icon>more_vert</md-icon>\r\n  </button>\r\n  <md-menu #menu3=\"mdMenu\" x-position=\"before\">\r\n    <button md-menu-item>\r\n      <md-icon>dialpad</md-icon>\r\n      <span>Redial</span>\r\n    </button>\r\n    <button md-menu-item disabled>\r\n      <md-icon>voicemail</md-icon>\r\n      <span>Check voicemail</span>\r\n    </button>\r\n    <button md-menu-item>\r\n      <md-icon>notifications_off</md-icon>\r\n      <span>Disable alerts</span>\r\n    </button>\r\n  </md-menu>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Menu',
        link: ''
    }
];
var PageMenuComponent = (function () {
    function PageMenuComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Menu';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageMenuComponent.prototype.ngOnInit = function () { };
    PageMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',
            template: __webpack_require__("../../../../../src/app/pages/material-components/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageMenuComponent);
    return PageMenuComponent;
    var _a;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic progress-bar'\">\r\n  <md-progress-bar mode=\"indeterminate\" class=\"mb-0\"></md-progress-bar>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Progress Modes'\">\r\n  <p><strong>Determinate</strong></p>\r\n  <md-progress-bar mode=\"determinate\" [value]=\"determinateProgressValue\" color=\"warn\"></md-progress-bar>\r\n  <p>\r\n    <button md-raised-button color=\"primary\" (click)=\"stepDeterminateProgressVal(10)\">Increase</button>\r\n    <button md-raised-button color=\"warn\" (click)=\"stepDeterminateProgressVal(-10)\">Decrease</button>\r\n  </p>\r\n\r\n  <p><strong>Indeterminate</strong></p>\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n\r\n  <p><strong>Buffer</strong></p>\r\n  <md-progress-bar mode=\"buffer\" [value]=\"bufferProgressValue\" [bufferValue]=\"bufferBufferValue\" color=\"warn\"></md-progress-bar>\r\n  <p>\r\n    <button md-raised-button color=\"primary\" (click)=\"stepBufferProgressVal(10)\">Increase</button>\r\n    <button md-raised-button color=\"warn\" (click)=\"stepBufferProgressVal(-10)\">Decrease</button>\r\n    <button md-raised-button color=\"primary\" (click)=\"stepBufferBufferVal(10)\">Buffer Increase</button>\r\n    <button md-raised-button color=\"warn\" (click)=\"stepBufferBufferVal(-10)\">Buffer Decrease</button>\r\n  </p>\r\n\r\n  <p><strong>Query</strong></p>\r\n  <md-progress-bar mode=\"query\" class=\"mb-0\"></md-progress-bar>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Theming'\" class=\"mb-0\">\r\n  <md-progress-bar mode=\"indeterminate\" color=\"primary\"></md-progress-bar>\r\n  <md-progress-bar mode=\"indeterminate\" color=\"accent\"></md-progress-bar>\r\n  <md-progress-bar mode=\"indeterminate\" color=\"warn\"></md-progress-bar>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/progress-bar/progress-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Progress bar',
        link: ''
    }
];
var PageProgressBarComponent = (function () {
    function PageProgressBarComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.breadcrumb = BREADCRUMBS;
        this.pageTitle = 'Progress bar';
        this.determinateProgressValue = 50;
        this.bufferProgressValue = 30;
        this.bufferBufferValue = 40;
        this.sidebar = true;
        this.navbar = true;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageProgressBarComponent.prototype.stepDeterminateProgressVal = function (val) {
        this.determinateProgressValue += val;
    };
    PageProgressBarComponent.prototype.stepBufferProgressVal = function (val) {
        this.bufferProgressValue += val;
    };
    PageProgressBarComponent.prototype.stepBufferBufferVal = function (val) {
        this.bufferBufferValue += val;
    };
    PageProgressBarComponent.prototype.ngOnInit = function () { };
    PageProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-progress-bar',
            template: __webpack_require__("../../../../../src/app/pages/material-components/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/progress-bar/progress-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageProgressBarComponent);
    return PageProgressBarComponent;
    var _a;
}());

//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/progress-spinner/progress-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic progress-spinner'\">\r\n  <md-spinner class=\"mb-0\" mode=\"indeterminate\"></md-spinner>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Progress mode'\">\r\n  <p><strong>Determinate</strong></p>\r\n  <md-progress-spinner mode=\"determinate\" [value]=\"progressValue\"></md-progress-spinner>\r\n  <p>\r\n    <button md-raised-button color=\"primary\" (click)=\"step(10)\">Increase</button>\r\n    <button md-raised-button color=\"varn\" (click)=\"step(-10)\">Decrease</button>\r\n  </p>\r\n\r\n  <p><strong>Indeterminate</strong></p>\r\n  <md-progress-spinner class=\"mb-0\" mode=\"indeterminate\"></md-progress-spinner>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Theming'\" class=\"mb-0\">\r\n  <md-progress-spinner mode=\"indeterminate\" color=\"primary\"></md-progress-spinner>\r\n  <md-progress-spinner mode=\"indeterminate\" color=\"accent\"></md-progress-spinner>\r\n  <md-progress-spinner class=\"mb-0\" mode=\"indeterminate\" color=\"warn\"></md-progress-spinner>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/progress-spinner/progress-spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/progress-spinner/progress-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageProgressSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Progress spinner',
        link: ''
    }
];
var PageProgressSpinnerComponent = (function () {
    function PageProgressSpinnerComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.breadcrumb = BREADCRUMBS;
        this.pageTitle = 'Progress spinner';
        this.progressValue = 40;
        this.sidebar = true;
        this.navbar = true;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageProgressSpinnerComponent.prototype.step = function (val) {
        this.progressValue += val;
    };
    PageProgressSpinnerComponent.prototype.ngOnInit = function () { };
    PageProgressSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-progress-spinner',
            template: __webpack_require__("../../../../../src/app/pages/material-components/progress-spinner/progress-spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/progress-spinner/progress-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageProgressSpinnerComponent);
    return PageProgressSpinnerComponent;
    var _a;
}());

//# sourceMappingURL=progress-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/radio-button/radio-button.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Basic radios'\">\r\n  <md-radio-group name=\"group-1\">\r\n    <md-radio-button value=\"1\" [checked]=\"true\">Option 1</md-radio-button>\r\n    <md-radio-button value=\"2\">Option 2</md-radio-button>\r\n  </md-radio-group>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Column Layout'\">\r\n  <md-radio-group name=\"group-2\" class=\"column-layout\">\r\n    <md-radio-button value=\"1\" [checked]=\"true\">Option 1</md-radio-button>\r\n    <md-radio-button value=\"2\">Option 2</md-radio-button>\r\n  </md-radio-group>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Align'\">\r\n  <md-radio-group name=\"group-3\" class=\"column-layout\">\r\n    <md-radio-button value=\"1\" [align]=\"'start'\" [checked]=\"true\">Start</md-radio-button>\r\n    <md-radio-button value=\"2\" [align]=\"'end'\">End</md-radio-button>\r\n  </md-radio-group>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Disabled'\">\r\n  <md-radio-group name=\"group-4\" class=\"column-layout\">\r\n    <md-radio-button value=\"1\" [checked]=\"true\">Option 1</md-radio-button>\r\n    <md-radio-button value=\"2\">Option 2</md-radio-button>\r\n    <md-radio-button value=\"3\" [disabled]=\"true\">Disabled Option</md-radio-button>\r\n  </md-radio-group>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Radios with ngModel'\" class=\"mb-0\">\r\n  <md-radio-group name=\"ngModel-options\" [(ngModel)]=\"favoriteSeason\" class=\"column-layout\">\r\n    <md-radio-button *ngFor=\"let season of seasons\" [value]=\"season\" [checked]=\"i === 0\">\r\n      {{season}}\r\n    </md-radio-button>\r\n  </md-radio-group>\r\n  <p>Your favorite season is: <strong>{{favoriteSeason}}</strong></p>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/radio-button/radio-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/radio-button/radio-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageRadioButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Radio button',
        link: ''
    }
];
var PageRadioButtonComponent = (function () {
    function PageRadioButtonComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Radio button';
        this.breadcrumb = BREADCRUMBS;
        this.favoriteSeason = 'Winter';
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn'
        ];
        this._sharedService.emitChange(this.pageTitle);
    }
    PageRadioButtonComponent.prototype.ngOnInit = function () { };
    PageRadioButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-radio-button',
            template: __webpack_require__("../../../../../src/app/pages/material-components/radio-button/radio-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/radio-button/radio-button.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageRadioButtonComponent);
    return PageRadioButtonComponent;
    var _a;
}());

//# sourceMappingURL=radio-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic select'\">\r\n  <md-select placeholder=\"Favorite food\">\r\n    <md-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n      {{ food.viewValue }}\r\n    </md-option>\r\n  </md-select>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/select/select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Select',
        link: ''
    }
];
var PageSelectComponent = (function () {
    function PageSelectComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Select';
        this.breadcrumb = BREADCRUMBS;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this._sharedService.emitChange(this.pageTitle);
    }
    PageSelectComponent.prototype.ngOnInit = function () { };
    PageSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select',
            template: __webpack_require__("../../../../../src/app/pages/material-components/select/select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/select/select.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageSelectComponent);
    return PageSelectComponent;
    var _a;
}());

//# sourceMappingURL=select.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/slide-toggle/slide-toggle.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic'\">\r\n  <md-slide-toggle>Slide me!</md-slide-toggle>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Disabled'\">\r\n  <md-slide-toggle disabled>Disabled</md-slide-toggle>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Theming'\" class=\"mb-0\">\r\n  <md-slide-toggle color=\"primary\" [checked]=\"true\">\r\n    Primary Slide Toggle\r\n  </md-slide-toggle>\r\n\r\n  <md-slide-toggle color=\"accent\" [checked]=\"true\">\r\n    Accent Slide Toggle\r\n  </md-slide-toggle>\r\n\r\n  <md-slide-toggle color=\"warn\" [checked]=\"true\">\r\n    Warning Slide Toggle\r\n  </md-slide-toggle>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/slide-toggle/slide-toggle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/slide-toggle/slide-toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSlideToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Slide toggle',
        link: ''
    }
];
var PageSlideToggleComponent = (function () {
    function PageSlideToggleComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Slide toggle';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageSlideToggleComponent.prototype.ngOnInit = function () { };
    PageSlideToggleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide-toggle',
            template: __webpack_require__("../../../../../src/app/pages/material-components/slide-toggle/slide-toggle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/slide-toggle/slide-toggle.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageSlideToggleComponent);
    return PageSlideToggleComponent;
    var _a;
}());

//# sourceMappingURL=slide-toggle.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic slider'\">\r\n  <md-slider thumbLabel></md-slider>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Selecting a value'\">\r\n  <md-slider min=\"1\" max=\"5\" step=\"0.5\" value=\"1.5\" #slider2></md-slider> <span>{{slider2.value}}</span>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Orientation'\">\r\n  <p>\r\n    <strong>Horizontal</strong><br>\r\n    <md-slider></md-slider>\r\n  </p>\r\n\r\n  <p>\r\n    <strong>Vertical</strong><br>\r\n    <md-slider vertical></md-slider>\r\n  </p>\r\n\r\n  <p>\r\n    <strong>Invert</strong><br>\r\n    <md-slider invert></md-slider>\r\n  </p>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Adding ticks'\">\r\n  <md-slider thumbLabel tickInterval=\"1\"></md-slider>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Tick marks'\">\r\n  <md-slider step=\"4\" tickInterval=\"3\"></md-slider>\r\n  <md-slider tickInterval=\"auto\"></md-slider>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Disabled'\" class=\"mb-0\">\r\n  <md-slider disabled value=\"5\"></md-slider>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/slider/slider.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Slider',
        link: ''
    }
];
var PageSliderComponent = (function () {
    function PageSliderComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Slider';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageSliderComponent.prototype.ngOnInit = function () { };
    PageSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slider',
            template: __webpack_require__("../../../../../src/app/pages/material-components/slider/slider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageSliderComponent);
    return PageSliderComponent;
    var _a;
}());

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/snackbar/snackbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Snackbar config'\">\r\n  <md-input-container>\r\n    <input mdInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n  </md-input-container>\r\n\r\n  <md-input-container>\r\n    <input mdInput value=\"Dance\" placeholder=\"Action\" #action>\r\n  </md-input-container>\r\n\r\n  <button md-raised-button color=\"primary\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/snackbar/snackbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/snackbar/snackbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSnackbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Snackbar',
        link: ''
    }
];
var PageSnackbarComponent = (function () {
    function PageSnackbarComponent(snackBar, _sharedService) {
        this.snackBar = snackBar;
        this._sharedService = _sharedService;
        this.breadcrumb = BREADCRUMBS;
        this.pageTitle = 'Snackbar';
        this.sidebar = true;
        this.navbar = true;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageSnackbarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    PageSnackbarComponent.prototype.ngOnInit = function () { };
    PageSnackbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-snackbar',
            template: __webpack_require__("../../../../../src/app/pages/material-components/snackbar/snackbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/snackbar/snackbar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageSnackbarComponent);
    return PageSnackbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=snackbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic tabs'\">\r\n  <md-tab-group>\r\n    <md-tab label=\"One\">\r\n      <h3>Some tab content</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem consequatur distinctio dolor dolore dolores, earum, eos explicabo id illo impedit iste modi nihil nulla praesentium provident quis repellat suscipit veritatis. Aut cum, dolor ea est ex excepturi minima obcaecati perspiciatis quaerat quidem quo repellendus sapiente sit sunt tenetur.</p>\r\n    </md-tab>\r\n    <md-tab label=\"Two\">\r\n      <h3>Some more tab content</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam architecto distinctio ea facere ipsum iste molestiae nihil omnis optio perferendis praesentium tempore veritatis. Aperiam cupiditate dicta doloribus eaque et exercitationem modi necessitatibus nisi, nostrum porro quae quaerat reiciendis, repellendus sequi sunt temporibus, voluptatem. Corporis ducimus laboriosam odio quas reiciendis repudiandae.</p>\r\n    </md-tab>\r\n    <md-tab label=\"Three\">\r\n      <h3>Some tab content</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque autem consequatur distinctio dolor dolore dolores, earum, eos explicabo id illo impedit iste modi nihil nulla praesentium provident quis repellat suscipit veritatis. Aut cum, dolor ea est ex excepturi minima obcaecati perspiciatis quaerat quidem quo repellendus sapiente sit sunt tenetur.</p>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Tabs with label templates'\" class=\"mb-0\">\r\n  <md-tab-group>\r\n    <md-tab>\r\n      <ng-template md-tab-label>\r\n        <md-icon>thumb_up</md-icon> The best pasta\r\n      </ng-template>\r\n      <h3>Best pasta restaurants</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi culpa dolorem ducimus eligendi est impedit inventore iste iure magnam neque nulla odit officia, porro repudiandae saepe sed, soluta suscipit tempore ullam? Adipisci aliquid aspernatur consequatur, cum eius facilis incidunt ipsum omnis, perspiciatis sunt tempora temporibus tenetur voluptatem! Est, quas!</p>\r\n    </md-tab>\r\n    <md-tab>\r\n      <ng-template md-tab-label>\r\n        <md-icon>thumb_down</md-icon> The worst sushi\r\n      </ng-template>\r\n      <h3>Terrible sushi restaurants</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias animi aperiam blanditiis consectetur culpa cum deleniti dicta dolor dolore eaque earum fugiat ipsum mollitia necessitatibus nesciunt obcaecati officiis quam quia quis, quo saepe sapiente tenetur ut velit veniam vitae. Dolore ea nam nisi numquam tempora unde voluptas!</p>\r\n    </md-tab>\r\n  </md-tab-group>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Tabs',
        link: ''
    }
];
var PageTabsComponent = (function () {
    function PageTabsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Tabs';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageTabsComponent.prototype.ngOnInit = function () { };
    PageTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',
            template: __webpack_require__("../../../../../src/app/pages/material-components/tabs/tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageTabsComponent);
    return PageTabsComponent;
    var _a;
}());

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic toolbar'\">\r\n  <md-toolbar>My App</md-toolbar>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Multiple rows'\">\r\n  <md-toolbar>\r\n    <span>First Row</span>\r\n\r\n    <md-toolbar-row>\r\n      <span>Second Row</span>\r\n    </md-toolbar-row>\r\n\r\n    <md-toolbar-row>\r\n      <span>Third Row</span>\r\n    </md-toolbar-row>\r\n  </md-toolbar>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Positioning toolbar content'\">\r\n  <md-toolbar color=\"primary\">\r\n    <span>Title</span>\r\n\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n\r\n    <span>Right Aligned</span>\r\n  </md-toolbar>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Theming'\" class=\"mb-0\">\r\n  <md-toolbar color=\"primary\">Primary</md-toolbar>\r\n  <br>\r\n  <md-toolbar color=\"accent\">Accent</md-toolbar>\r\n  <br>\r\n  <md-toolbar color=\"warn\">Warning</md-toolbar>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Toolbar',
        link: ''
    }
];
var PageToolbarComponent = (function () {
    function PageToolbarComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Toolbar';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageToolbarComponent.prototype.ngOnInit = function () { };
    PageToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-toolbar',
            template: __webpack_require__("../../../../../src/app/pages/material-components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageToolbarComponent);
    return PageToolbarComponent;
    var _a;
}());

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material-components/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Basic tooltip'\">\r\n  <button md-raised-button color=\"primary\" mdTooltip=\"Some message\" mdTooltipPosition=\"below\">Tooltip</button>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Positioning'\">\r\n  <button md-raised-button color=\"primary\" mdTooltip=\"Some message\" mdTooltipPosition=\"after\">after</button>\r\n  <button md-raised-button color=\"primary\" mdTooltip=\"Some message\" mdTooltipPosition=\"before\">before</button>\r\n  <button md-raised-button color=\"primary\" mdTooltip=\"Some message\" mdTooltipPosition=\"above\">above</button>\r\n  <button md-raised-button color=\"primary\" mdTooltip=\"Some message\" mdTooltipPosition=\"below\">below</button>\r\n  <button md-raised-button color=\"primary\" mdTooltip=\"Some message\" mdTooltipPosition=\"left\">left</button>\r\n  <button md-raised-button color=\"primary\" mdTooltip=\"Some message\" mdTooltipPosition=\"right\">right</button>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/material-components/tooltip/tooltip.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/material-components/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Material components',
        link: '#'
    },
    {
        title: 'Tooltip',
        link: ''
    }
];
var PageTooltipComponent = (function () {
    function PageTooltipComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Tooltip';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageTooltipComponent.prototype.ngOnInit = function () { };
    PageTooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tooltip',
            template: __webpack_require__("../../../../../src/app/pages/material-components/tooltip/tooltip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/material-components/tooltip/tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageTooltipComponent);
    return PageTooltipComponent;
    var _a;
}());

//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card [title]=\"'Colored ni-alerts'\">\r\n      <ni-alert><strong>Good day!</strong> Read <a href=\"#\">this important ni-alert message</a></ni-alert>\r\n      <ni-alert [color]=\"'success'\"><strong>Well done!</strong> You successfully read <a href=\"#\">this important ni-alert message</a></ni-alert>\r\n      <ni-alert [color]=\"'info'\"><strong>Heads up!</strong> This <a href=\"#\">ni-alert needs your attention</a></ni-alert>\r\n      <ni-alert [color]=\"'warning'\"><strong>Warning!</strong> Better check yourself, you're <a href=\"#\">not looking too good</a></ni-alert>\r\n      <ni-alert [color]=\"'danger'\"><strong>Oh snap!</strong> Change a few things up <a href=\"#\">and try submitting again</a></ni-alert>\r\n      <ni-alert [customColor]=\"'#000'\"><strong>Custom color!</strong> Change a few things up and try submitting again</ni-alert>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <ni-card [title]=\"'Outline ni-alerts'\">\r\n      <ni-alert [outline]=\"true\"><strong>Good day!</strong> Read <a href=\"#\">this important ni-alert message</a></ni-alert>\r\n      <ni-alert [color]=\"'success'\" [outline]=\"true\"><strong>Well done!</strong> You successfully read <a href=\"#\">this important ni-alert message</a></ni-alert>\r\n      <ni-alert [color]=\"'info'\" [outline]=\"true\"><strong>Heads up!</strong> This <a href=\"#\">ni-alert needs your attention</a></ni-alert>\r\n      <ni-alert [color]=\"'warning'\" [outline]=\"true\"><strong>Warning!</strong> Better check yourself, you're <a href=\"#\">not looking too good</a></ni-alert>\r\n      <ni-alert [color]=\"'danger'\" [outline]=\"true\"><strong>Oh snap!</strong> Change a few things up <a href=\"#\">and try submitting again</a></ni-alert>\r\n      <ni-alert [customColor]=\"'#000'\" [outline]=\"true\"><strong>Custom color!</strong> Change a few things up and try submitting again</ni-alert>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card [title]=\"'Alerts with closing button'\" class=\"mb-md-0\">\r\n      <ni-alert [close]=\"true\"><strong>Good day!</strong> Read <a href=\"#\">this important ni-alert message</a></ni-alert>\r\n      <ni-alert [color]=\"'success'\" [close]=\"true\"><strong>Well done!</strong> You successfully read <a href=\"#\">this important ni-alert message</a></ni-alert>\r\n      <ni-alert [color]=\"'info'\" [close]=\"true\"><strong>Heads up!</strong> This <a href=\"#\">ni-alert needs your attention</a></ni-alert>\r\n      <ni-alert [color]=\"'warning'\" [close]=\"true\"><strong>Warning!</strong> Better check yourself, you're <a href=\"#\">not looking too good</a></ni-alert>\r\n      <ni-alert [color]=\"'danger'\" [close]=\"true\"><strong>Oh snap!</strong> Change a few things up <a href=\"#\">and try submitting again</a></ni-alert>\r\n      <ni-alert [customColor]=\"'#000'\" [close]=\"true\"><strong>Custom color!</strong> Change a few things up and try submitting again</ni-alert>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <ni-card [title]=\"'Alerts with icon'\" class=\"mb-0\">\r\n      <ni-alert [outline]=\"true\"><md-icon>add_ni-alert</md-icon><strong>Good day!</strong> Read <a href=\"#\">this important ni-alert message</a></ni-alert>\r\n      <ni-alert [color]=\"'success'\" [outline]=\"true\"><md-icon>settings</md-icon><strong>Well done!</strong> You successfully read <a href=\"#\">this important ni-alert message</a></ni-alert>\r\n      <ni-alert [color]=\"'info'\" [outline]=\"true\"><md-icon>launch</md-icon><strong>Heads up!</strong> This <a href=\"#\">ni-alert needs your attention</a></ni-alert>\r\n      <ni-alert [color]=\"'warning'\" [outline]=\"true\"><md-icon>warning</md-icon><strong>Warning!</strong> Better check yourself, you're <a href=\"#\">not looking too good</a></ni-alert>\r\n      <ni-alert [color]=\"'danger'\" [outline]=\"true\"><md-icon>error_outline</md-icon><strong>Oh snap!</strong> Change a few things up <a href=\"#\">and try submitting again</a></ni-alert>\r\n      <ni-alert [customColor]=\"'#000'\" [outline]=\"true\"><md-icon>live_help</md-icon><strong>Custom color!</strong> Change a few things up and try submitting again</ni-alert>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNiAlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNiAlertsComponent = (function () {
    function PageNiAlertsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Alerts';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNiAlertsComponent.prototype.ngOnInit = function () { };
    PageNiAlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ni-alerts',
            template: __webpack_require__("../../../../../src/app/pages/ni-components/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ni-components/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNiAlertsComponent);
    return PageNiAlertsComponent;
    var _a;
}());

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/badge/badge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-3\">\r\n    <ni-card [title]=\"'Simple badges'\" class=\"badge-indent\">\r\n      <ni-badge>128</ni-badge>\r\n      <ni-badge>5</ni-badge>\r\n      <ni-badge>Babge</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-3\">\r\n    <ni-card [title]=\"'Colored badges'\" class=\"badge-indent\">\r\n      <ni-badge>128</ni-badge>\r\n      <ni-badge [color]=\"'success'\">5</ni-badge>\r\n      <ni-badge [color]=\"'info'\">1554</ni-badge>\r\n      <ni-badge [color]=\"'warning'\">29</ni-badge>\r\n      <ni-badge [color]=\"'danger'\">87</ni-badge>\r\n      <ni-badge [customColor]=\"'#9B479F'\">Badge</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-3\">\r\n    <ni-card [title]=\"'Outline badges'\" class=\"badge-indent\">\r\n      <ni-badge [outline]=\"true\">128</ni-badge>\r\n      <ni-badge [color]=\"'success'\" [outline]=\"true\">5</ni-badge>\r\n      <ni-badge [color]=\"'info'\" [outline]=\"true\">1554</ni-badge>\r\n      <ni-badge [color]=\"'warning'\" [outline]=\"true\">29</ni-badge>\r\n      <ni-badge [color]=\"'danger'\" [outline]=\"true\">87</ni-badge>\r\n      <ni-badge [customColor]=\"'#9B479F'\" [outline]=\"true\">Badge</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-3\">\r\n    <ni-card [title]=\"'Square badges'\" class=\"badge-indent\">\r\n      <ni-badge [borderRadius]=\"false\">128</ni-badge>\r\n      <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">5</ni-badge>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">1554</ni-badge>\r\n      <ni-badge [color]=\"'warning'\" [borderRadius]=\"false\">29</ni-badge>\r\n      <ni-badge [color]=\"'danger'\" [borderRadius]=\"false\">87</ni-badge>\r\n      <ni-badge [customColor]=\"'#9B479F'\" [borderRadius]=\"false\">Badge</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'Badges with arrow'\" class=\"badge-indent\">\r\n      <ni-badge [arrow]=\"'top'\" [borderRadius]=\"false\">128</ni-badge>\r\n      <ni-badge [color]=\"'success'\" [borderRadius]=\"false\" [arrow]=\"'right'\">5</ni-badge>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\" [arrow]=\"'bottom'\">154</ni-badge>\r\n      <ni-badge [color]=\"'warning'\" [borderRadius]=\"false\" [arrow]=\"'left'\">29</ni-badge>\r\n      <ni-badge [color]=\"'danger'\" [arrow]=\"'top'\">87</ni-badge>\r\n      <ni-badge [customColor]=\"'#9B479F'\" [arrow]=\"'right'\">55</ni-badge>\r\n      <ni-badge [color]=\"'success'\" [arrow]=\"'bottom'\">588</ni-badge>\r\n      <ni-badge [color]=\"'info'\" [arrow]=\"'left'\">154</ni-badge>\r\n      <ni-badge [arrow]=\"'top'\" [borderRadius]=\"false\" [outline]=\"true\">128</ni-badge>\r\n      <ni-badge [color]=\"'success'\" [borderRadius]=\"false\" [arrow]=\"'right'\" [outline]=\"true\">5</ni-badge>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\" [arrow]=\"'bottom'\" [outline]=\"true\">154</ni-badge>\r\n      <ni-badge [color]=\"'warning'\" [borderRadius]=\"false\" [arrow]=\"'left'\" [outline]=\"true\">29</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'Size badges'\" class=\"badge-indent\">\r\n      <ni-badge [size]=\"'large'\">128</ni-badge>\r\n      <ni-badge [color]=\"'warning'\" [borderRadius]=\"false\" [size]=\"'large'\">Large</ni-badge>\r\n      <ni-badge [color]=\"'success'\" [size]=\"'medium'\">518</ni-badge>\r\n      <ni-badge [color]=\"'danger'\" [borderRadius]=\"false\" [size]=\"'medium'\">Medium</ni-badge>\r\n      <ni-badge [color]=\"'info'\">154</ni-badge>\r\n      <ni-badge [customColor]=\"'#9B479F'\" [borderRadius]=\"false\">Default</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'Badges on button'\">\r\n      <button md-button>Default <ni-badge>128</ni-badge></button>\r\n      <button md-button color=\"warn\"><ni-badge [color]=\"'danger'\">87</ni-badge> Warning</button>\r\n      <button md-raised-button color=\"primary\">Primary <ni-badge [customColor]=\"'#9CAACE'\">8</ni-badge></button>\r\n      <button md-raised-button color=\"accent\"><ni-badge [color]=\"'info'\" [customColor]=\"'#fff'\" [outline]=\"true\">1554</ni-badge> Accent</button>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'Badges with icon'\" class=\"mb-0 icon-badge-indent\">\r\n      <md-icon>mail_outline<ni-badge>5</ni-badge></md-icon>\r\n      <md-icon>shopping_cart<ni-badge [color]=\"'danger'\" [position]=\"'top-left'\">1</ni-badge></md-icon>\r\n      <md-icon>notifications_none<ni-badge [color]=\"'info'\" [position]=\"'bottom-left'\">8</ni-badge></md-icon>\r\n      <md-icon>local_phone<ni-badge [color]=\"'warning'\" [position]=\"'bottom-right'\">3</ni-badge></md-icon>\r\n      <md-icon>person<ni-badge [customColor]=\"'#9B479F'\">15</ni-badge></md-icon>\r\n      <md-icon>notifications<ni-badge [color]=\"'danger'\">813</ni-badge></md-icon>\r\n      <md-icon>desktop_mac<ni-badge [color]=\"'danger'\">7</ni-badge></md-icon>\r\n      <md-icon>alarm<ni-badge [color]=\"'success'\">new</ni-badge></md-icon>\r\n      <md-icon>home<ni-badge [color]=\"'danger'\" [outline]=\"true\">1</ni-badge></md-icon>\r\n      <md-icon>visibility<ni-badge [color]=\"'info'\">9</ni-badge></md-icon>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/badge/badge.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-badge-indent .mat-icon {\n  margin: 11px; }\n\n.badge-indent badge {\n  margin: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/badge/badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNiBadgesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNiBadgesComponent = (function () {
    function PageNiBadgesComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Badges';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNiBadgesComponent.prototype.ngOnInit = function () { };
    PageNiBadgesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ni-badges',
            template: __webpack_require__("../../../../../src/app/pages/ni-components/badge/badge.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ni-components/badge/badge.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNiBadgesComponent);
    return PageNiBadgesComponent;
    var _a;
}());

//# sourceMappingURL=badge.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mt-0\">Simple breadcrumbs</h5>\r\n<ni-breadcrumb [menu]=\"breadcrumb\"></ni-breadcrumb>\r\n<br>\r\n\r\n<h5>Simple breadcrumbs with custom separator</h5>\r\n<ni-breadcrumb [menu]=\"breadcrumb\" [separator]=\"'&#8594;'\"></ni-breadcrumb>\r\n<br>\r\n<ni-breadcrumb [menu]=\"breadcrumb\" [separator]=\"'&#187;'\"></ni-breadcrumb>\r\n<br>\r\n\r\n<h5>Custom style breadcrumbs</h5>\r\n<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\"></ni-breadcrumb>\r\n<br>\r\n\r\n<h5>Custom style 2 breadcrumbs</h5>\r\n<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom2'\"></ni-breadcrumb>\r\n<br>\r\n\r\n<h5>Breadcrumbs with icon</h5>\r\n<ni-breadcrumb [menu]=\"breadcrumbIcon\"></ni-breadcrumb>\r\n<br>\r\n<ni-breadcrumb [menu]=\"breadcrumbIcon\" [style]=\"'custom1'\"></ni-breadcrumb>\r\n<br>\r\n<ni-breadcrumb [menu]=\"breadcrumbIcon\" [style]=\"'custom2'\"></ni-breadcrumb>"

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNiBreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'Home',
        link: '#',
        icon: ''
    },
    {
        title: 'UI Elements',
        link: '#',
        icon: ''
    },
    {
        title: 'Components',
        link: '#',
        icon: ''
    },
    {
        title: 'Breadcrumb',
        link: '',
        icon: ''
    }
];
var BREADCRUMBSICON = [
    {
        title: 'Home',
        link: '#',
        icon: 'fa fa-home'
    },
    {
        title: 'UI Elements',
        link: '#',
        icon: 'fa fa-paper-plane'
    },
    {
        title: 'Components',
        link: '#',
        icon: 'fa fa-shopping-bag'
    },
    {
        title: 'Breadcrumb',
        link: '',
        icon: 'fa fa-diamond'
    }
];
var PageNiBreadcrumbsComponent = (function () {
    function PageNiBreadcrumbsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Breadcrumbs';
        this.breadcrumb = BREADCRUMBS;
        this.breadcrumbIcon = BREADCRUMBSICON;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNiBreadcrumbsComponent.prototype.ngOnInit = function () { };
    PageNiBreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ni-breadcrumbs',
            template: __webpack_require__("../../../../../src/app/pages/ni-components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ni-components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNiBreadcrumbsComponent);
    return PageNiBreadcrumbsComponent;
    var _a;
}());

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Button size\">\n      <div class=\"buttons-list\">\n        <button ni-button size=\"large\">Large</button>\n        <button ni-button>Default</button>\n        <button ni-button size=\"small\">Small</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Button shape\">\n      <div class=\"buttons-list\">\n        <button ni-button>Default</button>\n        <button ni-button shape=\"0\">Square</button>\n        <button ni-button shape=\"17px\">Rounded</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Button width\">\n      <div class=\"buttons-list\">\n        <button ni-button>Auto</button>\n        <br>\n        <button ni-button block=\"true\">Block button</button>\n        <button ni-button [style.width.%]=\"50\">Width 50%</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Button align\">\n      <div class=\"buttons-list\">\n        <button ni-button block=\"true\" align=\"center\">Center</button>\n        <button ni-button block=\"true\" align=\"left\">Left</button>\n        <button ni-button block=\"true\" align=\"right\">Right</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Button tag\">\n      <div class=\"buttons-list\">\n        <button ni-button>Button</button>\n        <a href=\"#\" ni-button>Link</a>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Button style\">\n      <div class=\"buttons-list\">\n        <button ni-button>Default</button>\n        <button ni-button type=\"accent\">Accent</button>\n        <button ni-button type=\"success\">Success</button>\n        <button ni-button type=\"info\">Info</button>\n        <button ni-button type=\"warning\">Warning</button>\n        <button ni-button type=\"error\">Error</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Outline button\">\n      <div class=\"buttons-list\">\n        <button ni-button outline=\"true\">Default</button>\n        <button ni-button type=\"accent\" outline=\"true\" lineStyle=\"dashed\">Accent</button>\n        <button ni-button type=\"success\" outline=\"true\">Success</button>\n        <button ni-button type=\"info\" outline=\"true\" shape=\"17px\">Info</button>\n        <button ni-button type=\"warning\" outline=\"true\" lineStyle=\"dotted\">Warning</button>\n        <button ni-button type=\"error\" outline=\"true\" shape=\"3px\">Error</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Button with custom color / background\">\n      <div class=\"buttons-list\">\n        <button ni-button [color]=\"'#fbc2eb'\">Simple color</button>\n        <button ni-button [color]=\"['#ea8080', '#fff']\">Hovered color</button>\n        <button ni-button [bg]=\"'#ff8a65'\">Simple bg</button>\n        <button ni-button [bg]=\"['#a972cb', '#cb72aa']\">Hovered bg</button>\n        <button ni-button [color]=\"['#7ebbb6', '#fff']\" [bg]=\"'#7ebbb6'\" outline=\"true\">Outline color</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Gradient button\">\n      <div class=\"buttons-list\">\n        <button ni-button [gradient]=\"['#f6d365', '#fda085']\">Button</button>\n        <button ni-button [gradient]=\"['#c780b3', '#50408e']\">Button</button>\n        <button ni-button [gradient]=\"['#84fab0', '#8fd3f4']\">Button</button>\n        <button ni-button [gradient]=\"['#a1c4fd', '#c2e9fb']\">Button</button>\n        <button ni-button [gradient]=\"['#ffecd2', '#fcb69f']\">Button</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Disabled button\">\n      <div class=\"buttons-list\">\n        <button ni-button disabled=\"true\">Disabled</button>\n        <button ni-button disabled=\"true\" [gradient]=\"['#c780b3', '#50408e']\">Disabled</button>\n        <button ni-button disabled=\"true\" type=\"accent\">Disabled</button>\n        <button ni-button disabled=\"true\" type=\"warning\" outline=\"true\">Disabled</button>\n        <button ni-button disabled=\"true\" type=\"info\" outline=\"true\" lineStyle=\"dotted\" shape=\"17px\">Disabled</button>\n      </div>\n    </ni-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <ni-card title=\"Icon button\" class=\"mb-0\">\n      <div class=\"buttons-list\">\n        <button ni-button beforeIcon=\"sli-bell\">Before</button>\n        <button ni-button afterIcon=\"fa fa-save\" [gradient]=\"['#cce451', '#4b650d']\">After</button>\n        <button ni-button afterIcon=\"sli-printer\" type=\"success\" outline=\"true\"></button>\n        <button ni-button afterIcon=\"fa fa-shopping-basket\" [bg]=\"['#f0f4c3', '#aab71c']\" [color]=\"'#000'\">Add</button>\n        <button ni-button beforeIcon=\"fa fa-dropbox\" type=\"info\" outline=\"true\" lineStyle=\"dashed\">Dropbox</button>\n        <button ni-button afterIcon=\"sli-trash\" iconAnimation=\"true\" type=\"error\">Remove</button>\n      </div>\n    </ni-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttons-list {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: -5px; }\n  .buttons-list .ni-btn {\n    margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNiButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNiButtonsComponent = (function () {
    function PageNiButtonsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Buttons';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNiButtonsComponent.prototype.ngOnInit = function () { };
    PageNiButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ni-buttons',
            template: __webpack_require__("../../../../../src/app/pages/ni-components/buttons/buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ni-components/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNiButtonsComponent);
    return PageNiButtonsComponent;
    var _a;
}());

//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mt-0\">Simple cards</h5>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card [title]=\"'Simple card'\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut\r\n        et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis\r\n        rerum ullam velit veritatis vitae.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card>\r\n      <h5 class=\"mt-0\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut\r\n        et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis\r\n        rerum ullam velit veritatis vitae.</p>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<h5>Colored cards</h5>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card>\r\n      <p><strong>Standard color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [bgColor]=\"'success'\">\r\n      <p><strong>Success color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [bgColor]=\"'info'\">\r\n      <p><strong>Info color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [bgColor]=\"'warning'\">\r\n      <p><strong>Warning color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [bgColor]=\"'danger'\">\r\n      <p><strong>Danger color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [customBgColor]=\"'#9b479f'\" [customColor]=\"'#ccc'\">\r\n      <p><strong>Custom color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<h5>Outline cards</h5>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card [outline]=\"true\">\r\n      <p><strong>Standard color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [bgColor]=\"'success'\" [color]=\"'success'\" [outline]=\"true\">\r\n      <p><strong>Success color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [bgColor]=\"'info'\" [color]=\"'info'\" [outline]=\"true\">\r\n      <p><strong>Info color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [bgColor]=\"'warning'\" [color]=\"'warning'\" [outline]=\"true\">\r\n      <p><strong>Warning color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [bgColor]=\"'danger'\" [color]=\"'danger'\" [outline]=\"true\">\r\n      <p><strong>Danger color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [customBgColor]=\"'#9b479f'\" [customColor]=\"'#9b479f'\" [outline]=\"true\">\r\n      <p><strong>Custom color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<h5>Image background cards</h5>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card [customBgColor]=\"'rgba(0,128,0,0.7)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-2.jpg'\">\r\n      <p><strong>Image background</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci assumenda at aut autem cupiditate\r\n        dolorum ducimus eaque earum eveniet facere magni neque numquam odit, optio quas quod vel voluptatem?</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card [customBgColor]=\"'rgba(220,20,60,0.6)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-3.jpg'\">\r\n      <p>Consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n      <ul>\r\n        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi!</li>\r\n        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda illum quae.</li>\r\n        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>\r\n      </ul>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<h5>Align cards</h5>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-4\">\r\n    <ni-card [align]=\"'left'\" class=\"mb-lg-0\">\r\n      <p><strong>Standard color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <ni-card [bgColor]=\"'success'\" [align]=\"'center'\" class=\"mb-lg-0\">\r\n      <p><strong>Success color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <ni-card [bgColor]=\"'info'\" [align]=\"'right'\" class=\"mb-0\">\r\n      <p><strong>Info color</strong>, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente.</p>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNiCardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNiCardsComponent = (function () {
    function PageNiCardsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Cards';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNiCardsComponent.prototype.ngOnInit = function () { };
    PageNiCardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ni-cards',
            template: __webpack_require__("../../../../../src/app/pages/ni-components/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ni-components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNiCardsComponent);
    return PageNiCardsComponent;
    var _a;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mb-4 mb-md-0\">\n    <ni-chat [activeUser]=\"activeUser\" [messages]=\"messages\"></ni-chat>\n  </div>\n  <div class=\"col-md-6\">\n    <ni-chat [activeUser]=\"activeUser2\" [messages]=\"messages2\" [style.height.px]=\"600\"></ni-chat>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNiChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNiChatComponent = (function () {
    function PageNiChatComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Chat';
        this.activeUser = {
            name: 'Dennis',
            lastSeen: 'online',
            avatar: ''
        };
        this.activeUser2 = {
            name: 'Amanda Li',
            lastSeen: 'last seen 10 minutes ago',
            avatar: 'assets/content/avatar-4.jpg'
        };
        this.messages = [
            {
                'date': '7 : 21',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'my': false
            },
            {
                'date': '7 : 25',
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'my': true
            },
            {
                'date': '7 : 29',
                'content': "Aenean lacinia bibendum nulla.",
                'my': false
            },
            {
                'date': '8 : 15',
                'content': "Lorem ipsum dolor sit.",
                'my': false
            }
        ];
        this.messages2 = [
            {
                'date': '8 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'my': false
            },
            {
                'date': '7 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'my': true
            },
            {
                'date': '2 hours ago',
                'content': "Contrary to popular belief,",
                'my': false
            },
            {
                'date': '15 minutes ago',
                'content': "Lorem ipsum dolor sit.",
                'my': true
            },
            {
                'date': '14 minutes ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'my': false
            },
            {
                'date': '12 minutes ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'my': true
            },
        ];
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNiChatComponent.prototype.ngOnInit = function () { };
    PageNiChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/pages/ni-components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ni-components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNiChatComponent);
    return PageNiChatComponent;
    var _a;
}());

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/file/file.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Files Types'\">\r\n  <ni-file [title]=\"'file-name'\"></ni-file>\r\n  <ni-file [type]=\"'doc'\" [title]=\"'file-name'\"></ni-file>\r\n  <ni-file [type]=\"'xlx'\" [title]=\"'file-name'\"></ni-file>\r\n  <ni-file [type]=\"'pdf'\" [title]=\"'file-name'\"></ni-file>\r\n  <ni-file [type]=\"'zip'\" [title]=\"'file-name'\"></ni-file>\r\n  <ni-file [type]=\"'mp3'\" [title]=\"'file-name'\"></ni-file>\r\n  <ni-file [type]=\"'mp4'\" [title]=\"'file-name'\"></ni-file>\r\n  <ni-file [type]=\"'jpg'\" [title]=\"'file-name'\" [image]=\"'assets/content/file-1.jpg'\"></ni-file>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Files Size'\">\r\n  <p><strong>Small</strong></p>\r\n  <p>\r\n    <ni-file [title]=\"'file-name'\" [size]=\"'small'\"></ni-file>\r\n    <ni-file [type]=\"'doc'\" [title]=\"'file-name'\" [size]=\"'small'\"></ni-file>\r\n    <ni-file [type]=\"'xlx'\" [title]=\"'file-name'\" [size]=\"'small'\"></ni-file>\r\n    <ni-file [type]=\"'pdf'\" [title]=\"'file-name'\" [size]=\"'small'\"></ni-file>\r\n    <ni-file [type]=\"'zip'\" [title]=\"'file-name'\" [size]=\"'small'\"></ni-file>\r\n    <ni-file [type]=\"'mp3'\" [title]=\"'file-name'\" [size]=\"'small'\"></ni-file>\r\n    <ni-file [type]=\"'mp4'\" [title]=\"'file-name'\" [size]=\"'small'\"></ni-file>\r\n    <ni-file [type]=\"'jpg'\" [title]=\"'file-name'\" [image]=\"'assets/content/file-2.jpg'\" [size]=\"'small'\"></ni-file>\r\n  </p>\r\n  <p><strong>Normal</strong></p>\r\n  <p>\r\n    <ni-file [title]=\"'file-name'\"></ni-file>\r\n    <ni-file [type]=\"'doc'\" [title]=\"'file-name'\"></ni-file>\r\n    <ni-file [type]=\"'xlx'\" [title]=\"'file-name'\"></ni-file>\r\n    <ni-file [type]=\"'pdf'\" [title]=\"'file-name'\"></ni-file>\r\n    <ni-file [type]=\"'zip'\" [title]=\"'file-name'\"></ni-file>\r\n    <ni-file [type]=\"'mp3'\" [title]=\"'file-name'\"></ni-file>\r\n    <ni-file [type]=\"'mp4'\" [title]=\"'file-name'\"></ni-file>\r\n    <ni-file [type]=\"'jpg'\" [title]=\"'file-name'\" [image]=\"'assets/content/file-3.jpg'\"></ni-file>\r\n  </p>\r\n  <p><strong>Large</strong></p>\r\n  <p>\r\n    <ni-file [title]=\"'file-name'\" [size]=\"'large'\"></ni-file>\r\n    <ni-file [type]=\"'doc'\" [title]=\"'file-name'\" [size]=\"'large'\"></ni-file>\r\n    <ni-file [type]=\"'xlx'\" [title]=\"'file-name'\" [size]=\"'large'\"></ni-file>\r\n    <ni-file [type]=\"'pdf'\" [title]=\"'file-name'\" [size]=\"'large'\"></ni-file>\r\n    <ni-file [type]=\"'zip'\" [title]=\"'file-name'\" [size]=\"'large'\"></ni-file>\r\n    <ni-file [type]=\"'mp3'\" [title]=\"'file-name'\" [size]=\"'large'\"></ni-file>\r\n    <ni-file [type]=\"'mp4'\" [title]=\"'file-name'\" [size]=\"'large'\"></ni-file>\r\n    <ni-file [type]=\"'jpg'\" [title]=\"'file-name'\" [image]=\"'assets/content/file.jpg'\" [size]=\"'large'\"></ni-file>\r\n  </p>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Files with delete button'\">\r\n  <ni-file [title]=\"'file-name'\" [delete]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'doc'\" [title]=\"'file-name'\" [delete]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'xlx'\" [title]=\"'file-name'\" [delete]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'pdf'\" [title]=\"'file-name'\" [delete]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'zip'\" [title]=\"'file-name'\" [delete]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'mp3'\" [title]=\"'file-name'\" [delete]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'mp4'\" [title]=\"'file-name'\" [delete]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'jpg'\" [title]=\"'file-name'\" [image]=\"'assets/content/file-4.jpg'\" [delete]=\"true\"></ni-file>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Files with spinners'\" class=\"mb-0\">\r\n  <ni-file [title]=\"'file-name'\" [spinner]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'doc'\" [title]=\"'file-name'\" [spinner]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'xlx'\" [title]=\"'file-name'\" [spinner]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'pdf'\" [title]=\"'file-name'\" [spinner]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'zip'\" [title]=\"'file-name'\" [spinner]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'mp3'\" [title]=\"'file-name'\" [spinner]=\"true\"></ni-file>\r\n  <ni-file [type]=\"'mp4'\" [title]=\"'file-name'\" [spinner]=\"true\"></ni-file>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/file/file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/file/file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNiFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNiFilesComponent = (function () {
    function PageNiFilesComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Files';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNiFilesComponent.prototype.ngOnInit = function () { };
    PageNiFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ni-files',
            template: __webpack_require__("../../../../../src/app/pages/ni-components/file/file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ni-components/file/file.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNiFilesComponent);
    return PageNiFilesComponent;
    var _a;
}());

//# sourceMappingURL=file.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/h-timeline/h-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Left align timeline'\" [customBgColor]=\"'transparent'\">\n  <ni-h-timeline [data]=\"timelineData\"></ni-h-timeline>\n</ni-card>\n\n<ni-card [title]=\"'Right align timeline'\" [customBgColor]=\"'transparent'\">\n  <ni-h-timeline [align]=\"'right'\" [data]=\"timelineData\"></ni-h-timeline>\n</ni-card>\n\n<ni-card [title]=\"'Center align timeline'\" [customBgColor]=\"'transparent'\">\n  <ni-h-timeline [align]=\"'center'\" [data]=\"timelineData\"></ni-h-timeline>\n</ni-card>\n\n<ni-card [title]=\"'Both sides timeline'\" [customBgColor]=\"'transparent'\">\n  <ni-h-timeline [align]=\"'between'\" [data]=\"timelineData\"></ni-h-timeline>\n</ni-card>\n\n<ni-card [title]=\"'Timeline without time'\" [customBgColor]=\"'transparent'\">\n  <ni-h-timeline [showDate]=\"false\" [align]=\"'between'\" [data]=\"timelineData\"></ni-h-timeline>\n</ni-card>\n\n<ni-card [title]=\"'Timeline with years'\" [customBgColor]=\"'transparent'\" class=\"mb-0\">\n  <ni-h-timeline [showYears]=\"true\" [align]=\"'between'\" [data]=\"timelineData\"></ni-h-timeline>\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/h-timeline/h-timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ni-components/h-timeline/h-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNiHTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timelineData = [
    {
        'label': '2017',
        'timeline': [
            {
                'date': '2 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'pointColor': '#ea8080'
            },
            {
                'date': 'July 10, 2017',
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.",
                'pointColor': '#B2DFDB'
            }
        ]
    },
    {
        'label': '2016',
        'timeline': [
            {
                'date': 'December 27, 2016',
                'content': "Lorem ipsum dolor sit.",
                'pointColor': '#FFC6E6'
            },
            {
                'date': 'December 20, 2016',
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.",
                'pointColor': '#FFA78D'
            }
        ]
    }
];
var PageNiHTimelineComponent = (function () {
    function PageNiHTimelineComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Horizontal timeline';
        this.timelineData = timelineData;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNiHTimelineComponent.prototype.ngOnInit = function () { };
    PageNiHTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-h-timeline',
            template: __webpack_require__("../../../../../src/app/pages/ni-components/h-timeline/h-timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/ni-components/h-timeline/h-timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNiHTimelineComponent);
    return PageNiHTimelineComponent;
    var _a;
}());

//# sourceMappingURL=h-timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Not found!</h1>"

/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Not found!';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
    var _a;
}());

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'danger'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n      <md-icon>shopping_basket</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'warning'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n      <md-icon>equalizer</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+210</ni-badge>\r\n      <md-icon>monetization_on</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'success'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n      <md-icon>donut_large</md-icon>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card [title]=\"'About admin'\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut\r\n        et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis\r\n        rerum ullam velit veritatis vitae.</p>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Wordpress</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"90\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Magento</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"80\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Opencart</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"60\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Drupal</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"30\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Angular</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>React</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"85\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Vue.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"40\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Backbone.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"38\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam cumque dicta earum, iure maiores neque\r\n        nesciunt officia quisquam ullam.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card title=\"Audience Overview\">\r\n      <canvas\r\n        baseChart\r\n        [datasets]=\"lineChartData\"\r\n        [labels]=\"lineChartLabels\"\r\n        [options]=\"lineChartOptions\"\r\n        [colors]=\"lineChartColors\"\r\n        [legend]=\"lineChartLegend\"\r\n        [chartType]=\"lineChartType\"></canvas>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"text-center\">\r\n  <h4>Meet the Team</h4>\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eum.</p>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [align]=\"'center'\" class=\"mb-xl-0\">\r\n      <img src=\"assets/content/person-4.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">\r\n      <h5>Mark Wahlberg</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius\r\n        eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [align]=\"'center'\" class=\"mb-xl-0\">\r\n      <img src=\"assets/content/person-1.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">\r\n      <h5>Lindsay Lohan</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius\r\n        eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [align]=\"'center'\" class=\"mb-md-0\">\r\n      <img src=\"assets/content/person-3.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">\r\n      <h5>Mary Jane</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius\r\n        eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [align]=\"'center'\" class=\"mb-0\">\r\n      <img src=\"assets/content/person-5.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">\r\n      <h5>Tom Brady</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius\r\n        eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/about-us/about-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'Pages',
        link: '#'
    },
    {
        title: 'Page service',
        link: '#'
    },
    {
        title: 'About Us',
        link: ''
    }
];
var PageAboutUsComponent = (function () {
    function PageAboutUsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'About Us';
        this.breadcrumb = BREADCRUMBS;
        // lineChart
        this.lineChartData = [
            {
                data: [30, 42, 46, 51, 65, 73, 80],
                label: 'Users',
                borderWidth: 1,
                pointRadius: 1
            },
            {
                data: [42, 43, 52, 47, 65, 70, 79],
                label: 'Pages',
                borderWidth: 1,
                pointRadius: 1
            },
            {
                data: [51, 48, 45, 56, 61, 69, 67],
                label: 'Visits',
                borderWidth: 1,
                pointRadius: 1
            }
        ];
        this.lineChartLabels = [
            'Mon.',
            'Tue.',
            'Wed.',
            'Thu.',
            'Fri.',
            'Sat.',
            'Sun.'
        ];
        this.lineChartOptions = {
            responsiveAnimationDuration: 500,
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(93,173,224,0.2)',
                borderColor: '#5dade0',
                pointBackgroundColor: '#5dade0',
                pointBorderColor: '#0e7cc5',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#000'
            },
            {
                backgroundColor: 'rgba(255,140,0,0.2)',
                borderColor: '#ff8c00',
                pointBackgroundColor: '#ff8c00',
                pointBorderColor: '#FF630B',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#000'
            },
            {
                backgroundColor: 'rgba(220,20,60,0.2)',
                borderColor: '#dc143c',
                pointBackgroundColor: '#dc143c',
                pointBorderColor: '#7E2303',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#000'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageAboutUsComponent.prototype.ngOnInit = function () { };
    PageAboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',
            template: __webpack_require__("../../../../../src/app/pages/pages-service/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pages-service/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageAboutUsComponent);
    return PageAboutUsComponent;
    var _a;
}());

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<div class=\"text-center\">\r\n  <h4>Some of your Questions:</h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-3\"></div>\r\n    <div class=\"col-xl-6\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos labore minima odio possimus praesentium qui\r\n        quibusdam quis recusandae sequi voluptate. Iste nihil totam voluptatibus. Blanditiis, non vitae! Deleniti eum,\r\n        fugiat illum in incidunt labore, magni maxime necessitatibus nisi numquam officia, placeat quo suscipit tempora\r\n        temporibus ut veniam! Labore, omnis, suscipit?</p>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n    <div class=\"col-xl-3\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card title=\"General\">\r\n      <squeezebox [multiple]=\"false\">\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque dolor exercitationem\r\n            incidunt quaerat, ullam!</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque dolores harum maiores\r\n            nam sint? Accusantium ducimus laboriosam natus.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, aperiam aspernatur, autem\r\n            consequatur dignissimos, ipsum itaque numquam praesentium quaerat quis reprehenderit sint tempora veniam.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi culpa error harum laborum,\r\n            nihil non quis rerum, soluta voluptate voluptatem?</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at aut consequuntur cumque,\r\n            esse exercitationem fugit numquam quam sed soluta, tempora ut voluptatum.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus autem doloremque eveniet\r\n            fuga iusto, nemo obcaecati quos sunt voluptatem. Provident, veritatis.</sb-item-body>\r\n        </sb-item>\r\n      </squeezebox>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <ni-card title=\"Marketplace\">\r\n      <squeezebox [multiple]=\"false\">\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque dolor exercitationem\r\n            incidunt quaerat, ullam!</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque dolor exercitationem\r\n            incidunt quaerat, ullam!</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque dolores harum maiores\r\n            nam sint? Accusantium ducimus laboriosam natus.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, aperiam aspernatur, autem\r\n            consequatur dignissimos, ipsum itaque numquam praesentium quaerat quis reprehenderit sint tempora veniam.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi culpa error harum laborum,\r\n            nihil non quis rerum, soluta voluptate voluptatem?</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at aut consequuntur cumque,\r\n            esse exercitationem fugit numquam quam sed soluta, tempora ut voluptatum.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus autem doloremque eveniet\r\n            fuga iusto, nemo obcaecati quos sunt voluptatem. Provident, veritatis.</sb-item-body>\r\n        </sb-item>\r\n      </squeezebox>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <ni-card title=\"Customization\" class=\"mb-lg-0\">\r\n      <squeezebox [multiple]=\"false\">\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque dolores harum maiores\r\n            nam sint? Accusantium ducimus laboriosam natus.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, aperiam aspernatur, autem\r\n            consequatur dignissimos, ipsum itaque numquam praesentium quaerat quis reprehenderit sint tempora veniam.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi culpa error harum laborum,\r\n            nihil non quis rerum, soluta voluptate voluptatem?</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at aut consequuntur cumque,\r\n            esse exercitationem fugit numquam quam sed soluta, tempora ut voluptatum.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus autem doloremque eveniet\r\n            fuga iusto, nemo obcaecati quos sunt voluptatem. Provident, veritatis.</sb-item-body>\r\n        </sb-item>\r\n      </squeezebox>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <ni-card title=\"Design\" class=\"mb-0\">\r\n      <squeezebox [multiple]=\"false\">\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque dolores harum maiores\r\n            nam sint? Accusantium ducimus laboriosam natus.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, aperiam aspernatur, autem\r\n            consequatur dignissimos, ipsum itaque numquam praesentium quaerat quis reprehenderit sint tempora veniam.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi culpa error harum laborum,\r\n            nihil non quis rerum, soluta voluptate voluptatem?</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at aut consequuntur cumque,\r\n            esse exercitationem fugit numquam quam sed soluta, tempora ut voluptatum.</sb-item-body>\r\n        </sb-item>\r\n        <sb-item>\r\n          <sb-item-head>Lorem ipsum dolor sit amet, consectetur adipisicing?</sb-item-head>\r\n          <sb-item-body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus autem doloremque eveniet\r\n            fuga iusto, nemo obcaecati quos sunt voluptatem. Provident, veritatis.</sb-item-body>\r\n        </sb-item>\r\n      </squeezebox>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/faq/faq.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'Pages',
        link: '#'
    },
    {
        title: 'Page service',
        link: '#'
    },
    {
        title: 'FAQ',
        link: ''
    }
];
var PageFaqComponent = (function () {
    function PageFaqComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'FAQ';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageFaqComponent.prototype.ngOnInit = function () { };
    PageFaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',
            template: __webpack_require__("../../../../../src/app/pages/pages-service/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pages-service/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageFaqComponent);
    return PageFaqComponent;
    var _a;
}());

//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'INVOICE No. 158450'\" class=\"mb-0\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mb-4 mb-md-0\">\r\n      <p><strong>Hello, Stanley Jones</strong></p>\r\n      <p>Thanks a lot because you keep purchasing our products. Our company promises to provide high quality products\r\n        for you as well as outstanding customer service for every transaction.</p>\r\n    </div>\r\n    <div class=\"col-md-6 text-md-right\">\r\n      <p class=\"mb-2\"><strong>Order Date:</strong> <i>May 17, 2017</i></p>\r\n      <p class=\"mb-2\"><strong>Order Status:</strong> <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">Paid</ni-badge></p>\r\n      <p><strong>Order ID:</strong> #158450</p>\r\n    </div>\r\n  </div><!-- .row -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h5>Billing Address</h5>\r\n\r\n      <address class=\"line-h-24\">\r\n        Stanley Jones<br>\r\n        795 Folsom Ave, Suite 600<br>\r\n        San Francisco, CA 94107<br>\r\n        <abbr title=\"Phone\">P:</abbr> (123) 456-7890\r\n      </address>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 text-md-right\">\r\n      <h5>Shipping Address</h5>\r\n\r\n      <address class=\"line-h-24\">\r\n        Stanley Jones<br>\r\n        795 Folsom Ave, Suite 600<br>\r\n        San Francisco, CA 94107<br>\r\n        <abbr title=\"Phone\">P:</abbr> (123) 456-7890\r\n      </address>\r\n    </div>\r\n  </div><!-- .row -->\r\n\r\n  <div class=\"table-responsive mb-4\">\r\n    <table class=\"table\">\r\n      <thead>\r\n      <tr class=\"text-nowrap\">\r\n        <th>#</th>\r\n        <th>Item</th>\r\n        <th>Quantity</th>\r\n        <th>Unit Cost</th>\r\n        <th class=\"text-right\">Total</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td>1</td>\r\n        <td>\r\n          <b>Laptop</b> <br>\r\n          Brand Model VGN-TXN27N/B\r\n          11.1\" Notebook PC\r\n        </td>\r\n        <td>1</td>\r\n        <td>$1799</td>\r\n        <td class=\"text-right\">$1799</td>\r\n      </tr>\r\n      <tr>\r\n        <td>2</td>\r\n        <td>\r\n          <b>Warranty</b> <br>\r\n          Two Year Extended Warranty -\r\n          Parts and Labor\r\n        </td>\r\n        <td>3</td>\r\n        <td>$499</td>\r\n        <td class=\"text-right\">$1497</td>\r\n      </tr>\r\n      <tr>\r\n        <td>3</td>\r\n        <td>\r\n          <b>LED</b> <br>\r\n          80cm (32) HD Ready LED TV\r\n        </td>\r\n        <td>2</td>\r\n        <td>$412</td>\r\n        <td class=\"text-right\">$824</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div><!-- .table-responsive -->\r\n\r\n  <div class=\"mb-5 text-center text-md-right\">\r\n    <p class=\"mb-2\"><strong>Sub-total:</strong> $4120.00</p>\r\n    <p class=\"mb-0\"><strong>VAT (12.5):</strong> $515</p>\r\n    <p class=\"h4 mt-2\">$4635.00 USD</p>\r\n    <div class=\"hidden-print text-center text-md-right\">\r\n      <button md-raised-button color=\"primary\">Make a Payment</button>\r\n      <button md-raised-button><i class=\"fa fa-print mr-2\"></i> Print</button>\r\n    </div>\r\n  </div>\r\n\r\n  <p>\r\n    <small>PLEASE NOTE: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur eveniet ipsam iure labore\r\n      nemo pariatur perferendis quaerat quidem similique. Alias earum facere magni nam odio rem suscipit voluptatibus!\r\n      Alias, consequatur distinctio dolore ducimus eaque est eveniet labore minus nam officiis placeat qui, quod quos\r\n      repellat repellendus suscipit velit, voluptatem. Alias earum facere magni nam odio rem suscipit voluptatibus!\r\n      Alias, consequatur distinctio dolore ducimus eaque est eveniet labore minus nam officiis placeat qui, quod quos\r\n      repellat repellendus suscipit velit, voluptatem.</small>\r\n  </p>\r\n  <p>\r\n    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur eveniet ipsam iure labore\r\n      nemo pariatur perferendis quaerat quidem similique. Alias earum facere magni nam odio rem suscipit voluptatibus!\r\n      Alias, consequatur distinctio dolore ducimus eaque est eveniet labore minus nam officiis placeat qui, quod quos\r\n      repellat repellendus suscipit velit, voluptatem.</small>\r\n  </p>\r\n  <hr>\r\n  <div class=\"row text-center text-md-left \">\r\n    <div class=\"col-md-6 mb-3 mb-md-0 pt-2 pb-2\">\r\n      <img src=\"../../../../assets/img/logo-compress.png\" alt=\"\" width=\"38\" height=\"33\">\r\n    </div>\r\n    <div class=\"col-md-6 align-self-center text-md-right pt-2 pb-2\">\r\n      <p class=\"mb-2 small\">Phone: +1 888-555-0000</p>\r\n      <p class=\"small\"><a href=\"mailto:support@mail.com\">support@mail.com</a></p>\r\n    </div>\r\n  </div>\r\n</ni-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/invoice/invoice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'Pages',
        link: '#'
    },
    {
        title: 'Page service',
        link: '#'
    },
    {
        title: 'Invoice',
        link: ''
    }
];
var PageInvoiceComponent = (function () {
    function PageInvoiceComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Invoice';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageInvoiceComponent.prototype.ngOnInit = function () { };
    PageInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invoice',
            template: __webpack_require__("../../../../../src/app/pages/pages-service/invoice/invoice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pages-service/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageInvoiceComponent);
    return PageInvoiceComponent;
    var _a;
}());

//# sourceMappingURL=invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-h-timeline [showYears]=\"true\" [showDate]=\"true\" [align]=\"'between'\" [data]=\"timelineData\"></ni-h-timeline>"

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/timeline/timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages-service/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'Pages',
        link: '#'
    },
    {
        title: 'Page service',
        link: '#'
    },
    {
        title: 'Timeline',
        link: ''
    }
];
var timelineData = [
    {
        'label': '2017',
        'timeline': [
            {
                'date': '2 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'pointColor': '#ea8080'
            },
            {
                'date': '5 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.\n         Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'pointColor': '#915035'
            },
            {
                'date': '8 hours ago',
                'content': "Lorem ipsum dolor sit amet.",
                'pointColor': '#B925FF'
            },
            {
                'date': '2 days ago',
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                'pointColor': '#C5CAE9'
            },
            {
                'date': '3 days ago',
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis doloremque earum itaque laborum, nobis non ratione rerum similique vel?",
                'pointColor': '#FF8A65'
            },
            {
                'date': '5 days ago',
                'content': "Lorem ipsum dolor sit.",
                'pointColor': '#B3E5FC'
            },
            {
                'date': 'July 10, 2017',
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.",
                'pointColor': '#B2DFDB'
            },
            {
                'date': 'July 7, 2017',
                'content': "Lorem ipsum dolor sit amet, consectetur.",
                'pointColor': '#3E5EFF'
            }
        ]
    },
    {
        'label': '2016',
        'timeline': [
            {
                'date': 'December 27, 2016',
                'content': "Lorem ipsum dolor sit.",
                'pointColor': '#FFC6E6'
            },
            {
                'date': 'December 20, 2016',
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.",
                'pointColor': '#FFA78D'
            },
            {
                'date': 'December 17, 2016',
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.",
                'pointColor': '#F0F4C3'
            },
            {
                'date': 'December 12, 2016',
                'content': "Lorem ipsum dolor sit amet, consectetur.",
                'pointColor': '#FFC6F1'
            },
            {
                'date': 'December 2, 2016',
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.",
                'pointColor': '#488034'
            },
        ]
    }
];
var PageTimelineComponent = (function () {
    function PageTimelineComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Timeline';
        this.breadcrumb = BREADCRUMBS;
        this.timelineData = timelineData;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageTimelineComponent.prototype.ngOnInit = function () { };
    PageTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-timeline',
            template: __webpack_require__("../../../../../src/app/pages/pages-service/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pages-service/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageTimelineComponent);
    return PageTimelineComponent;
    var _a;
}());

//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ni_components_ni_components_module__ = __webpack_require__("../../../../../src/app/ni-components/ni-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_squeezebox__ = __webpack_require__("../../../../squeezebox/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboards_dashboard_1_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-1/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboards_dashboard_2_dashboard_2_component__ = __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-2/dashboard-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboards_dashboard_3_dashboard_3_component__ = __webpack_require__("../../../../../src/app/pages/dashboards/dashboard-3/dashboard-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_components_button_button_component__ = __webpack_require__("../../../../../src/app/pages/material-components/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_components_card_card_component__ = __webpack_require__("../../../../../src/app/pages/material-components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_components_checkbox_checkbox_component__ = __webpack_require__("../../../../../src/app/pages/material-components/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_components_chips_chips_component__ = __webpack_require__("../../../../../src/app/pages/material-components/chips/chips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_components_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/pages/material-components/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_components_icon_icon_component__ = __webpack_require__("../../../../../src/app/pages/material-components/icon/icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_components_input_input_component__ = __webpack_require__("../../../../../src/app/pages/material-components/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__material_components_list_list_component__ = __webpack_require__("../../../../../src/app/pages/material-components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__material_components_menu_menu_component__ = __webpack_require__("../../../../../src/app/pages/material-components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__material_components_progress_bar_progress_bar_component__ = __webpack_require__("../../../../../src/app/pages/material-components/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__material_components_progress_spinner_progress_spinner_component__ = __webpack_require__("../../../../../src/app/pages/material-components/progress-spinner/progress-spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__material_components_radio_button_radio_button_component__ = __webpack_require__("../../../../../src/app/pages/material-components/radio-button/radio-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__material_components_select_select_component__ = __webpack_require__("../../../../../src/app/pages/material-components/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__material_components_slider_slider_component__ = __webpack_require__("../../../../../src/app/pages/material-components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__material_components_slide_toggle_slide_toggle_component__ = __webpack_require__("../../../../../src/app/pages/material-components/slide-toggle/slide-toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__material_components_snackbar_snackbar_component__ = __webpack_require__("../../../../../src/app/pages/material-components/snackbar/snackbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__material_components_tabs_tabs_component__ = __webpack_require__("../../../../../src/app/pages/material-components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__material_components_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/pages/material-components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__material_components_tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/pages/material-components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ni_components_file_file_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/file/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ni_components_card_card_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ni_components_chat_chat_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ni_components_alert_alert_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ni_components_badge_badge_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/badge/badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ni_components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ni_components_h_timeline_h_timeline_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/h-timeline/h-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__typography_typography_component__ = __webpack_require__("../../../../../src/app/pages/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_service_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/pages/pages-service/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_service_faq_faq_component__ = __webpack_require__("../../../../../src/app/pages/pages-service/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_service_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/pages/pages-service/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_service_invoice_invoice_component__ = __webpack_require__("../../../../../src/app/pages/pages-service/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__charts_ng2_charts_ng2_charts_component__ = __webpack_require__("../../../../../src/app/pages/charts/ng2-charts/ng2-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__charts_ngx_charts_ngx_charts_component__ = __webpack_require__("../../../../../src/app/pages/charts/ngx-charts/ngx-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__charts_amcharts_amcharts_component__ = __webpack_require__("../../../../../src/app/pages/charts/amcharts/amcharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/pages/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__tables_simple_table_simple_table_component__ = __webpack_require__("../../../../../src/app/pages/tables/simple-table/simple-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__tables_bootstrap_tables_bootstrap_tables_component__ = __webpack_require__("../../../../../src/app/pages/tables/bootstrap-tables/bootstrap-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__tables_editing_table_editing_table_component__ = __webpack_require__("../../../../../src/app/pages/tables/editing-table/editing-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__tables_filtering_table_filtering_table_component__ = __webpack_require__("../../../../../src/app/pages/tables/filtering-table/filtering-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__tables_pagination_table_pagination_table_component__ = __webpack_require__("../../../../../src/app/pages/tables/pagination-table/pagination-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__forms_form_elements_form_elements_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-elements/form-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__forms_form_layout_form_layout_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-layout/form-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__forms_form_validation_form_validation_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-validation/form-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__maps_google_map_google_map_component__ = __webpack_require__("../../../../../src/app/pages/maps/google-map/google-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__maps_leaflet_map_leaflet_map_component__ = __webpack_require__("../../../../../src/app/pages/maps/leaflet-map/leaflet-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__widgets_widgets_component__ = __webpack_require__("../../../../../src/app/pages/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__layouts_layouts_component__ = __webpack_require__("../../../../../src/app/pages/layouts/layouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__extra_pages_sign_in_1_sign_in_1_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/sign-in-1/sign-in-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__extra_pages_sign_up_1_sign_up_1_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/sign-up-1/sign-up-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__extra_pages_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__extra_pages_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__extra_pages_page_404_page_404_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/page-404/page-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__extra_pages_page_500_page_500_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/page-500/page-500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ni_components_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ni-components/buttons/buttons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































































var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__ni_components_ni_components_module__["a" /* NiComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_translate__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdCoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MdExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MdGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MdPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MdProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MdRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MdSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MdSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MdSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["H" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MdTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk__["l" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
                }),
                __WEBPACK_IMPORTED_MODULE_11_squeezebox__["a" /* SqueezeBoxModule */],
                __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__dashboards_dashboard_1_dashboard_component__["a" /* PageDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dashboards_dashboard_2_dashboard_2_component__["a" /* PageDashboard2Component */],
                __WEBPACK_IMPORTED_MODULE_16__dashboards_dashboard_3_dashboard_3_component__["a" /* PageDashboard3Component */],
                __WEBPACK_IMPORTED_MODULE_17__material_components_button_button_component__["a" /* PageButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_18__material_components_card_card_component__["a" /* PageCardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__material_components_checkbox_checkbox_component__["a" /* PageCheckboxComponent */],
                __WEBPACK_IMPORTED_MODULE_20__material_components_chips_chips_component__["a" /* PageChipsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__material_components_dialog_dialog_component__["a" /* PageDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_66__extra_pages_sign_up_1_sign_up_1_component__["a" /* DialogResultComponent */],
                __WEBPACK_IMPORTED_MODULE_22__material_components_icon_icon_component__["a" /* PageIconComponent */],
                __WEBPACK_IMPORTED_MODULE_23__material_components_input_input_component__["a" /* PageInputComponent */],
                __WEBPACK_IMPORTED_MODULE_24__material_components_list_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_25__material_components_menu_menu_component__["a" /* PageMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__material_components_progress_bar_progress_bar_component__["a" /* PageProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_27__material_components_progress_spinner_progress_spinner_component__["a" /* PageProgressSpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__material_components_radio_button_radio_button_component__["a" /* PageRadioButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_29__material_components_select_select_component__["a" /* PageSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_30__material_components_slider_slider_component__["a" /* PageSliderComponent */],
                __WEBPACK_IMPORTED_MODULE_31__material_components_slide_toggle_slide_toggle_component__["a" /* PageSlideToggleComponent */],
                __WEBPACK_IMPORTED_MODULE_32__material_components_snackbar_snackbar_component__["a" /* PageSnackbarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__material_components_tabs_tabs_component__["a" /* PageTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__material_components_toolbar_toolbar_component__["a" /* PageToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_35__material_components_tooltip_tooltip_component__["a" /* PageTooltipComponent */],
                __WEBPACK_IMPORTED_MODULE_36__ni_components_file_file_component__["a" /* PageNiFilesComponent */],
                __WEBPACK_IMPORTED_MODULE_37__ni_components_card_card_component__["a" /* PageNiCardsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__ni_components_chat_chat_component__["a" /* PageNiChatComponent */],
                __WEBPACK_IMPORTED_MODULE_39__ni_components_alert_alert_component__["a" /* PageNiAlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__ni_components_badge_badge_component__["a" /* PageNiBadgesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__ni_components_breadcrumb_breadcrumb_component__["a" /* PageNiBreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_42__ni_components_h_timeline_h_timeline_component__["a" /* PageNiHTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_43__typography_typography_component__["a" /* PageTypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_44__not_found_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_65__extra_pages_sign_in_1_sign_in_1_component__["a" /* PageSignIn1Component */],
                __WEBPACK_IMPORTED_MODULE_66__extra_pages_sign_up_1_sign_up_1_component__["b" /* PageSignUp1Component */],
                __WEBPACK_IMPORTED_MODULE_67__extra_pages_forgot_forgot_component__["a" /* PageForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_68__extra_pages_confirm_confirm_component__["a" /* PageConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_69__extra_pages_page_404_page_404_component__["a" /* Page404Component */],
                __WEBPACK_IMPORTED_MODULE_70__extra_pages_page_500_page_500_component__["a" /* Page500Component */],
                __WEBPACK_IMPORTED_MODULE_45__pages_service_about_us_about_us_component__["a" /* PageAboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_service_faq_faq_component__["a" /* PageFaqComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pages_service_timeline_timeline_component__["a" /* PageTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_service_invoice_invoice_component__["a" /* PageInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_52__calendar_calendar_component__["b" /* PageCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_52__calendar_calendar_component__["a" /* CalendarDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_53__tables_simple_table_simple_table_component__["a" /* PageSimpleTableComponent */],
                __WEBPACK_IMPORTED_MODULE_54__tables_bootstrap_tables_bootstrap_tables_component__["a" /* PageBootstrapTablesComponent */],
                __WEBPACK_IMPORTED_MODULE_55__tables_editing_table_editing_table_component__["a" /* PageEditingTableComponent */],
                __WEBPACK_IMPORTED_MODULE_56__tables_filtering_table_filtering_table_component__["a" /* PageFilteringTableComponent */],
                __WEBPACK_IMPORTED_MODULE_57__tables_pagination_table_pagination_table_component__["a" /* PagePaginationTableComponent */],
                __WEBPACK_IMPORTED_MODULE_58__forms_form_elements_form_elements_component__["a" /* PageFormElementsComponent */],
                __WEBPACK_IMPORTED_MODULE_59__forms_form_layout_form_layout_component__["a" /* PageFormLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_60__forms_form_validation_form_validation_component__["a" /* PageFormValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_61__maps_google_map_google_map_component__["a" /* PageGoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_62__maps_leaflet_map_leaflet_map_component__["a" /* PageLeafletMapComponent */],
                __WEBPACK_IMPORTED_MODULE_63__widgets_widgets_component__["a" /* PageWidgetsComponent */],
                __WEBPACK_IMPORTED_MODULE_64__layouts_layouts_component__["a" /* PageLayoutsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__charts_ng2_charts_ng2_charts_component__["a" /* PageNg2ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_50__charts_ngx_charts_ngx_charts_component__["a" /* PageNgxChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_51__charts_amcharts_amcharts_component__["a" /* PageAmchartsComponent */],
                __WEBPACK_IMPORTED_MODULE_71__ni_components_buttons_buttons_component__["a" /* PageNiButtonsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_14__dashboards_dashboard_1_dashboard_component__["a" /* PageDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dashboards_dashboard_2_dashboard_2_component__["a" /* PageDashboard2Component */],
                __WEBPACK_IMPORTED_MODULE_16__dashboards_dashboard_3_dashboard_3_component__["a" /* PageDashboard3Component */],
                __WEBPACK_IMPORTED_MODULE_17__material_components_button_button_component__["a" /* PageButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_18__material_components_card_card_component__["a" /* PageCardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__material_components_checkbox_checkbox_component__["a" /* PageCheckboxComponent */],
                __WEBPACK_IMPORTED_MODULE_20__material_components_chips_chips_component__["a" /* PageChipsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__material_components_dialog_dialog_component__["a" /* PageDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_66__extra_pages_sign_up_1_sign_up_1_component__["a" /* DialogResultComponent */],
                __WEBPACK_IMPORTED_MODULE_22__material_components_icon_icon_component__["a" /* PageIconComponent */],
                __WEBPACK_IMPORTED_MODULE_23__material_components_input_input_component__["a" /* PageInputComponent */],
                __WEBPACK_IMPORTED_MODULE_24__material_components_list_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_25__material_components_menu_menu_component__["a" /* PageMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__material_components_progress_bar_progress_bar_component__["a" /* PageProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_27__material_components_progress_spinner_progress_spinner_component__["a" /* PageProgressSpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__material_components_radio_button_radio_button_component__["a" /* PageRadioButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_29__material_components_select_select_component__["a" /* PageSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_30__material_components_slider_slider_component__["a" /* PageSliderComponent */],
                __WEBPACK_IMPORTED_MODULE_31__material_components_slide_toggle_slide_toggle_component__["a" /* PageSlideToggleComponent */],
                __WEBPACK_IMPORTED_MODULE_32__material_components_snackbar_snackbar_component__["a" /* PageSnackbarComponent */],
                __WEBPACK_IMPORTED_MODULE_33__material_components_tabs_tabs_component__["a" /* PageTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__material_components_toolbar_toolbar_component__["a" /* PageToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_35__material_components_tooltip_tooltip_component__["a" /* PageTooltipComponent */],
                __WEBPACK_IMPORTED_MODULE_36__ni_components_file_file_component__["a" /* PageNiFilesComponent */],
                __WEBPACK_IMPORTED_MODULE_37__ni_components_card_card_component__["a" /* PageNiCardsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__ni_components_chat_chat_component__["a" /* PageNiChatComponent */],
                __WEBPACK_IMPORTED_MODULE_39__ni_components_alert_alert_component__["a" /* PageNiAlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__ni_components_badge_badge_component__["a" /* PageNiBadgesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__ni_components_breadcrumb_breadcrumb_component__["a" /* PageNiBreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_42__ni_components_h_timeline_h_timeline_component__["a" /* PageNiHTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_43__typography_typography_component__["a" /* PageTypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_44__not_found_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_65__extra_pages_sign_in_1_sign_in_1_component__["a" /* PageSignIn1Component */],
                __WEBPACK_IMPORTED_MODULE_66__extra_pages_sign_up_1_sign_up_1_component__["b" /* PageSignUp1Component */],
                __WEBPACK_IMPORTED_MODULE_67__extra_pages_forgot_forgot_component__["a" /* PageForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_68__extra_pages_confirm_confirm_component__["a" /* PageConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_69__extra_pages_page_404_page_404_component__["a" /* Page404Component */],
                __WEBPACK_IMPORTED_MODULE_70__extra_pages_page_500_page_500_component__["a" /* Page500Component */],
                __WEBPACK_IMPORTED_MODULE_45__pages_service_about_us_about_us_component__["a" /* PageAboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_service_faq_faq_component__["a" /* PageFaqComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pages_service_timeline_timeline_component__["a" /* PageTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_service_invoice_invoice_component__["a" /* PageInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_52__calendar_calendar_component__["b" /* PageCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_52__calendar_calendar_component__["a" /* CalendarDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_53__tables_simple_table_simple_table_component__["a" /* PageSimpleTableComponent */],
                __WEBPACK_IMPORTED_MODULE_54__tables_bootstrap_tables_bootstrap_tables_component__["a" /* PageBootstrapTablesComponent */],
                __WEBPACK_IMPORTED_MODULE_55__tables_editing_table_editing_table_component__["a" /* PageEditingTableComponent */],
                __WEBPACK_IMPORTED_MODULE_56__tables_filtering_table_filtering_table_component__["a" /* PageFilteringTableComponent */],
                __WEBPACK_IMPORTED_MODULE_57__tables_pagination_table_pagination_table_component__["a" /* PagePaginationTableComponent */],
                __WEBPACK_IMPORTED_MODULE_58__forms_form_elements_form_elements_component__["a" /* PageFormElementsComponent */],
                __WEBPACK_IMPORTED_MODULE_59__forms_form_layout_form_layout_component__["a" /* PageFormLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_60__forms_form_validation_form_validation_component__["a" /* PageFormValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_61__maps_google_map_google_map_component__["a" /* PageGoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_62__maps_leaflet_map_leaflet_map_component__["a" /* PageLeafletMapComponent */],
                __WEBPACK_IMPORTED_MODULE_63__widgets_widgets_component__["a" /* PageWidgetsComponent */],
                __WEBPACK_IMPORTED_MODULE_64__layouts_layouts_component__["a" /* PageLayoutsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__charts_ng2_charts_ng2_charts_component__["a" /* PageNg2ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_50__charts_ngx_charts_ngx_charts_component__["a" /* PageNgxChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_51__charts_amcharts_amcharts_component__["a" /* PageAmchartsComponent */],
                __WEBPACK_IMPORTED_MODULE_71__ni_components_buttons_buttons_component__["a" /* PageNiButtonsComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_66__extra_pages_sign_up_1_sign_up_1_component__["a" /* DialogResultComponent */],
                __WEBPACK_IMPORTED_MODULE_52__calendar_calendar_component__["a" /* CalendarDialogComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tables/bootstrap-tables/bootstrap-tables.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Basic table\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Inverse table\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-inverse\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Background table head\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-default\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Inverse background table head\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-inverse\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Striped rows\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Bordered table\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Hoverable rows\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Small table\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-sm\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Contextual classes\" class=\"mb-lg-0\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Column heading</th>\r\n            <th>Column heading</th>\r\n            <th>Column heading</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr class=\"table-active\">\r\n            <th scope=\"row\">1</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          <tr class=\"table-success\">\r\n            <th scope=\"row\">3</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">4</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          <tr class=\"table-info\">\r\n            <th scope=\"row\">5</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">6</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          <tr class=\"table-warning\">\r\n            <th scope=\"row\">7</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">8</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          <tr class=\"table-danger\">\r\n            <th scope=\"row\">9</th>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n            <td>Column content</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card title=\"Responsive tables\" class=\"mb-0\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered mb-0\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Table heading</th>\r\n            <th>Table heading</th>\r\n            <th>Table heading</th>\r\n            <th>Table heading</th>\r\n            <th>Table heading</th>\r\n            <th>Table heading</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n            <td>Table cell</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/tables/bootstrap-tables/bootstrap-tables.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tables/bootstrap-tables/bootstrap-tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageBootstrapTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Tables',
        link: '#'
    },
    {
        title: 'Bootstrap table',
        link: ''
    }
];
var PageBootstrapTablesComponent = (function () {
    function PageBootstrapTablesComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Bootstrap table';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageBootstrapTablesComponent.prototype.ngOnInit = function () { };
    PageBootstrapTablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bootstrap-tables',
            template: __webpack_require__("../../../../../src/app/pages/tables/bootstrap-tables/bootstrap-tables.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tables/bootstrap-tables/bootstrap-tables.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageBootstrapTablesComponent);
    return PageBootstrapTablesComponent;
    var _a;
}());

//# sourceMappingURL=bootstrap-tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tables/editing-table/editing-table.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/tables/editing-table/editing-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tables/editing-table/editing-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditingTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Tables',
        link: '#'
    },
    {
        title: 'Editing table',
        link: ''
    }
];
var PageEditingTableComponent = (function () {
    function PageEditingTableComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.pageTitle = 'Editing table';
        this.breadcrumb = BREADCRUMBS;
        this.editing = {};
        this.rows = [];
        this.loadingIndicator = true;
        this.fetch(function (data) {
            _this.rows = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        this._sharedService.emitChange(this.pageTitle);
    }
    PageEditingTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/table-data.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    PageEditingTableComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
    };
    PageEditingTableComponent.prototype.ngOnInit = function () { };
    PageEditingTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editing-table',
            template: __webpack_require__("../../../../../src/app/pages/tables/editing-table/editing-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tables/editing-table/editing-table.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageEditingTableComponent);
    return PageEditingTableComponent;
    var _a;
}());

//# sourceMappingURL=editing-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tables/filtering-table/filtering-table.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-header\">\r\n    <md-input-container floatPlaceholder=\"never\">\r\n      <input mdInput #filter placeholder=\"Filter users\">\r\n    </md-input-container>\r\n  </div>\r\n\r\n  <md-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- ID Column -->\r\n    <ng-container cdkColumnDef=\"userId\">\r\n      <md-header-cell *cdkHeaderCellDef> ID </md-header-cell>\r\n      <md-cell *cdkCellDef=\"let row\"> {{row.id}} </md-cell>\r\n    </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container cdkColumnDef=\"progress\">\r\n      <md-header-cell *cdkHeaderCellDef> Progress </md-header-cell>\r\n      <md-cell *cdkCellDef=\"let row\"> {{row.progress}}% </md-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container cdkColumnDef=\"userName\">\r\n      <md-header-cell *cdkHeaderCellDef> Name </md-header-cell>\r\n      <md-cell *cdkCellDef=\"let row\"> {{row.name}} </md-cell>\r\n    </ng-container>\r\n\r\n    <!-- Color Column -->\r\n    <ng-container cdkColumnDef=\"color\">\r\n      <md-header-cell *cdkHeaderCellDef> Color </md-header-cell>\r\n      <md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </md-cell>\r\n    </ng-container>\r\n\r\n    <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\r\n    <md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row>\r\n  </md-table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/tables/filtering-table/filtering-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tables/filtering-table/filtering-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFilteringTableComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Tables',
        link: '#'
    },
    {
        title: 'Filtering table',
        link: ''
    }
];
var COLORS = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
];
var NAMES = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth'
];
var PageFilteringTableComponent = (function () {
    function PageFilteringTableComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Filtering table';
        this.breadcrumb = BREADCRUMBS;
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
        this._sharedService.emitChange(this.pageTitle);
    }
    PageFilteringTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], PageFilteringTableComponent.prototype, "filter", void 0);
    PageFilteringTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filtering-table',
            template: __webpack_require__("../../../../../src/app/pages/tables/filtering-table/filtering-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tables/filtering-table/filtering-table.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageFilteringTableComponent);
    return PageFilteringTableComponent;
    var _a, _b;
}());

var ExampleDatabase = (function () {
    function ExampleDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk__["o" /* DataSource */]));

//# sourceMappingURL=filtering-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tables/pagination-table/pagination-table.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/tables/pagination-table/pagination-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tables/pagination-table/pagination-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagePaginationTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Tables',
        link: '#'
    },
    {
        title: 'Pagination table',
        link: ''
    }
];
var PagePaginationTableComponent = (function () {
    function PagePaginationTableComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.pageTitle = 'Pagination table';
        this.breadcrumb = BREADCRUMBS;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.loadingIndicator = true;
        this.fetch(function (data) {
            _this.rows = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        this._sharedService.emitChange(this.pageTitle);
    }
    PagePaginationTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/table-data.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    PagePaginationTableComponent.prototype.ngOnInit = function () { };
    PagePaginationTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pagination-table',
            template: __webpack_require__("../../../../../src/app/pages/tables/pagination-table/pagination-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tables/pagination-table/pagination-table.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PagePaginationTableComponent);
    return PagePaginationTableComponent;
    var _a;
}());

//# sourceMappingURL=pagination-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/tables/simple-table/simple-table.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/tables/simple-table/simple-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tables/simple-table/simple-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSimpleTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Tables',
        link: '#'
    },
    {
        title: 'Simple table',
        link: ''
    }
];
var PageSimpleTableComponent = (function () {
    function PageSimpleTableComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.pageTitle = 'Simple table';
        this.breadcrumb = BREADCRUMBS;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.loadingIndicator = true;
        this.fetch(function (data) {
            _this.rows = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        this._sharedService.emitChange(this.pageTitle);
    }
    PageSimpleTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/table-data.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    PageSimpleTableComponent.prototype.ngOnInit = function () { };
    PageSimpleTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-simple-table',
            template: __webpack_require__("../../../../../src/app/pages/tables/simple-table/simple-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tables/simple-table/simple-table.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageSimpleTableComponent);
    return PageSimpleTableComponent;
    var _a;
}());

//# sourceMappingURL=simple-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<ni-card [title]=\"'Headers'\">\r\n  <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h1>Heading 1</h1>\r\n      <h2>Heading 2</h2>\r\n      <h3>Heading 3</h3>\r\n      <h4>Heading 4</h4>\r\n      <h5>Heading 5</h5>\r\n      <h6>Heading 6</h6>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <h1 class=\"text-uppercase\">Heading 1</h1>\r\n      <h2 class=\"text-uppercase\">Heading 2</h2>\r\n      <h3 class=\"text-uppercase\">Heading 3</h3>\r\n      <h4 class=\"text-uppercase\">Heading 4</h4>\r\n      <h5 class=\"text-uppercase\">Heading 5</h5>\r\n      <h6 class=\"text-uppercase\">Heading 6</h6>\r\n    </div>\r\n  </div>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Text style'\">\r\n  <p><code>.mark</code> and <code>.small</code> classes are also available to apply the same styles as <code>&lt;mark&gt;</code> and <code>&lt;small&gt;</code> while avoiding any unwanted semantic implications that the tags would bring.</p>\r\n  <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n  <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n  <p><u>This line of text will render as underlined</u></p>\r\n  <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n  <p><strong>This line rendered as bold text.</strong></p>\r\n  <p><em>This line rendered as italicized text.</em></p>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Blockquotes'\">\r\n  <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class=\"blockquote\"&gt;</code> around any <abbr title=\"HyperText Markup Language\">HTML</abbr> as the quote.</p>\r\n  <blockquote class=\"blockquote\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n    <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\r\n  </blockquote>\r\n\r\n  <blockquote class=\"blockquote blockquote-reverse\">\r\n    <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n    <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\r\n  </blockquote>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Lists'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <ul>\r\n        <li>Lorem ipsum dolor sit amet</li>\r\n        <li>Consectetur adipiscing elit</li>\r\n        <li>Integer molestie lorem at massa</li>\r\n        <li>Facilisis in pretium nisl aliquet</li>\r\n        <li>Nulla volutpat aliquam velit\r\n          <ul>\r\n            <li>Phasellus iaculis neque</li>\r\n            <li>Purus sodales ultricies</li>\r\n            <li>Vestibulum laoreet porttitor sem</li>\r\n            <li>Ac tristique libero volutpat at</li>\r\n          </ul>\r\n        </li>\r\n        <li>Faucibus porta lacus fringilla vel</li>\r\n        <li>Aenean sit amet erat nunc</li>\r\n        <li>Eget porttitor lorem</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <ol>\r\n        <li>Lorem ipsum dolor sit amet</li>\r\n        <li>Consectetur adipiscing elit</li>\r\n        <li>Integer molestie lorem at massa</li>\r\n        <li>Facilisis in pretium nisl aliquet</li>\r\n        <li>Nulla volutpat aliquam velit\r\n          <ol>\r\n            <li>Phasellus iaculis neque</li>\r\n            <li>Purus sodales ultricies</li>\r\n            <li>Vestibulum laoreet porttitor sem</li>\r\n            <li>Ac tristique libero volutpat at</li>\r\n          </ol>\r\n        </li>\r\n        <li>Faucibus porta lacus fringilla vel</li>\r\n        <li>Aenean sit amet erat nunc</li>\r\n        <li>Eget porttitor lorem</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Text alignment'\">\r\n  <p>Easily realign text to components with text alignment classes.</p>\r\n  <p class=\"text-left\">Left aligned text on all viewport sizes.</p>\r\n  <p class=\"text-center\">Center aligned text on all viewport sizes.</p>\r\n  <p class=\"text-right\">Right aligned text on all viewport sizes.</p>\r\n</ni-card>\r\n\r\n<ni-card [title]=\"'Text transform'\" class=\"mb-0\">\r\n  <p>Transform text in components with text capitalization classes.</p>\r\n  <p class=\"text-lowercase\">Lowercased text.</p>\r\n  <p class=\"text-uppercase\">Uppercased text.</p>\r\n  <p class=\"text-capitalize\">CapiTaliZed text.</p>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'UI Elements',
        link: '#'
    },
    {
        title: 'Typography',
        link: ''
    }
];
var PageTypographyComponent = (function () {
    function PageTypographyComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Typography';
        this.breadcrumb = BREADCRUMBS;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageTypographyComponent.prototype.ngOnInit = function () { };
    PageTypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-typography',
            template: __webpack_require__("../../../../../src/app/pages/typography/typography.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageTypographyComponent);
    return PageTypographyComponent;
    var _a;
}());

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/widgets/widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-breadcrumb [menu]=\"breadcrumb\" [style]=\"'custom1'\" class=\"mb-4\"></ni-breadcrumb>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'danger'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n      <md-icon>shopping_basket</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'warning'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n      <md-icon>equalizer</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+210</ni-badge>\r\n      <md-icon>monetization_on</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'success'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n      <md-icon>donut_large</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [customBgColor]=\"'rgba(226,77,77,0.6)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-4.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [customBgColor]=\"'rgba(255,183,77,0.9)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-5.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [customBgColor]=\"'rgba(100,181,246,0.9)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-6.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+210</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [customBgColor]=\"'rgba(129,199,132,0.8)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-7.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [outline]=\"true\" [bgColor]=\"'danger'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [color]=\"'danger'\">+17%</ni-badge> <small>from previous period</small>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [outline]=\"true\" [bgColor]=\"'warning'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [outline]=\"true\" [bgColor]=\"'info'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [color]=\"'info'\">+210</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [outline]=\"true\" [bgColor]=\"'success'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [color]=\"'success'\">+24%</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <div class=\"col-xl-4\">\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"pieChartData\"\r\n          [colors]=\"pieChartColors\"\r\n          [labels]=\"pieChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"pieChartOptions\"\r\n          [chartType]=\"pieChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>930</strong> <small>Resolved</small></div>\r\n        <div class=\"small\">More than 70% resolved issues</div>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-xl-4\">\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"doughnutChartData\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"doughnutChartOptions\"\r\n          [chartType]=\"doughnutChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>466</strong> <small>Unresolved</small></div>\r\n        <div class=\"small\">Less than 30% unresolved issues</div>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-xl-4\">\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"polarAreaChartData\"\r\n          [colors]=\"polarAreaChartColors\"\r\n          [labels]=\"polarAreaChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"polarAreaChartOptions\"\r\n          [chartType]=\"polarAreaChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>1,547</strong> <small>Issues</small></div>\r\n        <div class=\"small\">8 issues are unassigned</div>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mb-lg-4\">\r\n  <div class=\"col-lg-6 map-col mb-4 mb-lg-0\">\r\n    <ni-card [indents]=\"0\" class=\"mb-0\">\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n      </agm-map>\r\n    </ni-card>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card class=\"mb-lg-0\">\r\n      <canvas\r\n        baseChart\r\n        [datasets]=\"barChartData\"\r\n        [labels]=\"barChartLabels\"\r\n        [options]=\"barChartOptions\"\r\n        [legend]=\"barChartLegend\"\r\n        [chartType]=\"barChartType\"></canvas>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'Users'\" class=\"mb-lg-0\">\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let message of messages\">\r\n          <img md-list-avatar src=\"{{ message.avatar }}\" width=\"40\" height=\"40\" alt=\"\">\r\n          <h3 md-line class=\"h3\">{{ message.from }}</h3>\r\n          <p md-line><i>\r\n            <span>{{message.subject}}</span>\r\n            <span> -- {{ message.content }}</span>\r\n          </i></p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'To do list'\" class=\"mb-0\">\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let folder of folders\">\r\n          <md-icon md-list-avatar>{{folder.icon}}<ni-badge *ngIf=\"folder.badge\" [color]=\"'danger'\" [position]=\"'top-right'\">{{folder.badge}}</ni-badge></md-icon>\r\n          <h4 md-line>{{folder.name}}</h4>\r\n          <p md-line><i>{{folder.updated}}</i></p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/widgets/widgets.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-col .ni-card {\n  height: 100%; }\n  .map-col .ni-card /deep/.card-wrap {\n    height: 100%; }\n    .map-col .ni-card /deep/.card-wrap .card-content {\n      height: 100%; }\n\n.sebm-google-map-container {\n  height: 100%;\n  min-height: 200px; }\n  .sebm-google-map-container /deep/.sebm-google-map-container-inner {\n    min-height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/widgets/widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageWidgetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BREADCRUMBS = [
    {
        title: 'Main',
        link: '#'
    },
    {
        title: 'Widgets',
        link: ''
    }
];
var messages = [
    {
        from: 'Nancy',
        subject: 'HTML',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        avatar: 'assets/content/avatar-4.jpg'
    },
    {
        from: 'Mary',
        subject: 'Css',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: 'assets/content/avatar-3.jpg'
    },
    {
        from: 'Bobby',
        subject: 'Angular 2',
        content: 'It is a long established fact that a reader will be distracted by the readable content',
        avatar: 'assets/content/avatar-2.jpg'
    },
    {
        from: 'Roma',
        subject: 'Type Script',
        content: 'There are many variations of passages of',
        avatar: 'assets/content/avatar-1.jpg'
    },
    {
        from: 'Amanda',
        subject: 'PHP',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: 'assets/content/avatar-5.jpg'
    },
    {
        from: 'Tom',
        subject: 'Sql',
        content: 'There are many variations of passages of',
        avatar: 'assets/content/avatar-6.jpg'
    }
];
var folders = [
    {
        icon: 'android',
        badge: false,
        name: 'Android app',
        updated: 'March 21, 2017'
    },
    {
        icon: 'update',
        badge: false,
        name: 'Update plugins',
        updated: 'March 19, 2017'
    },
    {
        icon: 'bug_report',
        badge: false,
        name: 'Fix bugs',
        updated: 'March 22, 2017'
    },
    {
        icon: 'unarchive',
        badge: false,
        name: 'Create app design',
        updated: 'March 25, 2017'
    },
    {
        icon: 'content_copy',
        badge: 8,
        name: 'Create widgets',
        updated: 'March 16, 2017'
    },
    {
        icon: 'folder_open',
        badge: false,
        name: 'Documentation',
        updated: 'March 28, 2017'
    }
];
var PageWidgetsComponent = (function () {
    function PageWidgetsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Widgets';
        this.breadcrumb = BREADCRUMBS;
        this.lat = 50.4664212;
        this.lng = 30.6;
        this.messages = messages;
        this.folders = folders;
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            responsiveAnimationDuration: 500
        };
        this.barChartLabels = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            {
                data: [59, 80, 81, 56, 55, 40],
                label: 'Angular JS',
                borderWidth: 1,
                pointRadius: 1
            },
            {
                data: [48, 40, 19, 86, 27, 90],
                label: 'React JS',
                borderWidth: 1,
                pointRadius: 1
            }
        ];
        // Pie
        this.pieChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.pieChartData = [
            300,
            500,
            100
        ];
        this.pieChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#5dade0",
                    "#3c4e62"
                ],
            }
        ];
        this.pieChartType = 'pie';
        this.pieChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        //Doughnut
        this.doughnutChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.doughnutChartData = [
            350,
            450,
            100
        ];
        this.doughnutChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#ff8c00",
                    "#3c4e62"
                ],
            }
        ];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        // PolarArea
        this.polarAreaChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.polarAreaChartData = [
            300,
            400,
            500
        ];
        this.polarAreaChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#dc143c",
                    "#3c4e62"
                ],
            }
        ];
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        this._sharedService.emitChange(this.pageTitle);
    }
    PageWidgetsComponent.prototype.ngOnInit = function () { };
    PageWidgetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-widgets',
            template: __webpack_require__("../../../../../src/app/pages/widgets/widgets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/widgets/widgets.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageWidgetsComponent);
    return PageWidgetsComponent;
    var _a;
}());

//# sourceMappingURL=widgets.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLogged = false;
        this.isConfirm = false;
        this.confirmCode = '';
        this.confirmEmail = '';
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.isLogged;
    };
    AuthService.prototype.isConfirmRequired = function () {
        return this.isConfirm;
    };
    AuthService.prototype.signup = function (data) {
        var _this = this;
        var url = 'http://54.76.14.28:8888/create_account';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('email', data.email);
        params.set('first_name', data.fname);
        params.set('password', data.password);
        params.set('gender', data.gender);
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { search: params }).subscribe(function (res) {
                _this.isConfirm = true;
                resolve(res.json());
            });
        });
    };
    AuthService.prototype.login = function (data) {
        var _this = this;
        var url = 'http://54.76.14.28:8888/login';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('email', data.email);
        params.set('password', data.password);
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { search: params }).subscribe(function (res) {
                _this.isLogged = true;
                _this.isConfirm = false;
                resolve(res.json().login_exist);
            });
        });
    };
    AuthService.prototype.getConfirmParams = function (url) {
        var searchUrl = new URL(url);
        this.confirmCode = searchUrl.searchParams.get('validation_code');
        this.confirmEmail = searchUrl.searchParams.get('email');
        if (this.confirmCode && this.confirmEmail) {
            this.isConfirm = true;
        }
    };
    AuthService.prototype.validateEmail = function () {
        var _this = this;
        var url = 'http://54.76.14.28:8888/validate_user_email';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('email', this.confirmEmail);
        params.set('validation_code', this.confirmCode);
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { search: params }).subscribe(function (res) {
                _this.isConfirm = false;
                _this.isLogged = true;
                resolve(res.json().email_validated);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-access-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccessGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAccessGuardService = (function () {
    function UserAccessGuardService(authService) {
        this.authService = authService;
    }
    UserAccessGuardService.prototype.canActivate = function () {
        return this.authService.isLoggedIn();
    };
    UserAccessGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], UserAccessGuardService);
    return UserAccessGuardService;
    var _a;
}());

//# sourceMappingURL=user-access-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-confirm-email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConfirmEmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserConfirmEmailService = (function () {
    function UserConfirmEmailService(authService) {
        this.authService = authService;
    }
    UserConfirmEmailService.prototype.canActivate = function () {
        return this.authService.isConfirmRequired();
    };
    UserConfirmEmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], UserConfirmEmailService);
    return UserConfirmEmailService;
    var _a;
}());

//# sourceMappingURL=user-confirm-email.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"open-navbar\"  (click)=\"openNavbar($event)\">\n  <i class=\"icon fa fa-object-ungroup\"></i>\n</a>\n\n<div class=\"navbar-wrap\">\n  <div class=\"navbar-header\">\n    {{ title }}\n  </div>\n\n  <div class=\"navbar-content\">\n    <div>\n      <h5 class=\"mt-0\">Frameworks</h5>\n      <p class=\"mb-1\"><strong>Angular</strong></p>\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\n\n      <p class=\"mb-1\"><strong>React</strong></p>\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"85\"></md-progress-bar>\n\n      <p class=\"mb-1\"><strong>Vue.js</strong></p>\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"40\"></md-progress-bar>\n\n      <p class=\"mb-1\"><strong>Backbone.js</strong></p>\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"38\"></md-progress-bar>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #e5e6e9;\n  bottom: 0;\n  box-shadow: -5px 0 5px -4px rgba(0, 0, 0, 0.25);\n  color: #000000;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-transform: translate(300px, 0);\n          transform: translate(300px, 0);\n  transition: 0s z-index 0.2s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n  transition: 0.2s transform 0s ease-in-out, 0s z-index 0.2s ease-in-out;\n  transition: 0.2s transform 0s ease-in-out, 0s z-index 0.2s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n  width: 300px;\n  z-index: 9997; }\n  @media (max-width: 543px) {\n    :host {\n      -webkit-transform: translate(270px, 0);\n              transform: translate(270px, 0);\n      width: 270px; } }\n  .rtl :host {\n    left: 0;\n    right: auto;\n    -webkit-transform: translate(-300px, 0);\n            transform: translate(-300px, 0); }\n    @media (max-width: 543px) {\n      .rtl :host {\n        -webkit-transform: translate(-270px, 0);\n                transform: translate(-270px, 0); } }\n  :host.open {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    transition: 0.2s z-index 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n    transition: 0.2s transform 0s ease-in-out, 0.2s z-index 0s ease-in-out;\n    transition: 0.2s transform 0s ease-in-out, 0.2s z-index 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n    z-index: 9999; }\n  :host .open-navbar {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #e5e6e9;\n    border: 1px solid #e5e6e9;\n    border-right: 0;\n    border-radius: 3px 0 0 3px;\n    color: #000000;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 20px;\n    height: 50px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-right: -1px;\n    position: absolute;\n    right: 100%;\n    top: 92px;\n    transition: color 0.2s ease-in-out;\n    width: 50px; }\n    .rtl :host .open-navbar {\n      border-radius: 0 3px 3px 0;\n      left: 100%;\n      right: auto; }\n    :host .open-navbar:hover {\n      color: #2196f3; }\n  :host .navbar-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n    width: 100%; }\n    :host .navbar-wrap .navbar-header {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #1b2237;\n      color: #ffffff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 3.4375rem;\n      padding: 0.6875rem 1.375rem; }\n    :host .navbar-wrap .navbar-content {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      overflow: auto;\n      padding: 1.375rem;\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdditionNavbarComponent = (function () {
    function AdditionNavbarComponent() {
        this.title = 'Addition navbar';
        this.open = false;
    }
    AdditionNavbarComponent.prototype.openNavbar = function (event) {
        event.preventDefault();
        this.open = !this.open;
    };
    AdditionNavbarComponent.prototype.ngOnInit = function () { };
    AdditionNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addition-navbar',
            template: __webpack_require__("../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.scss")],
            host: {
                '[class.addition-navbar]': 'true',
                '[class.open]': 'open'
            }
        }),
        __metadata("design:paramtypes", [])
    ], AdditionNavbarComponent);
    return AdditionNavbarComponent;
}());

//# sourceMappingURL=addition-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"copyright\">© Copyright 2017. All Rights Reserved.</div>\r\n<div class=\"version\">Version 1.2.0</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #252d47;\n  color: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: .8rem;\n  height: 2.75rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  @media (max-width: 543px) {\n    :host {\n      font-size: .7rem; } }\n  :host .copyright,\n  :host .version {\n    padding: 10px 1.375rem; }\n  @media (max-width: 543px) {\n    :host .copyright {\n      padding-right: 0; }\n      .rtl :host .copyright {\n        padding-left: 0;\n        padding-right: 1.375rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/ui/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/footer/footer.component.scss")],
            host: { 'class': 'app-footer' }
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrap\">\r\n  <div class=\"navbar-button\" [ngClass]=\"{ 'open' : openedSidebar }\" (click)=\"openSidebar()\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n\r\n  <h1 class=\"page-title\">{{ title }}</h1>\r\n\r\n  <div class=\"nav-items\">\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <a href=\"#\" (click)=\"open($event)\" class=\"nav-link\">\r\n        <span class=\"icon sli-bell\"></span>\r\n        <span class=\"marker\"></span>\r\n      </a>\r\n\r\n      <div class=\"dropdown-menu\">\r\n        <h4 class=\"menu-title\">Notifications</h4>\r\n\r\n        <ul>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"icon sli-puzzle\"></span>\r\n              <div class=\"content\">\r\n                <span class=\"desc\">This is a new message for my dear friend <strong>Rob</strong>.</span>\r\n                <span class=\"date\">10 minutes ago</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"icon sli-playlist\"></span>\r\n              <div class=\"content\">\r\n                <span class=\"desc\">Your site visits have increased <strong>15.5%</strong> more since the last week.</span>\r\n                <span class=\"date\">23 minutes ago</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"icon sli-globe\"></span>\r\n              <div class=\"content\">\r\n                <span class=\"desc\">Server loaded by 98% please recover soon</span>\r\n                <span class=\"date\">25 minutes ago</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"icon sli-feed\"></span>\r\n              <div class=\"content\">\r\n                <span class=\"desc\">We're looking to hire two more protypers to our team.</span>\r\n                <span class=\"date\">32 minutes ago</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"icon sli-cup\"></span>\r\n              <div class=\"content\">\r\n                <span class=\"desc\">This is a new message for my dear friend <strong>Rob</strong>.</span>\r\n                <span class=\"date\">58 minutes ago</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"menu-footer\">\r\n          <a href=\"#\">View all notifications</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <a href=\"#\" (click)=\"open($event)\" class=\"nav-link\">\r\n        <span class=\"icon sli-event\"></span>\r\n      </a>\r\n\r\n      <div class=\"dropdown-menu\">\r\n        <h4 class=\"menu-title\">Events</h4>\r\n\r\n        <ul>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"icon sli-emotsmile\"></span>\r\n              <div class=\"content\">\r\n                <span class=\"desc\">This is a new message for my dear friend <strong>Rob</strong>.</span>\r\n                <span class=\"date\">2 minutes ago</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"icon sli-layers\"></span>\r\n              <div class=\"content\">\r\n                <span class=\"desc\">This is a new message for my dear friend <strong>Rob</strong>.</span>\r\n                <span class=\"date\">14 minutes ago</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <span class=\"icon sli-graduation\"></span>\r\n              <div class=\"content\">\r\n                <span class=\"desc\">This is a new message for my dear friend <strong>Rob</strong>.</span>\r\n                <span class=\"date\">15 minutes ago</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"menu-footer\">\r\n          <a href=\"#\">View all events</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <a href=\"#\" (click)=\"open($event)\" class=\"nav-link\">\r\n        <span class=\"icon sli-bubbles\"></span>\r\n      </a>\r\n\r\n      <div class=\"dropdown-menu\">\r\n        <h4 class=\"menu-title\">You have 3 new messages</h4>\r\n\r\n        <ul>\r\n          <li>\r\n            <a href=\"#\">\r\n              <img class=\"avatar\" src=\"assets/content/avatar-1.jpg\" width=\"42\" height=\"42\" alt=\"\">\r\n\r\n              <div class=\"content\">\r\n                <span class=\"meta\">\r\n                  <strong class=\"name\">Victor Jara</strong>\r\n                  <span class=\"date\">3 Apr</span>\r\n                </span>\r\n                <span class=\"desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, odio.</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <img class=\"avatar\" src=\"assets/content/avatar-4.jpg\" width=\"42\" height=\"42\" alt=\"\">\r\n              <div class=\"content\">\r\n                <span class=\"meta\">\r\n                  <strong class=\"name\">Nancy Allen</strong>\r\n                  <span class=\"date\">2 Apr</span>\r\n                </span>\r\n                <span class=\"desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">\r\n              <img class=\"avatar\" src=\"assets/content/avatar-3.jpg\" width=\"42\" height=\"42\" alt=\"\">\r\n              <div class=\"content\">\r\n                <span class=\"meta\">\r\n                  <strong class=\"name\">Emma Watson</strong>\r\n                  <span class=\"date\">1 Apr</span>\r\n                </span>\r\n                <span class=\"desc\">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <a href=\"#\" (click)=\"open($event)\" class=\"nav-link\">\r\n        <div class=\"avatar\"><img src=\"assets/content/avatar-2.jpg\" width=\"40\" height=\"40\" alt=\"\"></div>\r\n        <div class=\"name\">Justin Adams</div>\r\n      </a>\r\n\r\n      <div class=\"dropdown-menu mini-menu\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"#\"><span class=\"icon sli-home\"></span> My Account</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"><span class=\"icon sli-user\"></span> Profile</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" routerLink=\"/default-layout/calendar\"><span class=\"icon sli-calendar\"></span> Calendar</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"><span class=\"icon sli-settings\"></span> Settings</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"'/'\"><span class=\"icon sli-logout\"></span> Log Out</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"items-overlay\" (click)=\"close($event)\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #252d47;\n  box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.25);\n  color: #ffffff;\n  display: block;\n  height: 3.4375rem;\n  left: 15.125rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 9997; }\n  @media (max-width: 991px) {\n    :host {\n      left: 0; } }\n  .rtl :host {\n    left: 0;\n    right: 15.125rem; }\n    @media (max-width: 991px) {\n      .rtl :host {\n        right: 0; } }\n  :host.show-overlay {\n    z-index: 9998; }\n  :host .navbar-wrap {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    height: 100%;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 0 22px; }\n    @media (max-width: 991px) {\n      :host .navbar-wrap {\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; } }\n    :host .navbar-wrap .navbar-button {\n      cursor: pointer;\n      display: none;\n      height: 24px;\n      margin: 0;\n      position: relative;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n      width: 30px; }\n      @media (max-width: 991px) {\n        :host .navbar-wrap .navbar-button {\n          display: block; } }\n      :host .navbar-wrap .navbar-button span {\n        background: #ffffff;\n        display: block;\n        height: 3px;\n        opacity: 1;\n        position: absolute;\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n        transition: 0.25s ease-in-out;\n        width: 50%; }\n        :host .navbar-wrap .navbar-button span:nth-child(even) {\n          left: 50%; }\n        :host .navbar-wrap .navbar-button span:nth-child(odd) {\n          left: 0px; }\n        :host .navbar-wrap .navbar-button span:nth-child(1), :host .navbar-wrap .navbar-button span:nth-child(2) {\n          top: 0px; }\n        :host .navbar-wrap .navbar-button span:nth-child(3), :host .navbar-wrap .navbar-button span:nth-child(4) {\n          top: 10px; }\n        :host .navbar-wrap .navbar-button span:nth-child(5), :host .navbar-wrap .navbar-button span:nth-child(6) {\n          top: 20px; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(1), :host .navbar-wrap .navbar-button.open span:nth-child(6) {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      :host .navbar-wrap .navbar-button.open span:nth-child(2), :host .navbar-wrap .navbar-button.open span:nth-child(5) {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n      :host .navbar-wrap .navbar-button.open span:nth-child(1) {\n        left: 3px;\n        top: 6px; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(2) {\n        left: calc(50% - 3px);\n        top: 6px; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(3) {\n        left: -50%;\n        opacity: 0; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(4) {\n        left: 100%;\n        opacity: 0; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(5) {\n        left: 3px;\n        top: 15px; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(6) {\n        left: calc(50% - 3px);\n        top: 15px; }\n    :host .navbar-wrap .page-title {\n      font-size: 1.6rem;\n      font-weight: normal;\n      line-height: 1;\n      margin: 0;\n      width: 100%; }\n      @media (max-width: 991px) {\n        :host .navbar-wrap .page-title {\n          display: none; } }\n    :host .navbar-wrap .nav-items {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      margin: 0 -11px; }\n      :host .navbar-wrap .nav-items .nav-item {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 100%;\n        margin: 0 5px; }\n        @media (min-width: 544px) {\n          :host .navbar-wrap .nav-items .nav-item {\n            position: relative; } }\n        :host .navbar-wrap .nav-items .nav-item .nav-link {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          color: #ffffff;\n          cursor: pointer;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 22px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          min-width: 44px;\n          padding: 11px;\n          position: relative;\n          transition: color 0.2s ease-in-out; }\n          :host .navbar-wrap .nav-items .nav-item .nav-link .marker {\n            background: #64B5F6;\n            border-radius: 50%;\n            height: 6px;\n            position: absolute;\n            right: 5px;\n            top: 5px;\n            width: 6px; }\n            .rtl :host .navbar-wrap .nav-items .nav-item .nav-link .marker {\n              left: 5px;\n              right: auto; }\n          :host .navbar-wrap .nav-items .nav-item .nav-link .avatar {\n            border-radius: 50%;\n            height: 40px;\n            overflow: hidden;\n            width: 40px; }\n          :host .navbar-wrap .nav-items .nav-item .nav-link .name {\n            font-size: 1rem;\n            padding-left: 0.6875rem;\n            white-space: nowrap; }\n            @media (max-width: 991px) {\n              :host .navbar-wrap .nav-items .nav-item .nav-link .name {\n                display: none; } }\n            .rtl :host .navbar-wrap .nav-items .nav-item .nav-link .name {\n              padding-left: 0;\n              padding-right: 0.6875rem; }\n          :host .navbar-wrap .nav-items .nav-item .nav-link:hover {\n            color: #64b6f7; }\n        :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n          background: #fff;\n          box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.25);\n          display: none;\n          left: 50%;\n          margin: 0 0 0 -150px;\n          padding: 0;\n          position: absolute;\n          top: 100%;\n          width: 300px;\n          z-index: 9998; }\n          @media (max-width: 991px) {\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n              left: auto;\n              margin-left: 0;\n              right: 0; } }\n          @media (max-width: 543px) {\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n              left: 0;\n              margin-left: 0;\n              width: 100%; } }\n          .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n            margin: 0 -150px 0 0; }\n            @media (max-width: 991px) {\n              .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n                left: 0;\n                margin-right: 0;\n                right: auto; } }\n            @media (max-width: 543px) {\n              .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n                margin-right: 0;\n                right: 0; } }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu:before {\n            border: 10px solid transparent;\n            border-bottom-color: #fff;\n            bottom: 100%;\n            content: '';\n            left: 50%;\n            margin: 0 0 0 -10px;\n            position: absolute; }\n            @media (max-width: 991px) {\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu:before {\n                left: 100%;\n                margin-left: -34px; } }\n            @media (max-width: 543px) {\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu:before {\n                display: none; } }\n            @media (max-width: 991px) {\n              .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu:before {\n                left: 0;\n                margin-left: 11px; } }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-title,\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-footer {\n            margin: 0;\n            padding: 0.6875rem;\n            text-align: center; }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-title {\n            border-bottom: 1px solid rgba(37, 45, 71, 0.1);\n            color: #252d47;\n            font-size: 16px;\n            line-height: 1.3; }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-footer {\n            background: #666c7e; }\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-footer a {\n              color: #ffffff; }\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-footer a:hover {\n                color: rgba(255, 255, 255, 0.8); }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul {\n            list-style-type: none;\n            margin: 0;\n            max-height: 245px;\n            overflow: auto;\n            padding: 0; }\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li {\n              border-bottom: 1px solid rgba(37, 45, 71, 0.05); }\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li:last-child {\n                border-bottom: 0; }\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a {\n                -webkit-box-align: center;\n                    -ms-flex-align: center;\n                        align-items: center;\n                color: #252d47;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                padding: 0.6875rem;\n                transition: background 0.2s ease-in-out, color 0.2s ease-in-out; }\n                @media (min-width: 992px) {\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a:hover {\n                    background: #252d47;\n                    color: #ffffff; }\n                    :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a:hover .icon,\n                    :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a:hover .mat-icon {\n                      background: rgba(255, 255, 255, 0.1); } }\n                :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .icon,\n                :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .mat-icon {\n                  background: rgba(33, 150, 243, 0.1);\n                  border-radius: 50%;\n                  font-size: 22px;\n                  height: auto;\n                  margin-right: 11px;\n                  padding: 11px;\n                  transition: background 0.2s ease-in-out;\n                  width: auto; }\n                  .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .icon, .rtl\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .mat-icon {\n                    margin-right: 0;\n                    margin-left: 0.6875rem; }\n                :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .avatar {\n                  border-radius: 50%;\n                  height: 40px;\n                  margin-right: 0.6875rem;\n                  width: 40px; }\n                  .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .avatar {\n                    margin-right: 0;\n                    margin-left: 0.6875rem; }\n                :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content {\n                  font-size: .85rem; }\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content .desc {\n                    display: block; }\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content .date {\n                    display: block;\n                    font-size: .75rem;\n                    font-style: italic;\n                    margin-top: 4px;\n                    opacity: .6; }\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content .meta {\n                    -webkit-box-align: end;\n                        -ms-flex-align: end;\n                            align-items: flex-end;\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    -webkit-box-pack: justify;\n                        -ms-flex-pack: justify;\n                            justify-content: space-between;\n                    line-height: 1.3;\n                    margin-bottom: 4px; }\n                    :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content .meta .date {\n                      margin: 0 0 0 11px; }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu {\n            left: auto;\n            margin: 0;\n            right: 0;\n            width: 220px; }\n            @media (max-width: 543px) {\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu {\n                width: 100%; } }\n            .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu {\n              left: 0;\n              right: auto; }\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu:before {\n              display: none; }\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu > ul > li > a {\n              padding-top: 8px;\n              padding-bottom: 8px; }\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu > ul > li > a .icon {\n                background: none;\n                font-size: 1rem;\n                margin-right: 11px;\n                min-width: 15px;\n                padding: 0; }\n        :host .navbar-wrap .nav-items .nav-item.opened /deep/ .mat-icon-button,\n        :host .navbar-wrap .nav-items .nav-item.opened /deep/ .mat-button {\n          color: #64b6f7; }\n        :host .navbar-wrap .nav-items .nav-item.opened .dropdown-menu {\n          display: block; }\n        :host .navbar-wrap .nav-items .nav-item.opened ~ .items-overlay {\n          opacity: 1;\n          transition: 0.2s opacity 0s ease-in-out, 0s visibility 0s ease-in-out;\n          visibility: visible; }\n      :host .navbar-wrap .nav-items .items-overlay {\n        background: rgba(37, 45, 71, 0.2);\n        height: 100%;\n        left: 0;\n        opacity: 0;\n        position: fixed;\n        top: 0;\n        transition: 0.2s opacity 0s ease-in-out, 0s visibility 0.2s ease-in-out;\n        visibility: hidden;\n        width: 100%;\n        z-index: 9997; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorizontalNavbarComponent = (function () {
    function HorizontalNavbarComponent() {
        this.sidebarState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.openedSidebar = false;
        this.showOverlay = false;
    }
    HorizontalNavbarComponent.prototype.ngOnInit = function () { };
    HorizontalNavbarComponent.prototype.open = function (event) {
        var clickedComponent = event.target.closest('.nav-item');
        var items = clickedComponent.parentElement.children;
        event.preventDefault();
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove('opened');
        }
        clickedComponent.classList.add('opened');
        //Add class 'show-overlay'
        this.showOverlay = true;
    };
    HorizontalNavbarComponent.prototype.close = function (event) {
        var clickedComponent = event.target;
        var items = clickedComponent.parentElement.children;
        event.preventDefault();
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove('opened');
        }
        //Remove class 'show-overlay'
        this.showOverlay = false;
    };
    HorizontalNavbarComponent.prototype.openSidebar = function () {
        this.openedSidebar = !this.openedSidebar;
        this.sidebarState.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HorizontalNavbarComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], HorizontalNavbarComponent.prototype, "openedSidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HorizontalNavbarComponent.prototype, "sidebarState", void 0);
    HorizontalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'horizontal-navbar',
            template: __webpack_require__("../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.scss")],
            host: {
                '[class.app-navbar]': 'true',
                '[class.show-overlay]': 'showOverlay'
            }
        }),
        __metadata("design:paramtypes", [])
    ], HorizontalNavbarComponent);
    return HorizontalNavbarComponent;
}());

//# sourceMappingURL=horizontal-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"'/default-layout/dashboard'\" class=\"logo\">\n  <img src=\"assets/img/logo.png\" alt=\"\" width=\"147\" height=\"33\" class=\"logo-img\">\n</a>\n\n<span class=\"compress-logo\">\n  <img src=\"assets/img/logo-compress.png\" alt=\"\" width=\"38\" height=\"33\" class=\"logo-img\">\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/ui/components/logo/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #1b2237;\n  color: #ffffff;\n  display: block;\n  height: 3.4375rem;\n  position: relative; }\n  :host .logo {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    color: inherit;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    padding: 0.6875rem 1.375rem;\n    text-decoration: none; }\n    :host .logo .logo-img {\n      height: auto;\n      max-height: 100%;\n      max-width: 100%;\n      vertical-align: top;\n      width: auto; }\n    :host .logo .logo-text {\n      display: block;\n      font-size: 33px;\n      font-weight: 500;\n      line-height: 1; }\n  :host .compress-logo {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    opacity: 0;\n    padding: 0.6875rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 4.125rem; }\n    .rtl :host .compress-logo {\n      left: 0;\n      right: auto; }\n    :host .compress-logo .logo-img {\n      height: auto;\n      max-height: 100%;\n      max-width: 100%;\n      vertical-align: top;\n      width: auto; }\n    :host .compress-logo .logo-text {\n      display: block;\n      font-size: 26px;\n      font-weight: 500;\n      line-height: 1; }\n  .menu-style-2 :host .compress-logo,\n  .menu-style-3 :host .compress-logo,\n  .menu-style-4 :host .compress-logo {\n    left: 0;\n    right: auto; }\n  .menu-style-2.rtl :host .compress-logo,\n  .menu-style-3.rtl :host .compress-logo,\n  .menu-style-4.rtl :host .compress-logo {\n    left: auto;\n    right: 0; }\n  @media (min-width: 992px) {\n    .compress-vertical-navbar :host .logo {\n      opacity: 0;\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      transition: 0.2s opacity 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n      transition: 0.2s opacity 0s ease-in-out, 0.2s transform 0s ease-in-out;\n      transition: 0.2s opacity 0s ease-in-out, 0.2s transform 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out; }\n    .compress-vertical-navbar :host .compress-logo {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s -webkit-transform 0.2s ease-in-out;\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s transform 0.2s ease-in-out;\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s transform 0.2s ease-in-out, 0.2s -webkit-transform 0.2s ease-in-out; } }\n  @media (min-width: 992px) {\n    .compress-vertical-navbar.rtl :host .logo {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); } }\n  @media (min-width: 992px) {\n    .compress-vertical-navbar .vertical-navbar:hover :host .logo {\n      opacity: 1;\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s -webkit-transform 0.2s ease-in-out;\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s transform 0.2s ease-in-out;\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s transform 0.2s ease-in-out, 0.2s -webkit-transform 0.2s ease-in-out; }\n    .compress-vertical-navbar .vertical-navbar:hover :host .compress-logo {\n      opacity: 0;\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: 0.2s opacity 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n      transition: 0.2s opacity 0s ease-in-out, 0.2s transform 0s ease-in-out;\n      transition: 0.2s opacity 0s ease-in-out, 0.2s transform 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out; } }\n  @media (min-width: 992px) {\n    .compress-vertical-navbar.rtl .vertical-navbar:hover :host .logo {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () { };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'logo',
            template: __webpack_require__("../../../../../src/app/ui/components/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/logo/logo.component.scss")],
            host: { 'class': 'app-logo' }
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());

//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-menu\">\n  <ul>\n    <li\n      class=\"menu-item\"\n      *ngFor=\"let item of menuItems\"\n      [ngClass]=\"getLiClasses(item, rla.isActive)\"\n      #rla=\"routerLinkActive\"\n      routerLinkActive=\"active\"\n      [routerLinkActiveOptions]=\"{exact:true}\"\n    >\n      <div *ngIf=\"item.groupTitle; then group else default\"></div>\n\n      <!-- Group title -->\n      <ng-template #group>\n        <span class=\"group-title\">{{ item.title }}</span>\n      </ng-template>\n      <!-- end Group title -->\n\n      <!-- Default item -->\n      <ng-template #default>\n        <div *ngIf=\"!item.sub; then simple else sub\"></div>\n\n        <ng-template #simple>\n          <a href=\"#\" class=\"item-link\" routerLink=\"{{ item.routing }}\" (click)=\"toggle($event, item, this)\">\n            <span class=\"text\">{{ item.title }}</span>\n\n            <span\n              class=\"item-badge\"\n              *ngIf=\"item.badge && item.badge.text\"\n              [ngStyle]=\"getStyles(item.badge)\"\n            >{{ item.badge.text }}</span>\n\n            <span class=\"icon\">\n              <i class=\"icon-wrap {{ item.icon.class }}\" *ngIf=\"item.icon && item.icon.class\" [ngStyle]=\"getStyles(item.icon)\"></i>\n            </span>\n          </a>\n        </ng-template>\n\n        <ng-template #sub>\n          <!-- Item with sub -->\n          <a href=\"#\" class=\"item-link\" (click)=\"toggle($event, item, this)\">\n            <span class=\"text\">{{ item.title }}</span>\n\n            <span\n              class=\"item-badge\"\n              *ngIf=\"item.badge && item.badge.text\"\n              [ngStyle]=\"getStyles(item.badge)\"\n            >{{ item.badge.text }}</span>\n\n            <span class=\"caret\" *ngIf=\"item.sub\"></span>\n\n            <span class=\"icon\">\n              <i class=\"icon-wrap {{ item.icon.class }}\" *ngIf=\"item.icon && item.icon.class\" [ngStyle]=\"getStyles(item.icon)\"></i>\n            </span>\n          </a>\n\n          <!-- Menu sub -->\n          <ul class=\"sub\" *ngIf=\"!item.groupTitle && item.sub\">\n            <li\n              class=\"menu-item\"\n              *ngFor=\"let itemSub of item.sub\"\n              [ngClass]=\"getLiClasses(itemSub, rla.isActive)\"\n              #rla=\"routerLinkActive\"\n              routerLinkActive=\"active\"\n            >\n              <a href=\"#\" routerLink=\"{{ itemSub.routing }}\" class=\"item-link\">\n                <span class=\"text\">{{ itemSub.title }}</span>\n              </a>\n            </li>\n          </ul>\n        </ng-template>\n      </ng-template>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .main-menu > ul .menu-item .item-link .caret {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n:host {\n  display: block;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0;\n  width: inherit;\n  -webkit-overflow-scrolling: touch; }\n  :host .main-menu {\n    width: inherit; }\n    :host .main-menu > ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n      :host .main-menu > ul .menu-item {\n        position: relative; }\n        :host .main-menu > ul .menu-item:after {\n          background: #2196f3;\n          bottom: 0;\n          content: '';\n          position: absolute;\n          right: 100%;\n          top: 0;\n          transition: -webkit-transform 0.2s ease-in-out;\n          transition: transform 0.2s ease-in-out;\n          transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n          width: 4px; }\n          .rtl :host .main-menu > ul .menu-item:after {\n            left: 100%;\n            right: auto; }\n        :host .main-menu > ul .menu-item .item-link {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          background: transparent;\n          color: #252d47;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 1rem;\n          font-weight: 400;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-height: 2.75rem;\n          padding: 0.34375rem 1.03125rem;\n          position: relative;\n          text-decoration: none;\n          transition: background 0.2s ease-in-out, color 0.2s ease-in-out; }\n          :host .main-menu > ul .menu-item .item-link .text {\n            -webkit-box-flex: 2;\n                -ms-flex-positive: 2;\n                    flex-grow: 2;\n            -ms-flex-negative: 1;\n                flex-shrink: 1;\n            margin: 0 0.34375rem; }\n          :host .main-menu > ul .menu-item .item-link .item-badge {\n            background: #2196f3;\n            border-radius: 8px;\n            color: rgba(33, 150, 243, 0.2);\n            float: right;\n            font-size: 10px;\n            line-height: 1;\n            margin: 0 0.34375rem;\n            padding: 3px 6px; }\n          :host .main-menu > ul .menu-item .item-link .icon {\n            color: inherit;\n            font-size: 15px;\n            margin: 0 0 0 0.34375rem;\n            min-width: 1.375rem;\n            text-align: center; }\n            .rtl :host .main-menu > ul .menu-item .item-link .icon {\n              margin: 0 0.34375rem 0 0; }\n            :host .main-menu > ul .menu-item .item-link .icon .icon-wrap {\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              border-radius: 50%;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              height: 2.0625rem;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              margin: 0 auto;\n              width: 2.0625rem; }\n          :host .main-menu > ul .menu-item .item-link .caret {\n            margin: 0 0.171875rem;\n            transition: -webkit-transform 0.1s ease-in-out;\n            transition: transform 0.1s ease-in-out;\n            transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out; }\n            :host .main-menu > ul .menu-item .item-link .caret:before {\n              content: '\\F105'; }\n          :host .main-menu > ul .menu-item .item-link:hover {\n            background: transparent;\n            color: #2196f3; }\n            :host .main-menu > ul .menu-item .item-link:hover .icon {\n              color: inherit; }\n        :host .main-menu > ul .menu-item.menu-item-group:after {\n          display: none; }\n        :host .main-menu > ul .menu-item.menu-item-group .group-title {\n          color: #666c7e;\n          display: block;\n          font-size: .8rem;\n          font-weight: 600;\n          line-height: 1.71875;\n          padding: 1.03125rem 1.375rem 0.34375rem;\n          text-transform: uppercase; }\n        :host .main-menu > ul .menu-item .sub {\n          background: transparent;\n          list-style-type: none;\n          overflow: hidden;\n          margin: 0;\n          max-height: 0;\n          padding: 0;\n          transition: max-height 0.1s ease-in-out; }\n          :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n            padding-left: 1.375rem;\n            padding-right: 1.375rem; }\n          :host .main-menu > ul .menu-item .sub .menu-item:first-child > .item-link:before {\n            border-top: 1px solid transparent;\n            content: '';\n            left: 0;\n            position: absolute;\n            right: 0;\n            top: 0;\n            transition: border 0.2s ease-in-out; }\n        :host .main-menu > ul .menu-item:hover:after {\n          -webkit-transform: translateX(4px);\n                  transform: translateX(4px); }\n          .rtl :host .main-menu > ul .menu-item:hover:after {\n            -webkit-transform: translateX(-4px);\n                    transform: translateX(-4px); }\n        :host .main-menu > ul .menu-item.active:after {\n          -webkit-transform: translateX(4px);\n                  transform: translateX(4px); }\n          .rtl :host .main-menu > ul .menu-item.active:after {\n            -webkit-transform: translateX(-4px);\n                    transform: translateX(-4px); }\n        :host .main-menu > ul .menu-item.active > .item-link {\n          background: transparent;\n          color: #2196f3; }\n          :host .main-menu > ul .menu-item.active > .item-link .icon {\n            color: #2196f3; }\n        :host .main-menu > ul .menu-item.has-sub {\n          position: relative; }\n          :host .main-menu > ul .menu-item.has-sub > .item-link {\n            position: relative; }\n            :host .main-menu > ul .menu-item.has-sub > .item-link .caret {\n              display: block; }\n          :host .main-menu > ul .menu-item.has-sub.active > .item-link .caret {\n            -webkit-transform: rotate(90deg);\n                    transform: rotate(90deg); }\n          :host .main-menu > ul .menu-item.has-sub.active > .sub {\n            max-height: 1000px; }\n            :host .main-menu > ul .menu-item.has-sub.active > .sub > .menu-item.active:first-child > .item-link:before {\n              border-top-color: #666c7e; }\n        :host .main-menu > ul .menu-item.disabled {\n          pointer-events: none; }\n    .menu-style-2 :host .main-menu > ul .menu-item .item-link .icon {\n      margin-left: 0;\n      margin-right: 0.34375rem;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .menu-style-2 :host .main-menu > ul .menu-item .item-link .text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    .menu-style-2 :host .main-menu > ul .menu-item .item-link .item-badge {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .menu-style-2 :host .main-menu > ul .menu-item .item-link .caret {\n      height: 11px;\n      -webkit-box-ordinal-group: 5;\n          -ms-flex-order: 4;\n              order: 4;\n      position: relative;\n      width: 11px; }\n      .menu-style-2 :host .main-menu > ul .menu-item .item-link .caret:before, .menu-style-2 :host .main-menu > ul .menu-item .item-link .caret:after {\n        background: #252d47;\n        content: '';\n        display: block;\n        height: 1px;\n        left: 0;\n        position: absolute;\n        top: 5px;\n        transition: -webkit-transform 0.2s ease-in-out;\n        transition: transform 0.2s ease-in-out;\n        transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n        width: 100%; }\n      .menu-style-2 :host .main-menu > ul .menu-item .item-link .caret:after {\n        -webkit-transform: rotate(90deg) scaleX(1);\n                transform: rotate(90deg) scaleX(1); }\n    .menu-style-2 :host .main-menu > ul .menu-item.has-sub.active > .item-link .caret {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n      .menu-style-2 :host .main-menu > ul .menu-item.has-sub.active > .item-link .caret:after {\n        -webkit-transform: rotate(90deg) scaleX(0);\n                transform: rotate(90deg) scaleX(0); }\n    .menu-style-2.rtl :host .main-menu > ul .menu-item .item-link .icon {\n      margin-left: 0.34375rem;\n      margin-right: 0; }\n    .menu-style-3 :host .main-menu > ul .menu-item:after {\n      display: none; }\n    .menu-style-3 :host .main-menu > ul .menu-item .item-link .icon {\n      margin-right: 0.34375rem;\n      margin-left: 0;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .menu-style-3 :host .main-menu > ul .menu-item .item-link .text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    .menu-style-3 :host .main-menu > ul .menu-item .item-link .item-badge {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .menu-style-3 :host .main-menu > ul .menu-item .item-link .caret {\n      -webkit-box-ordinal-group: 5;\n          -ms-flex-order: 4;\n              order: 4; }\n    .menu-style-3 :host .main-menu > ul .menu-item .sub {\n      position: relative; }\n      .menu-style-3 :host .main-menu > ul .menu-item .sub:before {\n        border-left: 1px dashed #666c7e;\n        bottom: 1.375rem;\n        content: '';\n        left: 2.0625rem;\n        margin-left: -1px;\n        position: absolute;\n        top: 0;\n        z-index: 2; }\n      .menu-style-3 :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n        padding-left: 3.4375rem;\n        position: relative; }\n        .menu-style-3 :host .main-menu > ul .menu-item .sub .menu-item .item-link:before {\n          border-top: 1px dashed #666c7e;\n          content: '';\n          left: 2.0625rem;\n          margin-left: -1px;\n          position: absolute;\n          top: 1.375rem;\n          width: 1.1rem;\n          z-index: 2; }\n    .menu-style-3.rtl :host .main-menu > ul .menu-item .item-link .icon {\n      margin-left: 0.34375rem;\n      margin-right: 0; }\n    .menu-style-3.rtl :host .main-menu > ul .menu-item .sub:before {\n      left: auto;\n      right: 2.0625rem; }\n    .menu-style-3.rtl :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n      padding-left: 1.375rem;\n      padding-right: 3.4375rem; }\n      .menu-style-3.rtl :host .main-menu > ul .menu-item .sub .menu-item .item-link:before {\n        left: auto;\n        right: 2.0625rem; }\n    .menu-style-4 :host .main-menu > ul .menu-item:after {\n      display: none; }\n    .menu-style-4 :host .main-menu > ul .menu-item .item-link .icon {\n      margin-right: 0.34375rem;\n      margin-left: 0;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .menu-style-4 :host .main-menu > ul .menu-item .item-link .text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    .menu-style-4 :host .main-menu > ul .menu-item .item-link .item-badge {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .menu-style-4 :host .main-menu > ul .menu-item .item-link .caret {\n      -webkit-box-ordinal-group: 5;\n          -ms-flex-order: 4;\n              order: 4; }\n    .menu-style-4 :host .main-menu > ul .menu-item .sub {\n      position: relative; }\n      .menu-style-4 :host .main-menu > ul .menu-item .sub:before {\n        border-left: 1px solid #666c7e;\n        bottom: 1.375rem;\n        content: '';\n        left: 2.0625rem;\n        margin-left: 0;\n        position: absolute;\n        top: -0.34375rem;\n        z-index: 2; }\n      .menu-style-4 :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n        padding-left: 3.09375rem;\n        position: relative; }\n        .menu-style-4 :host .main-menu > ul .menu-item .sub .menu-item .item-link:before {\n          background: #666c7e;\n          border-radius: 50%;\n          content: '';\n          height: 5px;\n          left: 2.0625rem;\n          margin: -2.5px 0 0 -2px;\n          position: absolute;\n          top: 1.375rem;\n          width: 5px;\n          z-index: 2; }\n    .menu-style-4 :host .main-menu > ul .menu-item.active > .item-link:before {\n      background: #2196f3 !important; }\n    .menu-style-4.rtl :host .main-menu > ul .menu-item .item-link .icon {\n      margin-left: 0.34375rem;\n      margin-right: 0; }\n    .menu-style-4.rtl :host .main-menu > ul .menu-item .sub:before {\n      left: auto;\n      right: 2.0625rem;\n      margin-right: 0; }\n    .menu-style-4.rtl :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n      padding-left: 1.375rem;\n      padding-right: 3.09375rem; }\n      .menu-style-4.rtl :host .main-menu > ul .menu-item .sub .menu-item .item-link:before {\n        left: auto;\n        right: 2.0625rem;\n        margin: -2.5px -2px 0 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__("../../../../../src/app/ui/components/menu/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(menuService) {
        this.menuService = menuService;
    }
    MenuComponent.prototype.getMenuItems = function () {
        var _this = this;
        this.menuService.getMenuItems().then(function (menuItems) { return _this.menuItems = menuItems; });
    };
    MenuComponent.prototype.getLiClasses = function (item, isActive) {
        return {
            'has-sub': item.sub,
            'active': item.active || isActive,
            'menu-item-group': item.groupTitle,
            'disabled': item.disabled
        };
    };
    MenuComponent.prototype.getStyles = function (item) {
        return {
            'background': item.bg,
            'color': item.color
        };
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenuItems();
    };
    MenuComponent.prototype.toggle = function (event, item, el) {
        event.preventDefault();
        var items = el.menuItems;
        if (item.active) {
            item.active = false;
        }
        else {
            for (var i = 0; i < items.length; i++) {
                items[i].active = false;
            }
            item.active = true;
        }
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/ui/components/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/menu/menu.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]],
            host: {
                'class': 'app-menu'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_menu_items__ = __webpack_require__("../../../../../src/app/ui/components/menu/mock-menu-items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenuItems = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_menu_items__["a" /* MENUITEMS */]);
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/mock-menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENUITEMS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_menu__ = __webpack_require__("../../../../../src/settings/menu.ts");

var MENUITEMS = __WEBPACK_IMPORTED_MODULE_0__settings_menu__["a" /* MENU */];
//# sourceMappingURL=mock-menu-items.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-navbar-wrap\">\n  <logo></logo>\n  <app-menu></app-menu>\n</div>\n\n<div class=\"sidebar-overlay\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #e5e6e9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: left 0.2s ease-in-out, right 0.2s ease-in-out;\n  width: 15.125rem;\n  will-change: left, right, width;\n  z-index: 9996; }\n  @media (max-width: 991px) {\n    :host {\n      left: -15.125rem; } }\n  .rtl :host {\n    left: auto;\n    right: 0; }\n    @media (max-width: 991px) {\n      .rtl :host {\n        left: auto;\n        right: -15.125rem; } }\n  :host .vertical-navbar-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n    width: 15.125rem; }\n    @media (max-width: 991px) {\n      :host .vertical-navbar-wrap {\n        position: relative;\n        z-index: 9999; } }\n  :host .sidebar-overlay {\n    background: rgba(229, 230, 233, 0.2);\n    height: 100%;\n    left: 0;\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    transition: 0.2s opacity 0s ease-in-out, 0s visibility 0.2s ease-in-out;\n    visibility: hidden;\n    width: 100%;\n    z-index: 9998; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerticalNavbarComponent = (function () {
    function VerticalNavbarComponent() {
    }
    VerticalNavbarComponent.prototype.ngOnInit = function () { };
    VerticalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vertical-navbar',
            template: __webpack_require__("../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.scss")],
            host: { 'class': 'vertical-navbar' }
        }),
        __metadata("design:paramtypes", [])
    ], VerticalNavbarComponent);
    return VerticalNavbarComponent;
}());

//# sourceMappingURL=vertical-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_horizontal_navbar_horizontal_navbar_component__ = __webpack_require__("../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_vertical_navbar_vertical_navbar_component__ = __webpack_require__("../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_addition_navbar_addition_navbar_component__ = __webpack_require__("../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_logo_logo_component__ = __webpack_require__("../../../../../src/app/ui/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/ui/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/ui/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UIModule = (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_horizontal_navbar_horizontal_navbar_component__["a" /* HorizontalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_vertical_navbar_vertical_navbar_component__["a" /* VerticalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_addition_navbar_addition_navbar_component__["a" /* AdditionNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__components_horizontal_navbar_horizontal_navbar_component__["a" /* HorizontalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_vertical_navbar_vertical_navbar_component__["a" /* VerticalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_addition_navbar_addition_navbar_component__["a" /* AdditionNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdCoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MdPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MdProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MdRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MdSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MdSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MdSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MdTooltipModule */]
            ]
        })
    ], UIModule);
    return UIModule;
}());

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ "../../../../../src/assets/content/login-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login-bg.c31dfae0909eb8b26d66.jpg";

/***/ }),

/***/ "../../../../../src/assets/content/signup-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "signup-bg.81e23c8b8d4a46fb6187.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/settings/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU; });
var MENU = [
    {
        title: 'Main',
        groupTitle: true
    },
    {
        title: 'Dashboards',
        icon: {
            class: 'fa fa-home',
            bg: '#ea8080',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/default-layout/dashboard',
        badge: {
            text: 'New',
            color: '#fff',
            bg: '#E57373'
        },
        sub: [
            {
                title: 'Dashboard v1',
                routing: '/default-layout/dashboard'
            },
            {
                title: 'Dashboard v2',
                routing: '/default-layout/dashboard-2'
            },
            {
                title: 'Dashboard v3',
                routing: '/default-layout/dashboard-3'
            }
        ]
    },
    {
        title: 'Widgets',
        icon: {
            class: 'fa fa-th',
            bg: '#E1BEE7',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/default-layout/widgets'
    },
    {
        title: 'Calendar',
        icon: {
            class: 'fa fa-calendar',
            bg: '#C5CAE9',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/default-layout/calendar'
    },
    {
        title: 'Layouts',
        icon: {
            class: 'fa fa-columns',
            bg: '#FF8A65',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/default-layout/dashboard',
        badge: {
            text: '5',
            color: '#fff',
            bg: '#43A047'
        },
        sub: [
            {
                title: 'Default',
                routing: '/default-layout/layouts'
            },
            {
                title: 'Compressed menu',
                routing: '/default-c-layout/layouts'
            },
            {
                title: 'Boxed',
                routing: '/boxed-layout/layouts'
            },
            {
                title: 'Boxed compressed menu',
                routing: '/boxed-c-layout/layouts'
            },
            {
                title: 'Extra',
                routing: '/extra-layout/sign-in'
            }
        ]
    },
    {
        title: 'UI Elements',
        groupTitle: true
    },
    {
        title: 'Material components',
        icon: {
            class: 'fa fa-briefcase',
            bg: '#B3E5FC',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Button',
                routing: '/default-layout/button'
            },
            {
                title: 'Card',
                routing: '/default-layout/card'
            },
            {
                title: 'Checkbox',
                routing: '/default-layout/checkbox'
            },
            {
                title: 'Chips',
                routing: '/default-layout/chips'
            },
            {
                title: 'Dialog',
                routing: '/default-layout/dialog'
            },
            {
                title: 'Icon',
                routing: '/default-layout/icon'
            },
            {
                title: 'Input',
                routing: '/default-layout/input'
            },
            {
                title: 'List',
                routing: '/default-layout/list'
            },
            {
                title: 'Menu',
                routing: '/default-layout/menu'
            },
            {
                title: 'Progress bar',
                routing: '/default-layout/progress-bar'
            },
            {
                title: 'Progress spinner',
                routing: '/default-layout/progress-spinner'
            },
            {
                title: 'Radio Button',
                routing: '/default-layout/radio-button'
            },
            {
                title: 'Select',
                routing: '/default-layout/select'
            },
            {
                title: 'Slider',
                routing: '/default-layout/slider'
            },
            {
                title: 'Slide toggle',
                routing: '/default-layout/slide-toggle'
            },
            {
                title: 'Snackbar',
                routing: '/default-layout/snackbar'
            },
            {
                title: 'Tabs',
                routing: '/default-layout/tabs'
            },
            {
                title: 'Toolbar',
                routing: '/default-layout/toolbar'
            },
            {
                title: 'Tooltip',
                routing: '/default-layout/tooltip'
            }
        ]
    },
    {
        title: 'Theme components',
        icon: {
            class: 'fa fa-diamond',
            bg: '#B2DFDB',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Alerts',
                routing: '/default-layout/ni-alerts'
            },
            {
                title: 'Badges',
                routing: '/default-layout/ni-badges'
            },
            {
                title: 'Breadcrumbs',
                routing: '/default-layout/ni-breadcrumbs'
            },
            {
                title: 'Buttons',
                routing: '/default-layout/ni-buttons'
            },
            {
                title: 'Cards',
                routing: '/default-layout/ni-cards'
            },
            {
                title: 'Chat',
                routing: '/default-layout/ni-chat'
            },
            {
                title: 'Files',
                routing: '/default-layout/ni-files'
            },
            {
                title: 'Horizontal timeline',
                routing: '/default-layout/ni-h-timeline'
            },
        ]
    },
    {
        title: 'Typography',
        icon: {
            class: 'fa fa-font',
            bg: '#F0F4C3',
            color: 'rgba(0,0,0,.87)'
        },
        routing: '/default-layout/typography'
    },
    {
        title: 'Tables',
        icon: {
            class: 'fa fa-table',
            bg: '#FFE082',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Simple table',
                routing: '/default-layout/simple-table'
            },
            {
                title: 'Editing table',
                routing: '/default-layout/editing-table'
            },
            {
                title: 'Filtering table',
                routing: '/default-layout/filtering-table'
            },
            {
                title: 'Pagination table',
                routing: '/default-layout/pagination-table'
            },
            {
                title: 'Bootstrap tables',
                routing: '/default-layout/bootstrap-tables'
            }
        ]
    },
    {
        title: 'Forms',
        icon: {
            class: 'fa fa-check-square-o',
            bg: '#FFCCBC',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Form Elements',
                routing: '/default-layout/form-elements'
            },
            {
                title: 'Form Layout',
                routing: '/default-layout/form-layout'
            },
            {
                title: 'Form Validation',
                routing: '/default-layout/form-validation'
            }
        ]
    },
    {
        title: 'Charts',
        icon: {
            class: 'fa fa-pie-chart',
            bg: '#BCAAA4',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Ng2 Charts',
                routing: '/default-layout/ng2-charts'
            },
            {
                title: 'Ngx Charts',
                routing: '/default-layout/ngx-charts'
            },
            {
                title: 'Amcharts',
                routing: '/default-layout/amcharts'
            }
        ]
    },
    {
        title: 'Maps',
        icon: {
            class: 'fa fa-map-marker',
            bg: '#9E9E9E',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Google map',
                routing: '/default-layout/google-map'
            },
            {
                title: 'Leaflet map',
                routing: '/default-layout/leaflet-map'
            }
        ]
    },
    {
        title: 'Pages',
        groupTitle: true
    },
    {
        title: 'Pages service',
        icon: {
            class: 'fa fa-edit',
            bg: '#FFAB91',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'About Us',
                routing: '/default-layout/about-us'
            },
            {
                title: 'FAQ',
                routing: '/default-layout/faq'
            },
            {
                title: 'TimeLine',
                routing: '/default-layout/timeline'
            },
            {
                title: 'Invoice',
                routing: '/default-layout/invoice'
            }
        ]
    },
    {
        title: 'Extra pages',
        icon: {
            class: 'fa fa-clone',
            bg: '#B0BEC5',
            color: 'rgba(0,0,0,.87)'
        },
        sub: [
            {
                title: 'Sign In v1',
                routing: '/extra-layout/sign-in'
            },
            {
                title: 'Sign In v2',
                routing: '/default-layout/sign-in'
            },
            {
                title: 'Sign In with Social',
                routing: '/extra-layout/sign-in-social'
            },
            {
                title: 'Sign Up v1',
                routing: '/extra-layout/sign-up'
            },
            {
                title: 'Sign Up v2',
                routing: '/default-layout/sign-up'
            },
            {
                title: 'Forgot password',
                routing: '/extra-layout/forgot'
            },
            {
                title: 'Confirm email',
                routing: '/extra-layout/confirm'
            },
            {
                title: '404',
                routing: '/extra-layout/page-404'
            },
            {
                title: '500',
                routing: '/extra-layout/page-500'
            },
            {
                title: 'Not found',
                routing: '/default-layout/not-found'
            }
        ]
    }
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map