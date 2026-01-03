const getRobotsTxt = async (settings) => {
  const sitemap = await fetch(`${settings.origin}/robots.txt`);

  if (!sitemap.ok) return [];

  const text = await sitemap.text();
  const u = await processRobots(text, settings);
  //Flatten and remove dupes
  return [...new Set(u.flat())];
};

const scrutari = async (settings) => {
  if (!settings.origin) {
    throw new Error("Origin URL is required in settings.");
  }
  const links = await getRobotsTxt(settings);
  const o = links.join(", ");

  return o;
};

export default scrutari;

const validURL = (str) => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};

const processRobots = async (data, settings) => {
  const lines = data.split("\n");
  const arr = Array.from(lines);
  let pages = [];
  for (const line of arr) {
    if (line.trim() !== "") {
      const delimiter = ":";

      const directive = line.substring(0, line.indexOf(delimiter)).trim();
      const value = line
        .substring(line.indexOf(delimiter) + delimiter.length)
        .trim();

      if (
        //Todo: Read allow, disallow directives as well to get everything
        //["allow", "disallow", "sitemap"].includes(directive.toLowerCase())
        ["sitemap"].includes(directive.toLowerCase())
      ) {
        if (validURL(value)) {
          if (directive.toLowerCase() === "sitemap") {
            //Process sitemap URL
            pages.push(await processSitemap(value, settings));
          } else {
            pages.push(value);
          }
        } else {
          pages.push(new URL(value, settings.origin).href);
        }
      }
    }
  }
  //Remove dupes
  pages = [...new Set(pages.flat())];
  return pages;
};

const processSitemap = async (sitemapUrl, settings) => {
  let pages = [];
  const res = await fetch(sitemapUrl);

  if (!res.ok) {
    return [];
  }

  const text = await res.text();
  const locations = text.matchAll("<loc>(.*?)</loc>");
  for (const loc of locations) {
    pages.push(loc[1]);
    pages.push(await processPage(loc[1], settings));
  }

  return [...pages];
};

const processPage = async (pageUrl, settings) => {
  if (settings.verbose) {
    console.log(`Processing page: ${pageUrl}`);
  }
  const res = await fetch(pageUrl);

  if (!res.ok) {
    return [];
  }

  const text = await res.text();
  //Extract links from page
  const linkRegex = /href="(http[s]?:\/\/[^"]+)"/g;
  const links = text.matchAll(linkRegex);
  const pageLinks = [];
  for (const link of links) {
    const url = new URL(link[1]);
    if (url.origin === settings.origin) {
      //todo: ignore images and stylesheets
      //todo:remove hashes and parameters
      pageLinks.push(link[1]);
    }
  }

  return pageLinks;
};
