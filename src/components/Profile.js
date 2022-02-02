import React from "react";
import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <div className="container py-5">
      <Helmet>
        <title>Profile : User</title>
      </Helmet>
      <h1>The page of the personal profile</h1>
      <p className="px-3 py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum,
        iusto praesentium dolor consequuntur corrupti modi quam omnis eius
        cupiditate soluta accusantium laudantium eos voluptas voluptatum, quos
        iure perspiciatis maxime.
      </p>
      <hr />
      <p className="px-3 py-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas est
        adipisci itaque cupiditate fugit labore modi sint quaerat vitae eveniet
        alias aperiam repellendus aliquid, odio magni cum nulla, quas
        consequatur?
      </p>
    </div>
  );
};

export default Profile;
