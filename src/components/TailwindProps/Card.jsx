import React from "react";

function Card({ userName = "Author", post = "Not assigned yet" }) {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-aut"
          src="https://images.pexels.com/photos/17395579/pexels-photo-17395579/free-photo-of-nature-soleil-couchant-coucher-de-soleil-coucher-du-soleil.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              Tailwind CSS is the only framework that Ive seen scale on large
              teams. Its easy to customize, adapts to any design, and the build
              size is tiny.
            </p>
          </blockquote>
          <figcaption>
            <div>{userName}</div>
            <div>{post}, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
