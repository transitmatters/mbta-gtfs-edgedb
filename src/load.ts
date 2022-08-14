import fs from "fs";
import path from "path";
import tmp from "tmp";
import AdmZip from "adm-zip";
import { parse } from "csv-parse/sync";

export type Row = Record<string, string>;

const uncompressArchiveToTmpDirectory = (archivePath: string) => {
    const { name: tmpDir } = tmp.dirSync();
    const [archivePrettyName] = path.basename(archivePath).split(".");
    const dirPath = path.join(tmpDir, archivePrettyName);
    const zip = new AdmZip(archivePath);
    zip.extractAllTo(dirPath);
    return dirPath;
};

const loadCsv = <T extends Row>(filePath: string): T[] => {
    const contents = fs.readFileSync(filePath);
    return parse(contents, { delimiter: ",", columns: true });
};

export const createGtfsLoader = (archivePath: string) => {
    const basePath = uncompressArchiveToTmpDirectory(archivePath);
    console.log(basePath);

    const resolvePath = (filename: string) => path.join(basePath, filename + ".txt");

    const reader =
        <T extends Row>(filename: string) =>
        () =>
            loadCsv<T>(resolvePath(filename));

    return {
        basePath,
        routes: reader("routes"),
        routePatterns: reader("route_patterns"),
        trips: reader("trips"),
        stops: reader("stops"),
        calendar: reader("calendar"),
        calendarAttributes: reader("calendar_attributes"),
        stopTimes: reader("stop_times"),
        transfers: reader("transfers"),
        calendarDates: reader("calendar_dates"),
        feedInfo: reader("feed_info"),
    };
};

export type GtfsLoader = ReturnType<typeof createGtfsLoader>;
