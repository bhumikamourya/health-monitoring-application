import { useState, useEffect } from "react";
import api from "../utils/api";

const toYMD = (d) => {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const useCholesterolChartData = (days = 7) => {
  const [data, setData] = useState([]);
  const [todayTotal, setTodayTotal] = useState(0);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await api.get(`/metrics/cholesterol/summary?days=${days}`);

        const mapTotal = new Map(
          res.data.map(d => [toYMD(new Date(d.date)), Number(d.total) || 0])
        );
        const mapLDL = new Map(
          res.data.map(d => [toYMD(new Date(d.date)), Number(d.ldl) || 0])
        );
        const mapHDL = new Map(
          res.data.map(d => [toYMD(new Date(d.date)), Number(d.hdl) || 0])
        );

        const end = new Date();
        end.setHours(0, 0, 0, 0);
        const start = new Date(end);
        start.setDate(end.getDate() - (days - 1));

        const filled = [];
        const totalArr = [];

        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          const key = toYMD(d);
          const t = mapTotal.get(key) || 0;
          const ldl = mapLDL.get(key) || 0;
          const hdl = mapHDL.get(key) || 0;
          filled.push({ date: key, total: t, ldl, hdl });
          totalArr.push(t);
        }

        setData(filled);
        setTodayTotal(mapTotal.get(toYMD(end)) || 0);
        const sum = totalArr.reduce((a, b) => a + b, 0);
        setAvg(Math.round(sum / totalArr.length));

      } catch (err) {
        console.error("Cholesterol fetch failed", err);
      }
    };

    fetchSummary();
  }, [days]);

  return { data, todayTotal, avg };
};
