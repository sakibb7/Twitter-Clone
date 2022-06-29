import { css } from '../../lit.js';

const GrayStyles = css`
  
    /* Light Theme Styles */

    :host(.default) svg path{
      fill:var(--gray-40);
    }


    :host(.default){
      background-color:var(--transparent-0);
      color:var(--gray-40);
    }

    :host(.default:hover){
      background-color:var(--gray-98);
    }

    :host(.default.active){
      background-color:var(--gray-95);
    }

    :host(.default.active) type-style{
      font-weight:var(--bold-weight);
    }

    /* Dark Theme Styles */

    :host(.dark) svg path{
      fill:var(--gray-100);
    }


    :host(.dark){
      background-color:var(--transparent-0);
      color:var(--gray-100);
    }

    :host(.dark:hover){
      background-color:var(--transparent-10);
    }

    :host(.dark.active){
      background-color:var(--transparent-25);
    }

`;

export default GrayStyles;