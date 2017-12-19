import { LibCMRPage } from './app.po';

describe('lib-cmr App', () => {
  let page: LibCMRPage;

  beforeEach(() => {
    page = new LibCMRPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
