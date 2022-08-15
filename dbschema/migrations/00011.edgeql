CREATE MIGRATION m1ofxwud5h4yluo3ix2t6gcee4oayt3g6ugpqc4eyxfc6wgxoxzywa
    ONTO m1ytf2ompxzqp6pwv6tsrbgr2rqnnach3gntetwckt3ym5znclqdra
{
  ALTER TYPE default::BelongsToArchive {
      ALTER LINK archive {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
};
