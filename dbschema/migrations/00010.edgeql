CREATE MIGRATION m1ytf2ompxzqp6pwv6tsrbgr2rqnnach3gntetwckt3ym5znclqdra
    ONTO m1kfqumgzqdbzmdvr62zsk2k344637vklb2mxl7j26n7ltsbb3z2lq
{
  ALTER TYPE default::Service {
      ALTER PROPERTY rating_description {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::Service {
      ALTER PROPERTY rating_end_date {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::Service {
      ALTER PROPERTY rating_start_date {
          RESET OPTIONALITY;
      };
  };
};
