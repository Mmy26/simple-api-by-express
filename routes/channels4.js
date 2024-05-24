const router = require("express").Router();

const result = {
  kind: "youtube#channelListResponse",
  etag: "YulJACmXHewdIbxoTurtnuxMMzA",
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#channel",
      etag: "PLlM2u0UYpDQNZzA1wXIxJc0RbI",
      id: "UCv6P5nsS9rP4tDtFlqLU_QQ",
      snippet: {
        title: "ずっと真夜中でいいのに。 ZUTOMAYO",
        description: "",
        customUrl: "@zutomayo2321",
        publishedAt: "2018-05-15T09:56:56Z",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/08nK4wXv0HKbd_gN-4LA-5J0U-hacYff7b0zIzRQwBwR8U2KH2hDrmDrsDs1mUfOtpl-HnjAgw=s88-c-k-c0x00ffffff-no-nd-rj",
            width: 88,
            height: 88,
          },
          medium: {
            url: "https://yt3.ggpht.com/08nK4wXv0HKbd_gN-4LA-5J0U-hacYff7b0zIzRQwBwR8U2KH2hDrmDrsDs1mUfOtpl-HnjAgw=s240-c-k-c0x00ffffff-no-nd-rj",
            width: 240,
            height: 240,
          },
          high: {
            url: "https://yt3.ggpht.com/08nK4wXv0HKbd_gN-4LA-5J0U-hacYff7b0zIzRQwBwR8U2KH2hDrmDrsDs1mUfOtpl-HnjAgw=s800-c-k-c0x00ffffff-no-nd-rj",
            width: 800,
            height: 800,
          },
        },
        localized: {
          title: "ずっと真夜中でいいのに。 ZUTOMAYO",
          description: "",
        },
        country: "JP",
      },
      contentDetails: {
        relatedPlaylists: {
          likes: "",
          uploads: "UUv6P5nsS9rP4tDtFlqLU_QQ",
        },
      },
      statistics: {
        viewCount: "765700039",
        subscriberCount: "1750000",
        hiddenSubscriberCount: false,
        videoCount: "121",
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
