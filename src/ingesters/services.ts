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

const prepareServices = (loader: GtfsLoader) => {
    const calendarRows = loader.calendar();
    const calendarAttributesRows = loader.calendarAttributes();
    return calendarRows.map((row) => {
        const calendarAttributesRow = calendarAttributesRows.find(
            (cr) => cr.service_id === row.service_id
        )!;
        return { ...row, ...calendarAttributesRow };
    });
};

export const ingestServices = async (loader: GtfsLoader, archive: ArchiveQuery) => {
    const serialized = prepareServices(loader);
};

// console.log(ids);
// return;

// await ingestMany(e.Service, serialized, (entry) => {
//     const {
//         calendar: {
//             service_id,
//             start_date,
//             end_date,
//             monday,
//             tuesday,
//             wednesday,
//             thursday,
//             friday,
//             saturday,
//             sunday,
//         },
//         calendarAttributes: {
//             service_description,
//             service_schedule_name,
//             service_schedule_type,
//             service_schedule_typicality,
//             rating_start_date,
//             rating_end_date,
//             rating_description,
//         },
//     } = entry;
//     const service_days = e.literal(
//         e.tuple([e.bool, e.bool, e.bool, e.bool, e.bool, e.bool, e.bool]),
//         [monday, tuesday, wednesday, thursday, friday, saturday, sunday].map(
//             (x) => x === "1"
//         ) as any
//     );
//     return {
//         archive: archiveQuery,
//         service_id,
//         service_days,
//         description: service_description,
//         schedule_name: service_schedule_name,
//         schedule_type: e.literal(e.ScheduleType, service_schedule_type as any),
//         schedule_typicality:
//             scheduleTypicalityMap[service_schedule_typicality as GtfsScheduleTypicality],
//         rating_description,
//         rating_start_date: e.cal.local_date(rating_start_date),
//         rating_end_date: e.cal.local_date(rating_end_date),
//         start_date: e.cal.local_date(start_date),
//         end_date: e.cal.local_date(end_date),
//         calendar_dates: e.select(e.CalendarDate),
//     };
// });
