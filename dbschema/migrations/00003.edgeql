CREATE MIGRATION m1orxlwvkdz6ahb4kfwvorg5rd766cvbtjscsevhza5z5f7irxtweq
    ONTO m1unmun6fazebqlrm3jzphmofjy3wqkajqsnr2d5dwdry2i5z7f5yq
{
  ALTER TYPE default::GtfsArchive {
      DROP PROPERTY date;
      DROP PROPERTY url;
  };
};
