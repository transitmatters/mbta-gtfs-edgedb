import { e } from ".";

import { createGtfsLoader } from "./load";
import { ingestFeedInfo, ingestServices, ingestCalendarDates } from "./ingesters";
import { ArchiveQuery } from "./types";

const {
    argv: {
        _: [archivePath],
    },
    // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("yargs");

export const getArchiveQuery = (id: string) => {
    return e.select(e.GtfsArchive, (archive) => {
        return { filter: e.op(archive.id, "=", e.uuid(id)) };
    });
};

export const main = async () => {
    const loader = createGtfsLoader(archivePath);
    const archiveId = await ingestFeedInfo(loader);
    const archiveQuery = getArchiveQuery(archiveId);
    await ingestCalendarDates(loader, archiveQuery);
};

main();
