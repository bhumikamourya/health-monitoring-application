import { useState, useEffect } from "react";
import api from "../utils/api";

const toYMD = (d) => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
};

// For Blood Pressure (systolic + diastolic)
export const useBPChartData = (days = 7) => {
  const [data, setData] = useState([]);
  const [todaySys, setTodaySys] = useState(0);
  const [todayDia, setTodayDia] = useState(0);
  const [avgSys, setAvgSys] = useState(0);
  const [avgDia, setAvgDia] = useState(0);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        //  BP endpoint
        const res = await api.get(`/metrics/bloodPressure/summary?days=${days}`);

        const mapSys = new Map(res.data.map(d => [d.date, Number(d.systolic) || 0]));
        const mapDia = new Map(res.data.map(d => [d.date, Number(d.diastolic) || 0]));

        const end = new Date();
        end.setHours(0, 0, 0, 0);
        const start = new Date(end);
        start.setDate(end.getDate() - (days - 1));

        const filled = [];
        const sysArr = [];
        const diaArr = [];

        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          const key = toYMD(d);
          const sysVal = Number(mapSys.get(key)) || 0;
          const diaVal = Number(mapDia.get(key)) || 0;
          filled.push({ date: key, systolic: sysVal, diastolic: diaVal });
          sysArr.push(sysVal);
          diaArr.push(diaVal);
        }

        setData(filled);

        const todayKey = toYMD(end);
        setTodaySys(Number(mapSys.get(todayKey)) || 0);
        setTodayDia(Number(mapDia.get(todayKey)) || 0);

        const sumSys = sysArr.reduce((a, b) => a + b, 0);
        const sumDia = diaArr.reduce((a, b) => a + b, 0);
        setAvgSys(Math.round((sumSys / sysArr.length) * 10) / 10);
        setAvgDia(Math.round((sumDia / diaArr.length) * 10) / 10);
      } catch (err) {
        console.error("BP fetch failed", err);
      }
    };

    fetchSummary();
  }, [days]);

  return { data, todaySys, todayDia, avgSys, avgDia };
};

