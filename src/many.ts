import { e, client } from ".";
import { $json } from "../dbschema/edgeql-js/modules/std";
import { $expr_ForVar } from "../dbschema/edgeql-js/syntax/for";

type IngestableName =
    | "CalendarDate"
    | "GtfsArchive"
    | "Line"
    | "Route"
    | "RoutePattern"
    | "Service"
    | "Shape"
    | "Stop"
    | "Transfer"
    | "Trip";

type Ingestable = typeof e[IngestableName];
type IngestArgs<T extends Ingestable> = Parameters<typeof e.insert<T>>[1];

export const ingestMany = async <T extends Ingestable>(
    type: T,
    items: Record<string, any>[],
    cast: (item: $expr_ForVar<$json>) => IngestArgs<T>
) => {
    const query = e.params({ items: e.json }, (params) => {
        return e.for(e.json_array_unpack(params.items), (item) => {
            return e.insert(type, cast(item));
        });
    });
    return query.run(client, { items });
};
