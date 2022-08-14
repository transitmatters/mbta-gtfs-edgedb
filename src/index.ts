import e from "../dbschema/edgeql-js";

export const getArchiveQuery = (id: string) => {
    return e.select(e.GtfsArchive, (archive) => {
        return { filter: e.op(archive.id, "=", e.uuid(id)) };
    });
};

// Uncomment this line to break TS:
// type ArchiveQuery = ReturnType<typeof getArchiveQuery>;
