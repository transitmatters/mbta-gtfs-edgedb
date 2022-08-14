CREATE MIGRATION m1feaj2hfqt64iuc7q4yjybrvptlwoxpfouejfnwstlosaycb4hrbq
    ONTO m1q3dnlwccnw2zzv35avwc6fvs2ceun4ctwj7grwfiybmhween6pgq
{
  ALTER TYPE default::GtfsArchive {
      CREATE MULTI LINK lines := (.<archive[IS default::Line]);
      CREATE MULTI LINK routes := (.<archive[IS default::Route]);
      CREATE MULTI LINK services := (.<archive[IS default::Service]);
      CREATE MULTI LINK stops := (.<archive[IS default::Stop]);
      CREATE MULTI LINK transfers := (.<archive[IS default::Transfer]);
      CREATE MULTI LINK trips := (.<archive[IS default::Trip]);
  };
};
