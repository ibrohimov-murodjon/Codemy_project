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
<<<<<<< HEAD
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

          <div dangerouslySetInnerHTML={{__html: oneD}} />

=======
            <div dangerouslySetInnerHTML={{ __html: oneD }} />
>>>>>>> 6ca8e9d28c19ded5c3a01326da6491c0d2644a52
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
