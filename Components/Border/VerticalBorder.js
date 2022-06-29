import {LitElement, html, css} from '../../lit.js';
import BorderStyle from './BorderStyle.js'

class VerticalBorder extends LitElement {
  static styles = [BorderStyle];

  render() {
    return html`
    
    <div>
    <svg width="1px" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1px" height="100%" fill="#F2F2F2"/>
</svg>

      
    </div>
    `;  //code ? //run this : //run that;
  }
}
customElements.define('vertical-border', VerticalBorder);




