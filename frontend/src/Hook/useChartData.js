import { useState, useEffect } from "react";
import api from "../utils/api";

const toYMD = (d) => {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// For single value charts (water, sugar, steps, calories, heart rate, oxygen, distance etc.)
export const useChartData = (metric, dataKey, days = 7) => {
  const [data, setData] = useState([]);
  const [todayTotal, setTodayTotal] = useState(0);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        // endpoint
        const res = await api.get(`/metrics/${metric}/summary?days=${days}`);

        const map = new Map(res.data.map((d) => [d.date, Number(d[dataKey]) || 0]));

        const end = new Date();
        end.setHours(0, 0, 0, 0);
        const start = new Date(end);
        start.setDate(end.getDate() - (days - 1));

        const filled = [];
        const totals = [];

        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          const key = toYMD(d);
          const val = Number(map.get(key)) || 0;
          filled.push({ date: key, [dataKey]: val });
          totals.push(val);
        }

        setData(filled);

        const todayKey = toYMD(end);
        setTodayTotal(Number(map.get(todayKey)) || 0);

        const sum = totals.reduce((a, b) => a + b, 0);
        setAvg(Math.round((sum / totals.length) * 10) / 10);
      } catch (err) {
        console.error(`Failed to load ${metric} summary`, err);
      }
    };

    fetchSummary();
  }, [metric, dataKey, days]);

  return { data, todayTotal, avg };
};