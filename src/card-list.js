import { LitElement, html, css } from 'lit';
import 'special-character-card-2023-ist26-hax-the-web/src/character-card.js';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'class-building-card/src/class-building-card.js';

class CardList extends LitElement {
  static properties = {};

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <character-card></character-card>
      <character-card
        name="Minnie Mouse"
        description="The wifey of Mickey Mouse"
        image="https://i.ebayimg.com/images/g/uNwAAOSwXyZjUtSc/s-l500.jpg"
        voice="Russi Taylor"
        accent-color="orange"
      ></character-card>
      <character-card
        name="Donald Duck"
        description="The best friend of Mickey Mouse"
        image="https://i.ebayimg.com/images/g/Il8AAOSwm9hgkB2p/s-l500.jpg"
        voice="Tony Anselmo"
        accent-color="blue"
      ></character-card>
      <character-card
        name="Goofy"
        description="The best friend of Mickey Mouse"
        image="https://i.ebayimg.com/images/g/~RQAAOSwrzdiaZjE/s-l500.jpg"
        voice="Bill Farmer"
        accent-color="green"
      ></character-card>
      <character-card
        name="Pluto"
        description="The best friend of Mickey Mouse"
        image="https://i.ebayimg.com/images/g/3~YAAOSw-45eMXua/s-l500.jpg"
        voice="Bill Farmer"
        accent-color="orange"
      ></character-card>
      <class-building-card></class-building-card>
      <class-building-card
        title="Waring Commons"
        description="This is a class building card"
        image="https://i.ebayimg.com/images/g/3~YAAOSw-45eMXua/s-l500.jpg"
        accent-color="orange"
      ></class-building-card>
      <class-building-card
        title="Pollock Testing Center"
        description="This is a class building card"
        image="https://i.ebayimg.com/images/g/3~YAAOSw-45eMXua/s-l500.jpg"
        accent-color="orange"
      ></class-building-card>
      <class-building-card
        title="White Building"
        description="This is a class building card"
        image="https://i.ebayimg.com/images/g/3~YAAOSw-45eMXua/s-l500.jpg"
        accent-color="orange"
      ></class-building-card>
      <class-building-card
        title="IM"
        description="This is a class building card"
        image="https://i.ebayimg.com/images/g/3~YAAOSw-45eMXua/s-l500.jpg"
        accent-color="orange"
      ></class-building-card>
    `;
  }
}

customElements.define('card-list', CardList);
