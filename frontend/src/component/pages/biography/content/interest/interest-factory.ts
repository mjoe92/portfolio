import interestData from "./interest-data.json";
import { mapIcon } from "../icon";
import { Interest, InterestInput } from "./interest";

const interestsFactory = (input: InterestInput[]) => input.map(data => ({
    name: data.name,
    icons: data.icons.map(mapIcon)
}));

export const interests: Interest[] = interestsFactory(interestData);