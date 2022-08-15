CREATE MIGRATION m1qu72wxhgtb7auf42m2u35ugvn3snvbhffscxif7f4llgllvnylba
    ONTO m1ofxwud5h4yluo3ix2t6gcee4oayt3g6ugpqc4eyxfc6wgxoxzywa
{
  ALTER TYPE default::Route {
      ALTER LINK route_patterns {
          RESET ON SOURCE DELETE;
      };
  };
  ALTER TYPE default::Service {
      DROP LINK calendar_dates;
  };
  ALTER TYPE default::StopTime {
      ALTER LINK stop {
          RESET ON TARGET DELETE;
      };
  };
  ALTER TYPE default::StopTime {
      ALTER LINK trip {
          RESET ON TARGET DELETE;
      };
  };
};
