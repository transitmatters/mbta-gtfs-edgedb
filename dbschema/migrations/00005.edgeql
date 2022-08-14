CREATE MIGRATION m1i3nh2baeb2i7lhp4wdchnzel3v4sogo42klc4xfiq23ywncgoo6a
    ONTO m1nwmq5kr6ta6zz2zvvfqbo2imrrhow3swqhuxdab5tir6lpclwutq
{
  ALTER TYPE default::Service {
      CREATE REQUIRED PROPERTY end_date -> cal::local_date {
          SET REQUIRED USING (<cal::local_date>'20220101');
      };
      CREATE REQUIRED PROPERTY start_date -> cal::local_date {
          SET REQUIRED USING (<cal::local_date>'20220101');
      };
  };
};
