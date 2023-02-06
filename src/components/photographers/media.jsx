// Required
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// Context
import { LigthboxContext } from "../../context/ligthbox";

function Media({ medias, media, index }) {
  // States
  const [likes, setLikes] = useState(media.likes);
  const [likeStatus, setLikeStatus] = useState("0");

  // Use context
  const { toggleLigthbox } = useContext(LigthboxContext);

  // Add or Remove Like from Keyboard access
  function likeAccessibility(e) {
    if (e.key === "Enter") {
      like(e);
    }
  }

  // Add or Remove Like
  function like(e) {
    let target = document.getElementById("totalLikes");
    let totals = target.textContent;

    switch (e.target.getAttribute("like")) {
      case "0":
        setLikes(likes + 1);
        setLikeStatus(1);
        target.textContent = parseInt(totals) + 1;
        break;
      case "1":
        setLikes(likes - 1);
        setLikeStatus(0);
        target.textContent = parseInt(totals) - 1;
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col" tabIndex="-1">
      <Link
        tabIndex="0"
        className="media"
        aria-label={`Open in ligthbox - ${media.title}`}
        onClick={(e) => {
          toggleLigthbox(medias, index, e);
          setTimeout(() => {
            document.getElementsByClassName("ligthBox")[0].focus();
          }, 0);
        }}
        index={index}
      >
        <div className="bg-black max-h-72 overflow-hidden">
          {media.image ? (
            <img
              className="cursor-pointer h-full w-full object-cover object-center"
              src={require(`../../res/images/photographers/medias/${media.photographerId}/${media.imagemin}`)}
              alt={media.title}
            />
          ) : (
            <video
              controls
              className="h-full w-full object-cover object-center"
            >
              <source
                src={require(`../../res/images/photographers/medias/${media.photographerId}/${media.video}`)}
                type="video/mp4"
                alt={media.title}
              />
            </video>
          )}
        </div>
      </Link>
      <div className="flex flex-row justify-between">
        <div className="text-fePrimary text-xl font-medium mt-2">
          {media.title}
        </div>
        <div
          like={likeStatus}
          tabIndex="0"
          role="Button"
          aria-label="Add Or Remove like"
          className="text-fePrimary text-xl font-medium mt-2 cursor-pointer setLike"
          onClick={(e) => like(e)}
          onKeyDown={(e) => likeAccessibility(e)}
        >
          {likes} ♥
        </div>
      </div>
    </div>
  );
}

export default Media;
