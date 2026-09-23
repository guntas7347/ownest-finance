"use server";

export interface GoogleReviewItem {
  authorName: string;
  source: string;
  score: number;
  authorAvatarUrl: string | null;
  content: string;
  mediaUrl: string | null;
  authorInitials: string | null;
  publishedAt: string | null;
  sourceUrl: string | null;
  relativeDate?: string | null;
}

const FALLBACK_REVIEWS: GoogleReviewItem[] = [
  {
    authorName: "Davinder Attri",
    source: "google",
    score: 5,
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocLkq758tgjoGVXASo1qi9P2cjP_42wAZR9_y3DFs5Q8TBg3OQ=s120-c-rp-mo-br100",
    content:
      "Ibban from Ownest Finance was great to deal with. He explained the home loan process clearly, kept me updated and got me a really good interest rate for my home loan. Would definitely recommend him.",
    mediaUrl: null,
    authorInitials: "DA",
    publishedAt: "2026-08-02T01:28:33Z",
    relativeDate: "a month ago",
    sourceUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xoUWNscHBVWEY2WlVsSE4xSXhXREpJTjJSZmVFRRAB!2m1!1s0x0:0x37827649c57a93d4!3m1!1s2@1:CAIQACodChtycF9oOlhQclppUXF6ZUlHN1IxWDJIN2RfeEE%7C%7C?hl=en-US",
  },
  {
    authorName: "Tania Kashyap",
    source: "google",
    score: 5,
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocIYTfRHHg483Lg5igp73oX5tn4v8zTCUw65qzxsmEg6N7AKfw=s120-c-rp-mo-br100",
    content:
      "Highly recommend Ownest Finance. Quick approval. Cheaper interest rate than dealership on my car loan. Very happy with the service 👍🏻",
    mediaUrl:
      "https://lh3.googleusercontent.com/grass-cs/ACvplmMF_fLXVcshmVZ_QJNtLFfT1sPIGRnLUplpwwPMjm3Dh3fMSEPaIWO_9CVwocF9kp2CgeaS81QG_STbXtM8M66PKRx9z8C7MfZHYTSZqyvnpwZ2pY4B6S8OFY3_uh_9LzegWalUHDEQSGxX=k-no",
    authorInitials: "TK",
    publishedAt: "2026-08-06T11:45:21Z",
    relativeDate: "a month ago",
    sourceUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21reFlqaDJhbVU1Y20xUVZHdzBNMGR0U0RjeFNHYxAB!2m1!1s0x0:0x37827649c57a93d4!3m1!1s2@1:CAIQACodChtycF9oOmkxYjh2amU5cm1QVGw0M0dtSDcxSGc%7C%7C?hl=en-US",
  },
  {
    authorName: "Ekamjot Singh",
    source: "google",
    score: 5,
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocLF3Cy8IN0w3HS_KzrJEOSqy4JO3Ap4y-1gFw6vZwvFoZwmPQ=s120-c-rp-mo-ba12-br100",
    content:
      "Got my car loan approved without any hassle! The team provided excellent service and secured one of the most competitive rates in the market, despite my visa conditions. Highly recommended!",
    mediaUrl:
      "https://lh3.googleusercontent.com/grass-cs/ACvplmPXiod2wYnb6_np8esTcREWznVrekc234mxitEWW9sT1rFZ5Q4heeSErQ5ttPfTUWYBNKHrOoyEcaBJ5YQR1etlh-OhmV8DMSBUmXm8xVwHYiP7t587za-o5wqW9YKUXORigLUvSOhQLOPz=k-no",
    authorInitials: "ES",
    publishedAt: "2026-08-06T05:04:02Z",
    relativeDate: "a month ago",
    sourceUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xsalpITjNWV0Z0YkU1dmFVUlFZbE5YUjA5RVNYYxAB!2m1!1s0x0:0x37827649c57a93d4!3m1!1s2@1:CAIQACodChtycF9oOlljZHN3VWFtbE5vaURQYlNXR09ESXc%7C%7C?hl=en-US",
  },
  {
    authorName: "Sid Mahajan",
    source: "google",
    score: 5,
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjUvop_giFNBRn5HPQ6-j_4tNGL3nOVUgSAX71x-neTA8X5EoJKH=s120-c-rp-mo-ba12-br100",
    content:
      "Excellent communication and great support throughout by Ibban. Highly recommend!",
    mediaUrl: null,
    authorInitials: "SM",
    publishedAt: "2026-08-02T02:40:38Z",
    relativeDate: "a month ago",
    sourceUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25CdVpVMWFSSGh5Um05TmJuZFRSWEI1WWtsVFJWRRAB!2m1!1s0x0:0x37827649c57a93d4!3m1!1s2@1:CAIQACodChtycF9oOnBuZU1aRHhyRm9NbndTRXB5YklTRVE%7C%7C?hl=en-US",
  },
];

const getGoogleReviews = async (): Promise<GoogleReviewItem[]> => {
  try {
    const dataId = "0xae39810cb73a6bc1:0x37827649c57a93d4"; // ownestfinance
    const apiKey = process.env.SERPAPI_KEY;

    if (!apiKey) {
      return FALLBACK_REVIEWS;
    }

    const res = await fetch(
      `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataId}&hl=en&api_key=${apiKey}`,
      { next: { revalidate: 60 * 60 * 24 } },
    );

    if (!res.ok) {
      return FALLBACK_REVIEWS;
    }

    const json = await res.json();
    const normalized = normalizeGoogleReviews(json.reviews);
    if (!normalized || normalized.length === 0) {
      return FALLBACK_REVIEWS;
    }
    return normalized;
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return FALLBACK_REVIEWS;
  }
};

export default getGoogleReviews;

const normalizeGoogleReviews = (reviews: any, limit = 10): GoogleReviewItem[] => {
  if (!Array.isArray(reviews)) return [];

  const sorted = [...reviews].sort((a, b) => {
    const ta = a?.iso_date ? Date.parse(a.iso_date) : 0;
    const tb = b?.iso_date ? Date.parse(b.iso_date) : 0;
    return tb - ta; // latest first
  });

  return sorted.slice(0, limit).map((r) => {
    const name = r.user?.name || "Verified Client";
    const initials = name
      .split(" ")
      .map((part: string) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return {
      authorName: name,
      source: "google",
      score: typeof r.rating === "number" ? r.rating : 5,
      authorAvatarUrl: r.user?.thumbnail || null,
      content: r.snippet || r.extracted_snippet?.original || "",
      mediaUrl:
        Array.isArray(r.images) && r.images.length > 0 ? r.images[0] : null,
      authorInitials: initials || "OC",
      publishedAt: r.iso_date || null,
      relativeDate: r.date || null,
      sourceUrl:
        r.link ||
        "https://www.google.com/maps/place/Ownest+Finance/@-33.8688,151.2093,12z/data=!4m8!3m7!1s0xae39810cb73a6bc1:0x37827649c57a93d4!8m2!3d-33.8688!4d151.2093!9m1!1b1!16s%2Fg%2F11w4p__9z",
    };
  });
};
