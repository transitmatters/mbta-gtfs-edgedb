import { e } from "..";
import { GtfsLoader } from "../load";
import { ingestMany } from "../many";
import { ArchiveQuery } from "../types";

const exceptionTypeMap = {
    "1": "ServiceAdded",
    "2": "ServiceRemoved",
} as const;

type GtfsExceptionType = keyof typeof exceptionTypeMap;

const prepareCalendarDates = (loader: GtfsLoader) => {
    const rows = loader.calendarDates();
    return rows.map((row) => {
        const { date, exception_type, service_id } = row;
        return {
            date,
            service_id,
            exception_type: exceptionTypeMap[exception_type as GtfsExceptionType],
        };
    });
};

export const ingestCalendarDates = (loader: GtfsLoader, archive: ArchiveQuery) => {
    const preparedCalendarDates = prepareCalendarDates(loader);
    return ingestMany(e.CalendarDate, preparedCalendarDates, (entry) => {
        const { date, exception_type, service_id } = entry;
        return {
            date: e.cast(e.cal.local_date, date),
            exception_type: e.cast(e.ServiceExceptionType, exception_type),
            service_id: e.cast(e.str, service_id),
            archive,
        };
    });
};
