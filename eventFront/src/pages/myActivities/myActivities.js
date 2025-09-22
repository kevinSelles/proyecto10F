import "./MyActivities.css";

import { getActivities } from "../activities/activities";

export async function getMyActivities(section) {
  await getActivities(section, true);
};