import { type useSiteSearch } from 'dumi';
import { type FC } from 'react';
import './index.less';
declare type ISearchResult = ReturnType<typeof useSiteSearch>['result'];
declare const SearchResult: FC<{
  data: ISearchResult;
  loading: boolean;
}>;
export default SearchResult;
