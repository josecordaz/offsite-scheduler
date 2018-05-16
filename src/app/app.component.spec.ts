import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
import { AppComponent } from './app.component';
=======

import { AppComponent } from './app.component';

>>>>>>> 3136ed6838b3d5100829a59b12fce5f00593cbef
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
<<<<<<< HEAD
=======

>>>>>>> 3136ed6838b3d5100829a59b12fce5f00593cbef
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
<<<<<<< HEAD
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
=======

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

>>>>>>> 3136ed6838b3d5100829a59b12fce5f00593cbef
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
=======
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
>>>>>>> 3136ed6838b3d5100829a59b12fce5f00593cbef
  }));
});
