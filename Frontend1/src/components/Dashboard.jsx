import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles/Dashboard.css";
import Header from './Header';
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const { t } = useTranslation();
  const [startups, setStartups] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [graphData, setGraphData] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startupsResponse = await fetch("/api/startups");
        const startupsData = await startupsResponse.json();
        setStartups(startupsData);

        const analyticsResponse = await fetch("/api/analytics");
        const analyticsData = await analyticsResponse.json();
        setAnalytics(analyticsData);

        const graphResponse = await fetch("/api/graphs");
        const graphData = await graphResponse.json();
        setGraphData(graphData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredStartups = startups.filter((startup) =>
    filter ? startup.category === filter : true
  );

  return (
    <div className="dashboard-container mt-32">
      <Header />
      <header className="dashboard-header">
        <h1>{t('exploreStartups')}</h1>
        <p>{t('discover')}</p>
      </header>

      <section className="real-time">
        <h2>{t('liveUpdates')}</h2>
        <p>{t('realTimeInfo')}</p>
      </section>

      <section className="analytics">
        <h2>{t('platformInsights')}</h2>
        <div className="analytics-cards">
          <div className="card">
            <h3>{t('totalStartups')}</h3>
            <p>{analytics.totalStartups || 30}</p>
          </div>
          <div className="card">
            <h3>{t('industriesCovered')}</h3>
            <p>{analytics.totalIndustries || 10}</p>
          </div>
          <div className="card">
            <h3>{t('activeUsers')}</h3>
            <p>{analytics.activeUsers || 5}</p>
          </div>
        </div>
      </section>

      <section className="startup-list">
        <h2>{t('registeredStartups')}</h2>
        <div className="filters">
          <label>
            {t('filterByCategory')}:
            <select onChange={(e) => setFilter(e.target.value)}>
              <option value="">{t('all')}</option>
              <option value="Tech">{t('tech')}</option>
              <option value="Health">{t('health')}</option>
              <option value="Finance">{t('finance')}</option>
            </select>
          </label>
        </div>
        <div className="startup-cards">
          {filteredStartups.map((startup) => (
            <div key={startup.id} className="startup-card">
              <h3>{startup.name}</h3>
              <p>
                <strong>{t('industry')}:</strong> {startup.industry}
              </p>
              <p>{startup.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="graphs">
        <h2>{t('startupAnalytics')}</h2>
        <div className="graph-container">
          <div className="bar-graph">
            <h3>{t('registrationsOverTime')}</h3>
            <Bar
              data={{
                labels: graphData.months || [12,30,12,2],
                datasets: [
                  {
                    label: "Startups",
                    data: graphData.registrations || [23,12],
                    backgroundColor: ["rgba(54, 162, 235, 0.6)",  ]
                  },
                ],
              }}
            />
          </div>
          <div className="pie-chart">
            <h3>{t('industryDistribution')}</h3>
            <Pie
              data={{
                labels: graphData.industries || [2,4,12,43,13],
                datasets: [
                  {
                    data: graphData.industryCount || [34,21,9,26,5,15],
                    backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#4BC0C0",
                      "#FACB46",
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
