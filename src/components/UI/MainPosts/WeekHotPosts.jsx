// import axios from "axios";
import React from "react";
import styled from "styled-components";
import LikeBtn from "./LikeBtn";
import PostCard from "./PostCards";

const WeekHotPosts = () => {
  // const [hotTitle, setHotTitle] = useState([]);
  // const [hotContent, setHotContent] = useState([]);

  // useEffect(() => {
  //   const fetchHotTitle = async () => {
  //     const getTitle = await axios.get("http://localhost:5000/posts");
  //     setHotTitle(getTitle.data[0].title);
  //   };
  //   fetchHotTitle();
  // }, []);
  // useEffect(() => {
  //   const fetchHotContent = async () => {
  //     const getContent = await axios.get("http://localhost:5000/posts");
  //     setHotContent(getContent.data[0].content);
  //   };
  //   fetchHotContent();
  // }, []);

  return (
    <PostSectionsContainer>
      <PostCard>
        <MainPostTitle>엔젤투자자와 투자유치건 대에서 이런 갈등</MainPostTitle>
        <PostContents>
          안녕하세요 현재 저는 반려동물을 위한 플랫폼을 운영하고 있습니다.
          이번에 좋은 기회로 저희에게 관심을 보여주신 엔젤투자자로부터 어쩌구
          저쩌구 블라블라
        </PostContents>
        <LikeBtn />
      </PostCard>
      <PostCard>
        <MainPostTitle>
          스타트업 초기에는 원래 다 이렇게 어려운가요?
        </MainPostTitle>
        <PostContents>
          이번에 제가 창업을 했는데 생각했던 것보다 힘들고 어려워서 다른 분들은
          어떻게 이겨냈는지 궁금해요. 저는 특히 세무 부분에 대해 무지하여 혼자
          다 하려고 하니 힘들었는데 그나마 리:
        </PostContents>
        <LikeBtn />
      </PostCard>
      <PostCard>
        <MainPostTitle>
          이번에 진행되는 정부지원사업 관련해 IR컨설팅
        </MainPostTitle>
        <PostContents>
          이번에 리:히어에서 진행하는 무료 컨설팅 받는 거 너무 큰 도움이
          되었습니다. 그런데 그 외 다른 것들도 컨설팅 받고 싶은데 혹시 함께
          지원하여 피드백을
        </PostContents>
        <LikeBtn />
      </PostCard>
      <PostCard>
        <MainPostTitle>
          이번에 진행되는 정부지원사업 관련해 IR컨설팅
        </MainPostTitle>
        <PostContents>
          이번에 리:히어에서 진행하는 무료 컨설팅 받는 거 너무 큰 도움이
          되었습니다. 그런데 그 외 다른 것들도 컨설팅 받고 싶은데 혹시 함께
          지원하여 피드백을
        </PostContents>
        <LikeBtn />
      </PostCard>
    </PostSectionsContainer>
  );
};

const PostSectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  /* background-color: lightyellow; */
`;

const MainPostTitle = styled.h2`
  font-size: 24pt;
  font-weight: bold;
  word-break: break-word;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* background-color: #ccc; */
`;

const PostContents = styled.p`
  font-size: 16pt;
  /* background-color: #ccc; */
  height: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

export default WeekHotPosts;
