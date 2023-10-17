import BadgeModel from "./badge.model.ts";

export default interface RatingModel {
    one_stars: number;
    two_stars: number;
    three_stars: number;
    four_stars: number;
    five_stars: number;
    average: number;
    total: number;
    badges: Array<BadgeModel>;
}