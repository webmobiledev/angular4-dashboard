export const MENU: any = [
  {
    title: 'Main',
    groupTitle : true
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
    groupTitle : true
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
      }
      ,
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
    groupTitle : true
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