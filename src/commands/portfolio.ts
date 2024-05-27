import { invoke } from '@tauri-apps/api';
import { FinancialHistory, Holding } from '@/lib/types';

export const getHistorical = async (): Promise<FinancialHistory[]> => {
  try {
    const result = await invoke('get_historical');
    return result as FinancialHistory[];
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

export const computeHoldings = async (): Promise<Holding[]> => {
  try {
    const result = await invoke('compute_holdings');
    return result as Holding[];
  } catch (error) {
    console.error('Error computing holdings:', error);
    throw error;
  }
};
