import { css } from '../../lit.js';

const BorderStyle = css`
  :host{
      display:flex;
    }
    :host(.dark) svg rect{
      fill:var(--secondary-25);
    }

    :host(.default) svg rect{
      fill:var(--gray-95);
    }
`;

export default BorderStyle;