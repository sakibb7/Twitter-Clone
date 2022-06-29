import { css } from '../../lit.js';

const DropdownStyles = css`
  :host,
    div{
      display:flex;
      flex-basis:100%;
      align-items:center;
      gap:16px;
      border-radius:0px;
      font-family: Barlow;
      font-size: 20px;
      font-weight: var(--regular-weight);
      line-height: 20px;
      letter-spacing: 0px;
      cursor:pointer;
      transition:all 100ms ease-out;
    }

    div{
        padding:16px;
    }

`;

export default DropdownStyles;