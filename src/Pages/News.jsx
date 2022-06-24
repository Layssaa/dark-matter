import axios from "axios";
import { NYTIMES_API } from "../Config/variables";
import { useEffect, useState } from "react";
import { Cart } from "../Compenents/Cart/Cart";
import List from "../Compenents/Dashboard/List";
import Header from "../Compenents/Header/Header";
import Main from "../Compenents/Main/Main";
import NavBar from "../Compenents/navbar/navbar";
import { Filter, FilterOpen } from "../Compenents/filter/filter";

export function News() {
  const [menu, setMenu] = useState(false);
  const [news, setNews] = useState([]);
  const [filters, setFilters] = useState(["health", "us"]);
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenMenu = () => {
    if (!menu) {
      return setMenu(true);
    }
    return setMenu(false);
  };

  const reqMaterial = async () => {
    console.log("req news");
    await axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${NYTIMES_API}`
      )
      .then((res) => {
        const {
          data: { results },
        } = res;
        setNews(results);
      });
  };

  useEffect(() => {
    reqMaterial();
  }, []);

  if (filters.length !== 0) {
    return (
      <Main>
        <Header menu={menu} handleOpenMenu={handleOpenMenu} />
        {menu ? <NavBar /> : <></>}
        <List>
          {filters.map((filterName) => {
            return newComponents.map((elem) => {
              console.log(filterName);
              console.log(elem.section);

              if (elem.section === filterName && elem.url) {
                return <Cart key={elem.title} {...elem} />;
              }
            });
          })}
          <Filter />
          <FilterOpen handleFilter={setFilters} />
        </List>
      </Main>
    );
  }

  return (
    <Main>
      <Header menu={menu} handleOpenMenu={handleOpenMenu} />
      {menu ? <NavBar /> : <></>}
      <List>
        {newComponents.map((elem) => {
          console.log(elem.multimedia);
          if (!elem.url) {
            return;
          }
          return <Cart key={elem.title} {...elem} />;
        })}
      </List>
    </Main>
  );
}

const newComponents = [
  {
    section: "science",
    subsection: "",
    title: "Sign Up for the Science Times Newsletter",
    abstract:
      "Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmos.",
    url: "null",
    uri: "nyt://embeddedinteractive/daba9d03-29b8-5cfc-8cbd-74b8abf54a07",
    byline: "",
    item_type: "EmbeddedInteractive",
    updated_date: "2018-04-07T13:23:25-04:00",
    created_date: "2016-02-05T18:18:53-05:00",
    published_date: "2016-02-05T18:18:53-05:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2016/02/06/science/sciencenewsletter2/sciencenewsletter2-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1534,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "NASA, via Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2016/02/06/science/sciencenewsletter2/sciencenewsletter2-mediumThreeByTwo440.jpg",
        format: "mediumThreeByTwo440",
        height: 293,
        width: 440,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "NASA, via Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2016/02/06/science/sciencenewsletter2/sciencenewsletter2-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "NASA, via Associated Press",
      },
    ],
    short_url: "",
  },
  {
    section: "admin",
    subsection: "",
    title: "",
    abstract: "",
    url: "",
    uri: "nyt://embeddedinteractive/6cb185ed-65ac-50a5-ace3-5bab81934245",
    byline: "",
    item_type: "EmbeddedInteractive",
    updated_date: "2015-07-20T13:45:03-04:00",
    created_date: "2015-04-16T14:13:18-04:00",
    published_date: "2015-04-16T14:13:18-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: null,
    short_url: "",
  },
  {
    section: "health",
    subsection: "",
    title: "What’s Next for Juul and E-Cigarettes?",
    abstract:
      "The company is appealing the F.D.A.’s ruling that it stop selling its vaping products. Whether they will remain on the market in the interim has yet to be decided.",
    url: "https://www.nytimes.com/2022/06/24/health/juul-ecigarettes-ban.html",
    uri: "nyt://article/965670a5-7979-5f76-b7cb-fee51c1f09c9",
    byline: "By Matt Richtel, Lauren Hirsch and Andrew Jacobs",
    item_type: "Article",
    updated_date: "2022-06-24T14:33:40-04:00",
    created_date: "2022-06-24T14:33:40-04:00",
    published_date: "2022-06-24T14:33:40-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Recalls and Bans of Products",
      "E-Cigarettes",
      "Appeals Courts (US)",
    ],
    org_facet: ["Food and Drug Administration", "Juul Labs Inc"],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/25/science/24JUUL/24JUUL-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "The F.D.A. is not seeking a blanket ban on all vaping brands, and Juul users could switch to other e-cigarettes that have been approved for sale by the agency.",
        copyright: "Joshua Bright for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/25/science/24JUUL/24JUUL-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "The F.D.A. is not seeking a blanket ban on all vaping brands, and Juul users could switch to other e-cigarettes that have been approved for sale by the agency.",
        copyright: "Joshua Bright for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/25/science/24JUUL/24JUUL-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "The F.D.A. is not seeking a blanket ban on all vaping brands, and Juul users could switch to other e-cigarettes that have been approved for sale by the agency.",
        copyright: "Joshua Bright for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/39PwrPN",
  },
  {
    section: "climate",
    subsection: "",
    title: "Heat Waves Around the World Push People and Nations ‘To the Edge’",
    abstract:
      "Large, simultaneous heat waves are growing more common. China, America, Europe and India have all been stricken recently, and scientists are starting to understand why certain far-flung places get hit at once.",
    url: "https://www.nytimes.com/2022/06/24/climate/early-heat-waves.html",
    uri: "nyt://article/b88ed431-45bc-5a81-90b9-529efc95f875",
    byline: "By Raymond Zhong",
    item_type: "Article",
    updated_date: "2022-06-24T15:40:58-04:00",
    created_date: "2022-06-24T09:59:33-04:00",
    published_date: "2022-06-24T09:59:33-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Global Warming",
      "Greenhouse Gas Emissions",
      "Weather",
      "Heat and Heat Waves",
      "Research",
    ],
    org_facet: [
      "Columbia University",
      "Lamont-Doherty Earth Observatory",
      "Northwestern University",
      "Washington State University",
    ],
    per_facet: [],
    geo_facet: [
      "Arctic Regions",
      "China",
      "Europe",
      "India",
      "North America",
      "United States",
    ],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/24/climate/24cli-extremeheat1/merlin_208921281_f63e76f4-8fd3-4afb-95e8-917fdd99509e-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "A wildfire raged in the Sierra de la Culebra in Zamora Province in Spain this month.",
        copyright: "Emilio Fraile/Europa Press, via Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/24/climate/24cli-extremeheat1/24cli-extremeheat1-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "A wildfire raged in the Sierra de la Culebra in Zamora Province in Spain this month.",
        copyright: "Emilio Fraile/Europa Press, via Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/24/climate/24cli-extremeheat1/24cli-extremeheat1-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "A wildfire raged in the Sierra de la Culebra in Zamora Province in Spain this month.",
        copyright: "Emilio Fraile/Europa Press, via Associated Press",
      },
    ],
    short_url: "https://nyti.ms/3u12Jho",
  },
  {
    section: "health",
    subsection: "",
    title: "The Sleep Debt Collector Is Here",
    abstract:
      "Recent studies in humans and mice have shown that late nights and early mornings may cause long lasting damage to your brain.",
    url: "https://www.nytimes.com/2022/06/24/health/sleep-debt-health.html",
    uri: "nyt://article/de2f6042-5fda-5d75-83fa-bb4196eb38a3",
    byline: "By Oliver Whang",
    item_type: "Article",
    updated_date: "2022-06-24T15:12:14-04:00",
    created_date: "2022-06-24T05:00:17-04:00",
    published_date: "2022-06-24T05:00:17-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "your-feed-science",
      "Sleep",
      "Brain",
      "your-feed-health",
      "Mice",
      "Research",
    ],
    org_facet: ["Trends in Neurosciences (Journal)"],
    per_facet: ["Veasey, Sigrid C"],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/16/science/00SCI-SLEEPDEBT-1/00SCI-SLEEPDEBT-1-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1366,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "A recent review of sleep research in animals and humans suggests that there is little merit to the folk concept of sleep as something that can be saved up and paid off.",
        copyright: "Dolly Faibyshev for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/16/science/00SCI-SLEEPDEBT-1/00SCI-SLEEPDEBT-1-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "A recent review of sleep research in animals and humans suggests that there is little merit to the folk concept of sleep as something that can be saved up and paid off.",
        copyright: "Dolly Faibyshev for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/16/science/00SCI-SLEEPDEBT-1/00SCI-SLEEPDEBT-1-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "A recent review of sleep research in animals and humans suggests that there is little merit to the folk concept of sleep as something that can be saved up and paid off.",
        copyright: "Dolly Faibyshev for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3neFUDh",
  },
  {
    section: "us",
    subsection: "",
    title:
      "To Catch a Snake: Largest Python Found in Everglades Signals a Threat",
    abstract:
      "The Burmese python caught by a team of trackers breaks a record and shows the invasive species surviving in Florida’s ecosystem despite efforts to remove those snakes.",
    url: "https://www.nytimes.com/2022/06/23/us/florida-largest-python.html",
    uri: "nyt://article/0be46b98-b1b4-5a1f-b1c8-46ec8cc7cb9a",
    byline: "By April Rubin",
    item_type: "Article",
    updated_date: "2022-06-24T09:32:09-04:00",
    created_date: "2022-06-23T19:24:35-04:00",
    published_date: "2022-06-23T19:24:35-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Snakes",
      "Conservation of Resources",
      "Endangered and Extinct Species",
      "Invasive Species",
      "Environment",
    ],
    org_facet: [],
    per_facet: [],
    geo_facet: ["Everglades (Fla)", "Florida"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/23/multimedia/23xp-python/23xp-python-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1395,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Biologists Ian Bartoszek, right, Ian Easterling, center, and intern Kyle Findley, captured a 17.7-foot, 215-pound female Burmese python in Florida in December of 2021.",
        copyright:
          "Jc Findley/Conservancy of Southwest Florida, via Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/23/multimedia/23xp-python/23xp-python-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Biologists Ian Bartoszek, right, Ian Easterling, center, and intern Kyle Findley, captured a 17.7-foot, 215-pound female Burmese python in Florida in December of 2021.",
        copyright:
          "Jc Findley/Conservancy of Southwest Florida, via Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/23/multimedia/23xp-python/23xp-python-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Biologists Ian Bartoszek, right, Ian Easterling, center, and intern Kyle Findley, captured a 17.7-foot, 215-pound female Burmese python in Florida in December of 2021.",
        copyright:
          "Jc Findley/Conservancy of Southwest Florida, via Associated Press",
      },
    ],
    short_url: "https://nyti.ms/3u0gT2p",
  },
  {
    section: "health",
    subsection: "",
    title: "Scientists Zero In on Origins of the Monkeypox Outbreak",
    abstract:
      "Even as cases rise, genetic analysis suggests that the virus has been silently circulating in people since 2018.",
    url: "https://www.nytimes.com/2022/06/23/health/monkeypox-origin-mutations.html",
    uri: "nyt://article/4e4ece21-4682-5d4b-9b6a-25c14d4ea13a",
    byline: "By Apoorva Mandavilli",
    item_type: "Article",
    updated_date: "2022-06-24T10:13:03-04:00",
    created_date: "2022-06-23T15:45:29-04:00",
    published_date: "2022-06-23T15:45:29-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Monkeypox",
      "Animals",
      "Disease Rates",
      "Rodents",
      "your-feed-health",
      "your-feed-science",
    ],
    org_facet: [],
    per_facet: [],
    geo_facet: ["Africa", "Nigeria", "United States"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/20/science/00mutations-1/merlin_208164162_7b116495-45d7-4b40-a15e-8a5d059a3496-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1283,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "People wait in line at a monkeypox vaccination clinic in Montreal, in June.",
        copyright: "Christinne Muschi/Reuters",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/20/science/00mutations-1/merlin_208164162_7b116495-45d7-4b40-a15e-8a5d059a3496-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "People wait in line at a monkeypox vaccination clinic in Montreal, in June.",
        copyright: "Christinne Muschi/Reuters",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/20/science/00mutations-1/merlin_208164162_7b116495-45d7-4b40-a15e-8a5d059a3496-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "People wait in line at a monkeypox vaccination clinic in Montreal, in June.",
        copyright: "Christinne Muschi/Reuters",
      },
    ],
    short_url: "https://nyti.ms/39MD9WL",
  },
  {
    section: "espanol",
    subsection: "",
    title:
      "Psicosis, adicción y vómitos crónicos: la marihuana se vuelve más potente y los adolescentes se enferman",
    abstract:
      "Los productos de cannabis con niveles de THC cercanos al 100 por ciento provocan dependencia y una serie de síntomas que incluyen psicosis, vómitos crónicos y otras afecciones.",
    url: "https://www.nytimes.com/es/2022/06/23/espanol/vape-cannabis-riesgos-marihuana.html",
    uri: "nyt://article/d1474bc0-2743-54ba-a79d-9d548bc77448",
    byline: "By Christina Caron",
    item_type: "Article",
    updated_date: "2022-06-23T12:24:07-04:00",
    created_date: "2022-06-23T12:22:45-04:00",
    published_date: "2022-06-23T12:22:45-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Marijuana",
      "Teenagers and Adolescence",
      "Mental Health and Disorders",
      "Addiction (Psychology)",
      "Cannabis Foods and Products",
      "Research",
      "Psychiatry and Psychiatrists",
    ],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/22/well/23WELL-CANNABIS-YOUTH-ESP/merlin_208895904_5bd4a558-3b07-40a5-b3f5-b19a6fb17d38-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Dabbing, a method of inhaling highly concentrated THC, has become increasingly popular among teenagers. ",
        copyright: "Michelle Groskopf for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/well/23WELL-CANNABIS-YOUTH-ESP/merlin_208895904_5bd4a558-3b07-40a5-b3f5-b19a6fb17d38-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Dabbing, a method of inhaling highly concentrated THC, has become increasingly popular among teenagers. ",
        copyright: "Michelle Groskopf for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/well/23WELL-CANNABIS-YOUTH-ESP/22WELL-CANNABIS-YOUTH2-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Dabbing, a method of inhaling highly concentrated THC, has become increasingly popular among teenagers. ",
        copyright: "Michelle Groskopf for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3zY8q3z",
  },
  {
    section: "health",
    subsection: "",
    title: "F.D.A. Orders Juul to Stop Selling E-Cigarettes",
    abstract:
      "The agency ruled against the company’s application to stay on the market, a decisive blow to a once-popular vaping brand that appealed to teenagers.",
    url: "https://www.nytimes.com/2022/06/23/health/fda-juul-ecigarettes-ban.html",
    uri: "nyt://article/542b6fb9-67dc-5fb6-b26c-eabcb038ba7e",
    byline: "By Matt Richtel and Andrew Jacobs",
    item_type: "Article",
    updated_date: "2022-06-24T10:36:10-04:00",
    created_date: "2022-06-23T10:36:48-04:00",
    published_date: "2022-06-23T10:36:48-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "E-Cigarettes",
      "Recalls and Bans of Products",
      "Teenagers and Adolescence",
      "Nicotine",
      "Regulation and Deregulation of Industry",
    ],
    org_facet: [
      "Food and Drug Administration",
      "Juul Labs Inc",
      "Altria Group Inc",
    ],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/22/science/22JUUL/22JUUL-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "In its heyday, Juul occupied 75 percent of the market share and employed 4,000 people.",
        copyright: "Jeenah Moon for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/science/22JUUL/22JUUL-threeByTwoSmallAt2X-v2.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "In its heyday, Juul occupied 75 percent of the market share and employed 4,000 people.",
        copyright: "Jeenah Moon for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/science/22JUUL/22JUUL-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "In its heyday, Juul occupied 75 percent of the market share and employed 4,000 people.",
        copyright: "Jeenah Moon for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3OEmrrs",
  },
  {
    section: "climate",
    subsection: "",
    title:
      "Biden Administration Tosses Trump Definition of ‘Habitat’ for Endangered Species",
    abstract:
      "The Trump administration’s definition was at odds with the conservation purposes of the Endangered Species Act, wildlife officials said.",
    url: "https://www.nytimes.com/2022/06/23/climate/biden-endangered-species-habitat.html",
    uri: "nyt://article/c6506b6b-bdad-5bd8-94d5-6a0b706e014f",
    byline: "By Catrin Einhorn",
    item_type: "Article",
    updated_date: "2022-06-24T00:18:19-04:00",
    created_date: "2022-06-23T08:45:07-04:00",
    published_date: "2022-06-23T08:45:07-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Global Warming",
      "Greenhouse Gas Emissions",
      "Endangered and Extinct Species",
      "Conservation of Resources",
      "Biodiversity",
      "Environment",
      "Animals",
    ],
    org_facet: ["Fish and Wildlife Service"],
    per_facet: ["Biden, Joseph R Jr"],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/23/climate/23CLI-Habitat1/23CLI-Habitat1-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1366,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "A manatee in the Homosassa River in Florida, where conservationists had planted sea grass to help restore the animal’s feeding grounds.",
        copyright: "Joe Raedle/Getty Images",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/23/climate/23CLI-Habitat1/23CLI-Habitat1-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "A manatee in the Homosassa River in Florida, where conservationists had planted sea grass to help restore the animal’s feeding grounds.",
        copyright: "Joe Raedle/Getty Images",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/23/climate/23CLI-Habitat1/23CLI-Habitat1-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "A manatee in the Homosassa River in Florida, where conservationists had planted sea grass to help restore the animal’s feeding grounds.",
        copyright: "Joe Raedle/Getty Images",
      },
    ],
    short_url: "https://nyti.ms/3tVoqj3",
  },
  {
    section: "well",
    subsection: "mind",
    title:
      "Psychosis, Addiction, Chronic Vomiting: As Weed Becomes More Potent, Teens Are Getting Sick",
    abstract:
      "With THC levels close to 100 percent, today’s cannabis products are making some teenagers highly dependent and dangerously ill.",
    url: "https://www.nytimes.com/2022/06/23/well/mind/teens-thc-cannabis.html",
    uri: "nyt://article/e60c13c2-cca3-5656-b431-9ed2cbc2d2a7",
    byline: "By Christina Caron",
    item_type: "Article",
    updated_date: "2022-06-24T09:57:45-04:00",
    created_date: "2022-06-23T05:00:28-04:00",
    published_date: "2022-06-23T05:00:28-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Marijuana",
      "Teenagers and Adolescence",
      "Mental Health and Disorders",
      "Addiction (Psychology)",
      "Cannabis Foods and Products",
      "Research",
      "Psychiatry and Psychiatrists",
    ],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/22/well/22WELL-CANNABIS-YOUTH2/merlin_208895904_5bd4a558-3b07-40a5-b3f5-b19a6fb17d38-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Dabbing, a method of inhaling highly concentrated THC, has become increasingly popular among teenagers. ",
        copyright: "Michelle Groskopf for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/well/22WELL-CANNABIS-YOUTH2/merlin_208895904_5bd4a558-3b07-40a5-b3f5-b19a6fb17d38-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Dabbing, a method of inhaling highly concentrated THC, has become increasingly popular among teenagers. ",
        copyright: "Michelle Groskopf for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/well/22WELL-CANNABIS-YOUTH2/22WELL-CANNABIS-YOUTH2-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Dabbing, a method of inhaling highly concentrated THC, has become increasingly popular among teenagers. ",
        copyright: "Michelle Groskopf for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3HOpiLY",
  },
  {
    section: "climate",
    subsection: "",
    title: "Biden’s Inner Circle Debates Future of Offshore Drilling",
    abstract:
      "Top White House officials have assumed control over a sensitive blueprint, expected by June 30, laying out future oil and gas drilling leases in the outer continental shelf.",
    url: "https://www.nytimes.com/2022/06/23/climate/biden-offshore-drilling-climate.html",
    uri: "nyt://article/bf79a21b-1175-5b3d-b9a2-5b2821c72c98",
    byline: "By Lisa Friedman",
    item_type: "Article",
    updated_date: "2022-06-23T19:30:41-04:00",
    created_date: "2022-06-23T05:00:18-04:00",
    published_date: "2022-06-23T05:00:18-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Global Warming",
      "Greenhouse Gas Emissions",
      "Oil (Petroleum) and Gasoline",
      "Offshore Drilling and Exploration",
      "Oceans and Seas",
    ],
    org_facet: ["Interior Department"],
    per_facet: ["Haaland, Deb", "Biden, Joseph R Jr"],
    geo_facet: ["Arctic Regions", "Gulf of Mexico"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/22/climate/22cli-offshoredrilling1/merlin_208694328_ab396cf4-8bb4-4d6b-ad7c-45c562dcbd47-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1366,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "President Biden hosted the Major Economies Forum on Energy and Climate from the White House last week.",
        copyright: "Pete Marovich for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/climate/22cli-offshoredrilling1/22cli-offshoredrilling1-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "President Biden hosted the Major Economies Forum on Energy and Climate from the White House last week.",
        copyright: "Pete Marovich for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/climate/22cli-offshoredrilling1/22cli-offshoredrilling1-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "President Biden hosted the Major Economies Forum on Energy and Climate from the White House last week.",
        copyright: "Pete Marovich for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3zYfcGo",
  },
  {
    section: "magazine",
    subsection: "",
    title: "The Ancient Art of Falconry at the Jersey Shore",
    abstract:
      "How Ocean City cleared the gulls from its boardwalk — with falcons and hawks.",
    url: "https://www.nytimes.com/2022/06/23/magazine/falcons-hawks-jersey-shore.html",
    uri: "nyt://article/22ad577a-fbdd-5400-ba34-f510580e2807",
    byline: "By Andrew S. Lewis",
    item_type: "Article",
    updated_date: "2022-06-23T09:47:23-04:00",
    created_date: "2022-06-23T05:00:06-04:00",
    published_date: "2022-06-23T05:00:06-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Falcons", "Hawks (Birds)"],
    org_facet: [],
    per_facet: [],
    geo_facet: ["Ocean City (NJ)"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/26/magazine/26mag-falcons-03/26mag-falcons-03-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "A hawk and a falcon in the mews where Erik Swanson keeps some of his five hawks and 12 falcons. (A Eurasian eagle-owl gets its own space.)",
        copyright: "Devin Oktar Yalkin for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/26/magazine/26mag-falcons-03/26mag-falcons-03-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "A hawk and a falcon in the mews where Erik Swanson keeps some of his five hawks and 12 falcons. (A Eurasian eagle-owl gets its own space.)",
        copyright: "Devin Oktar Yalkin for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/26/magazine/26mag-falcons-03/26mag-falcons-03-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "A hawk and a falcon in the mews where Erik Swanson keeps some of his five hawks and 12 falcons. (A Eurasian eagle-owl gets its own space.)",
        copyright: "Devin Oktar Yalkin for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3HJpVGP",
  },
  {
    section: "health",
    subsection: "",
    title:
      "An Outbreak of Meningococcal Disease in Florida Is Growing, the C.D.C. Says",
    abstract:
      "So far, 26 cases, including seven deaths, have been identified, primarily in men who have sex with men.",
    url: "https://www.nytimes.com/2022/06/22/health/meningococcal-outbreak-florida.html",
    uri: "nyt://article/aaa98864-7b45-5b2b-81d2-9b9bb7643f46",
    byline: "By Emily Anthes",
    item_type: "Article",
    updated_date: "2022-06-22T21:57:57-04:00",
    created_date: "2022-06-22T19:41:59-04:00",
    published_date: "2022-06-22T19:41:59-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["your-feed-science", "Meningitis", "your-feed-health"],
    org_facet: [],
    per_facet: [],
    geo_facet: ["Florida"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/22/science/22meningitis-Neisseria-meningitidis/22meningitis-Neisseria-meningitidis-superJumbo.jpg",
        format: "Super Jumbo",
        height: 2048,
        width: 1367,
        type: "image",
        subtype: "photo",
        caption:
          "Neisseria meningitidis, the bacterium that causes meningitis, is typically spread through close or prolonged contact.",
        copyright: "BSIP / Getty Images",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/science/22meningitis-Neisseria-meningitidis/22meningitis-Neisseria-meningitidis-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Neisseria meningitidis, the bacterium that causes meningitis, is typically spread through close or prolonged contact.",
        copyright: "BSIP / Getty Images",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/science/22meningitis-Neisseria-meningitidis/22meningitis-Neisseria-meningitidis-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Neisseria meningitidis, the bacterium that causes meningitis, is typically spread through close or prolonged contact.",
        copyright: "BSIP / Getty Images",
      },
    ],
    short_url: "https://nyti.ms/3A2uZUZ",
  },
  {
    section: "health",
    subsection: "",
    title:
      "Britain Declares National Incident After Poliovirus Found in London",
    abstract:
      "No cases of polio have been identified so far, but health officials urged those who were not fully immunized to seek vaccines immediately.",
    url: "https://www.nytimes.com/2022/06/22/health/uk-polio-london-poliovirus.html",
    uri: "nyt://article/8ceddac2-fb6a-5003-bfea-4ce613f12c98",
    byline: "By Apoorva Mandavilli and Euan Ward",
    item_type: "Article",
    updated_date: "2022-06-22T22:58:27-04:00",
    created_date: "2022-06-22T12:50:41-04:00",
    published_date: "2022-06-22T12:50:41-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Vaccination and Immunization",
      "Sewers and Sewage",
      "Poliomyelitis",
      "Feces",
      "Hygiene and Cleanliness",
    ],
    org_facet: [],
    per_facet: [],
    geo_facet: ["Great Britain", "London (England)"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/22/world/22uk-polio-01/22uk-polio-01-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1366,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Brick Lane, in east London. Health authorities in Britain have found evidence suggesting local spread of poliovirus in north and east London.",
        copyright: "Mary Turner for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/world/22uk-polio-01/merlin_199520019_9ebad108-1c24-4deb-8b2b-6897ccee1d1c-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Brick Lane, in east London. Health authorities in Britain have found evidence suggesting local spread of poliovirus in north and east London.",
        copyright: "Mary Turner for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/22/world/22uk-polio-01/22uk-polio-01-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Brick Lane, in east London. Health authorities in Britain have found evidence suggesting local spread of poliovirus in north and east London.",
        copyright: "Mary Turner for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3nrHAJT",
  },
  {
    section: "technology",
    subsection: "",
    title: "A Big Step Toward Fusion Energy Is Hailed by a Seattle Start-Up",
    abstract:
      "Zap Energy said its experimental reactor core was ready for a milestone test. Skeptics routinely question whether the technology is currently possible.",
    url: "https://www.nytimes.com/2022/06/22/technology/fusion-zap-energy.html",
    uri: "nyt://article/0236822f-5c02-5bd9-aa0d-353eaca5417f",
    byline: "By John Markoff",
    item_type: "Article",
    updated_date: "2022-06-23T11:23:37-04:00",
    created_date: "2022-06-22T05:00:37-04:00",
    published_date: "2022-06-22T05:00:37-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Nuclear Energy",
      "Electric Light and Power",
      "Research",
      "Start-ups",
      "Fusion (Nuclear Reaction)",
    ],
    org_facet: ["Zap Energy Inc"],
    per_facet: [],
    geo_facet: ["Seattle (Wash)"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/17/business/17fusion/17fusion-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Zap Energy, fusion energy start-up in Seattle, said it had successfully primed a new and more powerful reactor core.",
        copyright: "Zap Energy",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/17/business/17fusion/17fusion-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Zap Energy, fusion energy start-up in Seattle, said it had successfully primed a new and more powerful reactor core.",
        copyright: "Zap Energy",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/17/business/17fusion/17fusion-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Zap Energy, fusion energy start-up in Seattle, said it had successfully primed a new and more powerful reactor core.",
        copyright: "Zap Energy",
      },
    ],
    short_url: "https://nyti.ms/3ybi9SX",
  },
  {
    section: "espanol",
    subsection: "",
    title:
      "‘No esperen, no esperen’: las mujeres negras son más afectadas por el cáncer uterino",
    abstract:
      "Se espera que en unos años, este tipo de cáncer poco conocido sea el tercero más frecuente entre las mujeres. Los expertos instan a una mayor sensibilización para la detección y tratamiento oportuno.",
    url: "https://www.nytimes.com/es/2022/06/22/espanol/cancer-uterino.html",
    uri: "nyt://article/0d4e9086-c234-518a-b62b-b9bf4dd9ca4a",
    byline: "By Roni Caryn Rabin",
    item_type: "Article",
    updated_date: "2022-06-22T05:00:27-04:00",
    created_date: "2022-06-22T05:00:27-04:00",
    published_date: "2022-06-22T05:00:27-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Uterine Cancer",
      "Black People",
      "Women and Girls",
      "Disease Rates",
      "Race and Ethnicity",
      "Hysterectomies",
      "Menopause",
      "Deaths (Fatalities)",
      "your-feed-science",
    ],
    org_facet: ["JAMA Oncology (Journal)"],
    per_facet: [],
    geo_facet: ["United States"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/04/science/04uterine-cancer1-esp-1/04uterine-cancer1-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "A Linda Collins se le diagnosticó una forma particularmente agresiva de cáncer de útero, un tipo que va en aumento y amenaza en especial a las mujeres negras.",
        copyright: "Michelle V. Agins/The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/04/science/04uterine-cancer1-esp-1/04uterine-cancer1-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "A Linda Collins se le diagnosticó una forma particularmente agresiva de cáncer de útero, un tipo que va en aumento y amenaza en especial a las mujeres negras.",
        copyright: "Michelle V. Agins/The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/04/science/04uterine-cancer1-esp-1/04uterine-cancer1-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "A Linda Collins se le diagnosticó una forma particularmente agresiva de cáncer de útero, un tipo que va en aumento y amenaza en especial a las mujeres negras.",
        copyright: "Michelle V. Agins/The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3OrNC8y",
  },
  {
    section: "magazine",
    subsection: "",
    title: "How to Imprint Ducklings",
    abstract:
      "Hang around the ducklings right after they hatch. The birds open their eyes and immediately start looking for a caregiver.",
    url: "https://www.nytimes.com/2022/06/22/magazine/how-to-imprint-ducklings.html",
    uri: "nyt://article/ed8231a3-37ea-54e3-8aa1-92eeab688c13",
    byline: "By Malia Wollan",
    item_type: "Article",
    updated_date: "2022-06-22T09:52:45-04:00",
    created_date: "2022-06-22T05:00:04-04:00",
    published_date: "2022-06-22T05:00:04-04:00",
    material_type_facet: "",
    kicker: "Tip",
    des_facet: ["Ducks", "Content Type: Service"],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/26/magazine/26mag-tip/26mag-tip-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1366,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Illustration by Radio",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/26/magazine/26mag-tip/26mag-tip-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Illustration by Radio",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/26/magazine/26mag-tip/26mag-tip-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Illustration by Radio",
      },
    ],
    short_url: "https://nyti.ms/3OnAkdk",
  },
  {
    section: "health",
    subsection: "",
    title:
      "F.D.A. Aims to Cut Down on Smoking by Slashing Nicotine Levels in Cigarettes",
    abstract:
      "The move would be an effort to further wean Americans from addictive tobacco products and reduce smoking-related illnesses.",
    url: "https://www.nytimes.com/2022/06/21/health/fda-nicotine-cigarettes.html",
    uri: "nyt://article/74e64016-3f8b-5665-aebe-84dd1bd3f937",
    byline: "By Christina Jewett and Andrew Jacobs",
    item_type: "Article",
    updated_date: "2022-06-23T08:06:57-04:00",
    created_date: "2022-06-21T17:18:44-04:00",
    published_date: "2022-06-21T17:18:44-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Smoking and Tobacco",
      "Addiction (Psychology)",
      "Nicotine",
      "Lung Cancer",
      "Heart",
      "Cancer",
      "Menthol",
      "your-feed-healthcare",
      "Regulation and Deregulation of Industry",
    ],
    org_facet: [
      "Altria Group Inc",
      "Reynolds, R J, Tobacco Co",
      "Food and Drug Administration",
    ],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/21/science/00FDA-NICOTINE3/00FDA-NICOTINE3-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1366,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Low-nicotine cigarettes are already available to consumers, like 22nd Century Group’s VLN cigarettes, which contain 5 percent of the nicotine level of conventional cigarettes.",
        copyright: "Taylor Glascock for the New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/science/00FDA-NICOTINE3/00FDA-NICOTINE3-threeByTwoSmallAt2X-v4.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Low-nicotine cigarettes are already available to consumers, like 22nd Century Group’s VLN cigarettes, which contain 5 percent of the nicotine level of conventional cigarettes.",
        copyright: "Taylor Glascock for the New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/science/00FDA-NICOTINE3/00FDA-NICOTINE3-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Low-nicotine cigarettes are already available to consumers, like 22nd Century Group’s VLN cigarettes, which contain 5 percent of the nicotine level of conventional cigarettes.",
        copyright: "Taylor Glascock for the New York Times",
      },
    ],
    short_url: "https://nyti.ms/3n4uqCc",
  },
  {
    section: "world",
    subsection: "asia",
    title:
      "S​outh Korea Launches Satellite With Its Own Rocket for the First Time",
    abstract:
      "The launch brings the country closer to its ambition of becoming a player in the space industry, no longer reliant on technology from other countries.",
    url: "https://www.nytimes.com/2022/06/21/world/asia/south-korea-rocket-launch-nuri.html",
    uri: "nyt://article/80e9ebf3-342e-52d9-b07b-898d95a241f4",
    byline: "By Choe Sang-Hun",
    item_type: "Article",
    updated_date: "2022-06-22T00:14:42-04:00",
    created_date: "2022-06-21T07:40:15-04:00",
    published_date: "2022-06-21T07:40:15-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Satellites", "Space and Astronomy", "Science and Technology"],
    org_facet: [],
    per_facet: ["Kim Jong-un", "Musk, Elon"],
    geo_facet: ["South Korea", "North Korea"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/21/world/21skorea-rocket-01/21skorea-rocket-01-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Nuri, South Korea’s first domestically produced space rocket, lifting off from a launchpad at the Naro Space Center in Goheung, South Korea, on Tuesday.",
        copyright: "Korea Pool/Yonhap, via Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/world/21skorea-rocket-01/21skorea-rocket-01-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Nuri, South Korea’s first domestically produced space rocket, lifting off from a launchpad at the Naro Space Center in Goheung, South Korea, on Tuesday.",
        copyright: "Korea Pool/Yonhap, via Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/world/21skorea-rocket-01/21skorea-rocket-01-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Nuri, South Korea’s first domestically produced space rocket, lifting off from a launchpad at the Naro Space Center in Goheung, South Korea, on Tuesday.",
        copyright: "Korea Pool/Yonhap, via Associated Press",
      },
    ],
    short_url: "https://nyti.ms/3HNtP1q",
  },
  {
    section: "travel",
    subsection: "",
    title: "Finding Traces of Harriet Tubman on Maryland’s Eastern Shore",
    abstract:
      "A historian marks the 200th birthday of a fearless conductor of the Underground Railroad with a visit to her birthplace, only to learn how climate change is washing away memories of “the ultimate outdoors woman.”",
    url: "https://www.nytimes.com/2022/06/21/travel/harriet-tubman-maryland.html",
    uri: "nyt://article/56c50a8c-6ca7-5497-bee1-45ffa4312d06",
    byline: "By Martha S. Jones",
    item_type: "Article",
    updated_date: "2022-06-22T11:43:36-04:00",
    created_date: "2022-06-21T05:00:21-04:00",
    published_date: "2022-06-21T05:00:21-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Content Type: Personal Profile",
      "Slavery (Historical)",
      "Underground Railroad (19th Century)",
      "Travel and Vacations",
      "Civil War (US) (1861-65)",
      "Black People",
      "National Parks, Monuments and Seashores",
    ],
    org_facet: [],
    per_facet: ["Tubman, Harriet"],
    geo_facet: ["Maryland"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/21/travel/21Tubman-EasternShore9/merlin_208678926_3a8a6449-b181-456f-9da9-90c8ee3c5985-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "No place better remembers the abolitionist Harriet Tubman than Maryland’s Eastern Shore, where she was born enslaved 200 years ago. Much of her story is told through its land.",
        copyright: "Tony Cenicola/The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/travel/21Tubman-EasternShore9/merlin_208678926_3a8a6449-b181-456f-9da9-90c8ee3c5985-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "No place better remembers the abolitionist Harriet Tubman than Maryland’s Eastern Shore, where she was born enslaved 200 years ago. Much of her story is told through its land.",
        copyright: "Tony Cenicola/The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/travel/21Tubman-EasternShore9/merlin_208678926_3a8a6449-b181-456f-9da9-90c8ee3c5985-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "No place better remembers the abolitionist Harriet Tubman than Maryland’s Eastern Shore, where she was born enslaved 200 years ago. Much of her story is told through its land.",
        copyright: "Tony Cenicola/The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3zRVPz4",
  },
  {
    section: "us",
    subsection: "",
    title: "Dr. Paul M. Ellwood Jr., Architect of the H.M.O., Is Dead at 95",
    abstract:
      "Often called the father of the health maintenance organization, he coined the term in 1970, envisioning a system that would compete for patients by providing the best care at the lowest price.",
    url: "https://www.nytimes.com/2022/06/20/us/dr-paul-m-ellwood-jr-dead.html",
    uri: "nyt://article/91ecc08f-d563-5226-95c1-bed35c27968c",
    byline: "By Robert D. McFadden",
    item_type: "Article",
    updated_date: "2022-06-21T12:38:34-04:00",
    created_date: "2022-06-20T15:52:31-04:00",
    published_date: "2022-06-20T15:52:31-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Deaths (Obituaries)", "Health Insurance and Managed Care"],
    org_facet: ["Jackson Hole Group"],
    per_facet: ["Ellwood, Paul M Jr"],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/21/obituaries/Ellwood-01-print1-SUB/merlin_159534306_45ca2d55-77e0-4f85-b292-cd80cf18051e-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1701,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Dr. Paul M. Ellwood Jr. in 1970. He gave up the practice of pediatric neurology in the late 1960s to devote himself to national health reform.",
        copyright: "Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/obituaries/Ellwood-01-print1-SUB/Ellwood-01-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Dr. Paul M. Ellwood Jr. in 1970. He gave up the practice of pediatric neurology in the late 1960s to devote himself to national health reform.",
        copyright: "Associated Press",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/obituaries/Ellwood-01-print1-SUB/Ellwood-01-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Dr. Paul M. Ellwood Jr. in 1970. He gave up the practice of pediatric neurology in the late 1960s to devote himself to national health reform.",
        copyright: "Associated Press",
      },
    ],
    short_url: "https://nyti.ms/39AmLIU",
  },
  {
    section: "health",
    subsection: "",
    title: "Despite Another Covid Surge, Deaths Stay Near Lows",
    abstract:
      "Most Americans now carry some immune protection, experts said, whether from vaccines, infection or both.",
    url: "https://www.nytimes.com/2022/06/20/health/covid-deaths-plateau.html",
    uri: "nyt://article/ced6ad16-a873-5104-949c-052da3abe572",
    byline: "By Benjamin Mueller",
    item_type: "Article",
    updated_date: "2022-06-21T12:43:46-04:00",
    created_date: "2022-06-20T05:00:20-04:00",
    published_date: "2022-06-20T05:00:20-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Coronavirus (2019-nCoV)",
      "Vaccination and Immunization",
      "Deaths (Fatalities)",
      "your-feed-healthcare",
      "Disease Rates",
      "Coronavirus Omicron Variant",
    ],
    org_facet: [],
    per_facet: [],
    geo_facet: ["United States"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/19/science/19virus-deaths-1/merlin_207164721_5917a210-463a-4b52-bfc8-1de0cc95e47b-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "The United States remains better fortified against Covid deaths than it has ever been, scientists said.",
        copyright: "Dave Sanders for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/19/science/19virus-deaths-1/merlin_207164721_5917a210-463a-4b52-bfc8-1de0cc95e47b-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "The United States remains better fortified against Covid deaths than it has ever been, scientists said.",
        copyright: "Dave Sanders for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/19/science/19virus-deaths-1/merlin_207164721_5917a210-463a-4b52-bfc8-1de0cc95e47b-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "The United States remains better fortified against Covid deaths than it has ever been, scientists said.",
        copyright: "Dave Sanders for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3QyOnOT",
  },
  {
    section: "health",
    subsection: "",
    title: "Tattoo Artists Face a Grayer Palette in Europe",
    abstract:
      "The E.U. has prohibited some pigments, deeming them potentially hazardous to humans. Artists and manufacturers around the world are struggling to find replacements.",
    url: "https://www.nytimes.com/2022/06/19/health/tattoo-ink-europe.html",
    uri: "nyt://article/20da8c5a-e73d-54eb-9d27-47349281f28b",
    byline: "By Ted Alcorn",
    item_type: "Article",
    updated_date: "2022-06-21T00:12:38-04:00",
    created_date: "2022-06-19T05:00:28-04:00",
    published_date: "2022-06-19T05:00:28-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Tattoos",
      "Hazardous and Toxic Substances",
      "Art",
      "Regulation and Deregulation of Industry",
      "Skin",
      "Cosmetics and Toiletries",
      "Consumer Protection",
      "your-feed-science",
    ],
    org_facet: [
      "Ephemeral Tattoo",
      "European Union",
      "World Famous Tattoo Ink",
    ],
    per_facet: ["De Pase, Alex", "Rubino, Lou Jr"],
    geo_facet: ["Europe", "United States"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/21/science/21SCI-TATTOO-INK-promo/merlin_205381083_379061e1-1c57-41e9-b561-aff1db5b573a-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1537,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Ciril Jazbec for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/science/21SCI-TATTOO-INK-promo/21SCI-TATTOO-INK-promo-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Ciril Jazbec for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/21/science/21SCI-TATTOO-INK-promo/21SCI-TATTOO-INK-promo-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Ciril Jazbec for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3y4oCih",
  },
  {
    section: "climate",
    subsection: "",
    title:
      "Republican Drive to Tilt Courts Against Climate Action Reaches a Crucial Moment",
    abstract:
      "A Supreme Court environmental case being decided this month is the product of a coordinated, multiyear strategy by Republican attorneys general and conservative allies.",
    url: "https://www.nytimes.com/2022/06/19/climate/supreme-court-climate-epa.html",
    uri: "nyt://article/54f215df-d2f4-5348-bfb2-5bb26c1cc60e",
    byline: "By Coral Davenport",
    item_type: "Article",
    updated_date: "2022-06-21T11:46:37-04:00",
    created_date: "2022-06-19T05:00:17-04:00",
    published_date: "2022-06-19T05:00:17-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Global Warming",
      "Greenhouse Gas Emissions",
      "Fuel Emissions (Transportation)",
      "Oil (Petroleum) and Gasoline",
      "Coal",
      "Regulation and Deregulation of Industry",
      "Law and Legislation",
      "Suits and Litigation (Civil)",
      "Conservatism (US Politics)",
      "Federal Courts (US)",
      "United States Politics and Government",
      "United States Economy",
    ],
    org_facet: [
      "Republican Party",
      "Supreme Court (US)",
      "Environmental Protection Agency",
      "Federalist Society",
      "Judicial Crisis Network",
      "Republican Attorneys General Assn",
    ],
    per_facet: [
      "Leo, Leonard A",
      "McConnell, Mitch",
      "Trump, Donald J",
      "Biden, Joseph R Jr",
    ],
    geo_facet: [],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/17/science/00cli-judges-1/00cli-judges-1-superJumbo.jpg",
        format: "Super Jumbo",
        height: 2048,
        width: 1507,
        type: "image",
        subtype: "photo",
        caption:
          "Republican attorneys want to hem in what they call the administrative state, the E.P.A. and other federal agencies that set rules and regulations that affect the American economy. ",
        copyright: "Tamir Kalifa for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/17/science/00cli-judges-1/00cli-judges-1-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Republican attorneys want to hem in what they call the administrative state, the E.P.A. and other federal agencies that set rules and regulations that affect the American economy. ",
        copyright: "Tamir Kalifa for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/17/science/00cli-judges-1/00cli-judges-1-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Republican attorneys want to hem in what they call the administrative state, the E.P.A. and other federal agencies that set rules and regulations that affect the American economy. ",
        copyright: "Tamir Kalifa for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3HyuG5Y",
  },
  {
    section: "health",
    subsection: "",
    title:
      "Vaccines for Young Children Are Coming, but Many Parents Have Tough Questions",
    abstract:
      "The vaccines seem safe for children and are likely to protect against severe illness. But data on efficacy is thin, and most children have already been infected.",
    url: "https://www.nytimes.com/2022/06/18/health/covid-vaccines-children.html",
    uri: "nyt://article/7f7c34e9-1572-51aa-b2eb-9d20183dfe3a",
    byline: "By Apoorva Mandavilli",
    item_type: "Article",
    updated_date: "2022-06-21T12:57:23-04:00",
    created_date: "2022-06-18T17:00:16-04:00",
    published_date: "2022-06-18T17:00:16-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Coronavirus (2019-nCoV)",
      "Vaccination and Immunization",
      "Children and Childhood",
      "Clinical Trials",
      "Parenting",
      "your-feed-science",
    ],
    org_facet: [
      "Pfizer Inc",
      "BioNTech SE",
      "Moderna Inc",
      "Centers for Disease Control and Prevention",
    ],
    per_facet: [],
    geo_facet: ["United States"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/18/science/18virus-children1/18virus-children1-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1364,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Sunny Baker, 35, a mother of two in Oxford, Miss., with her 2-year-old daughter, Alma Pearl.",
        copyright: "Timothy Ivy for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/18/science/18virus-children1/18virus-children1-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 399,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "Sunny Baker, 35, a mother of two in Oxford, Miss., with her 2-year-old daughter, Alma Pearl.",
        copyright: "Timothy Ivy for The New York Times",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/18/science/18virus-children1/18virus-children1-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Sunny Baker, 35, a mother of two in Oxford, Miss., with her 2-year-old daughter, Alma Pearl.",
        copyright: "Timothy Ivy for The New York Times",
      },
    ],
    short_url: "https://nyti.ms/3tJPt0O",
  },
  {
    section: "health",
    subsection: "",
    title:
      "Not Just for the Birds: Avian Influenza Is Also Felling Wild Mammals",
    abstract:
      "As a new version of bird flu spread through North America this spring, scientists began finding the virus in red foxes, bobcats and other mammals.",
    url: "https://www.nytimes.com/2022/06/18/health/avian-flu-h5n1-foxes.html",
    uri: "nyt://article/6ae38562-97a7-54a7-9db7-4b66f29610c3",
    byline: "By Emily Anthes",
    item_type: "Article",
    updated_date: "2022-06-19T13:47:14-04:00",
    created_date: "2022-06-18T05:00:16-04:00",
    published_date: "2022-06-18T05:00:16-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Avian Influenza",
      "Disease Rates",
      "Birds",
      "Foxes",
      "Mammals",
      "your-feed-animals",
      "your-feed-science",
    ],
    org_facet: [],
    per_facet: [],
    geo_facet: ["Michigan", "Wisconsin", "Canada", "United States"],
    multimedia: [
      {
        url: "https://static01.nyt.com/images/2022/06/17/science/00bird-flu-2/00bird-flu-2-superJumbo-v4.jpg",
        format: "Super Jumbo",
        height: 1366,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "A fox kit received fluids through an IV catheter at the Dane County Humane Society near Madison, Wisc.",
        copyright: "Dane County Humane Society\n",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/17/science/00bird-flu-2/00bird-flu-2-threeByTwoSmallAt2X-v4.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption:
          "A fox kit received fluids through an IV catheter at the Dane County Humane Society near Madison, Wisc.",
        copyright: "Dane County Humane Society\n",
      },
      {
        url: "https://static01.nyt.com/images/2022/06/17/science/00bird-flu-2/00bird-flu-2-thumbLarge-v2.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "A fox kit received fluids through an IV catheter at the Dane County Humane Society near Madison, Wisc.",
        copyright: "Dane County Humane Society\n",
      },
    ],
    short_url: "https://nyti.ms/3Ok4ONi",
  },
];
