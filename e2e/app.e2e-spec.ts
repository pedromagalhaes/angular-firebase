import { Ng21Page } from './app.po';

describe('ng2_1 App', function() {
  let page: Ng21Page;

  beforeEach(() => {
    page = new Ng21Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
