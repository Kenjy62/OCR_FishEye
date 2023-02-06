// Required
import { Link } from "react-router-dom";
import { useState } from "react";

// JSON Data
import data from "../datas/photographers.json";

function Photographer(props) {
  // State
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={`/photographer/${data.photographers[props.index].id}`}>
        <div>
          {loaded ? null : (
            <div className="w-48 h-48 rounded-full object-cover shadow-lg cursor-pointer" />
          )}
          <img
            className="w-48 h-48 rounded-full object-cover shadow-lg cursor-pointer"
            style={loaded ? {} : { display: "none" }}
            src={require(`../res/images/photographers/pictures/${
              data.photographers[props.index].portrait
            }`)}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <h2 className="text-feSecondary text-xl text-center">
          {data.photographers[props.index].name}
        </h2>
      </Link>
      <span className="text-fePrimary text-lg">
        {data.photographers[props.index].city},
        {data.photographers[props.index].country}
      </span>
      <span className="text-base">
        {data.photographers[props.index].tagline}
      </span>
      <span className="text-sm text-feSecondaryGray">
        {data.photographers[props.index].price}£/jour
      </span>
    </div>
  );
}

export default Photographer;
