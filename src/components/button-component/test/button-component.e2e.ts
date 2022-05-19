import { newE2EPage } from '@stencil/core/testing';

describe('button-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-component></button-component>');

    const element = await page.find('button-component');
    expect(element).toHaveClass('hydrated');
  });
});
