//const { v4: uuidv4 } = require("uuid");

// From CENO extension

const NO_CACHE_URL_REGEXPS = [
    /^https?:\/\/(www\.)?google\.com\/complete\//,  // Google Search completion
];

function removeFragmentFromURL(url) {
    return url.replace(/#.*$/, "");
}

function removeSchemeFromURL(url) {
    return url.replace(/^[a-z][-+.0-9a-z]*:\/\//i, "");
}

function removeTrailingSlashes(s) {
    return s.replace(/\/+$/, "");
}

function removeLeadingWWW(s) {
    return s.replace(/^www\./i, "");
}

function isUrlCacheable(url) {
    for (const rx of NO_CACHE_URL_REGEXPS)
        if (rx.test(url))
            return false;
    return true;
}

function getDhtGroup(url) {
    if (!url) return url;
    url = removeFragmentFromURL(url);
    url = removeSchemeFromURL(url);
    url = removeTrailingSlashes(url);
    url = removeLeadingWWW(url);
    return url;
}

module.exports = async ({data, page, crawler}) => {
  const id = getDhtGroup(data.url);
  //const cacheable = isUrlCacheable(data.url);

  await page.setExtraHTTPHeaders({
    "X-Ouinet-Group": id,
  });
  console.log(`X-Ouinet-Group: ${id} ${data.url}`);

  await crawler.loadPage(page, data);
};
