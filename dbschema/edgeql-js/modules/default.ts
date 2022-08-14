import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
import type * as _cal from "./cal";
enum $ListedRouteTypeλEnum {
  IncludeInPublicListing = "IncludeInPublicListing",
  DoNotIncludeInPublicListing = "DoNotIncludeInPublicListing",
}
export type $ListedRouteType = {
  IncludeInPublicListing: $.$expr_Literal<$ListedRouteType>;
  DoNotIncludeInPublicListing: $.$expr_Literal<$ListedRouteType>;
} & $.EnumType<"default::ListedRouteType", `${$ListedRouteTypeλEnum}`>;
const ListedRouteType: $ListedRouteType = $.makeType<$ListedRouteType>(_.spec, "997ec578-15d7-11ed-97ad-b57bec66228e", _.syntax.literal);

enum $LocationTypeλEnum {
  Station = "Station",
  EntranceExit = "EntranceExit",
  GenericNode = "GenericNode",
  BoardingArea = "BoardingArea",
}
export type $LocationType = {
  Station: $.$expr_Literal<$LocationType>;
  EntranceExit: $.$expr_Literal<$LocationType>;
  GenericNode: $.$expr_Literal<$LocationType>;
  BoardingArea: $.$expr_Literal<$LocationType>;
} & $.EnumType<"default::LocationType", `${$LocationTypeλEnum}`>;
const LocationType: $LocationType = $.makeType<$LocationType>(_.spec, "9990c138-15d7-11ed-87a5-b3e76d2d0acb", _.syntax.literal);

enum $PickupDropoffTypeλEnum {
  FlagStop = "FlagStop",
  ContinuousDropOff = "ContinuousDropOff",
}
export type $PickupDropoffType = {
  FlagStop: $.$expr_Literal<$PickupDropoffType>;
  ContinuousDropOff: $.$expr_Literal<$PickupDropoffType>;
} & $.EnumType<"default::PickupDropoffType", `${$PickupDropoffTypeλEnum}`>;
const PickupDropoffType: $PickupDropoffType = $.makeType<$PickupDropoffType>(_.spec, "99cbf424-15d7-11ed-b9cb-25a2e1c2fdf7", _.syntax.literal);

enum $RouteFareClassλEnum {
  LocalBus = "LocalBus",
  InnerExpress = "InnerExpress",
  OuterExpress = "OuterExpress",
  RapidTransit = "RapidTransit",
  CommuterRail = "CommuterRail",
  Ferry = "Ferry",
  Free = "Free",
  Special = "Special",
}
export type $RouteFareClass = {
  LocalBus: $.$expr_Literal<$RouteFareClass>;
  InnerExpress: $.$expr_Literal<$RouteFareClass>;
  OuterExpress: $.$expr_Literal<$RouteFareClass>;
  RapidTransit: $.$expr_Literal<$RouteFareClass>;
  CommuterRail: $.$expr_Literal<$RouteFareClass>;
  Ferry: $.$expr_Literal<$RouteFareClass>;
  Free: $.$expr_Literal<$RouteFareClass>;
  Special: $.$expr_Literal<$RouteFareClass>;
} & $.EnumType<"default::RouteFareClass", `${$RouteFareClassλEnum}`>;
const RouteFareClass: $RouteFareClass = $.makeType<$RouteFareClass>(_.spec, "997ee56c-15d7-11ed-8bee-4361917e9c89", _.syntax.literal);

enum $RoutePatternTypicalityλEnum {
  NotDefined = "NotDefined",
  Typical = "Typical",
  Deviation = "Deviation",
  HighlyAtypical = "HighlyAtypical",
  Diversion = "Diversion",
}
export type $RoutePatternTypicality = {
  NotDefined: $.$expr_Literal<$RoutePatternTypicality>;
  Typical: $.$expr_Literal<$RoutePatternTypicality>;
  Deviation: $.$expr_Literal<$RoutePatternTypicality>;
  HighlyAtypical: $.$expr_Literal<$RoutePatternTypicality>;
  Diversion: $.$expr_Literal<$RoutePatternTypicality>;
} & $.EnumType<"default::RoutePatternTypicality", `${$RoutePatternTypicalityλEnum}`>;
const RoutePatternTypicality: $RoutePatternTypicality = $.makeType<$RoutePatternTypicality>(_.spec, "99c4f62e-15d7-11ed-8d5e-17505118cc22", _.syntax.literal);

