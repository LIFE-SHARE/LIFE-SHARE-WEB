import * as React from "react";

import * as S from "./style";
import { searchIcon } from "./../../assets";

const SearchBar: React.FC = () => {
  const [keyword, setKeyword] = React.useState<string>("");

  return (
    <S.SearchBarContainer>
      <S.SearchBarInput
        placeholder="지역을 검색하세요. ex) 대구"
        value={keyword}
        onChange={e => {
          setKeyword(e.target.value);
        }}
      />
      <S.SearchBarSearchIcon src={searchIcon} />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
