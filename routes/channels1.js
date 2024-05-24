const router = require("express").Router();
const result = {
  kind: "youtube#channelListResponse",
  etag: "vMiRj5_Xq6vd9GNMCoYqHEMQoss",
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#channel",
      etag: "5TH0LTJx29heJguF6gA_iW-FN4E",
      id: "UCZf__ehlCEBPop-_sldpBUQ",
      snippet: {
        title: "HikakinTV",
        description:
          "登録ありがとうございます。\n◆プロフィール◆\nYouTubeにてHIKAKIN、HikakinTV、HikakinGames、HikakinBlogと\n４つのチャンネルを運営し、動画の総アクセス数は180億回を突破、\nチャンネル登録者数は計2000万人以上、YouTubeタレント事務所uuum株式会社ファウンダー兼最高顧問。",
        customUrl: "@hikakintv",
        publishedAt: "2011-07-19T11:31:43Z",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/0SuFIKzgRLpalpaJTr-h5w-O6eNS8N1cJfE_C5wxBJGhrl5hFT9CaAlT9H6NXkRjhTP9EStN=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
            height: 88,
          },
          medium: {
            url: "https://yt3.ggpht.com/0SuFIKzgRLpalpaJTr-h5w-O6eNS8N1cJfE_C5wxBJGhrl5hFT9CaAlT9H6NXkRjhTP9EStN=s240-c-k-c0x00ffffff-no-rj",
            width: 240,
            height: 240,
          },
          high: {
            url: "https://yt3.ggpht.com/0SuFIKzgRLpalpaJTr-h5w-O6eNS8N1cJfE_C5wxBJGhrl5hFT9CaAlT9H6NXkRjhTP9EStN=s800-c-k-c0x00ffffff-no-rj",
            width: 800,
            height: 800,
          },
        },
        localized: {
          title: "HikakinTV",
          description:
            "登録ありがとうございます。\n◆プロフィール◆\nYouTubeにてHIKAKIN、HikakinTV、HikakinGames、HikakinBlogと\n４つのチャンネルを運営し、動画の総アクセス数は180億回を突破、\nチャンネル登録者数は計2000万人以上、YouTubeタレント事務所uuum株式会社ファウンダー兼最高顧問。",
        },
      },
      contentDetails: {
        relatedPlaylists: {
          likes: "",
          uploads: "UUZf__ehlCEBPop-_sldpBUQ",
        },
      },
      statistics: {
        viewCount: "12540044611",
        subscriberCount: "17500000",
        hiddenSubscriberCount: false,
        videoCount: "3519",
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
