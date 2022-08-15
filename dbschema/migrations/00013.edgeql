CREATE MIGRATION m1knjxlz6ftnzkyf7wokireoe2ahkg76pksk3snmvnboxidyuus7fa
    ONTO m1qu72wxhgtb7auf42m2u35ugvn3snvbhffscxif7f4llgllvnylba
{
  ALTER TYPE default::Service {
      CREATE MULTI LINK calendar_dates -> default::CalendarDate;
  };
};
