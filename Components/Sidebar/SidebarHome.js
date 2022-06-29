import {LitElement, html} from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from './SidebarButtonStyles.js';
import '../Styles/TypeStyle.js';

class SidebarHome extends LitElement {
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
    <path d="M22.46 7.56999L12.357 2.11499C12.134 1.99499 11.867 1.99499 11.644 2.11499L1.54299 7.56999C1.17899 7.76699 1.04299 8.22199 1.23999 8.58699C1.37499 8.83699 1.63399 8.97999 1.89999 8.97999C2.01999 8.97999 2.14299 8.94999 2.25599 8.88999L3.07099 8.44999L4.69999 19.963C4.91399 21.178 6.00799 22.025 7.35799 22.025H16.64C17.992 22.025 19.085 21.177 19.303 19.938L20.929 8.44799L21.747 8.88999C22.111 9.08299 22.567 8.95 22.764 8.586C22.96 8.22299 22.824 7.76799 22.46 7.56999ZM17.822 19.703C17.715 20.309 17.119 20.525 16.642 20.525H7.35999C6.87999 20.525 6.28499 20.309 6.18199 19.727L4.47999 7.68999L12 3.62799L19.522 7.68799L17.822 19.703ZM8.21999 12.184C8.21999 14.268 9.91499 15.964 12 15.964C14.085 15.964 15.78 14.268 15.78 12.184C15.78 10.1 14.085 8.40399 12 8.40399C9.91499 8.40399 8.21999 10.1 8.21999 12.184ZM14.28 12.184C14.28 13.442 13.258 14.464 12 14.464C10.742 14.464 9.71999 13.442 9.71999 12.184C9.71999 10.926 10.742 9.904 12 9.904C13.258 9.904 14.28 10.926 14.28 12.184Z" fill="black"/>
    </svg>
    `;
  }
  
  svgFilled() {
    return html`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.58 7.35001L12.475 1.89701C12.178 1.73701 11.821 1.73701 11.525 1.89701L1.42502 7.35001C0.939018 7.61401 0.758018 8.22001 1.02002 8.70601C1.20002 9.04101 1.54502 9.23101 1.90002 9.23101C2.06002 9.23101 2.22402 9.19301 2.37502 9.11101L3.10902 8.71501L4.69902 19.965C4.91502 21.179 6.00902 22.027 7.35902 22.027H16.641C17.991 22.027 19.085 21.179 19.303 19.939L20.891 8.71401L21.628 9.11201C22.113 9.37501 22.72 9.19401 22.982 8.70801C23.245 8.22201 23.062 7.61501 22.578 7.35301L22.58 7.35001ZM12 15.435C10.205 15.435 8.75002 13.98 8.75002 12.185C8.75002 10.39 10.205 8.93501 12 8.93501C13.795 8.93501 15.25 10.39 15.25 12.185C15.25 13.98 13.795 15.435 12 15.435Z" fill="black"/>
    </svg>
    `;
  }

  render() {
    return html`
    
    <div @click=${this.switchToggle}>

    ${this.toggle ? this.svgOutline() : this.svgFilled()}
    <type-style clsss="size-20px regular">Home</type-style>
    </div>
    `;  //code ? //run this : //run that;
  }

  switchToggle(){
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-home', SidebarHome);




