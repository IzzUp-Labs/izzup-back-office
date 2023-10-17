export default interface JobOfferModel {
    id: string;
    job_title: string;
    job_description: string;
    price: number;
    spots: number;
    starting_date: Date;
    working_hours: number;
    is_available: boolean;
    acceptedSpots: number;
}