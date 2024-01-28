import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './dashBoard.module.css';
import DashCard from '../../../components/owner-page/DashCard/DashCard';

const BASE_URL = 'http://localhost:8080/api/';

function DashBoard() {
  const [orders, setOrders] = useState([
    { time: 'Today', value: 0 },
    { time: 'Yesterday', value: 0 },
    { time: 'This Week', value: 0 },
    { time: 'This Month', value: 0 },
  ]);

  const [earnings, setEarnings] = useState([
    { time: 'Today', value: 0 },
    { time: 'Yesterday', value: 0 },
    { time: 'This Week', value: 0 },
    { time: 'This Month', value: 0 },
  ]);

  const fetchCommandesByDateRange = async (startDate, endDate) => {
    try {
      const response = await axios.get(
        `${BASE_URL}commandes/findByDateRange?startDate=${startDate}&endDate=${endDate}`
      );
      return response.data.length; // Assuming you want the count of commandes
    } catch (error) {
      console.error('Error fetching commandes:', error);
      throw error;
    }
  };

  const updateDataForDateRange = async (updateFunction, startDate, endDate) => {
    try {
      const count = await fetchCommandesByDateRange(startDate, endDate);
      setOrders((prevOrders) => updateFunction(prevOrders, count));
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const updateOrders = async () => {
    await updateDataForDateRange((prevOrders, count) => [
      { time: 'Today', value: count },
      ...prevOrders.slice(1), // Keep Yesterday, This Week, This Month
    ], '28/01/2024', '28/01/2024');

    await updateDataForDateRange((prevOrders, count) => [
      ...prevOrders.slice(0, 1), // Keep Today
      { time: 'Yesterday', value: count },
      ...prevOrders.slice(2), // Keep This Week, This Month
    ], '27/01/2024', '27/01/2024');

    // Repeat the pattern for other time ranges...
  };

  useEffect(() => {
    updateOrders();
    // Update earnings in a similar way if needed
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Welcome back,</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperHeader}>
          <h2>Overview dashboard</h2>
        </div>
        <div className={styles.wrapperBody}>
          <DashCard list={orders} title={'Orders'} />
          <DashCard list={earnings} title={'Earnings'} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
