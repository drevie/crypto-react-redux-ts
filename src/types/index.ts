
export interface StoreState {
    cryptoMarketCapListState: CryptoMarketCapListState;
    menuBarState: MenuBarState;
}

export interface HistoricalCoinDataForContinuousCandlestickChart {
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export interface HistoricalCoinData {
    close: number;
    high: number;
    low: number;
    open: number;
    time: number;
    volumefrom: number;
    volumeto: number;
}

export interface CoinData {
    CHANGE24HOUR: number;
    CHANGEDAY: number;
    CHANGEPCT24HOUR: number;
    CHANGEPCTDAY: number;
    FLAGS: string;
    FROMSYMBOL: string;
    HIGH24HOUR: string;
    HIGHDAY: string;
    LASTMARKET: string;
    LASTTRADEID: number;
    LASTUPDATE: number;
    LASTVOLUME: number;
    LASTVOLUMETO: number;
    LOW24HOUR: string;
    LOWDAY: string;
    MARKET: string;
    MKTCAP: number;
    OPEN24HOUR: string;
    OPENDAY: string;
    PRICE: string;
    SUPPLY: number;
    TOSYMBOL: string;
    TOTALVOLUME24H: number;
    TOTALVOLUME24HTO: number;
    TYPE: string;
    VOLUME24HOUR: number;
    VOLUME24HOURTO: number;
    VOLUMEDAY: number;
    VOLUMEDAYTO: number;
}

export interface CoinDataResponse {
    USD: CoinData;
    EUR: CoinData;
}

export interface FlattenedCoinData {
    name: string;
    style: string;
    USD: CoinData;
    EUR: CoinData;
}

export interface CoinRow {
    coinData: FlattenedCoinData;
    isRowExpanded: boolean;
}

export interface CryptoMarketCapListState {
    cryptos: string[];
    title: string;
    coinData: FlattenedCoinData[];
    currencyContext: string;
}

export interface MenuBarState {
    title: string;
}
