import { createClient } from "edgedb";

export const client = createClient();

export { default as e } from "../dbschema/edgeql-js";
export type { types } from "../dbschema/edgeql-js";
export type { GtfsLoader } from "./load";
