import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackDrop = (props) => {
  return <BackDropContainer onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalContainer>
      <p>사용가능한 </p>
      <OkBtn>OK</OkBtn>
    </ModalContainer>
  );
};

const DuplicatedModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50px;
  left: 50%;
  z-index: 20;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: yellow;
  border: none;
  border-radius: 7px;
  width: 300px;
  height: 150px;
`;

const OkBtn = styled.button`
  width: 90%;
`;

export default DuplicatedModal;
