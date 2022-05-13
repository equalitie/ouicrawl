## Ouicrawl

## Browser-Based crawling through Ouinet

This repository contains crawling driver for [Browsertrix Crawler](https://github.com/webrecorder/browsertrix-crawler) to allow for crawling through the Ouinet client

### Running a crawl

Assuming the Ouinet client is running an HTTP/S proxy on `localhost:8077` via Docker host network mode, a crawl of `<URL>` can be started by running Browsertrix Crawler and specifying the `ouinet-crawl.js` in this repo as the driver. Other Browsertrix Crawler flags can be added as needed.

```
docker run --network host -v $PWD/:/config -i -e PROXY_HOST=localhost -e PROXY_PORT=8077 webrecorder/browsertrix-crawler:latest crawl --driver /config/ouinet-crawl.js --url <URL>
```

