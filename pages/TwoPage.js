class TwoPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("/");
  }
}

module.exports = TwoPage;
