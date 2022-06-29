import {LitElement, html} from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from './SidebarButtonStyles.js';
import '../Styles/TypeStyle.js';

class sidebarNotifications extends LitElement {
  static styles = [DarkStyles,DefaultStyles, SidebarButtonStyles,];

  static properties = {
    toggle : { type: Boolean},
  };

  constructor () {
    super();
    this.toggle = true;
  }

  svgOutline() {
    return html`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90599 18.782 5.65599 17.247 4.10299C15.872 2.70999 14.01 1.93999 12.005 1.92999H11.992C9.98798 1.93999 8.12597 2.70999 6.74997 4.10399C5.21597 5.65699 4.38197 7.90599 4.40397 10.438C4.44097 14.768 2.38397 16.405 2.30197 16.468C2.04197 16.661 1.93597 16.998 2.03697 17.306C2.13897 17.614 2.42697 17.821 2.74897 17.821H7.66897C7.77098 20.131 9.66597 21.981 11.999 21.981C14.332 21.981 16.225 20.131 16.326 17.821H21.248C21.57 17.821 21.858 17.615 21.958 17.307C22.061 17 21.955 16.662 21.695 16.469L21.697 16.468ZM12 20.478C10.495 20.478 9.26997 19.301 9.17197 17.82H14.828C14.728 19.3 13.505 20.48 12 20.48V20.478ZM4.37997 16.32C5.11997 15.188 5.92797 13.292 5.90397 10.424C5.88597 8.26399 6.54797 6.44199 7.81697 5.15699C8.90997 4.04999 10.397 3.43699 12 3.42999C13.603 3.43799 15.087 4.04999 16.18 5.15799C17.45 6.44299 18.113 8.26399 18.095 10.425C18.071 13.293 18.88 15.19 19.62 16.321H4.37997V16.32Z" fill="black"/>
    </svg>
    `;
  }
  
  svgFilled() {
    return html`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90501 18.782 5.65601 17.247 4.10401C15.872 2.71101 14.01 1.94001 12.005 1.93201H11.992C9.98798 1.94001 8.12597 2.71201 6.74997 4.10401C5.21597 5.65701 4.38297 7.90601 4.40397 10.437C4.44097 14.769 2.38397 16.404 2.30197 16.467C2.04197 16.661 1.93597 16.997 2.03697 17.305C2.13797 17.613 2.42697 17.82 2.74997 17.82H7.24397C7.34397 20.364 9.43198 22.407 12 22.407C14.568 22.407 16.655 20.364 16.756 17.82H21.25C21.574 17.82 21.86 17.612 21.962 17.305C22.064 16.998 21.957 16.661 21.697 16.468ZM12 20.408C10.534 20.408 9.34298 19.261 9.24398 17.82H14.756C14.656 19.26 13.466 20.407 12 20.407V20.408Z" fill="black"/>
    </svg>
    `;
  }

  render() {
    return html`
    
    <div @click=${this.switchToggle}>
    ${this.toggle ? this.svgOutline() : this.svgFilled()}
    <type-style clsss="size-20px regular">Notifications</type-style>
    </div>

    `;  //code ? //run this : //run that;
  }

  switchToggle(){
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-notifications', sidebarNotifications);




