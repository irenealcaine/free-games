import "./ExploreCard.css";
import axios from "axios";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const ExploreCard = ({ id, name, image, genre, link, year, ratingMean, ratingCount, description, screenshots, adult }) => {
    return (
        <div key={id} className={`explore-card`}>
            <div className={`thumb`}>
                <img src={image} className={`thumb-img`} />
                <div className={`badges`}>
                    <p className={`badge genre`}>{genre}</p>
                    <p className={`badge year`}>{year}</p>

                </div>
            </div>

            <div className={`explore-body`}>
                <h2 className={`title`}>{name}</h2>
                <p className="meta">
                    <span className="rating" aria-label={`Valoración media ${Math.round(ratingMean * 10) / 10}`}>
                        ★ {(Math.round(ratingMean * 10) / 10).toFixed(1)} <small>({ratingCount})</small>
                    </span>
                    {adult && <span className="adult">+18</span>}
                </p>

                <div className="screenshots" aria-hidden="false">
                    {screenshots?.slice(0, 6).map((s, i) => (
                        <img key={i} src={s} alt={`${name} screenshot ${i + 1}`} loading="lazy" className="shot" />
                    ))}
                </div>

                <p className="desc">{description ?? "Descripción no disponible."}</p>

            </div>
{/* 
            <Button href={link} value={"Link"} />
            <Button color={"secondary"} to={`/game-details/${id}`} value={"Details"} /> */}

        </div>
    );
};

export default ExploreCard;