enum $RouteTypeλEnum {
  LightRail = "LightRail",
  Subway = "Subway",
  Rail = "Rail",
  Bus = "Bus",
  Ferry = "Ferry",
  TrolleyBus = "TrolleyBus",
  CableTram = "CableTram",
  AerialLift = "AerialLift",
  Funicular = "Funicular",
  Monorail = "Monorail",
}
export type $RouteType = {
  LightRail: $.$expr_Literal<$RouteType>;
  Subway: $.$expr_Literal<$RouteType>;
  Rail: $.$expr_Literal<$RouteType>;
  Bus: $.$expr_Literal<$RouteType>;
  Ferry: $.$expr_Literal<$RouteType>;
  TrolleyBus: $.$expr_Literal<$RouteType>;
  CableTram: $.$expr_Literal<$RouteType>;
  AerialLift: $.$expr_Literal<$RouteType>;
  Funicular: $.$expr_Literal<$RouteType>;
  Monorail: $.$expr_Literal<$RouteType>;
} & $.EnumType<"default::RouteType", `${$RouteTypeλEnum}`>;
const RouteType: $RouteType = $.makeType<$RouteType>(_.spec, "997efdcc-15d7-11ed-a6a7-696aeb542e31", _.syntax.literal);

enum $ScheduleTypeλEnum {
  Weekday = "Weekday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Other = "Other",
}
export type $ScheduleType = {
  Weekday: $.$expr_Literal<$ScheduleType>;
  Saturday: $.$expr_Literal<$ScheduleType>;
  Sunday: $.$expr_Literal<$ScheduleType>;
  Other: $.$expr_Literal<$ScheduleType>;
} & $.EnumType<"default::ScheduleType", `${$ScheduleTypeλEnum}`>;
const ScheduleType: $ScheduleType = $.makeType<$ScheduleType>(_.spec, "997296fe-15d7-11ed-9ddd-9f3f8157d96e", _.syntax.literal);

enum $ScheduleTypicalityλEnum {
  NotDefined = "NotDefined",
  Typical = "Typical",
  Extra = "Extra",
  Reduced = "Reduced",
  MajorChanges = "MajorChanges",
  MajorReductions = "MajorReductions",
}
export type $ScheduleTypicality = {
  NotDefined: $.$expr_Literal<$ScheduleTypicality>;
  Typical: $.$expr_Literal<$ScheduleTypicality>;
  Extra: $.$expr_Literal<$ScheduleTypicality>;
  Reduced: $.$expr_Literal<$ScheduleTypicality>;
  MajorChanges: $.$expr_Literal<$ScheduleTypicality>;
  MajorReductions: $.$expr_Literal<$ScheduleTypicality>;
} & $.EnumType<"default::ScheduleTypicality", `${$ScheduleTypicalityλEnum}`>;
const ScheduleTypicality: $ScheduleTypicality = $.makeType<$ScheduleTypicality>(_.spec, "9972aebe-15d7-11ed-8ba8-2182314642fc", _.syntax.literal);

enum $ServiceExceptionTypeλEnum {
  ServiceAdded = "ServiceAdded",
  ServiceRemoved = "ServiceRemoved",
}
export type $ServiceExceptionType = {
  ServiceAdded: $.$expr_Literal<$ServiceExceptionType>;
  ServiceRemoved: $.$expr_Literal<$ServiceExceptionType>;
} & $.EnumType<"default::ServiceExceptionType", `${$ServiceExceptionTypeλEnum}`>;
const ServiceExceptionType: $ServiceExceptionType = $.makeType<$ServiceExceptionType>(_.spec, "997023ce-15d7-11ed-9bb7-9327c163c61a", _.syntax.literal);

enum $TransferTypeλEnum {
  Recommended = "Recommended",
  Timed = "Timed",
  RequiresMinimumTime = "RequiresMinimumTime",
  NotPossible = "NotPossible",
}
export type $TransferType = {
  Recommended: $.$expr_Literal<$TransferType>;
  Timed: $.$expr_Literal<$TransferType>;
  RequiresMinimumTime: $.$expr_Literal<$TransferType>;
  NotPossible: $.$expr_Literal<$TransferType>;
} & $.EnumType<"default::TransferType", `${$TransferTypeλEnum}`>;
const TransferType: $TransferType = $.makeType<$TransferType>(_.spec, "999ecabc-15d7-11ed-b29d-453f9e04883b", _.syntax.literal);

