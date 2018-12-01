const FIELD_TYPES = require('./FIELD_TYPES')

const FIELDS = {
  additionalInfo: id => ({
    id,
    placeholder: "dodatkowa wiedza",
    type: FIELD_TYPES.textarea,
  }),
  hourlySettlement: id => ({
    id,
    label: "rozliczenie godzinowe ",
    type: FIELD_TYPES.bool,
  }),
  vehicleType: id => ({
    id,
    label: "Typ pojazdu",
    options: [
      "inne",
      "pojazd rolniczy",
      "kamper",
      "samochód ciężarowy",
      "samochód terenowy",
      "samochód osobowy",
    ],
    placeholder: "",
    type: FIELD_TYPES.select,
  }),
  provideTools: id => ({
    id,
    label: "udostępniam narzędzia ",
    type: FIELD_TYPES.bool,
  }),
  buildingType: id => ({
    id,
    label: "typ obiektu ",
    options: [
      "mieszkanie",
      "dom",
      "hala",
      "budynek wolnostojący",
      "biurowiec",
      "blok",
      "inne",
    ],
    placeholder: "",
    type: FIELD_TYPES.select,
  }),
  areaSize: (id, { max = 1000 } = {}) => ({
    id,
    label: "powierzchnia",
    max,
    min: 1,
    placeholder: "",
    suffix: "m2",
    type: FIELD_TYPES.number,
  }),
  provideResources: id => ({
    id,
    label: "Udostępniam środki",
    type: FIELD_TYPES.bool,
  }),
  dirtLevel: id => ({
    id,
    label: "Rodzaj Brudu",
    type: FIELD_TYPES.dirt,
  }),
  floor: id => ({
    label: "Piętro",
    id,
    max: 100,
    min: 0,
    placeholder: "",
    type: FIELD_TYPES.number,
  }),
};

