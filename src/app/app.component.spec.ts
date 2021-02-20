import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UIShellModule } from 'carbon-components-angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotificationModule } from '@carbon/icons-angular';
import { UserAvatarModule } from '@carbon/icons-angular';
import { AppSwitcherModule } from '@carbon/icons-angular';
imports: [NotificationModule, UserAvatarModule, AppSwitcherModule];
declarations: [HeaderComponent];
describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'carbon-angular-tutorial'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('carbon-angular-tutorial');
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('.content span').textContent).toContain('carbon-angular-tutorial app is running!');
	});

	TestBed.configureTestingModule({
		declarations: [HeaderComponent],
		imports: [UIShellModule]
	  });
});
