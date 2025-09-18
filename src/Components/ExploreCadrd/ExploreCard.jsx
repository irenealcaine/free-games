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
      </div>

      <div className={`explore-body`}>
        <h2>{name}</h2>
        <p className="meta">
          <span className="rating">
            ⭐ {Math.round(ratingMean * 100)} <small>({ratingCount})</small>
          </span>
        </p>

        <div className="screenshots" aria-hidden="false">
          {screenshots?.slice(0, 6).map((s, i) => (
            <img
              key={i}
              src={s}
              alt={`${name} screenshot ${i + 1}`}
              loading="lazy"
              className="shot"
            />
          ))}
        </div>

        <p className="desc">{description ?? "Descripción no disponible."}</p>
      </div>

      <Button href={link} value={"Link"} />
      <Button
        color={"secondary"}
        to={`/explore-game-details/${id}`}
        value={"Details"}
      />
    </div>
  );
};

export default ExploreCard;
