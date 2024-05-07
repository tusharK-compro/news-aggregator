export interface data {
    id: string | number;
    date: string;
    title: string;
    webUrl: string;
    category?: string;
    subCategory?: string;
    author?: string;
    byline?: string;
    description?: string;
    sources?: string;
}
export interface options {
    date?: string;
    author?: Array<string>;
    category?: Array<string>;
    sources?: Array<string>;
}
export interface newsListType {
    Everything: string,
    Search: string
}