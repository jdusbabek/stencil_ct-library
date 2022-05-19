import { newSpecPage } from '@stencil/core/testing';
import { ButtonComponent } from '../button-component';

describe('button-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonComponent],
      html: `<button-component></button-component>`,
    });
    expect(page.root).toEqualHtml(`
      <button-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-component>
    `);
  });
});