enum $WheelchairBoardingTypeλEnum {
  InheritFromParent = "InheritFromParent",
  Accessible = "Accessible",
  NotAccessible = "NotAccessible",
}
export type $WheelchairBoardingType = {
  InheritFromParent: $.$expr_Literal<$WheelchairBoardingType>;
  Accessible: $.$expr_Literal<$WheelchairBoardingType>;
  NotAccessible: $.$expr_Literal<$WheelchairBoardingType>;
} & $.EnumType<"default::WheelchairBoardingType", `${$WheelchairBoardingTypeλEnum}`>;
const WheelchairBoardingType: $WheelchairBoardingType = $.makeType<$WheelchairBoardingType>(_.spec, "9990da38-15d7-11ed-a931-0b3fc923fc33", _.syntax.literal);

enum $WheelchairTransferTypeλEnum {
  NoInformation = "NoInformation",
  Accessible = "Accessible",
  NotAccessible = "NotAccessible",
}
export type $WheelchairTransferType = {
  NoInformation: $.$expr_Literal<$WheelchairTransferType>;
  Accessible: $.$expr_Literal<$WheelchairTransferType>;
  NotAccessible: $.$expr_Literal<$WheelchairTransferType>;
} & $.EnumType<"default::WheelchairTransferType", `${$WheelchairTransferTypeλEnum}`>;
const WheelchairTransferType: $WheelchairTransferType = $.makeType<$WheelchairTransferType>(_.spec, "999ee3bc-15d7-11ed-b5f2-9914298e6297", _.syntax.literal);

export type $BelongsToArchiveλShape = $.typeutil.flatten<_std.$Object_c88c66ee150611ed900d256aa1456aceλShape & {
  "archive": $.LinkDesc<$GtfsArchive, $.Cardinality.One, {}, false, false,  false, false>;
}>;
type $BelongsToArchive = $.ObjectType<"default::BelongsToArchive", $BelongsToArchiveλShape, null>;
const $BelongsToArchive = $.makeType<$BelongsToArchive>(_.spec, "5d1e833e-1b77-11ed-b1f0-21ade2cc73c1", _.syntax.literal);

const BelongsToArchive: $.$expr_PathNode<$.TypeSet<$BelongsToArchive, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($BelongsToArchive, $.Cardinality.Many), null, true);

export type $CalendarDateλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "date": $.PropertyDesc<_cal.$local_date, $.Cardinality.One, false, false, false, false>;
  "exception_type": $.PropertyDesc<$ServiceExceptionType, $.Cardinality.One, false, false, false, false>;
  "<calendar_dates[is Service]": $.LinkDesc<$Service, $.Cardinality.Many, {}, false, false,  false, false>;
  "<calendar_dates": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $CalendarDate = $.ObjectType<"default::CalendarDate", $CalendarDateλShape, null>;
const $CalendarDate = $.makeType<$CalendarDate>(_.spec, "99703dc8-15d7-11ed-b116-5145b14a4f42", _.syntax.literal);

const CalendarDate: $.$expr_PathNode<$.TypeSet<$CalendarDate, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($CalendarDate, $.Cardinality.Many), null, true);

export type $GtfsArchiveλShape = $.typeutil.flatten<_std.$Object_c88c66ee150611ed900d256aa1456aceλShape & {
  "lines": $.LinkDesc<$Line, $.Cardinality.Many, {}, false, true,  false, false>;
  "routes": $.LinkDesc<$Route, $.Cardinality.Many, {}, false, true,  false, false>;
  "services": $.LinkDesc<$Service, $.Cardinality.Many, {}, false, true,  false, false>;
  "stops": $.LinkDesc<$Stop, $.Cardinality.Many, {}, false, true,  false, false>;
  "transfers": $.LinkDesc<$Transfer, $.Cardinality.Many, {}, false, true,  false, false>;
  "trips": $.LinkDesc<$Trip, $.Cardinality.Many, {}, false, true,  false, false>;
  "contact_email": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "end_date": $.PropertyDesc<_cal.$local_date, $.Cardinality.One, false, false, false, false>;
  "lang": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "publisher_name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "publisher_url": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "start_date": $.PropertyDesc<_cal.$local_date, $.Cardinality.One, false, false, false, false>;
  "version": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<archive[is BelongsToArchive]": $.LinkDesc<$BelongsToArchive, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is CalendarDate]": $.LinkDesc<$CalendarDate, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is Line]": $.LinkDesc<$Line, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is Route]": $.LinkDesc<$Route, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is RoutePattern]": $.LinkDesc<$RoutePattern, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is Service]": $.LinkDesc<$Service, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is Shape]": $.LinkDesc<$Shape, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is Stop]": $.LinkDesc<$Stop, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is StopTime]": $.LinkDesc<$StopTime, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is Transfer]": $.LinkDesc<$Transfer, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive[is Trip]": $.LinkDesc<$Trip, $.Cardinality.Many, {}, false, false,  false, false>;
  "<archive": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $GtfsArchive = $.ObjectType<"default::GtfsArchive", $GtfsArchiveλShape, null>;
