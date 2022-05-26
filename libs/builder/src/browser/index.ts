import {BuilderContext, createBuilder} from '@angular-devkit/architect';
import {BrowserBuilderOutput, executeBrowserBuilder} from '@angular-devkit/build-angular';
import {NgDocSchema} from '@ng-doc/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NgDocBuilder} from '../builder';
import {Schema as BrowserBuilderSchema} from '@angular-devkit/build-angular/src/builders/browser/schema';

/**
 * Attach NgDocWebpackPlugin before Angular Plugins
 *
 * @param options Builder configuration
 * @param context Builder context
 */
export function runBuilder(options: NgDocSchema, context: BuilderContext): Observable<BrowserBuilderOutput> {
	const builder: NgDocBuilder = new NgDocBuilder({options, context});

	return combineLatest([
		builder.run(),
		executeBrowserBuilder(options as unknown as BrowserBuilderSchema, context),
	]).pipe(map(([_, devServerOutput]: [void, BrowserBuilderOutput]) => devServerOutput));
}

export default createBuilder(runBuilder);
