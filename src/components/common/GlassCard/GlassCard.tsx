import React, { FC } from "react";
import classes from "./GlassCard.module.scss";


interface IGlassCard {
    children: React.ReactNode
}

const GlassCard: FC<IGlassCard> = (props: IGlassCard) => {
    return (
        <div className={classes.card}>{props.children}</div>
    )
}

export default GlassCard;