const $GtfsArchive = $.makeType<$GtfsArchive>(_.spec, "9976961e-15d7-11ed-845d-87ac72e3bb77", _.syntax.literal);

const GtfsArchive: $.$expr_PathNode<$.TypeSet<$GtfsArchive, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($GtfsArchive, $.Cardinality.Many), null, true);

export type $LineλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "color": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "line_id": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "long_name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "short_name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "sort_order": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "text_color": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<lines[is GtfsArchive]": $.LinkDesc<$GtfsArchive, $.Cardinality.Many, {}, false, false,  false, false>;
  "<line[is Route]": $.LinkDesc<$Route, $.Cardinality.Many, {}, false, false,  false, false>;
  "<line": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<lines": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Line = $.ObjectType<"default::Line", $LineλShape, null>;
const $Line = $.makeType<$Line>(_.spec, "9978cb0a-15d7-11ed-ace7-ab953a8548cf", _.syntax.literal);

const Line: $.$expr_PathNode<$.TypeSet<$Line, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Line, $.Cardinality.Many), null, true);

export type $RouteλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "line": $.LinkDesc<$Line, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "route_patterns": $.LinkDesc<$RoutePattern, $.Cardinality.Many, {}, false, false,  false, false>;
  "agency_id": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "color": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "fare_class": $.PropertyDesc<$RouteFareClass, $.Cardinality.One, false, false, false, false>;
  "listed_route": $.PropertyDesc<$ListedRouteType, $.Cardinality.AtMostOne, false, false, false, false>;
  "long_name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "route": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "route_sort_order": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "route_type": $.PropertyDesc<$RouteType, $.Cardinality.One, false, false, false, false>;
  "short_name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "textColor": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<routes[is GtfsArchive]": $.LinkDesc<$GtfsArchive, $.Cardinality.Many, {}, false, false,  false, false>;
  "<route[is Trip]": $.LinkDesc<$Trip, $.Cardinality.Many, {}, false, false,  false, false>;
  "<route[is RoutePattern]": $.LinkDesc<$RoutePattern, $.Cardinality.Many, {}, false, false,  false, false>;
  "<route": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<routes": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Route = $.ObjectType<"default::Route", $RouteλShape, null>;
const $Route = $.makeType<$Route>(_.spec, "997f179e-15d7-11ed-aaca-2f7932c318f8", _.syntax.literal);

const Route: $.$expr_PathNode<$.TypeSet<$Route, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Route, $.Cardinality.Many), null, true);

export type $RoutePatternλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "representative_trip": $.LinkDesc<$Trip, $.Cardinality.One, {}, false, false,  false, false>;
  "route": $.LinkDesc<$Route, $.Cardinality.Many, {}, false, true,  false, false>;
  "direction_id": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "route_pattern_id": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "sort_order": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "time_desc": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "typicality": $.PropertyDesc<$RoutePatternTypicality, $.Cardinality.One, false, false, false, false>;
  "<route_pattern[is Trip]": $.LinkDesc<$Trip, $.Cardinality.Many, {}, false, false,  false, false>;
  "<route_patterns[is Route]": $.LinkDesc<$Route, $.Cardinality.Many, {}, false, false,  false, false>;
  "<route_pattern": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<route_patterns": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $RoutePattern = $.ObjectType<"default::RoutePattern", $RoutePatternλShape, null>;
const $RoutePattern = $.makeType<$RoutePattern>(_.spec, "99c512a8-15d7-11ed-bdf9-29932839e086", _.syntax.literal);

const RoutePattern: $.$expr_PathNode<$.TypeSet<$RoutePattern, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($RoutePattern, $.Cardinality.Many), null, true);

