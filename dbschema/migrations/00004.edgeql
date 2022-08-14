CREATE MIGRATION m1nwmq5kr6ta6zz2zvvfqbo2imrrhow3swqhuxdab5tir6lpclwutq
    ONTO m1orxlwvkdz6ahb4kfwvorg5rd766cvbtjscsevhza5z5f7irxtweq
{
  ALTER TYPE default::Service {
      ALTER LINK calendar_date {
          RESET OPTIONALITY;
      };
  };
};
