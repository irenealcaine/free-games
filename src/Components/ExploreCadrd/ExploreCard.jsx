import "./ExploreCard.css";
import axios from "axios";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const ExploreCard = ({ id, name, image, genre, link, year, ratingMean, ratingCount, description, screenshots }) => {
    return (
        <div key={id} className={`explore-card`}>
            <h2>{name}</h2>
            <img src={image} className={`explore-image`}/>
            <p>{genre}</p>
            <Button href={link} value={"Link"} />
            <Button color={"secondary"} to={`/game-details/${id}`} value={"Details"} />
            <p>{year}</p>
            <p>{ratingMean} - {ratingCount}</p>
            {description ? <p>{description}</p> : null}
            {screenshots
                ? <div>
                    <h3>Screenshots</h3>
                    <div className={`explore-screenshots`}>
                    {screenshots.map((image) => (
                        <img src={image} />
                    ))}
                    </div>
                </div>
                : null}
        </div>
    );
};

export default ExploreCard;