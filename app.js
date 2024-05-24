const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

const object = {
  areaClasses: {
    largeClasses: [
      {
        largeClass: [
          { largeClassCode: "japan", largeClassName: "日本" },
          {
            middleClasses: [
              {
                middleClass: [
                  { middleClassCode: "hokkaido", middleClassName: "北海道" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "sapporo", smallClassName: "札幌" },
                          {
                            detailClasses: [
                              {
                                detailClass: {
                                  detailClassCode: "A",
                                  detailClassName: "札幌・新札幌・琴似",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "B",
                                  detailClassName: "大通公園・時計台・狸小路",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "C",
                                  detailClassName: "すすきの・中島公園",
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "jozankei",
                            smallClassName: "定山渓",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "wakkanai",
                            smallClassName: "稚内・留萌・利尻・礼文",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "abashiri",
                            smallClassName: "網走・紋別・北見・知床",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kushiro",
                            smallClassName: "釧路・阿寒・川湯・根室",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "obihiro",
                            smallClassName: "帯広・十勝",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hidaka",
                            smallClassName: "日高・えりも",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "furano",
                            smallClassName: "富良野・美瑛・トマム",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "asahikawa",
                            smallClassName: "旭川・層雲峡・旭岳",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chitose",
                            smallClassName:
                              "千歳・支笏・苫小牧・滝川・夕張・空知",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "otaru",
                            smallClassName: "小樽・キロロ・積丹・余市",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "niseko",
                            smallClassName: "ルスツ・ニセコ・倶知安",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hakodate",
                            smallClassName: "函館・湯の川・大沼・奥尻",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "noboribetsu",
                            smallClassName: "洞爺・室蘭・登別",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "aomori", middleClassName: "青森県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "aomori",
                            smallClassName: "青森・浅虫温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tsugaru",
                            smallClassName: "津軽半島・五所川原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ntsugaru",
                            smallClassName: "白神山地・西津軽",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hirosaki",
                            smallClassName: "弘前・黒石",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "towadako",
                            smallClassName: "八甲田・十和田湖・奥入瀬",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hachinohe",
                            smallClassName: "八戸・三沢・七戸十和田",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shimokita",
                            smallClassName: "下北・大間・むつ",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "iwate", middleClassName: "岩手県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "morioka", smallClassName: "盛岡" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shizukuishi",
                            smallClassName: "雫石",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "appi",
                            smallClassName: "安比高原・八幡平・二戸",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kuji",
                            smallClassName: "宮古・久慈・岩泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ofunato",
                            smallClassName: "釜石・大船渡・陸前高田",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kitakami",
                            smallClassName: "北上・花巻・遠野",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ichinoseki",
                            smallClassName: "奥州・平泉・一関",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "miyagi", middleClassName: "宮城県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "sendai",
                            smallClassName: "仙台・多賀城・名取",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "akiu",
                            smallClassName: "秋保・作並",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "naruko",
                            smallClassName: "鳴子・古川・くりこま高原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "matsushima",
                            smallClassName: "松島・塩釜・石巻・南三陸・気仙沼",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shiroishi",
                            smallClassName: "白石・宮城蔵王",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "akita", middleClassName: "秋田県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "akita", smallClassName: "秋田" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "noshiro",
                            smallClassName: "能代・男鹿・白神",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "odate",
                            smallClassName: "大館・鹿角・十和田大湯・八幡平",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tazawa",
                            smallClassName: "角館・大曲・田沢湖",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yuzawa",
                            smallClassName: "湯沢・横手",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "honjo",
                            smallClassName: "由利本荘・鳥海山",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "yamagata", middleClassName: "山形県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "yamagata",
                            smallClassName: "山形・蔵王・天童・上山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yonezawa",
                            smallClassName: "米沢・赤湯・高畠・長井",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "sagae",
                            smallClassName: "寒河江・月山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "mogami",
                            smallClassName: "尾花沢・新庄・村山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shonai",
                            smallClassName: "酒田・鶴岡・湯野浜・温海",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "hukushima", middleClassName: "福島県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "fukushima",
                            smallClassName: "福島・二本松",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "aizu",
                            smallClassName: "会津若松・喜多方",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "bandai",
                            smallClassName: "猪苗代・表磐梯",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "urabandai",
                            smallClassName: "磐梯高原・裏磐梯",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "koriyama",
                            smallClassName: "郡山・磐梯熱海",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "minami",
                            smallClassName: "南会津・下郷・只見・檜枝岐",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nakadori",
                            smallClassName: "白河・須賀川",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hamadori",
                            smallClassName: "いわき・南相馬・相馬",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "ibaragi", middleClassName: "茨城県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "mito",
                            smallClassName: "水戸・笠間",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "oarai",
                            smallClassName: "大洗・ひたちなか",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hitachi",
                            smallClassName: "日立・北茨城・奥久慈",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tsukuba",
                            smallClassName: "つくば・土浦・取手",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yuki",
                            smallClassName: "古河・結城・筑西・常総",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kashima",
                            smallClassName: "鹿嶋・神栖・潮来・北浦",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "tochigi", middleClassName: "栃木県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "utsunomiya",
                            smallClassName: "宇都宮・さくら",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nikko",
                            smallClassName: "日光・中禅寺湖・奥日光・今市",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kinugawa",
                            smallClassName: "鬼怒川・川治・湯西川・川俣",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nasu",
                            smallClassName: "那須・板室・黒磯",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shiobara",
                            smallClassName: "塩原・矢板・大田原・西那須野",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "mashiko",
                            smallClassName: "真岡・益子・茂木",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "koyama",
                            smallClassName: "小山・足利・佐野・栃木",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "gunma", middleClassName: "群馬県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "maebashi",
                            smallClassName: "前橋・赤城",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ikaho",
                            smallClassName: "伊香保温泉・渋川",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "manza",
                            smallClassName: "万座･嬬恋･北軽井沢",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kusatsu",
                            smallClassName: "草津温泉・白根",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shimaonsen",
                            smallClassName: "四万温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "numata",
                            smallClassName: "水上・猿ヶ京・沼田",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "oze",
                            smallClassName: "尾瀬・丸沼",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kiryu",
                            smallClassName: "伊勢崎・太田・館林・桐生",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "takasaki",
                            smallClassName: "高崎",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "fujioka",
                            smallClassName: "富岡・藤岡・安中・磯部温泉",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "saitama", middleClassName: "埼玉県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "saitama",
                            smallClassName: "大宮・浦和・川口・上尾",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kasukabe",
                            smallClassName: "草加・越谷・春日部・羽生",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kumagaya",
                            smallClassName: "熊谷・深谷・本庄",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kawagoe",
                            smallClassName: "川越・東松山・志木・和光",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tokorozawa",
                            smallClassName: "所沢・狭山・飯能",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chichibu",
                            smallClassName: "秩父・長瀞",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "tiba", middleClassName: "千葉県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "chiba", smallClassName: "千葉" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "keiyo",
                            smallClassName: "舞浜・浦安・船橋・幕張",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kashiwa",
                            smallClassName: "松戸・柏",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "narita",
                            smallClassName: "成田空港・佐倉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "choshi",
                            smallClassName: "銚子・旭・九十九里・東金・茂原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "sotobo",
                            smallClassName: "鴨川・勝浦・御宿・養老渓谷",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tateyama",
                            smallClassName: "南房総・館山・白浜・千倉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "uchibo",
                            smallClassName: "市原・木更津・君津・富津・鋸南",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "tokyo", middleClassName: "東京都" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "tokyo",
                            smallClassName: "東京２３区内",
                          },
                          {
                            detailClasses: [
                              {
                                detailClass: {
                                  detailClassCode: "A",
                                  detailClassName:
                                    "東京駅・銀座・秋葉原・東陽町・葛西",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "B",
                                  detailClassName: "新橋・汐留・浜松町・お台場",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "C",
                                  detailClassName:
                                    "赤坂・六本木・霞ヶ関・永田町",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "D",
                                  detailClassName:
                                    "渋谷・恵比寿・目黒・二子玉川",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "E",
                                  detailClassName:
                                    "品川・大井町・蒲田・羽田空港",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "F",
                                  detailClassName: "新宿・中野・荻窪・四谷",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "G",
                                  detailClassName: "池袋・赤羽・巣鴨・大塚",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "H",
                                  detailClassName:
                                    "東京ドーム・飯田橋・御茶ノ水",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "I",
                                  detailClassName:
                                    "上野・浅草・錦糸町・新小岩・北千住",
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nishi",
                            smallClassName: "立川・八王子・町田・府中・吉祥寺",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "okutama",
                            smallClassName: "奥多摩・青梅・羽村",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "ritou", smallClassName: "八丈島" },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "oshima", smallClassName: "大島" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kouzu",
                            smallClassName: "神津島・新島・式根島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "miyake",
                            smallClassName: "三宅島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "Ogasawara",
                            smallClassName: "小笠原諸島",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "kanagawa", middleClassName: "神奈川県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "yokohama",
                            smallClassName: "横浜",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kawasaki",
                            smallClassName: "川崎",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "hakone", smallClassName: "箱根" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "odawara",
                            smallClassName: "小田原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yugawara",
                            smallClassName: "湯河原・真鶴",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "sagamiko",
                            smallClassName: "相模湖・丹沢",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "sagamihara",
                            smallClassName: "大和・相模原・町田西部",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ebina",
                            smallClassName: "厚木・海老名・伊勢原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shonan",
                            smallClassName: "湘南・鎌倉・江ノ島・藤沢・平塚",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "miura",
                            smallClassName: "横須賀・三浦",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "niigata", middleClassName: "新潟県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "niigata", smallClassName: "新潟" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kaetsu",
                            smallClassName: "月岡・瀬波・咲花",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kita",
                            smallClassName:
                              "長岡・燕三条・柏崎・弥彦・岩室・寺泊",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "minami",
                            smallClassName: "魚沼・十日町・津南・六日町・大湯",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yuzawa",
                            smallClassName: "越後湯沢・苗場",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "joetsu",
                            smallClassName: "上越・糸魚川・妙高",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "sado", smallClassName: "佐渡" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "toyama", middleClassName: "富山県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "toyama",
                            smallClassName: "富山・八尾・立山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "goto",
                            smallClassName: "滑川・魚津・朝日・黒部・宇奈月",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "gosei",
                            smallClassName: "高岡・氷見・砺波",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "ishikawa", middleClassName: "石川県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "kanazawa",
                            smallClassName: "金沢",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kaga",
                            smallClassName: "加賀・小松・辰口",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "noto",
                            smallClassName: "能登・輪島・珠洲",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nanao",
                            smallClassName: "七尾・和倉・羽咋",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "hukui", middleClassName: "福井県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "hukui", smallClassName: "福井" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "awara",
                            smallClassName: "あわら・三国",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "katsuyama",
                            smallClassName: "永平寺・勝山・大野",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "echizen",
                            smallClassName: "越前・鯖江・武生",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tsuruga",
                            smallClassName: "敦賀・美浜",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "obama",
                            smallClassName: "若狭・小浜・高浜",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "yamanasi", middleClassName: "山梨県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "kofu",
                            smallClassName: "甲府・湯村・昇仙峡",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yamanashi",
                            smallClassName: "山梨・石和・勝沼・塩山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "otsuki",
                            smallClassName: "大月・都留・道志渓谷",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yamanakako",
                            smallClassName: "山中湖・忍野",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kawaguchiko",
                            smallClassName:
                              "河口湖・富士吉田・本栖湖・西湖・精進湖",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "minobu",
                            smallClassName: "下部・身延・早川",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nirasaki",
                            smallClassName: "韮崎・南アルプス",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kiyosato",
                            smallClassName: "八ヶ岳・小淵沢・清里・大泉",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "nagano", middleClassName: "長野県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "nagano",
                            smallClassName:
                              "長野・小布施・信州高山・戸隠・飯綱",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "madara",
                            smallClassName: "斑尾・飯山・信濃町・野尻湖・黒姫",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nozawa",
                            smallClassName: "野沢温泉・木島平・秋山郷",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shiga",
                            smallClassName: "志賀高原･湯田中･渋",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ueda",
                            smallClassName: "上田・別所・鹿教湯",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chikuma",
                            smallClassName: "戸倉上山田・千曲",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "sugadaira",
                            smallClassName: "菅平・峰の原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "karui",
                            smallClassName: "軽井沢・佐久･小諸",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yatsu",
                            smallClassName: "八ヶ岳・野辺山・富士見・原村",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kirigamine",
                            smallClassName: "蓼科・白樺湖・霧ヶ峰・車山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "suwa", smallClassName: "諏訪湖" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ina",
                            smallClassName: "伊那・駒ヶ根・飯田・昼神",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "kiso", smallClassName: "木曽" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "matsumo",
                            smallClassName: "松本・塩尻・浅間温泉・美ヶ原温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kamiko",
                            smallClassName: "上高地・乗鞍・白骨",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hotaka",
                            smallClassName: "安曇野・穂高・大町・豊科",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hakuba",
                            smallClassName: "白馬・八方尾根・栂池高原・小谷",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "gihu", middleClassName: "岐阜県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "gifu",
                            smallClassName: "岐阜・各務原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kamitakara",
                            smallClassName: "奥飛騨・新穂高",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "takayama",
                            smallClassName: "高山・飛騨",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "gero",
                            smallClassName: "下呂温泉・濁河温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tajimi",
                            smallClassName: "中津川・多治見・恵那・美濃加茂",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "gujo",
                            smallClassName: "郡上八幡・関・美濃",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shirakawago",
                            smallClassName: "白川郷",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ogaki",
                            smallClassName: "大垣・岐阜羽島",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "shizuoka", middleClassName: "静岡県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "shizuoka",
                            smallClassName: "静岡・清水",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "atami", smallClassName: "熱海" },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "ito", smallClassName: "伊東" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "izukogen",
                            smallClassName: "伊豆高原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "higashi",
                            smallClassName: "東伊豆・河津",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shimoda",
                            smallClassName: "下田・南伊豆",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nishi",
                            smallClassName: "西伊豆・戸田・土肥・堂ヶ島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "naka",
                            smallClassName: "伊豆長岡・修善寺・天城湯ヶ島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "fuji",
                            smallClassName: "富士・富士宮",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "numazu",
                            smallClassName: "御殿場・沼津・三島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yaizu",
                            smallClassName: "焼津・藤枝・御前崎・寸又峡",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hamamatsu",
                            smallClassName: "浜松・浜名湖・天竜",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kikugawa",
                            smallClassName: "掛川・袋井・磐田",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "aichi", middleClassName: "愛知県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "nagoyashi",
                            smallClassName: "名古屋",
                          },
                          {
                            detailClasses: [
                              {
                                detailClass: {
                                  detailClassCode: "A",
                                  detailClassName: "名古屋駅・伏見・丸の内",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "B",
                                  detailClassName: "栄・錦・名古屋城",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "C",
                                  detailClassName:
                                    "金山・熱田・千種・ナゴヤドーム",
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "mikawawan",
                            smallClassName: "豊橋・豊川・蒲郡・伊良湖",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "okumikawa",
                            smallClassName: "奥三河・新城・湯谷温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "mikawa",
                            smallClassName: "豊田・刈谷・知立・安城・岡崎",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "owari",
                            smallClassName: "一宮・犬山・小牧・瀬戸・春日井",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chita",
                            smallClassName: "セントレア・東海・半田・知多",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "minamichita",
                            smallClassName: "南知多・日間賀島・篠島",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "mie", middleClassName: "三重県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "tsu",
                            smallClassName: "津･鈴鹿･亀山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yunoyama",
                            smallClassName: "四日市・桑名・湯の山・長島温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "iga",
                            smallClassName: "伊賀・名張",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "matsusaka",
                            smallClassName: "松阪",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ise",
                            smallClassName: "伊勢・二見",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "toba", smallClassName: "鳥羽" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shima",
                            smallClassName: "志摩・賢島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kumano",
                            smallClassName: "熊野・尾鷲・紀北",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "shiga", middleClassName: "滋賀県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "ootsu",
                            smallClassName: "大津・雄琴・草津・栗東",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kosei",
                            smallClassName: "湖西・高島・マキノ",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kohoku",
                            smallClassName: "長浜・米原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kotou",
                            smallClassName: "彦根・近江八幡・守山・東近江",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shigaraki",
                            smallClassName: "信楽・甲賀",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "kyoto", middleClassName: "京都府" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "shi", smallClassName: "京都" },
                          {
                            detailClasses: [
                              {
                                detailClass: {
                                  detailClassCode: "D",
                                  detailClassName: "京都駅",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "A",
                                  detailClassName: "嵐山・嵯峨野・太秦・高雄",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "B",
                                  detailClassName:
                                    "河原町・四条烏丸・二条城・御所",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "C",
                                  detailClassName: "祇園・東山・北白川",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "E",
                                  detailClassName: "大原・鞍馬・貴船",
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nannbu",
                            smallClassName: "宇治・長岡京",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yunohana",
                            smallClassName: "亀岡・湯の花・美山・京丹波",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "fukuchiyama",
                            smallClassName: "福知山・綾部",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hokubu",
                            smallClassName: "丹後・久美浜",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "miyazu",
                            smallClassName: "天橋立・宮津・舞鶴",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "osaka", middleClassName: "大阪府" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "shi", smallClassName: "大阪" },
                          {
                            detailClasses: [
                              {
                                detailClass: {
                                  detailClassCode: "B",
                                  detailClassName:
                                    "大阪駅・梅田・ユニバーサルシティ・尼崎",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "D",
                                  detailClassName:
                                    "なんば・心斎橋・天王寺・阿倍野・長居",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "C",
                                  detailClassName:
                                    "京橋・淀屋橋・本町・ベイエリア・弁天町",
                                },
                              },
                              {
                                detailClass: {
                                  detailClassCode: "A",
                                  detailClassName: "新大阪・江坂",
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hokubu",
                            smallClassName: "高槻・茨木・箕面・伊丹空港",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "toubu",
                            smallClassName: "枚方・守口・東大阪",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nantou",
                            smallClassName: "八尾・藤井寺・河内長野",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nanbu",
                            smallClassName: "堺・岸和田・関空・泉佐野",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "hyogo", middleClassName: "兵庫県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "kobe",
                            smallClassName: "神戸・有馬温泉・六甲山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nantou",
                            smallClassName: "宝塚・西宮・甲子園・三田・篠山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "minamichu",
                            smallClassName: "明石・加古川・三木",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nannansei",
                            smallClassName: "姫路・相生・赤穂",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chubu",
                            smallClassName: "和田山・竹田城・ハチ高原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kita",
                            smallClassName: "城崎温泉・豊岡・出石・神鍋",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kasumi",
                            smallClassName: "香住・浜坂・湯村",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "awaji", smallClassName: "淡路島" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "nara", middleClassName: "奈良県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "nara",
                            smallClassName: "奈良・大和高原",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hokubu",
                            smallClassName: "橿原・大和郡山・天理・生駒",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nanbu",
                            smallClassName: "吉野・十津川・天川・五條",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "wakayama", middleClassName: "和歌山県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "wakayama",
                            smallClassName: "和歌山・加太・和歌浦",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "Kihoku",
                            smallClassName: "高野山・橋本",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "gobo",
                            smallClassName: "御坊・有田・海南・日高",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shirahama",
                            smallClassName: "南紀白浜・紀伊田辺・龍神",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "Katsuura",
                            smallClassName: "勝浦・串本・すさみ",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hongu",
                            smallClassName: "熊野古道・新宮・本宮・中辺路",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "tottori", middleClassName: "鳥取県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "tottori",
                            smallClassName: "鳥取・岩美・浜村",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chubu",
                            smallClassName: "倉吉・三朝温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "seibu",
                            smallClassName: "米子・皆生温泉・大山",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "simane", middleClassName: "島根県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "matsue",
                            smallClassName: "松江・玉造・安来・奥出雲",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "toubu",
                            smallClassName: "出雲・大田・石見銀山",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "masuda",
                            smallClassName: "津和野・益田・浜田・江津",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ritou",
                            smallClassName: "隠岐諸島",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "okayama", middleClassName: "岡山県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "okayama", smallClassName: "岡山" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "bizen",
                            smallClassName: "牛窓・瀬戸内・備前",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tsuyama",
                            smallClassName: "津山・湯郷・美作・奥津",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "niimi",
                            smallClassName: "湯原・蒜山・新見・高梁",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kurashiki",
                            smallClassName: "倉敷・総社・玉野・笠岡",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "hiroshima", middleClassName: "広島県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "hiroshima",
                            smallClassName: "広島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "higashihiroshima",
                            smallClassName: "東広島・竹原・三原・広島空港",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "fukuyama",
                            smallClassName: "福山・尾道・しまなみ海道",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kure",
                            smallClassName: "呉・江田島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shohara",
                            smallClassName: "三次・庄原・帝釈峡",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "sandankyo",
                            smallClassName: "三段峡・芸北・北広島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "miyajima",
                            smallClassName: "宮島・宮浜温泉・廿日市",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "yamaguchi", middleClassName: "山口県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "yamaguchi",
                            smallClassName: "山口・湯田温泉・防府",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "shimonoseki",
                            smallClassName: "下関・宇部",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "iwakuni",
                            smallClassName: "岩国・周南・柳井",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hagi",
                            smallClassName: "萩・長門・秋吉台",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "tokushima", middleClassName: "徳島県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "tokushima",
                            smallClassName: "徳島・鳴門",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hokubu",
                            smallClassName: "大歩危・祖谷・剣山・吉野川",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nanbu",
                            smallClassName: "阿南・日和佐・宍喰",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "kagawa", middleClassName: "香川県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "takamatsu",
                            smallClassName: "高松・さぬき・東かがわ",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "sakaide",
                            smallClassName: "坂出・宇多津・丸亀",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kotohira",
                            smallClassName: "琴平・観音寺",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ritou",
                            smallClassName: "小豆島・直島",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "ehime", middleClassName: "愛媛県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "chuuyo",
                            smallClassName: "松山・道後",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "touyo",
                            smallClassName: "今治・しまなみ海道",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "saijo",
                            smallClassName: "西条・新居浜・四国中央",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nanyo",
                            smallClassName: "宇和島・八幡浜",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "kouchi", middleClassName: "高知県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "kouchi",
                            smallClassName: "高知・南国・香南・伊野",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "toubu",
                            smallClassName: "安芸・室戸",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "seibu",
                            smallClassName: "足摺・四万十・宿毛・須崎",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "hukuoka", middleClassName: "福岡県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "fukuoka",
                            smallClassName:
                              "博多・キャナルシティ・海の中道・太宰府・二日市",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "seibu",
                            smallClassName:
                              "天神・中洲・薬院・福岡ドーム・糸島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kitakyusyu",
                            smallClassName: "北九州",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chikuzen",
                            smallClassName: "宗像・宮若・飯塚",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kurume",
                            smallClassName:
                              "久留米・甘木・原鶴温泉・筑後川温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "buzen",
                            smallClassName: "北九州空港・苅田・行橋・豊前",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chikugo",
                            smallClassName: "大牟田・柳川・八女・筑後",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "saga", middleClassName: "佐賀県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "saga",
                            smallClassName: "佐賀・古湯温泉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "tosu", smallClassName: "鳥栖" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ureshino",
                            smallClassName: "嬉野・武雄・伊万里・有田・太良",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "karatsu",
                            smallClassName: "唐津・呼子",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "nagasaki", middleClassName: "長崎県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "nagasaki",
                            smallClassName: "長崎",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "unzen",
                            smallClassName: "雲仙・島原・小浜",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "airport",
                            smallClassName: "諫早・大村・長崎空港",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "sasebo",
                            smallClassName: "ハウステンボス・佐世保・平戸",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ritou",
                            smallClassName: "五島列島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "tsushima",
                            smallClassName: "対馬",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "iki", smallClassName: "壱岐島" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "kumamoto", middleClassName: "熊本県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "kumamoto",
                            smallClassName: "熊本",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kikuchi",
                            smallClassName: "大津・玉名・山鹿・荒尾・菊池",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "aso", smallClassName: "阿蘇" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yatsushiro",
                            smallClassName: "宇土・八代・水俣",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kuma",
                            smallClassName: "人吉・球磨",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "amakusa",
                            smallClassName: "天草･本渡",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kurokawa",
                            smallClassName: "黒川温泉・杖立",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "ooita", middleClassName: "大分県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "oita", smallClassName: "大分" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "beppu",
                            smallClassName: "別府・日出",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "usuki",
                            smallClassName: "佐伯・臼杵・豊後大野",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yufuin",
                            smallClassName: "湯布院・湯平",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "taketa",
                            smallClassName: "久住・竹田",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hita",
                            smallClassName: "九重・日田・天瀬",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kunisaki",
                            smallClassName: "国東・中津・宇佐・耶馬渓",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "miyazaki", middleClassName: "宮崎県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "miyazaki",
                            smallClassName: "宮崎",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hokubu",
                            smallClassName: "高千穂・延岡・日向・高鍋",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nanbu",
                            smallClassName: "都城・えびの・日南・綾",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "kagoshima", middleClassName: "鹿児島県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          {
                            smallClassCode: "kagoshima",
                            smallClassName: "鹿児島・桜島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "oosumi",
                            smallClassName: "霧島・国分・鹿児島空港",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kanoya",
                            smallClassName: "鹿屋・垂水・志布志",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hokusatsu",
                            smallClassName: "川内・出水",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nansatsu",
                            smallClassName: "指宿・枕崎・南さつま",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yakushima",
                            smallClassName: "屋久島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "ritou", smallClassName: "種子島" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "amami",
                            smallClassName: "奄美大島･喜界島・徳之島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "okinoerabu",
                            smallClassName: "沖永良部島・与論島",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                middleClass: [
                  { middleClassCode: "okinawa", middleClassName: "沖縄県" },
                  {
                    smallClasses: [
                      {
                        smallClass: [
                          { smallClassCode: "nahashi", smallClassName: "那覇" },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "hokubu",
                            smallClassName: "恩納・名護・本部・今帰仁",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "chubu",
                            smallClassName:
                              "宜野湾・北谷・読谷・沖縄市・うるま",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "nanbu",
                            smallClassName: "糸満・豊見城・南城",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kerama",
                            smallClassName: "慶良間・渡嘉敷・座間味・阿嘉",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "kumejima",
                            smallClassName: "久米島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "Miyako",
                            smallClassName: "宮古島・伊良部島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "ritou",
                            smallClassName: "石垣・西表・小浜島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          {
                            smallClassCode: "yonaguni",
                            smallClassName: "与那国島",
                          },
                        ],
                      },
                      {
                        smallClass: [
                          { smallClassCode: "daito", smallClassName: "大東島" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

app.use(
  "/youtube-reviewer",
  cors(),
  (() => {
    const router = express.Router();
    router.use("/most-popular", require("./routes/mostPopular10ForYouTube.js"));
    router.use("/channel1", require("./routes/channels1.js"));
    router.use("/channel2", require("./routes/channels2.js"));
    router.use("/channel3", require("./routes/channels3.js"));
    router.use("/channel4", require("./routes/channels4.js"));
    router.use("/channel5", require("./routes/channels5.js"));
    return router;
  })()
);

app.get("/", cors(), (req, res) => {
  res.send(object);
});

app.get("/about", cors(), (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
