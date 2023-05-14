import React, {memo, useMemo} from "react";
import Style from "./Cards.module.css";
import FestivalsImg from "./../../image/festivals.png";
import SportImg from "./../../image/sport.png";
import ExhibitionsImg from "./../../image/exhibitions.jpg";
import ArtImg from "./../../image/art.jpg";
import CitylifeImg from "./../../image/citylife.jpg"
import FamilyImg from "./../../image/family.jpg"
import FestivalsSVG from "./../../image/festivals_svg.svg";
import SportSVG from "./../../image/sport_svg.svg";
import ExhibitionsSVG from "./../../image/exhibitions_svg.svg";
import ArtSVG from "./../../image/art_svg.svg";
import CitylifeSVG from "./../../image/citylife_svg.svg";
import FamilySVG from "./../../image/family_svg.svg";

const GridCard = (props) => {
    return (
        <a href={props.link} className={Style.GridCard}>
            <div>
                <img alt="" src={props.image} />
                <div>
                    <img alt="" src={props.imageSVG} />
                </div>
            </div>
            <h4>{props.text}</h4>
        </a>
    );
};

const MemoizedGridCard = memo(GridCard);


export const Category = () => {
    const categories = useMemo(() => [
        {
            link: "/festivals",
            image: FestivalsImg,
            imageSVG: FestivalsSVG,
            text: "Фестивали культуры и праздники города"
        },
        {
            link: "/sport",
            image: SportImg,
            imageSVG: SportSVG,
            text: "Спортивные события и соревнования города"
        },
        {
            link: "/exhibitions",
            image: ExhibitionsImg,
            imageSVG: ExhibitionsSVG,
            text: "Профессиональные конференции и выставки города"
        },
        {
            link: "/art",
            image: ArtImg,
            imageSVG: ArtSVG,
            text: "Художественные выставки и галереи города"
        },
        {
            link: "/citylife",
            image: CitylifeImg,
            imageSVG: CitylifeSVG,
            text: "События и фестивали, отражающие культуру и историю города"
        },
        {
            link: "/family",
            image: FamilyImg,
            imageSVG: FamilySVG,
            text: "Детские развлечения и мероприятия города"
        }
    ], []);


    return (
        <div className={Style.GridDiv}>
            {categories.map((category) => (
                <MemoizedGridCard key={category.link} {...category} />
            ))}
        </div>
    );
};