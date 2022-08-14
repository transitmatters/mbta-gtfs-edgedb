import { e, client, GtfsLoader } from "..";

export const ingestFeedInfo = async (loader: GtfsLoader) => {
    const rows = loader.feedInfo();
    const {
        feed_publisher_name,
        feed_publisher_url,
        feed_lang,
        feed_start_date,
        feed_end_date,
        feed_version,
        feed_contact_email,
    } = rows[0];
    const query = e.insert(e.GtfsArchive, {
        publisher_name: feed_publisher_name,
        publisher_url: feed_publisher_url,
        lang: feed_lang,
        start_date: e.cal.local_date(feed_start_date),
        end_date: e.cal.local_date(feed_end_date),
        version: feed_version,
        contact_email: feed_contact_email,
    });
    const { id } = await query.run(client);
    return id;
};