export type $ServiceλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "calendar_dates": $.LinkDesc<$CalendarDate, $.Cardinality.Many, {}, false, false,  false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "rating_description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "rating_end_date": $.PropertyDesc<_cal.$local_date, $.Cardinality.One, false, false, false, false>;
  "rating_start_date": $.PropertyDesc<_cal.$local_date, $.Cardinality.One, false, false, false, false>;
  "schedule_name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "schedule_type": $.PropertyDesc<$ScheduleType, $.Cardinality.One, false, false, false, false>;
  "schedule_typicality": $.PropertyDesc<$ScheduleTypicality, $.Cardinality.One, false, false, false, false>;
  "service_days": $.PropertyDesc<$.TupleType<[_std.$bool, _std.$bool, _std.$bool, _std.$bool, _std.$bool, _std.$bool, _std.$bool]>, $.Cardinality.One, false, false, false, false>;
  "service_id": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "end_date": $.PropertyDesc<_cal.$local_date, $.Cardinality.One, false, false, false, false>;
  "start_date": $.PropertyDesc<_cal.$local_date, $.Cardinality.One, false, false, false, false>;
  "<services[is GtfsArchive]": $.LinkDesc<$GtfsArchive, $.Cardinality.Many, {}, false, false,  false, false>;
  "<service[is Trip]": $.LinkDesc<$Trip, $.Cardinality.Many, {}, false, false,  false, false>;
  "<service": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<services": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Service = $.ObjectType<"default::Service", $ServiceλShape, null>;
const $Service = $.makeType<$Service>(_.spec, "9972d056-15d7-11ed-a919-1bd4390f5ef1", _.syntax.literal);

const Service: $.$expr_PathNode<$.TypeSet<$Service, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Service, $.Cardinality.Many), null, true);

export type $ShapeλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "points": $.PropertyDesc<$.ArrayType<$.TupleType<[_std.$decimal, _std.$decimal]>>, $.Cardinality.One, false, false, false, false>;
  "shape_id": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<shape[is Trip]": $.LinkDesc<$Trip, $.Cardinality.Many, {}, false, false,  false, false>;
  "<shape": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Shape = $.ObjectType<"default::Shape", $ShapeλShape, null>;
const $Shape = $.makeType<$Shape>(_.spec, "996da0a4-15d7-11ed-9fbc-194c2d639bc7", _.syntax.literal);

const Shape: $.$expr_PathNode<$.TypeSet<$Shape, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Shape, $.Cardinality.Many), null, true);

export type $StopλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "child_stops": $.LinkDesc<$Stop, $.Cardinality.Many, {}, false, false,  false, false>;
  "parent_stop": $.LinkDesc<$Stop, $.Cardinality.Many, {}, false, true,  false, false>;
  "at_street": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "lat": $.PropertyDesc<_std.$decimal, $.Cardinality.AtMostOne, false, false, false, false>;
  "location_type": $.PropertyDesc<$LocationType, $.Cardinality.One, false, false, false, false>;
  "lon": $.PropertyDesc<_std.$decimal, $.Cardinality.AtMostOne, false, false, false, false>;
  "municipality": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "on_street": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "stopId": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "stop_code": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "url": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "vehicle_type": $.PropertyDesc<$RouteType, $.Cardinality.AtMostOne, false, false, false, false>;
  "wheelchair_boarding": $.PropertyDesc<$WheelchairBoardingType, $.Cardinality.One, false, false, false, false>;
  "zone_id": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<stops[is GtfsArchive]": $.LinkDesc<$GtfsArchive, $.Cardinality.Many, {}, false, false,  false, false>;
  "<child_stops[is Stop]": $.LinkDesc<$Stop, $.Cardinality.Many, {}, false, false,  false, false>;
  "<from_stop[is Transfer]": $.LinkDesc<$Transfer, $.Cardinality.Many, {}, false, false,  false, false>;
  "<to_stop[is Transfer]": $.LinkDesc<$Transfer, $.Cardinality.Many, {}, false, false,  false, false>;
  "<stop[is StopTime]": $.LinkDesc<$StopTime, $.Cardinality.Many, {}, false, false,  false, false>;
  "<parent_stop[is Stop]": $.LinkDesc<$Stop, $.Cardinality.Many, {}, false, false,  false, false>;
  "<child_stops": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<from_stop": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<parent_stop": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<stop": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<stops": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<to_stop": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Stop = $.ObjectType<"default::Stop", $StopλShape, null>;
