CREATE MIGRATION m1wboamqzzx522ihogm4su7j5dfw4hwwv72d3eawmd7labm7on3uaa
    ONTO m1i3nh2baeb2i7lhp4wdchnzel3v4sogo42klc4xfiq23ywncgoo6a
{
  ALTER TYPE default::Service {
      ALTER LINK calendar_date {
          RENAME TO calendar_dates;
      };
  };
};
