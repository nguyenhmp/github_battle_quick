import { GithubbattlePage } from './app.po';

describe('githubbattle App', () => {
  let page: GithubbattlePage;

  beforeEach(() => {
    page = new GithubbattlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
