import { htmlSafe } from '@ember/template';

import { helper } from '@ember/component/helper';

export function HtmlSafe(params) {
  return htmlSafe(params);
}

export default helper(HtmlSafe);