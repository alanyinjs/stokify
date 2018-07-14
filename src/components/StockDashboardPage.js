import React from 'react';
import TransactionList from './TransactionList';
import TransactionFilters from './TransactionFilters';

const StockDashboardPage = () => (
  <div className="dashboard">
    <h2>Stock History Record</h2>
    <TransactionFilters />
    <TransactionList />
  </div>
)

export default StockDashboardPage;