const $Stop = $.makeType<$Stop>(_.spec, "9990f4e6-15d7-11ed-a96d-e7f01a82a718", _.syntax.literal);

const Stop: $.$expr_PathNode<$.TypeSet<$Stop, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Stop, $.Cardinality.Many), null, true);

export type $StopTimeλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "stop": $.LinkDesc<$Stop, $.Cardinality.One, {}, false, false,  false, false>;
  "trip": $.LinkDesc<$Trip, $.Cardinality.One, {}, false, false,  false, false>;
  "arrival_time": $.PropertyDesc<_cal.$local_time, $.Cardinality.One, false, false, false, false>;
  "departure_time": $.PropertyDesc<_cal.$local_time, $.Cardinality.One, false, false, false, false>;
  "dropoff_type": $.PropertyDesc<$PickupDropoffType, $.Cardinality.AtMostOne, false, false, false, false>;
  "pickup_type": $.PropertyDesc<$PickupDropoffType, $.Cardinality.AtMostOne, false, false, false, false>;
  "stop_headsign": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "stop_sequence": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<stop_times[is Trip]": $.LinkDesc<$Trip, $.Cardinality.Many, {}, false, false,  false, false>;
  "<stop_times": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $StopTime = $.ObjectType<"default::StopTime", $StopTimeλShape, null>;
const $StopTime = $.makeType<$StopTime>(_.spec, "99cc0ef0-15d7-11ed-869c-7b7c005053d9", _.syntax.literal);

const StopTime: $.$expr_PathNode<$.TypeSet<$StopTime, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($StopTime, $.Cardinality.Many), null, true);

export type $TransferλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "from_stop": $.LinkDesc<$Stop, $.Cardinality.One, {}, false, false,  false, false>;
  "to_stop": $.LinkDesc<$Stop, $.Cardinality.One, {}, false, false,  false, false>;
  "from_trip": $.LinkDesc<$Trip, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "to_trip": $.LinkDesc<$Trip, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "min_transfer_time": $.PropertyDesc<_std.$duration, $.Cardinality.AtMostOne, false, false, false, false>;
  "min_walk_time": $.PropertyDesc<_std.$duration, $.Cardinality.AtMostOne, false, false, false, false>;
  "min_wheelchair_time": $.PropertyDesc<_std.$duration, $.Cardinality.AtMostOne, false, false, false, false>;
  "suggested_buffer_time": $.PropertyDesc<_std.$duration, $.Cardinality.AtMostOne, false, false, false, false>;
  "transfer_type": $.PropertyDesc<$TransferType, $.Cardinality.One, false, false, false, false>;
  "wheelchair_transfer": $.PropertyDesc<$WheelchairTransferType, $.Cardinality.AtMostOne, false, false, false, false>;
  "<transfers[is GtfsArchive]": $.LinkDesc<$GtfsArchive, $.Cardinality.Many, {}, false, false,  false, false>;
  "<transfers": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Transfer = $.ObjectType<"default::Transfer", $TransferλShape, null>;
const $Transfer = $.makeType<$Transfer>(_.spec, "999eff28-15d7-11ed-acb7-b3fa74d79145", _.syntax.literal);

const Transfer: $.$expr_PathNode<$.TypeSet<$Transfer, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Transfer, $.Cardinality.Many), null, true);

