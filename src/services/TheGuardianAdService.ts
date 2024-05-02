import { data, options } from './../types'
const TheGuardianAdService = (options: options, loadMore: boolean, searchKeyword?: string) => {
    const category = options.category?.join();
    // const author = options.author?.join();
    // const sources = options.sources?.join();
    const date = options.date;
    const page =2;
    let finalData: Array<data> = [];
    const API_KEY = "5d236123-3ea1-46c0-9523-cda24a036aa0";
    fetch(`https://content.guardianapis.com/search?` + (searchKeyword ? "q=" + searchKeyword : "") + (category ? "&sectionName=" + category : "") + (date ? "&from-date=" + date : "") +(loadMore ? "&page=" + page : "")+"&page-size=10" +"&api-key=" + API_KEY)
        .then(response => response.json())
        .then(data => {
            data.response.results.map((data: any, index: number) => {
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
    }
export default TheGuardianAdService;