import { Fade, Modal } from "@material-ui/core";
import React from "react";
import "./Videos.css";
import CloseIcon from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
const VideosModal = ({ setShow, show, handleClick, handleClose }) => {
  const onclose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="Video-modal"
        open={show}
        style={{ border: "none", outline: "none" }}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className="">
            <iframe
              style={{
                border: "none",
                outline: "none",
                width: "90vw",
                height: "84vh",
              }}
              src="https://www.youtube.com/embed/hiG4kmPkCNo"
              title="YouTube video player"
              frameborder="none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="Cres" onClick={onclose}>
              <CloseIcon />
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default VideosModal;
