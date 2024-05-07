import { data, options } from "./../types";
const API_KEY_NA = "ebbbdff75baf47398fff8cda679b2338";
const API_KEY_NY = "58BLGdQmfqvBkcnJhlNRI23znYnLIl6y";
const API_KEY_TG = "f368d3ab-5350-40ae-9ecb-16ee8c8cdaf9";

export const NewsSearch = async (searchQuery:string, options: options, loadMore: boolean,
  page:number
) => {
  const category = options?.category?.join();
  const date = options?.date;
  const sources = options?.sources?.join();
  let finalData: Array<data> = [];
  await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY_NY}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.response.docs.forEach((data: any, index: number) => {
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
  
  await fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=` + API_KEY_NA)
  .then((response) => response.json())
  .then((data) => {
      data.articles.forEach((data: any, index: number) => {
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
    fetch(`https://content.guardianapis.com/search?` + (searchQuery ? "q=" + searchQuery : "") + (category ? "&sectionName=" + category : "") + (date ? "&from-date=" + date : "") +(loadMore ? "&page=" + page : "")+"&page-size=10" +"&api-key=" + API_KEY_TG)
        .then(response => response.json())
        .then(data => {
            data.response.results.forEach((data: any, index: number) => {
                let value = {
                    id: data.id,
                    category: data.sectionName,
                    date: data.webPublicationDate,
                    title: data.webTitle,
                    webUrl: data.webUrl
                }
                finalData.push(value);

            })
        })
        .catch(error => console.error('Error:', error));
  return finalData;
};
export const NewsServiceEverything = async (options?: options, loadMore?: boolean, page?: number) => {
  let finalData: Array<any> = [];
  const category = options?.category?.join();
  const author = options?.author?.join();
  const sources = options?.sources?.join();


  await fetch(
    `http://newsapi.org/v2/everything?` +
    (category ? "q=" + category : "q=all") +
    (loadMore ? "&page=" + page : "") +
    "&pageSize=10" +
    "&apiKey=" + API_KEY_NA
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      data.articles.forEach((data: any, index: number) => {
        console.log(data)
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
  
  await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?` +
    (category ? "q=" + category : "") +
    (loadMore ? "&page=" + page : "") +
    "&page-size=10" +
    "&api-key=" +
    API_KEY_NY
  )
    .then((response) => response.json())
    .then((data) => {
      data.response.docs.forEach((data: any, index: number) => {
        let value = {
          id: index,
          category: data.news_desk,
          date: data.published_date,
          title: data.headline?.main,
          description: data.abstract,
          webUrl: data.web_url,
        };
        finalData.push(value);
      });
    })
    .catch((error) => console.error("Error:", error));

  await fetch(
    `https://content.guardianapis.com/search?` +
    (category ? "&sectionName=" + category : "") +
    (loadMore ? "&page=" + page : "") +
    "&page-size=10" +
    "&api-key=" +
    API_KEY_TG
  )
    .then((response) => response.json())
    .then((data) => {
      data.response.results.forEach((data: any, index: number) => {
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

  return finalData;
};
