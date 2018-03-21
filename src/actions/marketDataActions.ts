import {
    HistoricalCoinData, HistoricalCoinDataForContinuousCandlestickChart,
    CryptoCompareHistoricalCoinData
} from '../types';
import { SET_HISTORICAL_MARKET_DATA } from '../constants/';
const cryptoCompare = require('cryptocompare');

interface SetHistoricalMarketData {
    type: SET_HISTORICAL_MARKET_DATA;
    historicalMarketData: HistoricalCoinData[];
}

export type MarketDataActions = SetHistoricalMarketData;

export const setHistoricalMarketData = (historicalMarketData: HistoricalCoinData[]):
    SetHistoricalMarketData => ({
        type: SET_HISTORICAL_MARKET_DATA,
        historicalMarketData: historicalMarketData
    });

function parseHistoricalData(historicalCoinData: CryptoCompareHistoricalCoinData[], coinName: string):
    HistoricalCoinData {
    const historicalDataList: HistoricalCoinDataForContinuousCandlestickChart[] = [];
    for (const data of historicalCoinData) {
        const objectForContinuseCandleStickChart: HistoricalCoinDataForContinuousCandlestickChart = {
            date: new Date(data.time),
            open: data.open,
            high: data.high,
            low: data.low,
            close: data.close,
            volume: data.volumeto,
        };

        historicalDataList.push(objectForContinuseCandleStickChart);
    }
    return {
        coinName: coinName,
        historicalCoinData: historicalDataList,
    };
}

export async function getHistoricalMarketData(coin: string, context: string):
    Promise<HistoricalCoinData> {
    return parseHistoricalData(await cryptoCompare.histoMinute(coin.toUpperCase(), context.toUpperCase()), coin);
}