import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from "./@layout/header/header.component";
// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { FooterComponent } from './@layout/footer/footer.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent
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
