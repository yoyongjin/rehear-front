import styled from "styled-components";

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchBtn>검색</SearchBtn>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  width: 500px;
  height: 40px;
  margin-top: 15px;
  padding-left: 10px;
  border: 1px #525252;
  border-style: solid none solid solid;
  border-radius: 5px;
  font-size: 14;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  width: 80px;
  height: 40px;
  margin-top: 15px;
  border: none;
  /* border: 1px #525252;
border-style: solid solid solid none; */
  border-radius: 0 5px 5px 0;
  background: #a2a9cd;
  color: #ffffff;
`;

export default Search;
