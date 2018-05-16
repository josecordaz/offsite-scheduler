import { OffsiteSchedulerPage } from './app.po';

describe('offsite-scheduler App', () => {
  let page: OffsiteSchedulerPage;

  beforeEach(() => {
    page = new OffsiteSchedulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
