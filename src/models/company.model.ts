import LocationModel from "./location.model.ts";
import JobOfferModel from "./job-offer.model.ts";
import ActivitySectorModel from "./activity-sector.model.ts";
import EmployerModel from "./employer.model.ts";

export default interface CompanyModel {
    id: string;
    place_id: string;
    name: string;
    address: string;
    employer: EmployerModel;
    location: LocationModel;
    jobOffers: JobOfferModel[];
    sectors: ActivitySectorModel[];
}