import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		UIShellModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
