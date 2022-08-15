CREATE MIGRATION m1kfqumgzqdbzmdvr62zsk2k344637vklb2mxl7j26n7ltsbb3z2lq
    ONTO m1feaj2hfqt64iuc7q4yjybrvptlwoxpfouejfnwstlosaycb4hrbq
{
  ALTER TYPE default::CalendarDate {
      CREATE REQUIRED PROPERTY service_id -> std::str {
          SET REQUIRED USING ('ooooh spooky');
      };
  };
};
