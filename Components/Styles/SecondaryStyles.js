import { css } from '../../lit.js';

const SecondaryStyles = css`
  
    /* Secondary Styles */

    :host(.default) svg path{
      fill:var(--primary-50);
    }


    :host(.default){
      background-color:var(--secondary-98);
      color:var(--secondary-15);
    }

    :host(.default:hover){
      background-color:var(--Secondary-95);
    }

`;

export default SecondaryStyles;