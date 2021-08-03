import { ReactNode } from "react";
import cns from 'classnames';
import './Compare.scss';
import { StarshipEntity } from "../../types/starships";
import { mapValues } from "lodash";

export function makeColumn<T>(data: T[], isBold?: boolean, idx?: number, comparedKeys?: string[]): ReactNode {
    return (
        <div className="compare__column" key={Math.random()}>
            {data.map((item, idx) => (
                <p key={idx} className={cns("compare__text", isBold && "compare__text_type_bold")}>{item}</p>
            ))}
        </div>
    )
}

export const getAssignedStarships = (starships: StarshipEntity[]) => {
    return mapValues(starships[0], function(value, key) {
        return [value, starships[1][key as keyof StarshipEntity]]
    });;
}