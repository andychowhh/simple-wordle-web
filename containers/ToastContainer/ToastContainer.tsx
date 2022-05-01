import React from "react";

import { ToastContainer as Container, Zoom, toast } from "react-toastify";

export const showToast = (text: string): void => {
  toast(text, {
    autoClose: false,
    style: {
      backgroundColor: "black",
      color: "#ffffff",
      width: "150px",
      height: "30px",
      whiteSpace: "nowrap",
    },
  });
};

function ToastContainer({ children }: { children: JSX.Element }) {
  return (
    <>
      <Container
        transition={Zoom}
        position="top-center"
        autoClose={200}
        hideProgressBar={true}
        draggable={false}
        closeButton={false}
        style={{
          transform: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
          left: "50%",
          right: "50%",
          textAlign: "center",
          fontWeight: "700",
        }}
      />
      {children}
    </>
  );
}

export default ToastContainer;
