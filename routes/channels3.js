const router = require("express").Router();

const result = {
  kind: "youtube#channelListResponse",
  etag: "dp0FWCJTE6SLDHCdIDEUvCoCjQU",
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#channel",
      etag: "n5zTE4VokBRPenAR1_vyEO6ttG8",
      id: "UCSxwcQnzA5K6DvofvBn6ATA",
      snippet: {
        title: "King & Prince",
        description:
          "King & Prince\n2018年に結成し、同年5月23日にシングル「シンデレラガール」でデビュー。\n",
        customUrl: "@kp_official_523",
        publishedAt: "2021-05-21T10:49:51.425826Z",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/DcuVAfpDtm20_moLRkYYST329oNXDOYvImdjF2EJsTNduas3ZEWyxaWrCqxgzheLLqo8uqsDnRs=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
            height: 88,
          },
          medium: {
            url: "https://yt3.ggpht.com/DcuVAfpDtm20_moLRkYYST329oNXDOYvImdjF2EJsTNduas3ZEWyxaWrCqxgzheLLqo8uqsDnRs=s240-c-k-c0x00ffffff-no-rj",
            width: 240,
            height: 240,
          },
          high: {
            url: "https://yt3.ggpht.com/DcuVAfpDtm20_moLRkYYST329oNXDOYvImdjF2EJsTNduas3ZEWyxaWrCqxgzheLLqo8uqsDnRs=s800-c-k-c0x00ffffff-no-rj",
            width: 800,
            height: 800,
          },
        },
        defaultLanguage: "ja",
        localized: {
          title: "King & Prince",
          description:
            "King & Prince\n2018年に結成し、同年5月23日にシングル「シンデレラガール」でデビュー。\n",
        },
        country: "JP",
      },
      contentDetails: {
        relatedPlaylists: {
          likes: "",
          uploads: "UUSxwcQnzA5K6DvofvBn6ATA",
        },
      },
      statistics: {
        viewCount: "1369628022",
        subscriberCount: "1860000",
        hiddenSubscriberCount: false,
        videoCount: "263",
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
