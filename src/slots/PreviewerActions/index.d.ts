import { type IPreviewerProps } from 'dumi';
import { type FC } from 'react';
import './index.less';
export interface IPreviewerActionsProps extends IPreviewerProps {
  /**
   * disabled actions
   */
  disabledActions?: ('CSB' | 'CODEPEN' | 'STACKBLITZ' | 'EXTERNAL')[];
}
declare const PreviewerActions: FC<IPreviewerActionsProps>;
export default PreviewerActions;
