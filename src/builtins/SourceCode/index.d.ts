import { type Language } from 'prism-react-renderer';
import 'prismjs/themes/prism-coy.css';
import { type FC } from 'react';
import './index.less';
declare const SourceCode: FC<{
  children: string;
  lang: Language;
}>;
export default SourceCode;
