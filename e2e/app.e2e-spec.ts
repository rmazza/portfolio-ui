import { PortfolioUiPage } from './app.po';

describe('portfolio-ui App', () => {
  let page: PortfolioUiPage;

  beforeEach(() => {
    page = new PortfolioUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
