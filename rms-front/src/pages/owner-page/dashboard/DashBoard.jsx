import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './dashBoard.module.css';
import DashCard from '../../../components/owner-page/DashCard/DashCard';
import { BASE_URL } from '../../../constants';

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

  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}commandes/search/findCommandesByRestaurantId?restaurantId=2`)
      .then(response => {
        const commandesData = response.data._embedded.commandes;

        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
        const thisWeek = ''; // Add logic to get the start date of the week
        const thisMonth = new Date().toISOString().split('-').slice(0, 2).join('-');

        const todayCommandes = commandesData.filter(commande => commande.date.includes(today));
        const yesterdayCommandes = commandesData.filter(commande => commande.date.includes(yesterday));
        const thisWeekCommandes = commandesData.filter(commande => commande.date.includes(thisWeek));
        const thisMonthCommandes = commandesData.filter(commande => commande.date.includes(thisMonth));

        const todayTotalPrice = todayCommandes.reduce((total, commande) => total + commande.totalPrix, 0);
        const yesterdayTotalPrice = yesterdayCommandes.reduce((total, commande) => total + commande.totalPrix, 0);
        const thisWeekTotalPrice = thisWeekCommandes.reduce((total, commande) => total + commande.totalPrix, 0);
        const thisMonthTotalPrice = thisMonthCommandes.reduce((total, commande) => total + commande.totalPrix, 0);

        setOrders([
          { time: 'Today', value: todayCommandes.length },
          { time: 'Yesterday', value: yesterdayCommandes.length },
          { time: 'This Week', value: thisWeekCommandes.length },
          { time: 'This Month', value: thisMonthCommandes.length },
        ]);

        setEarnings([
          { time: 'Today', value: `${todayTotalPrice} mad` },
          { time: 'Yesterday', value: `${yesterdayTotalPrice} mad` },
          { time: 'This Week', value: `${thisWeekTotalPrice} mad` },
          { time: 'This Month', value: `${thisMonthTotalPrice} mad` },
        ]);

        setCommandes(commandesData);
      });
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
