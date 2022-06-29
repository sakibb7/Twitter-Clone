import {LitElement, html} from '../../lit.js';
import PrimaryStyles from '../Styles/PrimaryStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class EmojiIcon extends LitElement {
    static styles = [PrimaryStyles,SidebarButtonStyles];
  render() {
    return html`
    <div>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17.0625C4.554 17.0625 0.9375 13.446 0.9375 9C0.9375 4.554 4.554 0.9375 9 0.9375C13.446 0.9375 17.0625 4.554 17.0625 9C17.0625 13.446 13.446 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625ZM9 12.8362C7.581 12.8362 6.27525 12.1238 5.508 10.9283C5.34 10.6673 5.41575 10.3208 5.6775 10.152C5.9385 9.9825 6.2865 10.059 6.4545 10.3215C7.01475 11.193 7.9665 11.7127 9.00075 11.7127C10.035 11.7127 10.9868 11.193 11.5478 10.3222C11.7158 10.0597 12.0638 9.98475 12.3248 10.1535C12.5873 10.3215 12.6623 10.6695 12.4943 10.9305C11.7255 12.126 10.4198 12.8392 9.00075 12.8392L9 12.8362ZM6.9465 8.202C7.5585 8.202 8.055 7.7055 8.055 7.0935C8.055 6.4815 7.5585 5.985 6.9465 5.985C6.3345 5.985 5.838 6.4815 5.838 7.0935C5.838 7.7055 6.3345 8.202 6.9465 8.202ZM11.0535 8.202C11.6655 8.202 12.162 7.7055 12.162 7.0935C12.162 6.4815 11.6655 5.985 11.0535 5.985C10.4415 5.985 9.945 6.4815 9.945 7.0935C9.945 7.7055 10.4415 8.202 11.0535 8.202Z" fill="#1D98F0"/>
</svg>

    </div>
    `;
  }
}
customElements.define('emoji-icon', EmojiIcon);