const BASE_URL = 'https://datausa.io/api';

export interface CensusResponse {
    data: CensusData[]
    source: CensusSource[]
}

export interface CensusData {
    "ID Nation": string
    Nation: string
    "ID Year": number
    Year: string
    Population: number
    "Slug Nation": string
}

export interface CensusSource {
    measures: string[]
    annotations: Annotations
    name: string
    substitutions: any[]
}
  
interface Annotations {
    source_name: string
    source_description: string
    dataset_name: string
    dataset_link: string
    table_id: string
    topic: string
    subtopic: string
}
  

export const getCensusData = async (year?: string): Promise<CensusResponse> => {
    let url = `${BASE_URL}/data?drilldowns=Nation&measures=Population&sort=asc`;
    if (year) {
        url += `&year=${year}`;
    }
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
}