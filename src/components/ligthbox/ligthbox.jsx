// Required
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { LigthboxContext } from "../../context/ligthbox";

function Ligthbox() {
  // Keyboard Accessibility
  document.onkeydown = (e) => {
    e = e || window.event;

    if ((e.target.id === "closeLigthbox") & (e.key === "Enter")) {
      toggleLigthbox(null, null, e);
      let targets = document.querySelectorAll("a.media");
      targets[current].focus();
    }

    if (e.key === "ArrowLeft") {
      switchMedia("prev");
    } else if (e.key === "ArrowRight") {
      switchMedia("next");
    } else if (e.key === "Escape" && isOpen) {
      toggleLigthbox(null, null, e);
      setTimeout(() => {
        let targets = document.querySelectorAll("a.media");
        targets[current].focus();
      });
    }
  };

  // Use Context
  const { isOpen, toggleLigthbox, mediasList, current, switchMedia } =
    useContext(LigthboxContext);

  return isOpen ? (
    <div className="absolute w-full bg-white text-black top-0 h-[100vh] z-50 sm:p-0 md:p-5 lg:p-40">
      <div className="flex flex-row h-full justify-center items-center gap-4 m-auto sm:w-[100%] md:w-[100%] lg:w-[70%]">
        <Link
          aria-label="previous"
          className="ligthBox m-auto"
          onClick={(e) => switchMedia("prev", e)}
        >
          <div className=" m-auto flex justify-center">
            <i className="fa-solid fa-arrow-left text-fePrimary text-4xl"></i>
          </div>
        </Link>
        <div className="w-full h-full m-auto flex flex-col justify-center">
          {mediasList[current].image ? (
            <img
              alt={mediasList[current].title}
              className="h-full object-cover"
              src={require(`../../res/images/photographers/medias/` +
                mediasList[current].photographerId +
                `/` +
                mediasList[current].image)}
            />
          ) : (
            <video
              controls
              className="h-full w-full object-cover object-center"
            >
              <source
                src={require(`../../res/images/photographers/medias/${mediasList[current].photographerId}/${mediasList[current].video}`)}
                type="video/mp4"
              />
            </video>
          )}
          <span>{mediasList[current].title}</span>
        </div>
        <div className=" flex h-full justify-center">
          <Link
            aria-label="close ligthbox"
            className="absolute m-auto"
            id="closeLigthbox"
          >
            <i
              className="fa-solid fa-xmark text-fePrimary text-4xl"
              onClick={(e) => toggleLigthbox(null, null, e)}
            ></i>
          </Link>
          <Link
            aria-label="next"
            className="m-auto"
            onClick={(e) => switchMedia("next", e)}
          >
            <i className="fa-solid fa-arrow-right text-fePrimary text-4xl"></i>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}

export default Ligthbox;
