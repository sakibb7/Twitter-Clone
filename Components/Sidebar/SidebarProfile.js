import {LitElement, html} from '../../lit.js';
import DarkStyles from '../Styles/DarkStyles.js';
import DefaultStyles from '../Styles/DefaultStyles.js';
import SidebarButtonStyles from './SidebarButtonStyles.js';
import '../Styles/TypeStyle.js';

class sidebarProfile extends LitElement {
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
    <path d="M12 11.816C13.355 11.816 14.872 11.666 15.84 10.56C16.654 9.63001 16.918 8.19201 16.646 6.16801C16.266 3.34301 14.529 1.65601 12 1.65601C9.47103 1.65601 7.73403 3.34301 7.35403 6.17001C7.08203 8.19201 7.34603 9.63001 8.16003 10.56C9.12803 11.667 10.645 11.816 12 11.816ZM8.84003 6.36801C9.00203 5.16801 9.62703 3.15601 12 3.15601C14.373 3.15601 14.998 5.16901 15.16 6.36801C15.367 7.91801 15.217 8.99501 14.71 9.57301C14.255 10.093 13.444 10.316 12 10.316C10.556 10.316 9.74503 10.093 9.29003 9.57301C8.78303 8.99501 8.63303 7.91701 8.84003 6.36801ZM20.28 19.236C19.403 15.71 15.998 13.246 12 13.246C8.00203 13.246 4.59703 15.71 3.72003 19.236C3.54803 19.928 3.69203 20.636 4.11503 21.176C4.52303 21.696 5.15503 21.996 5.84803 21.996H18.152C18.845 21.996 19.477 21.696 19.885 21.176C20.309 20.636 20.452 19.929 20.279 19.236H20.28ZM18.704 20.252C18.578 20.412 18.388 20.498 18.152 20.498H5.84803C5.61303 20.498 5.42203 20.413 5.29603 20.252C5.15903 20.078 5.11603 19.84 5.17603 19.598C5.88603 16.743 8.69303 14.748 12 14.748C15.307 14.748 18.114 16.742 18.824 19.598C18.884 19.84 18.841 20.078 18.704 20.252Z" fill="black"/>
    </svg>
    `;
  }
  
  svgFilled() {
    return html`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.225 12.165C10.869 12.165 9.35301 12.015 8.38501 10.909C7.57101 9.979 7.30801 8.541 7.58001 6.517C7.96001 3.691 9.69601 2.004 12.226 2.004C14.756 2.004 16.493 3.691 16.872 6.517C17.144 8.541 16.88 9.977 16.066 10.909C15.096 12.015 13.581 12.164 12.226 12.164L12.225 12.165ZM18.074 22.015H6.37601C5.71301 22.015 5.12601 21.735 4.72601 21.229C4.30401 20.695 4.15001 19.959 4.31601 19.261C5.15001 15.731 8.40201 13.264 12.224 13.264C16.046 13.264 19.298 15.73 20.134 19.261C20.298 19.959 20.144 20.695 19.722 21.228C19.322 21.733 18.737 22.013 18.074 22.013V22.015Z" fill="black"/>
    </svg>
    `;
  }

  render() {
    return html`
    
    <div @click=${this.switchToggle}>
    ${this.toggle ? this.svgOutline() : this.svgFilled()}
    
    <type-style clsss="size-20px regular">Profile</type-style>
    </div>
    `;  //code ? //run this : //run that;
  }

  switchToggle(){
    this.toggle = !this.toggle;
  }
}
customElements.define('sidebar-profile', sidebarProfile);




