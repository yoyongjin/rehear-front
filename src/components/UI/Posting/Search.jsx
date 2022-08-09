import styled from "styled-components";

const Search = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <label htmlFor="search">
          <Magnifier src="img/magnifier.png" alt="돋보기" />
        </label>
        <SearchInput
          id="search"
          placeholder="궁금한 주제가 있으신가요? #태그를 검색해주세요 ex) #부동산"
        />
        <SearchBtn>검색</SearchBtn>
      </SearchForm>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  background-color: #fff;
  margin: 30px 0;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const Magnifier = styled.img`
  width: 60px;
  height: 60px;
  /* background-color: red; */
  transform: rotateY(180deg);
`;

const SearchInput = styled.input`
  width: 500px;
  height: 60px;
  margin: 0 10px;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #525252;

  border-radius: 5px;
  font-size: 12pt;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  width: 80px;
  height: 60px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background: #a2a9cd;
  color: #ffffff;
`;

export default Search;
