import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: "2021-10-21",
  useCdn: false
});