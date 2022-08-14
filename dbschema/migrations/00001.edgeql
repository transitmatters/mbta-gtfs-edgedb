CREATE MIGRATION m1e7x3brtnqq2dd6bud3tmpaocabeysw6hjwanfb5zujyk5ro3k2ia
    ONTO initial
{
  CREATE TYPE default::Shape {
      CREATE REQUIRED PROPERTY points -> array<tuple<std::decimal, std::decimal>>;
      CREATE REQUIRED PROPERTY shape_id -> std::str;
  };
  CREATE SCALAR TYPE default::ServiceExceptionType EXTENDING enum<ServiceAdded, ServiceRemoved>;
  CREATE TYPE default::CalendarDate {
      CREATE REQUIRED PROPERTY date -> cal::local_date;
      CREATE REQUIRED PROPERTY exception_type -> default::ServiceExceptionType;
  };
  CREATE SCALAR TYPE default::ScheduleType EXTENDING enum<Weekday, Saturday, Sunday, Other>;
  CREATE SCALAR TYPE default::ScheduleTypicality EXTENDING enum<NotDefined, Typical, Extra, Reduced, MajorChanges, MajorReductions>;
  CREATE TYPE default::Service {
      CREATE REQUIRED MULTI LINK calendar_date -> default::CalendarDate;
      CREATE REQUIRED PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY rating_description -> std::str;
      CREATE REQUIRED PROPERTY rating_end_date -> cal::local_date;
      CREATE REQUIRED PROPERTY rating_start_date -> cal::local_date;
      CREATE REQUIRED PROPERTY schedule_name -> std::str;
      CREATE REQUIRED PROPERTY schedule_type -> default::ScheduleType;
      CREATE REQUIRED PROPERTY schedule_typicality -> default::ScheduleTypicality;
      CREATE REQUIRED PROPERTY service_days -> tuple<std::bool, std::bool, std::bool, std::bool, std::bool, std::bool, std::bool>;
      CREATE REQUIRED PROPERTY service_id -> std::str;
  };
  CREATE TYPE default::GtfsArchive {
      CREATE REQUIRED PROPERTY date -> cal::local_date;
      CREATE REQUIRED PROPERTY url -> std::str;
  };
  CREATE TYPE default::Line {
      CREATE REQUIRED LINK archive -> default::GtfsArchive;
      CREATE REQUIRED PROPERTY color -> std::str;
      CREATE REQUIRED PROPERTY line_id -> std::str;
      CREATE REQUIRED PROPERTY long_name -> std::str;
      CREATE REQUIRED PROPERTY short_name -> std::str;
      CREATE REQUIRED PROPERTY sort_order -> std::str;
      CREATE REQUIRED PROPERTY text_color -> std::str;
  };
  ALTER TYPE default::GtfsArchive {
      CREATE MULTI LINK lines := (.<archive[IS default::Line]);
  };
  CREATE SCALAR TYPE default::ListedRouteType EXTENDING enum<IncludeInPublicListing, DoNotIncludeInPublicListing>;
  CREATE SCALAR TYPE default::RouteFareClass EXTENDING enum<LocalBus, InnerExpress, OuterExpress, RapidTransit, CommuterRail, Ferry, Free, Special>;
  CREATE SCALAR TYPE default::RouteType EXTENDING enum<LightRail, Subway, Rail, Bus, Ferry, TrolleyBus, CableTram, AerialLift, Funicular, Monorail>;
  CREATE TYPE default::Route {
      CREATE REQUIRED LINK archive -> default::GtfsArchive;
      CREATE LINK line -> default::Line;
      CREATE REQUIRED PROPERTY agency_id -> std::str;
      CREATE PROPERTY color -> std::str;
      CREATE PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY fare_class -> default::RouteFareClass;
      CREATE PROPERTY listed_route -> default::ListedRouteType;
      CREATE PROPERTY long_name -> std::str;
      CREATE REQUIRED PROPERTY route -> std::str;
      CREATE REQUIRED PROPERTY route_sort_order -> std::str;
      CREATE REQUIRED PROPERTY route_type -> default::RouteType;
      CREATE PROPERTY short_name -> std::str;
      CREATE PROPERTY textColor -> std::str;
      CREATE PROPERTY url -> std::str;
  };
  ALTER TYPE default::GtfsArchive {
      CREATE MULTI LINK routes := (.<archive[IS default::Route]);
  };
  ALTER TYPE default::Service {
      CREATE REQUIRED LINK archive -> default::GtfsArchive;
  };
  ALTER TYPE default::GtfsArchive {
      CREATE MULTI LINK services := (.<archive[IS default::Service]);
  };
  CREATE SCALAR TYPE default::LocationType EXTENDING enum<Station, EntranceExit, GenericNode, BoardingArea>;
  CREATE SCALAR TYPE default::WheelchairBoardingType EXTENDING enum<InheritFromParent, Accessible, NotAccessible>;
  CREATE TYPE default::Stop {
      CREATE REQUIRED LINK archive -> default::GtfsArchive;
      CREATE MULTI LINK child_stops -> default::Stop;
      CREATE LINK parent_stop := (.<child_stops[IS default::Stop]);
      CREATE PROPERTY at_street -> std::str;
      CREATE PROPERTY description -> std::str;
      CREATE PROPERTY lat -> std::decimal;
      CREATE REQUIRED PROPERTY location_type -> default::LocationType;
      CREATE PROPERTY lon -> std::decimal;
      CREATE PROPERTY municipality -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE PROPERTY on_street -> std::str;
      CREATE REQUIRED PROPERTY stopId -> std::str;
      CREATE PROPERTY stop_code -> std::str;
      CREATE PROPERTY url -> std::str;
      CREATE PROPERTY vehicle_type -> default::RouteType;
      CREATE REQUIRED PROPERTY wheelchair_boarding -> default::WheelchairBoardingType;
      CREATE PROPERTY zone_id -> std::str;
  };
  ALTER TYPE default::GtfsArchive {
      CREATE MULTI LINK stops := (.<archive[IS default::Stop]);
  };
  CREATE SCALAR TYPE default::TransferType EXTENDING enum<Recommended, Timed, RequiresMinimumTime, NotPossible>;
  CREATE SCALAR TYPE default::WheelchairTransferType EXTENDING enum<NoInformation, Accessible, NotAccessible>;
  CREATE TYPE default::Transfer {
      CREATE REQUIRED LINK archive -> default::GtfsArchive;
      CREATE REQUIRED LINK from_stop -> default::Stop;
      CREATE REQUIRED LINK to_stop -> default::Stop;
      CREATE PROPERTY min_transfer_time -> std::duration;
      CREATE PROPERTY min_walk_time -> std::duration;
      CREATE PROPERTY min_wheelchair_time -> std::duration;
      CREATE PROPERTY suggested_buffer_time -> std::duration;
      CREATE REQUIRED PROPERTY transfer_type -> default::TransferType;
      CREATE PROPERTY wheelchair_transfer -> default::WheelchairTransferType;
  };
  ALTER TYPE default::GtfsArchive {
      CREATE MULTI LINK transfers := (.<archive[IS default::Transfer]);
  };
  CREATE TYPE default::Trip {
      CREATE REQUIRED LINK archive -> default::GtfsArchive;
      CREATE REQUIRED LINK route -> default::Route;
      CREATE REQUIRED LINK service -> default::Service;
      CREATE REQUIRED LINK shape -> default::Shape;
      CREATE REQUIRED PROPERTY bikes_allowed -> std::bool;
      CREATE PROPERTY block_id -> std::str;
      CREATE REQUIRED PROPERTY direction_id -> std::str;
      CREATE REQUIRED PROPERTY headsign -> std::str;
      CREATE PROPERTY route_type -> default::RouteType;
      CREATE PROPERTY short_name -> std::str;
      CREATE REQUIRED PROPERTY trip_id -> std::str;
      CREATE REQUIRED PROPERTY wheelchair_accessible -> std::bool;
  };
  ALTER TYPE default::GtfsArchive {
      CREATE MULTI LINK trips := (.<archive[IS default::Trip]);
  };
  CREATE SCALAR TYPE default::RoutePatternTypicality EXTENDING enum<NotDefined, Typical, Deviation, HighlyAtypical, Diversion>;
  CREATE TYPE default::RoutePattern {
      CREATE REQUIRED LINK representative_trip -> default::Trip;
      CREATE REQUIRED PROPERTY direction_id -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY route_pattern_id -> std::str;
      CREATE REQUIRED PROPERTY sort_order -> std::str;
      CREATE PROPERTY time_desc -> std::str;
      CREATE REQUIRED PROPERTY typicality -> default::RoutePatternTypicality;
  };
  ALTER TYPE default::Route {
      CREATE MULTI LINK route_patterns -> default::RoutePattern;
  };
  ALTER TYPE default::RoutePattern {
      CREATE LINK route := (.<route_patterns[IS default::Route]);
  };
  ALTER TYPE default::Trip {
      CREATE REQUIRED LINK route_pattern -> default::RoutePattern;
  };
  CREATE SCALAR TYPE default::PickupDropoffType EXTENDING enum<FlagStop, ContinuousDropOff>;
  CREATE TYPE default::StopTime {
      CREATE REQUIRED LINK stop -> default::Stop;
      CREATE REQUIRED LINK trip -> default::Trip;
      CREATE REQUIRED PROPERTY arrival_time -> cal::local_time;
      CREATE REQUIRED PROPERTY departure_time -> cal::local_time;
      CREATE PROPERTY dropoff_type -> default::PickupDropoffType;
      CREATE PROPERTY pickup_type -> default::PickupDropoffType;
      CREATE PROPERTY stop_headsign -> std::str;
      CREATE PROPERTY stop_sequence -> std::str;
  };
  ALTER TYPE default::Trip {
      CREATE MULTI LINK stop_times := (.<trip[IS default::StopTime]);
  };
  ALTER TYPE default::Transfer {
      CREATE LINK from_trip -> default::Trip;
      CREATE LINK to_trip -> default::Trip;
  };
};