module.exports= [
  {
    id: "00ZXkGRWzHjuF00AHEkW",
    name: "Odśnieżanie pojazdu",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2F00ZXkGRWzHjuF00AHEkW?alt=media&token=52a0c618-f0e1-4b02-9539-c57a8aa58d32",
    fields: [
      FIELDS.vehicleType("3G2vSg1cYqoSiDBTSX4c"),
      {
        id: "PA7heaWjPyMpMQKdYENA",
        label: "marka i model",
        type: FIELD_TYPES.text,
      },
      FIELDS.provideTools("YwQBvpw5qfZ3jepPsGqE"),
      FIELDS.additionalInfo("uXH3U2iu8giASE9oQuoI"),
    ],
  },
  {
    id: "3GpC01ZhATm08zTdrQJG",
    name: "Koszenie trawy",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2F3GpC01ZhATm08zTdrQJG?alt=media&token=95fda32b-fc4a-4b03-acad-1a7469552913",
    fields: [
      FIELDS.buildingType("8EqJOpSOG3iyQfUyIgEJ"),
      {
        id: "JlvJzsk8ERiWc3jL3Ub8",
        label: "prace dodatkowe",
        options: [
          "wywóz trawy",
          "palenie trawy",
          "pakowanie do worków",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.areaSize("cMcC9zUDL5rBh0GIySQz", { max: 100000 }),
      {
        id: "ecw74fC2IgQJo1FwnrVx",
        label: "rodzaj miejsca ",
        options: [
          "podjazd",
          "parking",
          "chodnik",
          "ulica",
          "otwarta przestrzeń",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.hourlySettlement("oDlKbWYjd8P3NRSjwY7f"),
      FIELDS.provideTools("qHru6AabA7rkKfITtN5G"),
      FIELDS.additionalInfo("o2vrbGXlm9E5MJ3RhWfk"),
    ],
  },
  {
    id: "5TZvuY7TGrhLLBelGWCp",
    name: "Mycie okien",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2F5TZvuY7TGrhLLBelGWCp?alt=media&token=ac4e37c6-f415-4182-9092-b6774e0aeadf",
    fields: [
      {
        id: "5Vm54P9T01WHO6ifCpDQ",
        label: "Typ okna",
        options: [
          "nie otwierane",
          "Inne",
          "Balkonowe",
          "Dachowe",
          "Tradycyjne",
        ],
        placeholder: "Wybierz",
        type: FIELD_TYPES.select,
      },
      FIELDS.hourlySettlement("7yNClhrDiteaYXHZtuEk"),
      {
        id: "858LOTqkiJuQtocSdMBm",
        label: "Rodzaj Brudu",
        type: FIELD_TYPES.dirt,
      },
      FIELDS.floor("Glcz6T9G63ldcUiHshd1"),
      FIELDS.buildingType("NVEsx34vMKtHaIxQpQBs"),
      FIELDS.provideResources("RDsoyR9KqP6Jn6337cfa"),
      FIELDS.provideTools("h2h15UoJT2MQiayuMEwL"),
      FIELDS.areaSize("t0YPKAruK8QdPjCIijVh"),
      FIELDS.additionalInfo("hmhMtQEOZoRfPsI2BgrY"),
    ],
  },
  {
    id: "5eEd2X5eIP0cMz1sycM3",
    name: "Odgarnianie liści",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2F5eEd2X5eIP0cMz1sycM3?alt=media&token=8aeedcd2-dbb1-4b98-9761-50f79dba3712",
    fields: [
      {
        id: "PJuHemkKZe562T75rChM",
        label: "rodzaj miejsca ",
        options: [
          "podjazd",
          "parking",
          "chodnik",
          "ulica",
          "otwarta przestrzeń",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.hourlySettlement("Qz8FRYSMLfQozEaPiAoc"),
      {
        id: "VGMSv5pCRk3Sgo4V2dm2",
        label: "prace dodatkowe ",
        multi: true,
        options: [
          "wywóz liści",
          "palenie liści",
          "pakowanie do worków",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.provideTools("hZ51Rxfz6sE8wg2kddSK"),
      FIELDS.areaSize("rdAI3FfU9jD10cY9TeXb"),
      FIELDS.buildingType("y2IvOCmxK3QRychbgAph"),
      FIELDS.additionalInfo("q6OmdGLVA1rPfP1RfM4U"),
    ],
  },
  {
    id: "CQitLmTJdPo8lMpGuwnr",
    name: "Wyprowadzanie zwierząt",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FCQitLmTJdPo8lMpGuwnr?alt=media&token=6200321a-d044-4f51-82f6-34ce27ddc6a7",
    fields: [
      {
        label: "jakie zwierzę",
        type: FIELD_TYPES.text,
        id: "0WMryrS8i7U4chEwDxa7",
      },
      {
        label: "ilość dni ",
        id: "9F1uz29BvyPs81f4HHbT",
        max: 100,
        min: 1,
        placeholder: "",
        type: FIELD_TYPES.number,
      },
      { label: "posiłki ", type: FIELD_TYPES.bool, id: "F4pRPif909KLHfqznE60" },
      {
        label: "godziny wyjść",
        id: "TZpmFRW0nCQjZv4jnbyH",
        type: FIELD_TYPES.text,
      },
      {
        label: "wielkość ",
        id: "iJU1qvit0mw8QyxUnVCC",
        options: ["małe", "średnie", "duże", "bardzo duże"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      {
        label: "godziny posiłków ",
        type: FIELD_TYPES.text,
        id: "jCS1lqp2ZbnPnPRlxkGK",
      },
      {
        label: "ilość wyjść ",
        id: "rusvpRusKdXdFBsdDhjt",
        max: 10,
        min: 1,
        placeholder: "",
        type: FIELD_TYPES.number,
      },
      FIELDS.hourlySettlement("tsJXWZj4A1K2wv8bBimg"),
      FIELDS.additionalInfo("Udv749l6GHZvTbfaloZJ"),
    ],
  },
  {
    id: "E8K1Qdu0JfKDuQtnICS1",
    name: "Malowanie obiektu",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FE8K1Qdu0JfKDuQtnICS1?alt=media&token=826a5a84-cee9-425b-a321-b0d93c3497e0",
    fields: [
      {
        label: "rodzaj podłoża ",
        id: "1PbAmSzHunXuau5KgbXK",
        options: ["gładka ściana", "cegła", "tynk", "kamień", "drewno", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.buildingType("DpDIqLupzULwu4KOSXrs"),
      FIELDS.provideTools("Iz1ZHPIhTVfsXJO2yYjI"),
      {
        label: "poziom przygotowania ",
        id: "YG2PEcgR5PKOFpqUX7X8",
        options: [
          "do malowania",
          "do gruntowania",
          "do zerwania stare podłoża",
          "do zabezpieczenia",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      {
        label: "prace dodatkowe ",
        id: "lgbFYKSHJCvNmyAnf1Nn",
        options: [
          "gruntowanie",
          "zabezpieczanie miejsca",
          "zrywanie warstw",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.areaSize("nSvPx0uhp145qRF49wtY"),
      FIELDS.hourlySettlement("om3a21JVHj8JVFZoSPbg"),
      FIELDS.additionalInfo("OZ8DAKyyecbGWZB6hnfN"),
    ],
  },
  {
    id: "OqGSWBB7Am7vA0nlpsu3",
    name: "Opieka nad osobą starszą",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FOqGSWBB7Am7vA0nlpsu3?alt=media&token=517781ca-951b-4a6e-9203-9736e00d7c74",
    fields: [
      {
        label: "czas opieki ",
        id: "0PKc9Z2k8l6g87IGmNj2",
        max: 24,
        min: 1,
        placeholder: "",
        suffix: "h",
        type: FIELD_TYPES.number,
      },
      {
        label: "przygotowanie posiłku ",
        id: "484ZBb1sxgdqY4pPiYM0",
        type: FIELD_TYPES.bool,
      },
      {
        label: "spacer ",
        id: "O72WpkT2ysOdnV7eJFid",
        type: FIELD_TYPES.bool,
      },
      {
        label: "schorzenia ",
        id: "jeXwI1is64ikWIrKes94",
        multi: true,
        options: [
          "przewlekłe",
          "uczulenia",
          "niepełnosprawność",
          "brak słuchu",
          "brak wzroku",
          "wózek inwalidzki",
          "kule",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      {
        label: "przestrzeń otwarta ",
        type: FIELD_TYPES.bool,
        id: "lvAJBUSa1BW8vuMVttWJ",
      },
      {
        label: "miejsce ",
        id: "vLjCDlZLgsGt9KbTiCjA",
        options: ["mieszkanie", "dom", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.additionalInfo("Yk37wCuPdyoqjJKtY1x2"),
    ],
  },
  {
    id: "WJUVuodMjOOQInweGXOX",
    name: "Sprzątanie",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FWJUVuodMjOOQInweGXOX?alt=media&token=abdf1cbe-af50-4c66-a036-d0a4b845e8b5",
    fields: [
      FIELDS.provideTools("FeXZL4xlKLHICPqaEWX9"),
      FIELDS.dirtLevel("L9HCsMvBSX54D2kpRr3o"),
      FIELDS.hourlySettlement("W7hEc1uzWck2S6Y6PM10"),
      {
        label: "Rodzaj Pomieszczeń",
        multi: true,
        id: "XgCsNccD1LyVLdPZ2AKV",
        options: [
          "Pokój",
          "Salon",
          "Łazienka",
          "Toaleta",
          "Kuchnia",
          "Inne",
          "Pomieszczenie gospodarcze",
          "Garaż",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.buildingType("fkfKqK7QzWfFT4FBskI6"),
      FIELDS.floor("mJtInVdqlbP7QqIVTYdj"),
      {
        label: "Szczegóły sprzątania",
        id: "ouScOvcamxohX7iaUmkR",
        multi: true,
        options: [
          "Inne",
          "Pastowanie",
          "Mycie okien",
          "Mycie kuchni",
          "Czyszczenie łazienki i toalety",
          "Mycie podłóg",
          "Odkurzanie",
          "Śćieranie kurzy",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.provideResources("rGHv54FdeZ6OmDcatyUo"),
      FIELDS.areaSize("wH3Q2vErLKz4MsL9hwAK"),
      FIELDS.additionalInfo("4oFviuDqmNESSmUvvzZb"),
    ],
  },
  {
    id: "WKom5OudrlYlQcRxD3f1",
    name: "Złota rączka",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FWKom5OudrlYlQcRxD3f1?alt=media&token=c003c720-6211-4753-91c8-50e557fde84e",
    fields: [
      FIELDS.hourlySettlement("RntWRnPeoq2n4fwvVTFn"),
      {
        placeholder: "co trzeba zrobić",
        id: "yypr8vFGG84Pq8ThfB9T",
        type: FIELD_TYPES.textarea,
      },
    ],
  },
  {
    id: "cajJITRC4Qj4cxzsnCGW",
    name: "Mycie pojazdu",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FcajJITRC4Qj4cxzsnCGW?alt=media&token=68b2fd6a-7c99-49d0-b355-d58bbbf3167e",
    fields: [
      {
        placeholder: "Marka i model",
        id: "5BLNEDum1bABAH7g00kZ",
        type: FIELD_TYPES.textarea,
      },
      {
        label: "Rodzaj mycia",
        id: "BVeYKCMEwudkx1X0jyk3",
        options: ["w środku", "komplet", "z zewnątrz"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.hourlySettlement("HxNnnMvGuFxSWQA7BUZu"),
      FIELDS.dirtLevel("Rft0GgtvOXj3YGoW1fVz"),
      FIELDS.vehicleType("snPeiCCUhVO3e58j9YeA"),
      FIELDS.provideTools("voIDJPZbXNysBbVzILN4"),
      FIELDS.provideResources("xrwfH7aInqi1S10SRYt9"),
      FIELDS.additionalInfo("IY6levl4lAiQQSOGIQOI"),
    ],
  },
  {
    id: "cn9P8tnKzpMSJCwwZeuo",
    name: "Stanie w kolejce",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2Fcn9P8tnKzpMSJCwwZeuo?alt=media&token=65822dc0-2a20-4ba6-b63d-05c6544916db",
    fields: [
      FIELDS.hourlySettlement("UmxuexAKYdZvnVmahf2Y"),
      {
        label: "za czym ",
        id: "boIS6Ll9hY2KPpVPOvMi",
        options: ["wejściówką", "do lekarza", "za produktem", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      {
        label: "miejsce kolejki ",
        id: "rPEgNRJ6UmP6P2VDQmtu",
        options: ["na dworze", "w budynku", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.additionalInfo("irT0Ar64RjnKLwqnGWwr"),
    ],
  },
  {
    id: "dG7yoy6SXIbyz2OfnCYb",
    name: "Towarzystwo",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FdG7yoy6SXIbyz2OfnCYb?alt=media&token=3e0f4c10-b191-4779-9039-53de85fc037f",
    fields: [
      {
        label: "ilość godzin",
        id: "FMi0xR6WfvTnfIO2AZEh",
        max: 24,
        min: 1,
        placeholder: "",
        suffix: "h",
        type: FIELD_TYPES.number,
      },
      FIELDS.hourlySettlement("IpTLah22iip0hqgO1mZo"),
      {
        label: "cel ",
        id: "WfOcyGseDPEqJMn9KVes",
        options: ["spacer", "posiłek", "rekreacja", "event", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
    ],
  },
  {
    id: "e9OPcYbLGLe1h4ZVJD8E",
    name: "Transport",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2Fe9OPcYbLGLe1h4ZVJD8E?alt=media&token=739c6b56-9cdd-4932-9eb3-ddbfdaa16caf",
    fields: [
      {
        label: "godzina odbioru",
        id: "ITqbPNqfesDyCLm9Gkj9",
        placeholder: "godzina odbioru",
        type: FIELD_TYPES.text,
      },
      {
        label: "godzina dostarczenia",
        id: "NgUvXvhlvp8cGHl7eHQy",
        placeholder: "",
        type: FIELD_TYPES.text,
      },
      {
        label: "data przewozu",
        id: "kGKj9LDEaAzpzQED3eXy",
        placeholder: "data przewozu ",
        type: FIELD_TYPES.text,
      },
      {
        placeholder: "adres odbioru ",
        id: "ktYT3h5mHZWCno0YntEa",
        type: FIELD_TYPES.textarea,
      },
      {
        placeholder: "adres dostarczenia ",
        id: "uaQMpccNIzuIJMrdGL51",
        type: FIELD_TYPES.textarea,
      },
      {
        label: "co przewozimy ",
        id: "y6JHTnHMoC1uZI4IAvFL",
        options: ["osobę", "zwierzę", "rzecz", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.hourlySettlement("yOKLUJjMsmTzWdzIs9Zh"),
      FIELDS.additionalInfo("q16BH9GwpYaDyjfmM0n1"),
    ],
  },
  {
    id: "f7BtOVdBVhcHLp5e8qR9",
    name: "Opieka nad osobą niepełnosprawną",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2Ff7BtOVdBVhcHLp5e8qR9?alt=media&token=135aa26a-50e7-48e1-a073-37e838c8ff5d",
    fields: [
      {
        label: "schorzenia",
        id: "8g2B5q2FBVKYWzGbs4pA",
        options: [
          "przewlekłe",
          "uczulenia",
          "niepełnosprawność",
          "brak słuchu",
          "brak wzroku",
          "wózek inwalidzki",
          "kule",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      {
        label: "czas opieki ",
        id: "Ak3MXGX4dLzheJukg7U5",
        max: 24,
        min: 1,
        placeholder: "",
        suffix: "h",
        type: FIELD_TYPES.number,
      },
      {
        label: "rodzaj niepełnosprawności ",
        id: "QMlZMO18dERjYeNnq1bE",
        multi: true,
        options: [
          "przewlekle",
          "uczulenia",
          "brak słuchu",
          "brak wzroku",
          "wózek inwalidzki",
          "kule",
          "podpórka",
          "leżenie",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      {
        label: "przygotowanie posiłku ",
        id: "RqeZGv3JSuUYKTCeBWgt",
        type: FIELD_TYPES.bool,
      },
      {
        label: "przestrzeń otwarta ",
        type: FIELD_TYPES.bool,
        id: "fP3D8ICWk7YAjgt2eYt4",
      },
      {
        label: "spacer ",
        id: "pnqg73H7tNJTlfHgadBF",
        type: FIELD_TYPES.bool,
      },
      {
        label: "miejsce ",
        id: "xzE0lj0GdUBwqHJjVBoW",
        options: ["mieszkanie", "dom", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.additionalInfo("zVp4O5Ay6oJhPaPWsm6f"),
    ],
  },
  {
    id: "fyadEHDEFLBu8ivQ6PxI",
    name: "Mycie łodzi",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FfyadEHDEFLBu8ivQ6PxI?alt=media&token=960bf01e-dc71-44f4-8fef-26373ca414a2",
    fields: [
      {
        label: "rodzaj mycia ",
        id: "K92DmDpvETGvhjOIMo8f",
        options: ["z zewnątrz", "w środku", "dół", "komplet"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      {
        label: "typ obiektu ",
        id: "QJmoI2M2DIALv3NofNSw",
        options: [
          "katamaran",
          "jacht motorowy",
          "motorówka",
          "jacht żaglowy",
          "skuter",
          "prom",
          "statek pasażerski",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.provideTools("awUgwZMniV4xtzm1lgPM"),
      {
        label: "miejsce mycia ",
        id: "bwGWUedjpVRRSFdnhO34",
        options: ["port", "pomost", "hala", "przyczepa", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.provideResources("kAgybftD5Ve6kIRhSAQA"),
      FIELDS.hourlySettlement("mK75uIpNMNTJxhjC1H3k"),
      {
        label: "rodzaj łodzi ",
        id: "tca3MOe0jkiOilwrycMu",
        options: ["mała", "średnia", "duża", "bardzo duża"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.additionalInfo("ZaD8Ui4ttLkGuSyPV1sh"),
    ],
  },
  {
    id: "hCAGBil2U8E1S98rbiI6",
    name: "Opieka nad dziećmi",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FhCAGBil2U8E1S98rbiI6?alt=media&token=34b38571-f900-42fe-b1a0-d4c4ff9374f8",
    fields: [
      {
        label: "przestrzeń otwarta ",
        type: FIELD_TYPES.bool,
        id: "6Oqemnv0UoLSQiavaMoP",
      },
      {
        label: "spacer ",
        id: "CmrQy2gXvPYFwXm24EKC",
        type: FIELD_TYPES.bool,
      },
      {
        label: "ilość dzieci ",
        id: "FH5xbXUnnrQVkfw9QYqU",
        max: 10,
        min: 1,
        placeholder: "",
        type: FIELD_TYPES.number,
      },
      {
        label: "miejsce ",
        id: "LH4k01wAqEcnWIzIZx2g",
        options: ["mieszkanie", "dom", "inne"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      {
        label: "czas opieki ",
        id: "O0l1He9KyPRYIkw4EzCc",
        max: 24,
        min: 1,
        placeholder: "",
        suffix: "h",
        type: FIELD_TYPES.number,
      },
      {
        label: "przygotowanie posiłku ",
        id: "QBsBP2oVz2bpk67IJOTI",
        type: FIELD_TYPES.bool,
      },
      {
        label: "schorzenia ",
        id: "qXR33DlLQR4uyFy62Urf",
        multi: true,
        options: [
          "przewlekłe",
          "uczulenia",
          "niepełnosprawność",
          "brak słuchu",
          "brak wzroku",
          "wózek inwalidzki",
          "kule",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.additionalInfo("dqJkPgdo3nSTVQftw6hz"),
    ],
  },
  {
    id: "hsI91oouxRrpNoGQIHrr",
    name: "Prace w ogrodzie",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FhsI91oouxRrpNoGQIHrr?alt=media&token=81e7d3f9-7219-4914-bf97-b50c7d081e30",
    fields: [
      FIELDS.areaSize("9iFRo8uA5JDPgNDaEMQI"),
      FIELDS.hourlySettlement("TWYaBcmtaHFDXIBi0Lz9"),
      {
        label: "rodzaje prac ",
        id: "XhlFauLJjMqjrOvHlANb",
        options: [
          "koszenie trawy",
          "grabienie liści",
          "podcinanie roślin",
          "podlewanie roślin",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.provideTools("YcSYmu9CKPWAEPTFrQz9"),
      {
        label: "rodzaj ogrodu ",
        id: "fXCqENXoy5EoKr7c3UWB",
        options: ["mały", "średni", "duży", "bardzo duży", "olbrzymi"],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.provideResources("lIhzSaPkPxhDt3RhqDeg"),
      FIELDS.additionalInfo("vCeG1kSPMNVeXQqtKiGp"),
    ],
  },
  {
    id: "oeeqYD2ABGcN5PtfBXmw",
    name: "Prasowanie rzeczy",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FoeeqYD2ABGcN5PtfBXmw?alt=media&token=3601d494-c7d6-4ad4-a86b-fde28ae30679",
    fields: [
      FIELDS.provideTools("JIgT6A1Rrk01nZzK1XTX"),
      {
        label: "ilość rzeczy ",
        id: "fNSIDYCekPdFqhJyberv",
        max: 500,
        min: 1,
        placeholder: "",
        type: FIELD_TYPES.number,
      },
      {
        label: "rodzaj rzeczy ",
        id: "hJmL4jKv28vaWMM99YlQ",
        options: [
          "koszule",
          "sukienki",
          "spódnice",
          "garnitury",
          "marynarki",
          "spodnie",
          "t-shirty",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.additionalInfo("hveIKmnWNR3Tmw8kfzwN"),
      FIELDS.hourlySettlement("qJ7I6AJGSKw8AbnVje3q"),
    ],
  },
  {
    id: "rsGUN4YEvwfOgqa1S0rb",
    name: "Skręcanie mebli",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2FrsGUN4YEvwfOgqa1S0rb?alt=media&token=b1f43e2d-05d4-4087-93fe-9006c4f579af",
    fields: [
      {
        placeholder:
          "co trzeba skręcić, nazwa modelu, zrób zdjęcie mebla lub instrukcję obsługi",
        type: FIELD_TYPES.textarea,
        id: "hC0QISnECZMLzmfM36l8",
      },
      FIELDS.hourlySettlement("udJvDDgoSf5GfH14IjqJ"),
    ],
  },
  {
    id: "utcl42Cw0xkCdLn2rcAP",
    name: "Odśnieżanie miejsc",
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/helpio-app.appspot.com/o/jobs%2Futcl42Cw0xkCdLn2rcAP?alt=media&token=17ea2cd8-f2d3-4bb9-acf2-08da46d813a0",
    fields: [
      FIELDS.areaSize("06jqD1dpfj6xdvq8VusQ"),
      FIELDS.provideTools("1vbNOCuCdYvaADvC1XRj"),
      {
        label: "prace dodatkowe ",
        id: "2JHT9Qvu4bw1e22dpQDb",
        options: [
          "kucie lodu",
          "inne",
          "sypanie solą lub piaskiem",
          "wywóz śniegu",
        ],
        placeholder: "",
        type: FIELD_TYPES.multiCheckbox,
      },
      FIELDS.hourlySettlement("kXQ84ePTxgCuGpJHpPk7"),
      FIELDS.buildingType("v4bov9CjrfvUCsIQMTM7"),
      {
        label: "rodzaj miejsca ",
        id: "xeG9y2E9IeLc4OmNj7qZ",
        options: [
          "podjazd",
          "parking",
          "chodnik",
          "ulica",
          "otwarta przestrzeń",
          "inne",
        ],
        placeholder: "",
        type: FIELD_TYPES.select,
      },
      FIELDS.additionalInfo("HzTojBqzK7kZTqRaF6Qt"),
    ],
  },
];
