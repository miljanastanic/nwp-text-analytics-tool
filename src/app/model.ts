

export interface SimilarityM{
    timestamp: string,
    similarity: number,
}

export interface LanguageM{
    timestamp: string,
    detectedLangs: [
        {
        lang: string,
        confidence: number,
        }
    ]
}

export interface EntityM{
    timestamp: string,
    langConfidence: number,
    annotations: [
        {
            title: string,
            image: {
                full: string,
                thumbnail: string,
            },
            abstract: string,
            categories: [string],
        }
    ]

}

export interface SentimentM{
    timestamp: string,
    sentiment: {
        score: number,
        type: string,
    }
}

export interface rgb{
    red: number,
    green: number,
    blue: number,

}

export interface history{
    timestamp: string,
    type: string,
    url: string,

}