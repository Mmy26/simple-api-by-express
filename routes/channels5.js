const router = require("express").Router();

const result = {
  kind: "youtube#channelListResponse",
  etag: "roYTCFNoocfZ-5zBWdkxh0DeqXc",
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#channel",
      etag: "75XmQoX6Z5JhCq3AYhk-p5V_f84",
      id: "UCyck8jJ1yQzy82rLJ5nv8Gg",
      snippet: {
        title: "安保瑠輝也 あんぽるきや",
        description: "",
        customUrl: "@anporukiya",
        publishedAt: "2011-02-12T01:32:16Z",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/VcrI7vt4V7DTpsMS3jojOfYkuCdY9YvfbH8MS03XczI5fr_2ekxC_v4s0dfksAHxhQrV1cXpuw=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
            height: 88,
          },
          medium: {
            url: "https://yt3.ggpht.com/VcrI7vt4V7DTpsMS3jojOfYkuCdY9YvfbH8MS03XczI5fr_2ekxC_v4s0dfksAHxhQrV1cXpuw=s240-c-k-c0x00ffffff-no-rj",
            width: 240,
            height: 240,
          },
          high: {
            url: "https://yt3.ggpht.com/VcrI7vt4V7DTpsMS3jojOfYkuCdY9YvfbH8MS03XczI5fr_2ekxC_v4s0dfksAHxhQrV1cXpuw=s800-c-k-c0x00ffffff-no-rj",
            width: 800,
            height: 800,
          },
        },
        localized: {
          title: "安保瑠輝也 あんぽるきや",
          description: "",
        },
      },
      contentDetails: {
        relatedPlaylists: {
          likes: "",
          uploads: "UUyck8jJ1yQzy82rLJ5nv8Gg",
        },
      },
      statistics: {
        viewCount: "309629524",
        subscriberCount: "656000",
        hiddenSubscriberCount: false,
        videoCount: "392",
      },
      status: {
        privacyStatus: "public",
        isLinked: true,
        longUploadsStatus: "longUploadsUnspecified",
        madeForKids: false,
      },
    },
  ],
};

router.get("/", (req, res) => {
  res.send(result);
});

module.exports = router;
