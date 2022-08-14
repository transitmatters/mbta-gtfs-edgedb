CREATE MIGRATION m1unmun6fazebqlrm3jzphmofjy3wqkajqsnr2d5dwdry2i5z7f5yq
    ONTO m1e7x3brtnqq2dd6bud3tmpaocabeysw6hjwanfb5zujyk5ro3k2ia
{
  ALTER TYPE default::GtfsArchive {
      CREATE REQUIRED PROPERTY contact_email -> std::str {
          SET REQUIRED USING ('help@mbta.org');
      };
      CREATE REQUIRED PROPERTY end_date -> cal::local_date {
          SET REQUIRED USING (<cal::local_date>'2022-01-01');
      };
      CREATE REQUIRED PROPERTY lang -> std::str {
          SET REQUIRED USING ('en');
      };
      CREATE REQUIRED PROPERTY publisher_name -> std::str {
          SET REQUIRED USING ('MBTA');
      };
      CREATE REQUIRED PROPERTY publisher_url -> std::str {
          SET REQUIRED USING ('https://mbta.com');
      };
      CREATE REQUIRED PROPERTY start_date -> cal::local_date {
          SET REQUIRED USING (<cal::local_date>'2022-01-01');
      };
      CREATE REQUIRED PROPERTY version -> std::str {
          SET REQUIRED USING ('1');
      };
  };
  ALTER TYPE default::Line {
      ALTER LINK archive {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
  ALTER TYPE default::Route {
      ALTER LINK route_patterns {
          ON SOURCE DELETE DELETE TARGET;
      };
  };
  ALTER TYPE default::Service {
      ALTER LINK archive {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
  ALTER TYPE default::Service {
      ALTER LINK calendar_date {
          ON SOURCE DELETE DELETE TARGET;
      };
  };
  ALTER TYPE default::Stop {
      ALTER LINK archive {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
  ALTER TYPE default::StopTime {
      ALTER LINK stop {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
  ALTER TYPE default::StopTime {
      ALTER LINK trip {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
  ALTER TYPE default::Transfer {
      ALTER LINK archive {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
  ALTER TYPE default::Trip {
      ALTER LINK archive {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
};
