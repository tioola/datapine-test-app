import { DatapineFrontPage } from './app.po';

describe('datapine-front App', () => {
  let page: DatapineFrontPage;

  beforeEach(() => {
    page = new DatapineFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
