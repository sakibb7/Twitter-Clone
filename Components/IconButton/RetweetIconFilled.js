import {LitElement, html} from '../../lit.js';
import SuccessStyles from '../Styles/SuccessStyles.js';
import SidebarButtonStyles from '../Sidebar/SidebarButtonStyles.js';

class RetweetIconFilled extends LitElement {
    static styles = [SuccessStyles,SidebarButtonStyles];
  render() {
    return html`
    <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.64998C20.49 5.58198 18.807 3.89998 16.74 3.89998H10.89C10.476 3.89998 10.14 4.23598 10.14 4.64998C10.14 5.06398 10.476 5.39998 10.89 5.39998H16.74C17.98 5.39998 18.99 6.40998 18.99 7.64998V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67ZM13.112 18.95H7.25997C6.01997 18.95 5.00997 17.94 5.00997 16.7V6.45998L7.22997 8.67998C7.37797 8.82698 7.56997 8.89997 7.76197 8.89997C7.95397 8.89997 8.14597 8.82698 8.29197 8.67998C8.58497 8.38698 8.58497 7.91198 8.29197 7.61998L4.79197 4.11998C4.49897 3.82598 4.02397 3.82598 3.73197 4.11998L0.231975 7.61998C-0.0620254 7.91198 -0.0620254 8.38698 0.231975 8.67998C0.525975 8.97298 0.998975 8.97298 1.29197 8.67998L3.51197 6.45998V16.7C3.51197 18.768 5.19497 20.45 7.26197 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95Z" fill="#666666"/>
</svg>



    </div>
    `;
  }
}
customElements.define('retweet-icon-filled', RetweetIconFilled);