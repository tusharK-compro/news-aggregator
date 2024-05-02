export interface data{
    id: string;
    date: string;
    title: string;
    webUrl: string;
    category: string;
    subCategory?: string;
    author?: string;
    byline?: string;
    content?: string;
    sources?: string;
}
export interface options{
    date?: string;
    author?: Array<string>;
    category?: Array<string>;
    sources?: Array<string>;
}