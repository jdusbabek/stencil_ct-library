import { Component, Host, h, Prop, EventEmitter, Event, Watch } from '@stencil/core';

@Component({
  tag: 'ct-button',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent {

  @Prop() text!: string

  @Prop() disabled = false

  @Event() btnClick: EventEmitter

  private clicked() {
    this.btnClick.emit()
  }

  componentWillLoad() {
    this.validateText(this.text)
  }

  @Watch('text')
  validateText(newValue: string) {
    const isBlank = typeof newValue !== 'string' || newValue === ''
    if (isBlank) {
      throw new Error('Text is a required property and cannot be empty')
    }
  }

  render() {
    return (
      <Host>
        <button disabled={this.disabled} onClick={() => this.clicked()}>
          <slot name="start"></slot>
          {this.text}
        </button>
        <slot></slot>
      </Host>
    );
  }

}
