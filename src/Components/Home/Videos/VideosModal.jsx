import { Fade, Modal } from "@material-ui/core";
import React from "react";
import "./Videos.css";
import CloseIcon from "@material-ui/icons/Close";
const VideosModal = ({ setShow, show, oneD }) => {
  const onclose = () => {
    setShow(false);
  };
  // var ondetoStr=oneD.toString()
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
            <div dangerouslySetInnerHTML={{ __html: oneD }} />
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
