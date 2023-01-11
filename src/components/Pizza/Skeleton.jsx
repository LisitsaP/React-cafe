import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="143" cy="139" r="125" />
    <rect x="1" y="280" rx="10" ry="10" width="280" height="20" />
    <rect x="1" y="316" rx="10" ry="10" width="280" height="88" />
    <rect x="3" y="418" rx="10" ry="10" width="95" height="30" />
    <rect x="128" y="418" rx="24" ry="24" width="152" height="44" />
  </ContentLoader>
);

export default Skeleton;
