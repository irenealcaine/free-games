import "./ExploreCard.css";
import axios from "axios";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";

const ExploreCard = ({
  id,
  name,
  image,
  genre,
  link,
  year,
  ratingMean,
  ratingCount,
  description,
  screenshots,
  adult,
}) => {
  return (
    <div key={id} className={`explore-card`}>
      <div className={`thumb`}>
        <img src={image} className={`thumb-img`} />
        <div className={`badges`}>
          <Tag tag={genre} />
          <Tag tag={year} />
          {adult && <Tag tag={"+18"} color={"red"} />}
        </div>
        <div className="rate">
          <p className={`meta`} style={{ "--percent": `${ratingMean * 100}` }}>
            <span className="rating">{Math.round(ratingMean * 100)}</span>
          </p>
        </div>
      </div>

      <div className={`explore-body`}>
        <h2>{name}</h2>

        <p className="desc">{description ?? null}</p>

        <div className="screenshots">
          {screenshots?.map((s, i) => (
            <img
              key={i}
              src={s}
              alt={`${name} screenshot ${i + 1}`}
              loading="lazy"
              className="shot"
            />
          ))}
        </div>
        <Button href={link} value={"Link"} />
        <Button
          color={"secondary"}
          to={`/explore-game-details/${id}`}
          value={"Details"}
        />
      </div>
    </div>
  );
};

export default ExploreCard;
