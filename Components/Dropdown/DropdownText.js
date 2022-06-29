import {LitElement, html} from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from './DropdownStyles.js';
import '../Styles/TypeStyle.js';

class DropdownText extends LitElement {
  static styles = [DarkStyles,DefaultStyles, DropdownStyles,];

 static properties = {
   textLabel : { type: String, attribute: 'label' },
 };

 constructor () {
   super();
   this.textLabel = 'Default Value';
 }

  render() {
    return html`
    
    <div>
      <type-style label="${this.textLabel}" clsss="size-20px regular">${this.textLabel}</type-style>
      
    </div>
    `;  //code ? //run this : //run that;
  }
}
customElements.define('dropdown-text', DropdownText);




