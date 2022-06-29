import {LitElement, html, css} from '../../lit.js';
import BorderStyle from './BorderStyle.js'

class HorizontalBorder extends LitElement {
  static styles = [BorderStyle];

  render() {
    return html`
    
    <svg width="100%" height="1px" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="1px" fill="#F2F2F2"/>
</svg>
    `;  //code ? //run this : //run that;
  }
}
customElements.define('horizontal-border', HorizontalBorder);