export type $TripλShape = $.typeutil.flatten<$BelongsToArchiveλShape & {
  "route": $.LinkDesc<$Route, $.Cardinality.One, {}, false, false,  false, false>;
  "service": $.LinkDesc<$Service, $.Cardinality.One, {}, false, false,  false, false>;
  "shape": $.LinkDesc<$Shape, $.Cardinality.One, {}, false, false,  false, false>;
  "route_pattern": $.LinkDesc<$RoutePattern, $.Cardinality.One, {}, false, false,  false, false>;
  "stop_times": $.LinkDesc<$StopTime, $.Cardinality.Many, {}, false, true,  false, false>;
  "bikes_allowed": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "block_id": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "direction_id": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "headsign": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "route_type": $.PropertyDesc<$RouteType, $.Cardinality.AtMostOne, false, false, false, false>;
  "short_name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "trip_id": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "wheelchair_accessible": $.PropertyDesc<_std.$bool, $.Cardinality.One, false, false, false, false>;
  "<trips[is GtfsArchive]": $.LinkDesc<$GtfsArchive, $.Cardinality.Many, {}, false, false,  false, false>;
  "<representative_trip[is RoutePattern]": $.LinkDesc<$RoutePattern, $.Cardinality.Many, {}, false, false,  false, false>;
  "<from_trip[is Transfer]": $.LinkDesc<$Transfer, $.Cardinality.Many, {}, false, false,  false, false>;
  "<to_trip[is Transfer]": $.LinkDesc<$Transfer, $.Cardinality.Many, {}, false, false,  false, false>;
  "<trip[is StopTime]": $.LinkDesc<$StopTime, $.Cardinality.Many, {}, false, false,  false, false>;
  "<from_trip": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<representative_trip": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<to_trip": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<trip": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<trips": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Trip = $.ObjectType<"default::Trip", $TripλShape, null>;
const $Trip = $.makeType<$Trip>(_.spec, "99b95b2a-15d7-11ed-a658-e981b7a50b33", _.syntax.literal);

const Trip: $.$expr_PathNode<$.TypeSet<$Trip, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Trip, $.Cardinality.Many), null, true);



export { $ListedRouteTypeλEnum, ListedRouteType, $LocationTypeλEnum, LocationType, $PickupDropoffTypeλEnum, PickupDropoffType, $RouteFareClassλEnum, RouteFareClass, $RoutePatternTypicalityλEnum, RoutePatternTypicality, $RouteTypeλEnum, RouteType, $ScheduleTypeλEnum, ScheduleType, $ScheduleTypicalityλEnum, ScheduleTypicality, $ServiceExceptionTypeλEnum, ServiceExceptionType, $TransferTypeλEnum, TransferType, $WheelchairBoardingTypeλEnum, WheelchairBoardingType, $WheelchairTransferTypeλEnum, WheelchairTransferType, $BelongsToArchive, BelongsToArchive, $CalendarDate, CalendarDate, $GtfsArchive, GtfsArchive, $Line, Line, $Route, Route, $RoutePattern, RoutePattern, $Service, Service, $Shape, Shape, $Stop, Stop, $StopTime, StopTime, $Transfer, Transfer, $Trip, Trip };

type __defaultExports = {
  "ListedRouteType": typeof ListedRouteType;
  "LocationType": typeof LocationType;
  "PickupDropoffType": typeof PickupDropoffType;
  "RouteFareClass": typeof RouteFareClass;
  "RoutePatternTypicality": typeof RoutePatternTypicality;
  "RouteType": typeof RouteType;
  "ScheduleType": typeof ScheduleType;
  "ScheduleTypicality": typeof ScheduleTypicality;
  "ServiceExceptionType": typeof ServiceExceptionType;
  "TransferType": typeof TransferType;
  "WheelchairBoardingType": typeof WheelchairBoardingType;
  "WheelchairTransferType": typeof WheelchairTransferType;
  "BelongsToArchive": typeof BelongsToArchive;
  "CalendarDate": typeof CalendarDate;
  "GtfsArchive": typeof GtfsArchive;
  "Line": typeof Line;
  "Route": typeof Route;
  "RoutePattern": typeof RoutePattern;
  "Service": typeof Service;
  "Shape": typeof Shape;
  "Stop": typeof Stop;
  "StopTime": typeof StopTime;
  "Transfer": typeof Transfer;
  "Trip": typeof Trip
};
const __defaultExports: __defaultExports = {
  "ListedRouteType": ListedRouteType,
  "LocationType": LocationType,
  "PickupDropoffType": PickupDropoffType,
  "RouteFareClass": RouteFareClass,
  "RoutePatternTypicality": RoutePatternTypicality,
  "RouteType": RouteType,
  "ScheduleType": ScheduleType,
  "ScheduleTypicality": ScheduleTypicality,
  "ServiceExceptionType": ServiceExceptionType,
  "TransferType": TransferType,
  "WheelchairBoardingType": WheelchairBoardingType,
  "WheelchairTransferType": WheelchairTransferType,
  "BelongsToArchive": BelongsToArchive,
  "CalendarDate": CalendarDate,
  "GtfsArchive": GtfsArchive,
  "Line": Line,
  "Route": Route,
  "RoutePattern": RoutePattern,
  "Service": Service,
  "Shape": Shape,
  "Stop": Stop,
  "StopTime": StopTime,
  "Transfer": Transfer,
  "Trip": Trip
};
export default __defaultExports;
