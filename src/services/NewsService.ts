import { data, options } from "./../types";
const NYSearch = async (searchQuery: string) => {
  let finalData: Array<any> = [];

  const API_KEY = "58BLGdQmfqvBkcnJhlNRI23znYnLIl6y";
  await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.response.docs.map((data: any, index: number) => {
        let value = {
          id: index,
          date: data.pub_date,
          title: data.headline?.main,
          description: data.abstract,
          webUrl: data.url,
        };
        finalData.push(value);
      });
    })
    .catch((error) => console.error("Error:", error));
  return finalData;
};

export const NewsAPISearch = async () => {
  const API_KEY = "ebbbdff75baf47398fff8cda679b2338";
  let finalData: Array<any> = [];

  await fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=` + API_KEY)
    .then((response) => response.json())
    .then((data) => {
      data.articles.map((data: any, index: number) => {
        if (data.title != "[Removed]") {
          let value = {
            id: index,
            date: data.publishedAt,
            title: data.title,
            description: data.description,
            webUrl: data.url,
          };

          finalData.push(value);
        }
      });
    })
    .catch((error) => console.error("Error:", error));
  return finalData;
};
export const NewsServiceEverything = async (
  type: string,
  searchKeyword?: string,
  options?: options
) => {
  let finalData: Array<any> = [];
  if (type == "everything") {
    const API_KEY_NY = "58BLGdQmfqvBkcnJhlNRI23znYnLIl6y";
    await fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=` +
        API_KEY_NY
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.map((data: any, index: number) => {
          let value = {
            id: index,
            category: data.section,
            date: data.published_date,
            title: data.title,
            description: data.abstract,
            webUrl: data.url,
          };
          finalData.push(value);
        });
      })
      .catch((error) => console.error("Error:", error));

    const API_KEY_TG = "f368d3ab-5350-40ae-9ecb-16ee8c8cdaf9";
    await fetch(
      `https://content.guardianapis.com/search?` +
        (searchKeyword ? "q=" + searchKeyword : "") +
        "&page-size=10" +
        "&api-key=" +
        API_KEY_TG
    )
      .then((response) => response.json())
      .then((data) => {
        data.response.results.map((data: any, index: number) => {
          //console.log("fff ", data)
          let value = {
            id: data.id,
            category: data.sectionName,
            date: data.webPublicationDate,
            title: data.webTitle,
            webUrl: data.webUrl,
          };
          finalData.push(value);
        });
      })
      .catch((error) => console.error("Error:", error));

    const API_KEY_NA = "ebbbdff75baf47398fff8cda679b2338";

    await fetch(
      `https://newsapi.org/v2/everything?q=apple&apiKey=` + API_KEY_NA
    )
      .then((response) => response.json())
      .then((data) => {
        data.articles.map((data: any, index: number) => {
          if (data.title != "[Removed]") {
            let value = {
              id: index,
              date: data.publishedAt,
              title: data.title,
              description: data.description,
              webUrl: data.url,
            };

            finalData.push(value);
          }
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  return finalData;
};
