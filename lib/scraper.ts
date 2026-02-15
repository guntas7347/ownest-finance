import * as cheerio from "cheerio";

export async function scrapeMarketRates() {
    const url = "https://www.rba.gov.au/";

    const res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0",
            "Accept-Language": "en-US",
        },
        // cache once per day
        next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) {
        throw new Error("RBA fetch failed");
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    // CASH RATE
    const cashRate = $(".statistic-1 .statistic-value")
        .clone()
        .children()
        .remove()
        .end()
        .text()
        .trim();

    const cashEffective = $(".statistic-1 .statistic-meta-update")
        .first()
        .text()
        .replace("Effective date", "")
        .trim();

    // INFLATION
    const inflation = $(".statistic-2 .statistic-value")
        .clone()
        .children()
        .remove()
        .end()
        .text()
        .trim();

    const inflationPeriod = $(".statistic-2 .statistic-meta-update")
        .first()
        .text()
        .replace("Annual change", "")
        .trim();

    // EXCHANGE RATES
    const exchangeRates = {
        TWI: $(".statistic-value-1").text().trim(),
        USD: $(".statistic-value-2").text().trim(),
        CNY: $(".statistic-value-3").text().trim(),
        JPY: $(".statistic-value-4").text().trim(),
        EUR: $(".statistic-value-5").text().trim(),
    };

    return {
        cashRate,
        cashEffective,
        inflation,
        inflationPeriod,
        exchangeRates,
    };
}