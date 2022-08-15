import { e } from "..";
import { GtfsLoader } from "../load";
import { ingestMany } from "../many";
import { ArchiveQuery } from "../types";

const scheduleTypicalityMap = {
    "0": "NotDefined",
    "1": "Typical",
    "2": "Extra",
    "3": "Reduced",
    "4": "MajorChanges",
    "5": "MajorReductions",
} as const;

const serviceDaysType = e.tuple([e.bool, e.bool, e.bool, e.bool, e.bool, e.bool, e.bool]);

const prepareServices = (loader: GtfsLoader) => {
    const calendarRows = loader.calendar();
    const calendarAttributesRows = loader.calendarAttributes();
    return calendarRows.map((row) => {
        const calendarAttributesRow = calendarAttributesRows.find(
            (cr) => cr.service_id === row.service_id
        )!;
        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = row;
        const { service_schedule_typicality } = calendarAttributesRow;
        const service_days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday].map(
            (x) => x === "1"
        );
        return {
            ...row,
            ...calendarAttributesRow,
            service_days,
            service_schedule_typicality: scheduleTypicalityMap[service_schedule_typicality],
        };
    });
};

const castToOptionalDate = (date: any) => {
    const dateToString = e.cast(e.str, date);
    const dateToLocalDate = e.cast(e.cal.local_date, date);
    const dateIsEmpty = e.op(dateToString, "=", e.str(""));
    return e.op(e.cast(e.cal.local_date, e.set()), "if", dateIsEmpty, "else", dateToLocalDate);
};

export const ingestServices = async (loader: GtfsLoader, archive: ArchiveQuery) => {
    const prepared = prepareServices(loader);
    await ingestMany(e.Service, prepared, (entry) => {
        const {
            service_id,
            start_date,
            end_date,
            service_days,
            service_description,
            service_schedule_name,
            service_schedule_type,
            service_schedule_typicality,
            rating_start_date,
            rating_end_date,
            rating_description,
        } = entry;
        return {
            archive,
            service_id: e.cast(e.str, service_id),
            service_days: e.cast(serviceDaysType, service_days),
            description: e.cast(e.str, service_description),
            schedule_name: e.cast(e.str, service_schedule_name),
            schedule_type: e.cast(e.ScheduleType, service_schedule_type),
            schedule_typicality: e.cast(e.ScheduleTypicality, service_schedule_typicality),
            rating_description: e.cast(e.str, rating_description),
            rating_start_date: castToOptionalDate(rating_start_date),
            rating_end_date: castToOptionalDate(rating_end_date),
            start_date: e.cast(e.cal.local_date, start_date),
            end_date: e.cast(e.cal.local_date, end_date),
            calendar_dates: e.select(e.CalendarDate, (calendarDate) => {
                return {
                    filter: e.op(
                        e.op(calendarDate.archive, "=", archive),
                        "and",
                        e.op(calendarDate.service_id, "=", e.cast(e.str, service_id))
                    ),
                };
            }),
        };
    });
};
