export default interface BadgeModel {
    id: string;
    name_fr: string;
    name_en: string;
    description_fr: string;
    description_en: string;
    image: string;
    is_extra: boolean;
    rating_count: number;
}