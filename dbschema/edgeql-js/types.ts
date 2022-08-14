import type * as edgedb from "edgedb";
export namespace std {
  export interface BaseObject {
    "__type__": schema.ObjectType;
    "id": string;
  }
  export interface $Object extends BaseObject {}
  export interface FreeObject extends BaseObject {}
  export enum JsonEmpty {
    ReturnEmpty = "ReturnEmpty",
    ReturnTarget = "ReturnTarget",
    Error = "Error",
    UseNull = "UseNull",
    DeleteKey = "DeleteKey",
  }
}
export namespace schema {
  export enum AccessKind {
    Select = "Select",
    UpdateRead = "UpdateRead",
    UpdateWrite = "UpdateWrite",
    Delete = "Delete",
    Insert = "Insert",
  }
  export interface $Object extends std.BaseObject {
    "name": string;
    "internal": boolean;
    "builtin": boolean;
    "computed_fields"?: string[] | null;
  }
  export interface SubclassableObject extends $Object {
    "abstract"?: boolean | null;
    "is_abstract"?: boolean | null;
    "final": boolean;
    "is_final": boolean;
  }
  export interface InheritingObject extends SubclassableObject {
    "bases": InheritingObject[];
    "ancestors": InheritingObject[];
    "inherited_fields"?: string[] | null;
  }
  export interface AnnotationSubject extends $Object {
    "annotations": Annotation[];
  }
  export interface AccessPolicy extends InheritingObject, AnnotationSubject {
    "subject": ObjectType;
    "access_kinds": AccessKind[];
    "condition"?: string | null;
    "action": AccessPolicyAction;
    "expr"?: string | null;
  }
  export enum AccessPolicyAction {
    Allow = "Allow",
    Deny = "Deny",
  }
  export interface Alias extends AnnotationSubject {
    "type": Type;
    "expr": string;
  }
  export interface Annotation extends InheritingObject, AnnotationSubject {
    "inheritable"?: boolean | null;
  }
  export interface Type extends SubclassableObject, AnnotationSubject {
    "expr"?: string | null;
    "from_alias"?: boolean | null;
    "is_from_alias"?: boolean | null;
  }
  export interface PrimitiveType extends Type {}
  export interface CollectionType extends PrimitiveType {}
  export interface Array extends CollectionType {
    "element_type": Type;
    "dimensions"?: number[] | null;
  }
  export interface CallableObject extends AnnotationSubject {
    "params": Parameter[];
    "return_type"?: Type | null;
    "return_typemod"?: TypeModifier | null;
  }
  export enum Cardinality {
    One = "One",
    Many = "Many",
  }
  export interface VolatilitySubject extends $Object {
    "volatility"?: Volatility | null;
  }
  export interface Cast extends AnnotationSubject, VolatilitySubject {
    "from_type"?: Type | null;
    "to_type"?: Type | null;
    "allow_implicit"?: boolean | null;
    "allow_assignment"?: boolean | null;
  }
  export interface ConsistencySubject extends $Object, InheritingObject, AnnotationSubject {
    "constraints": Constraint[];
  }
  export interface Constraint extends CallableObject, InheritingObject {
    "subject"?: ConsistencySubject | null;
    "params": Parameter[];
    "expr"?: string | null;
    "subjectexpr"?: string | null;
    "finalexpr"?: string | null;
    "errmessage"?: string | null;
    "delegated"?: boolean | null;
    "except_expr"?: string | null;
  }
  export interface Delta extends $Object {
    "parents": Delta[];
  }
  export interface Extension extends AnnotationSubject, $Object {
    "package": sys.ExtensionPackage;
  }
  export interface Function extends CallableObject, VolatilitySubject {
    "used_globals": Global[];
    "body"?: string | null;
    "language": string;
    "preserves_optionality"?: boolean | null;
  }
  export interface Global extends AnnotationSubject {
    "target": Type;
    "required"?: boolean | null;
    "cardinality"?: Cardinality | null;
    "expr"?: string | null;
    "default"?: string | null;
  }
  export interface Index extends InheritingObject, AnnotationSubject {
    "expr"?: string | null;
    "except_expr"?: string | null;
  }
  export interface Pointer extends InheritingObject, ConsistencySubject, AnnotationSubject {
    "source"?: Source | null;
    "target"?: Type | null;
    "cardinality"?: Cardinality | null;
    "required"?: boolean | null;
    "readonly"?: boolean | null;
    "default"?: string | null;
    "expr"?: string | null;
  }
  export interface Source extends $Object {
    "pointers": Pointer[];
    "indexes": Index[];
  }
  export interface Link extends Pointer, Source {
    "target"?: ObjectType | null;
    "properties": Property[];
    "on_target_delete"?: TargetDeleteAction | null;
    "on_source_delete"?: SourceDeleteAction | null;
  }
  export interface Migration extends AnnotationSubject, $Object {
    "parents": Migration[];
    "script": string;
    "message"?: string | null;
  }
  export interface Module extends $Object, AnnotationSubject {}
  export interface ObjectType extends InheritingObject, ConsistencySubject, AnnotationSubject, Type, Source {
    "union_of": ObjectType[];
    "intersection_of": ObjectType[];
    "links": Link[];
    "properties": Property[];
    "access_policies": AccessPolicy[];
    "compound_type": boolean;
    "is_compound_type": boolean;
  }
  export interface Operator extends CallableObject, VolatilitySubject {
    "operator_kind"?: OperatorKind | null;
    "is_abstract"?: boolean | null;
    "abstract"?: boolean | null;
  }
  export enum OperatorKind {
    Infix = "Infix",
    Postfix = "Postfix",
    Prefix = "Prefix",
    Ternary = "Ternary",
  }
  export interface Parameter extends $Object {
    "type": Type;
    "typemod": TypeModifier;
    "kind": ParameterKind;
    "num": number;
    "default"?: string | null;
  }
  export enum ParameterKind {
    VariadicParam = "VariadicParam",
    NamedOnlyParam = "NamedOnlyParam",
    PositionalParam = "PositionalParam",
  }
  export interface Property extends Pointer {}
  export interface PseudoType extends InheritingObject, Type {}
  export interface Range extends CollectionType {
    "element_type": Type;
  }
  export interface ScalarType extends InheritingObject, ConsistencySubject, AnnotationSubject, PrimitiveType {
    "default"?: string | null;
    "enum_values"?: string[] | null;
  }
  export enum SourceDeleteAction {
    DeleteTarget = "DeleteTarget",
    Allow = "Allow",
    DeleteTargetIfOrphan = "DeleteTargetIfOrphan",
  }
  export enum TargetDeleteAction {
    Restrict = "Restrict",
    DeleteSource = "DeleteSource",
    Allow = "Allow",
    DeferredRestrict = "DeferredRestrict",
  }
  export interface Tuple extends CollectionType {
    "element_types": TupleElement[];
    "named": boolean;
  }
  export interface TupleElement extends std.BaseObject {
    "type": Type;
    "name"?: string | null;
  }
  export enum TypeModifier {
    SetOfType = "SetOfType",
    OptionalType = "OptionalType",
    SingletonType = "SingletonType",
  }
  export enum Volatility {
    Immutable = "Immutable",
    Stable = "Stable",
    Volatile = "Volatile",
  }
}
export namespace cfg {
  export interface ConfigObject extends std.BaseObject {}
  export interface AbstractConfig extends ConfigObject {
    "auth": Auth[];
    "session_idle_timeout": edgedb.Duration;
    "session_idle_transaction_timeout": edgedb.Duration;
    "query_execution_timeout": edgedb.Duration;
    "listen_port": number;
    "listen_addresses": string[];
    "allow_dml_in_functions"?: boolean | null;
    "allow_bare_ddl"?: AllowBareDDL | null;
    "apply_access_policies"?: boolean | null;
    "allow_user_specified_id"?: boolean | null;
    "shared_buffers"?: edgedb.ConfigMemory | null;
    "query_work_mem"?: edgedb.ConfigMemory | null;
    "effective_cache_size"?: edgedb.ConfigMemory | null;
    "effective_io_concurrency"?: number | null;
    "default_statistics_target"?: number | null;
  }
  export enum AllowBareDDL {
    AlwaysAllow = "AlwaysAllow",
    NeverAllow = "NeverAllow",
  }
  export interface Auth extends ConfigObject {
    "method"?: AuthMethod | null;
    "priority": number;
    "user": string[];
    "comment"?: string | null;
  }
  export interface AuthMethod extends ConfigObject {
    "transports": ConnectionTransport[];
  }
  export interface Config extends AbstractConfig {}
  export enum ConnectionTransport {
    TCP = "TCP",
    HTTP = "HTTP",
  }
  export interface DatabaseConfig extends AbstractConfig {}
  export interface InstanceConfig extends AbstractConfig {}
  export interface JWT extends AuthMethod {
    "transports": ConnectionTransport[];
  }
  export interface SCRAM extends AuthMethod {
    "transports": ConnectionTransport[];
  }
  export interface Trust extends AuthMethod {}
}
export interface BelongsToArchive extends std.$Object {
  "archive": GtfsArchive;
}
export interface CalendarDate extends BelongsToArchive {
  "date": edgedb.LocalDate;
  "exception_type": ServiceExceptionType;
}
export interface GtfsArchive extends std.$Object {
  "lines": Line[];
  "routes": Route[];
  "services": Service[];
  "stops": Stop[];
  "transfers": Transfer[];
  "trips": Trip[];
  "contact_email": string;
  "end_date": edgedb.LocalDate;
  "lang": string;
  "publisher_name": string;
  "publisher_url": string;
  "start_date": edgedb.LocalDate;
  "version": string;
}
export interface Line extends BelongsToArchive {
  "color": string;
  "line_id": string;
  "long_name": string;
  "short_name": string;
  "sort_order": string;
  "text_color": string;
}
export enum ListedRouteType {
  IncludeInPublicListing = "IncludeInPublicListing",
  DoNotIncludeInPublicListing = "DoNotIncludeInPublicListing",
}
export enum LocationType {
  Station = "Station",
  EntranceExit = "EntranceExit",
  GenericNode = "GenericNode",
  BoardingArea = "BoardingArea",
}
export enum PickupDropoffType {
  FlagStop = "FlagStop",
  ContinuousDropOff = "ContinuousDropOff",
}
export interface Route extends BelongsToArchive {
  "line"?: Line | null;
  "route_patterns": RoutePattern[];
  "agency_id": string;
  "color"?: string | null;
  "description"?: string | null;
  "fare_class": RouteFareClass;
  "listed_route"?: ListedRouteType | null;
  "long_name"?: string | null;
  "route": string;
  "route_sort_order": string;
  "route_type": RouteType;
  "short_name"?: string | null;
  "textColor"?: string | null;
  "url"?: string | null;
}
export enum RouteFareClass {
  LocalBus = "LocalBus",
  InnerExpress = "InnerExpress",
  OuterExpress = "OuterExpress",
  RapidTransit = "RapidTransit",
  CommuterRail = "CommuterRail",
  Ferry = "Ferry",
  Free = "Free",
  Special = "Special",
}
export interface RoutePattern extends BelongsToArchive {
  "representative_trip": Trip;
  "route": Route[];
  "direction_id": string;
  "name": string;
  "route_pattern_id": string;
  "sort_order": string;
  "time_desc"?: string | null;
  "typicality": RoutePatternTypicality;
}
export enum RoutePatternTypicality {
  NotDefined = "NotDefined",
  Typical = "Typical",
  Deviation = "Deviation",
  HighlyAtypical = "HighlyAtypical",
  Diversion = "Diversion",
}
export enum RouteType {
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
export enum ScheduleType {
  Weekday = "Weekday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Other = "Other",
}
export enum ScheduleTypicality {
  NotDefined = "NotDefined",
  Typical = "Typical",
  Extra = "Extra",
  Reduced = "Reduced",
  MajorChanges = "MajorChanges",
  MajorReductions = "MajorReductions",
}
export interface Service extends BelongsToArchive {
  "calendar_dates": CalendarDate[];
  "description": string;
  "rating_description": string;
  "rating_end_date": edgedb.LocalDate;
  "rating_start_date": edgedb.LocalDate;
  "schedule_name": string;
  "schedule_type": ScheduleType;
  "schedule_typicality": ScheduleTypicality;
  "service_days": [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  "service_id": string;
  "end_date": edgedb.LocalDate;
  "start_date": edgedb.LocalDate;
}
export enum ServiceExceptionType {
  ServiceAdded = "ServiceAdded",
  ServiceRemoved = "ServiceRemoved",
}
export interface Shape extends BelongsToArchive {
  "points": [unknown, unknown][];
  "shape_id": string;
}
export interface Stop extends BelongsToArchive {
  "child_stops": Stop[];
  "parent_stop": Stop[];
  "at_street"?: string | null;
  "description"?: string | null;
  "lat"?: unknown | null;
  "location_type": LocationType;
  "lon"?: unknown | null;
  "municipality"?: string | null;
  "name": string;
  "on_street"?: string | null;
  "stopId": string;
  "stop_code"?: string | null;
  "url"?: string | null;
  "vehicle_type"?: RouteType | null;
  "wheelchair_boarding": WheelchairBoardingType;
  "zone_id"?: string | null;
}
export interface StopTime extends BelongsToArchive {
  "stop": Stop;
  "trip": Trip;
  "arrival_time": edgedb.LocalTime;
  "departure_time": edgedb.LocalTime;
  "dropoff_type"?: PickupDropoffType | null;
  "pickup_type"?: PickupDropoffType | null;
  "stop_headsign"?: string | null;
  "stop_sequence"?: string | null;
}
export interface Transfer extends BelongsToArchive {
  "from_stop": Stop;
  "to_stop": Stop;
  "from_trip"?: Trip | null;
  "to_trip"?: Trip | null;
  "min_transfer_time"?: edgedb.Duration | null;
  "min_walk_time"?: edgedb.Duration | null;
  "min_wheelchair_time"?: edgedb.Duration | null;
  "suggested_buffer_time"?: edgedb.Duration | null;
  "transfer_type": TransferType;
  "wheelchair_transfer"?: WheelchairTransferType | null;
}
export enum TransferType {
  Recommended = "Recommended",
  Timed = "Timed",
  RequiresMinimumTime = "RequiresMinimumTime",
  NotPossible = "NotPossible",
}
export interface Trip extends BelongsToArchive {
  "route": Route;
  "service": Service;
  "shape": Shape;
  "route_pattern": RoutePattern;
  "stop_times": StopTime[];
  "bikes_allowed": boolean;
  "block_id"?: string | null;
  "direction_id": string;
  "headsign": string;
  "route_type"?: RouteType | null;
  "short_name"?: string | null;
  "trip_id": string;
  "wheelchair_accessible": boolean;
}
export enum WheelchairBoardingType {
  InheritFromParent = "InheritFromParent",
  Accessible = "Accessible",
  NotAccessible = "NotAccessible",
}
export enum WheelchairTransferType {
  NoInformation = "NoInformation",
  Accessible = "Accessible",
  NotAccessible = "NotAccessible",
}
export namespace sys {
  export interface SystemObject extends schema.AnnotationSubject {}
  export interface Database extends SystemObject, schema.AnnotationSubject {
    "name": string;
  }
  export interface ExtensionPackage extends SystemObject, schema.AnnotationSubject {
    "script": string;
    "version": {major: number, minor: number, stage: VersionStage, stage_no: number, local: string[]};
  }
  export interface Role extends SystemObject, schema.InheritingObject, schema.AnnotationSubject {
    "member_of": Role[];
    "superuser": boolean;
    "password"?: string | null;
    "name": string;
    "is_superuser": boolean;
  }
  export enum TransactionIsolation {
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable",
  }
  export enum VersionStage {
    dev = "dev",
    alpha = "alpha",
    beta = "beta",
    rc = "rc",
    final = "final",
  }
}
export interface types {
  "std": {
    "BaseObject": std.BaseObject;
    "Object": std.$Object;
    "FreeObject": std.FreeObject;
    "JsonEmpty": std.JsonEmpty;
  };
  "schema": {
    "AccessKind": schema.AccessKind;
    "Object": schema.$Object;
    "SubclassableObject": schema.SubclassableObject;
    "InheritingObject": schema.InheritingObject;
    "AnnotationSubject": schema.AnnotationSubject;
    "AccessPolicy": schema.AccessPolicy;
    "AccessPolicyAction": schema.AccessPolicyAction;
    "Alias": schema.Alias;
    "Annotation": schema.Annotation;
    "Type": schema.Type;
    "PrimitiveType": schema.PrimitiveType;
    "CollectionType": schema.CollectionType;
    "Array": schema.Array;
    "CallableObject": schema.CallableObject;
    "Cardinality": schema.Cardinality;
    "VolatilitySubject": schema.VolatilitySubject;
    "Cast": schema.Cast;
    "ConsistencySubject": schema.ConsistencySubject;
    "Constraint": schema.Constraint;
    "Delta": schema.Delta;
    "Extension": schema.Extension;
    "Function": schema.Function;
    "Global": schema.Global;
    "Index": schema.Index;
    "Pointer": schema.Pointer;
    "Source": schema.Source;
    "Link": schema.Link;
    "Migration": schema.Migration;
    "Module": schema.Module;
    "ObjectType": schema.ObjectType;
    "Operator": schema.Operator;
    "OperatorKind": schema.OperatorKind;
    "Parameter": schema.Parameter;
    "ParameterKind": schema.ParameterKind;
    "Property": schema.Property;
    "PseudoType": schema.PseudoType;
    "Range": schema.Range;
    "ScalarType": schema.ScalarType;
    "SourceDeleteAction": schema.SourceDeleteAction;
    "TargetDeleteAction": schema.TargetDeleteAction;
    "Tuple": schema.Tuple;
    "TupleElement": schema.TupleElement;
    "TypeModifier": schema.TypeModifier;
    "Volatility": schema.Volatility;
  };
  "cfg": {
    "ConfigObject": cfg.ConfigObject;
    "AbstractConfig": cfg.AbstractConfig;
    "AllowBareDDL": cfg.AllowBareDDL;
    "Auth": cfg.Auth;
    "AuthMethod": cfg.AuthMethod;
    "Config": cfg.Config;
    "ConnectionTransport": cfg.ConnectionTransport;
    "DatabaseConfig": cfg.DatabaseConfig;
    "InstanceConfig": cfg.InstanceConfig;
    "JWT": cfg.JWT;
    "SCRAM": cfg.SCRAM;
    "Trust": cfg.Trust;
  };
  "default": {
    "BelongsToArchive": BelongsToArchive;
    "CalendarDate": CalendarDate;
    "GtfsArchive": GtfsArchive;
    "Line": Line;
    "ListedRouteType": ListedRouteType;
    "LocationType": LocationType;
    "PickupDropoffType": PickupDropoffType;
    "Route": Route;
    "RouteFareClass": RouteFareClass;
    "RoutePattern": RoutePattern;
    "RoutePatternTypicality": RoutePatternTypicality;
    "RouteType": RouteType;
    "ScheduleType": ScheduleType;
    "ScheduleTypicality": ScheduleTypicality;
    "Service": Service;
    "ServiceExceptionType": ServiceExceptionType;
    "Shape": Shape;
    "Stop": Stop;
    "StopTime": StopTime;
    "Transfer": Transfer;
    "TransferType": TransferType;
    "Trip": Trip;
    "WheelchairBoardingType": WheelchairBoardingType;
    "WheelchairTransferType": WheelchairTransferType;
  };
  "sys": {
    "SystemObject": sys.SystemObject;
    "Database": sys.Database;
    "ExtensionPackage": sys.ExtensionPackage;
    "Role": sys.Role;
    "TransactionIsolation": sys.TransactionIsolation;
    "VersionStage": sys.VersionStage;
  };
}
