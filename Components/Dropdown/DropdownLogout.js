import {LitElement, html} from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import DropdownStyles from './DropdownStyles.js';
import '../Styles/TypeStyle.js';

class DropdownLogout extends LitElement {
  static styles = [DarkStyles,DefaultStyles, DropdownStyles,];

 

  render() {
    return html`
    
    <div>
      <type-style clsss="size-20px regular">Logout</type-style>
    </div>
    `;  //code ? //run this : //run that;
  }
}
customElements.define('dropdown-logout', DropdownLogout);




