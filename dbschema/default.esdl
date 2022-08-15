module default {
    scalar type LocationType extending enum<Station, EntranceExit, GenericNode, BoardingArea>;

    scalar type WheelchairBoardingType extending enum<InheritFromParent, Accessible, NotAccessible>;

    scalar type WheelchairTransferType extending enum<NoInformation, Accessible, NotAccessible>;

    scalar type ListedRouteType extending enum<IncludeInPublicListing, DoNotIncludeInPublicListing>;

    scalar type PickupDropoffType extending enum<FlagStop, ContinuousDropOff>;

    scalar type TransferType extending enum<Recommended, Timed, RequiresMinimumTime, NotPossible>;

    scalar type ScheduleType extending enum<Weekday, Saturday, Sunday, Other>;

    scalar type ScheduleTypicality extending enum<
        NotDefined,
        Typical,
        Extra,
        Reduced,
        MajorChanges,
        MajorReductions
    >;

    scalar type ServiceExceptionType extending enum<ServiceAdded, ServiceRemoved>;

    scalar type RouteType extending enum<
        LightRail, 
        Subway, 
        Rail, 
        Bus, 
        Ferry, 
        # RIP
        TrolleyBus, 
        # LOL
        CableTram, 
        AerialLift, 
        Funicular, 
        Monorail
    >;

    scalar type RouteFareClass extending enum<
        LocalBus,
        InnerExpress,
        OuterExpress,
        RapidTransit,
        CommuterRail,
        Ferry,
        Free,
        Special
    >;

    scalar type RoutePatternTypicality extending enum<
        NotDefined,
        Typical,
        Deviation,
        HighlyAtypical,
        Diversion
    >;

    type GtfsArchive {
        required property publisher_name -> str;
        required property publisher_url -> str;
        required property lang -> str;
        required property start_date -> cal::local_date;
        required property end_date -> cal::local_date;
        required property version -> str;
        required property contact_email -> str;
        multi link routes := .<archive[is Route];
        multi link stops := .<archive[is Stop];
        multi link trips := .<archive[is Trip];
        multi link transfers := .<archive[is Transfer];
        multi link services := .<archive[is Service];
        multi link lines := .<archive[is Line];
    }

    type BelongsToArchive {
        required link archive -> GtfsArchive {
            on target delete delete source;
        }
    }

    type Route extending BelongsToArchive {
        multi link route_patterns -> RoutePattern;
        required property route -> str;
        required property agency_id -> str;
        required property route_type -> RouteType;
        required property route_sort_order -> str;
        property short_name -> str;
        property long_name -> str;
        property description -> str;
        property color -> str;
        property textColor -> str;
        property url -> str;
        # The following are experimental MBTA additions to GTFS
        required property fare_class -> RouteFareClass;
        property listed_route -> ListedRouteType;
        link line -> Line;
    }

    type RoutePattern extending BelongsToArchive {
        link route := .<route_patterns[is Route];
        required link representative_trip -> Trip;
        required property route_pattern_id  -> str;
        required property name -> str;
        required property typicality -> RoutePatternTypicality;
        required property sort_order -> str; 
        required property direction_id -> str;
        property time_desc -> str;
    }

    type Stop extending BelongsToArchive {
        multi link child_stops -> Stop;
        link parent_stop := .<child_stops[is Stop];
        required property stopId -> str;
        required property name -> str;
        required property location_type -> LocationType;
        required property wheelchair_boarding -> WheelchairBoardingType;
        property stop_code -> str;
        property description -> str;
        property lat-> decimal;
        property lon -> decimal;
        property zone_id -> str;
        property url -> str;
        property municipality -> str;
        # The following are experimental MBTA additions to GTFS
        property on_street -> str;
        property at_street -> str;
        property vehicle_type -> RouteType;
    }

    type Trip extending BelongsToArchive {
        multi link stop_times := .<trip[is StopTime];
        required link route -> Route;
        required link route_pattern -> RoutePattern;
        required link service -> Service;
        required link shape -> Shape;
        required property trip_id -> str;
        required property headsign -> str;
        required property direction_id -> str;
        required property wheelchair_accessible -> bool;
        required property bikes_allowed -> bool;
        property short_name -> str;
        property block_id -> str;
        # The following are experimental MBTA additions to GTFS
        property route_type -> RouteType;
    }

    type Shape extending BelongsToArchive {
        required property shape_id -> str;
        required property points -> array<tuple<decimal, decimal>>;
    }

    type StopTime extending BelongsToArchive {
        required link trip -> Trip;
        required link stop -> Stop;
        required property arrival_time -> cal::local_time;
        required property departure_time -> cal::local_time;
        property stop_sequence -> str;
        property stop_headsign -> str;
        property pickup_type -> PickupDropoffType;
        property dropoff_type -> PickupDropoffType;
    }

    type Transfer extending BelongsToArchive {
        required link from_stop -> Stop;
        required link to_stop -> Stop;
        required property transfer_type -> TransferType;
        property min_transfer_time -> duration;
        # The following are experimental MBTA additions to GTFS
        property min_walk_time -> duration;
        property min_wheelchair_time -> duration;
        property suggested_buffer_time -> duration;
        property wheelchair_transfer -> WheelchairTransferType;
        link from_trip -> Trip;
        link to_trip -> Trip;
    }

    type Line extending BelongsToArchive {
        # This entire type is an experimental MBTA addition to GTFS (lines.txt)
        required property line_id -> str;
        required property short_name -> str;
        required property long_name -> str;
        required property color -> str;
        required property text_color -> str;
        required property sort_order -> str;
    }

    type Service extending BelongsToArchive {
        # This entire type is an experimental MBTA addition to GTFS (calendar.txt)
        required property service_id -> str;
        required property description -> str;
        required property schedule_name -> str;
        required property schedule_type -> ScheduleType;
        required property schedule_typicality -> ScheduleTypicality;
        required property start_date -> cal::local_date;
        required property end_date -> cal::local_date;
        required property service_days -> tuple<bool, bool, bool, bool, bool, bool, bool>;
        multi link calendar_dates -> CalendarDate;
        property rating_start_date -> cal::local_date;
        property rating_end_date -> cal::local_date;
        property rating_description -> str;
    }

    type CalendarDate extending BelongsToArchive {
        required property date -> cal::local_date;
        required property service_id -> str;
        required property exception_type -> ServiceExceptionType;
    }
}
