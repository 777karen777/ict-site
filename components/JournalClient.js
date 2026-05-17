"use client";

import { useState } from "react";
import { trades as initialTrades } from "../data/journal";

export default function JournalClient() {
  const [trades, setTrades] = useState(initialTrades);
  const [filter, setFilter] = useState("ALL");

  const filteredTrades =
    filter === "ALL"
      ? trades
      : trades.filter((t) => t.pair === filter);

  return (
    <div>
      <h1>Trading Journal</h1>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="ALL">All</option>
        <option value="XAUUSD">XAUUSD</option>
        <option value="EURUSD">EURUSD</option>
      </select>

      {filteredTrades.map((trade) => (
        <div key={trade.id}>
          {trade.pair} - {trade.pnl}
        </div>
      ))}
    </div>
  );
}