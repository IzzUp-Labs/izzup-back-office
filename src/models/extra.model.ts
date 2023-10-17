import ExtraJobRequestModel from "./extra-job-request.model.ts";
import ExtraTagModel from "./extra-tag.model.ts";

export default interface ExtraModel {
    id: string;
    address: string;
    requests: ExtraJobRequestModel[];
    tags: ExtraTagModel[];
}