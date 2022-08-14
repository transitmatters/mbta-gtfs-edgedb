CREATE MIGRATION m1q3dnlwccnw2zzv35avwc6fvs2ceun4ctwj7grwfiybmhween6pgq
    ONTO m1wboamqzzx522ihogm4su7j5dfw4hwwv72d3eawmd7labm7on3uaa
{
  CREATE TYPE default::BelongsToArchive {
      CREATE REQUIRED LINK archive -> default::GtfsArchive;
  };
  ALTER TYPE default::CalendarDate {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::CalendarDate {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::GtfsArchive {
      DROP LINK lines;
      DROP LINK routes;
      DROP LINK services;
      DROP LINK stops;
      DROP LINK transfers;
      DROP LINK trips;
  };
  ALTER TYPE default::Line {
      DROP LINK archive;
  };
  ALTER TYPE default::Line {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::Line {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::Route EXTENDING default::BelongsToArchive LAST;
  ALTER TYPE default::Route {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::RoutePattern {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::RoutePattern {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::Service {
      DROP LINK archive;
  };
  ALTER TYPE default::Service {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::Service {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::Shape {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::Shape {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::Stop {
      DROP LINK archive;
  };
  ALTER TYPE default::Stop {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::Stop {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::StopTime {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::StopTime {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::Transfer {
      DROP LINK archive;
  };
  ALTER TYPE default::Transfer {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::Transfer {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
  ALTER TYPE default::Trip {
      DROP LINK archive;
  };
  ALTER TYPE default::Trip {
      CREATE LINK archive -> default::GtfsArchive {
          SET REQUIRED USING (SELECT
              default::GtfsArchive 
          LIMIT
              1
          );
      };
      EXTENDING default::BelongsToArchive LAST;
  };
  ALTER TYPE default::Trip {
      ALTER LINK archive {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
};
