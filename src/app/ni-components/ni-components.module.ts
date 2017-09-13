import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';

import { NiAlertComponent }      from './ni-alert/ni-alert.component';
import { NiBadgeComponent }      from './ni-badge/ni-badge.component';
import { NiBreadcrumbComponent } from './ni-breadcrumb/ni-breadcrumb.component';
import { NiButtonComponent }     from './ni-button/ni-button.component';
import { NiCardComponent }       from './ni-card/ni-card.component';
import { NiChatComponent }       from './ni-chat/ni-chat.component';
import { NiFileComponent }       from './ni-file/ni-file.component';
import { NiHTimelineComponent }  from './ni-h-timeline/ni-h-timeline.component';

import { ColorDirective }        from './directives/color/color.directive';
import { BgDirective }           from './directives/bg/bg.directive';
import { GradientDirective }     from './directives/gradient/gradient.directive';
import { AutoGrowDirective }     from './directives/auto-grow/auto-grow.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NiAlertComponent,
    NiBadgeComponent,
    NiBreadcrumbComponent,
    NiButtonComponent,
    NiCardComponent,
    NiChatComponent,
    NiFileComponent,
    NiHTimelineComponent,
    ColorDirective,
    BgDirective,
    GradientDirective,
    AutoGrowDirective
  ],
  exports: [
    NiAlertComponent,
    NiBadgeComponent,
    NiBreadcrumbComponent,
    NiButtonComponent,
    NiCardComponent,
    NiChatComponent,
    NiFileComponent,
    NiHTimelineComponent,
    ColorDirective,
    BgDirective,
    GradientDirective
  ]
})
export class NiComponentsModule { }
