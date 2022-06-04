import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgDocCodeHighlighterModule} from '@ng-doc/app/directives/code-highlighter';
import {NgDocButtonIconModule, NgDocIconModule} from '@ng-doc/ui-kit';

import {NgDocCodeComponent} from './code.component';

@NgModule({
	declarations: [NgDocCodeComponent],
	imports: [CommonModule, NgDocCodeHighlighterModule, NgDocButtonIconModule, NgDocIconModule],
	exports: [NgDocCodeComponent],
})
export class NgDocCodeModule {}
