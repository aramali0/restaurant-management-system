 const sideLinks = [
  {
    id: "dashBoard",
    title: "Dashboard",
  },
  {
    id: "commands",
    title: "Commands",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "meals",
    title: "Meals",
  },
];

const CATEGORIES = [
  "FAST_FOOD",
  "BREAKFATS",
  "ICECREAMS",
  "DESSERT",
  "DRINKS",
  "CASUAL",
  "FAST_CASUAL",
  "FINE_DINING",
  "CAFEE_SHOPS",
  "BUFFET",
];

const BASE_URL = "http://localhost:8080/api/";

const DASHBORD_DATES = [
  {
    id: "today",
    startDate: (() => {
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0); 
      return todayStart;
    })(),
    endDate: new Date(), 
  },
  {
    id: "yesterday",
    startDate: (() => {
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      yesterdayDate.setHours(0, 0, 0, 0); 
      return yesterdayDate;
    })(),
    endDate: (() => {
      const yesterdayEndDate = new Date();
      yesterdayEndDate.setDate(yesterdayEndDate.getDate() - 1);
      yesterdayEndDate.setHours(23, 59, 59, 999); 
      return yesterdayEndDate;
    })(),
  },
  {
    id: "this week",
    startDate: (() => {
      const currentDate = new Date();
      const currentDayOfWeek = currentDate.getDay();
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);
      startOfWeek.setHours(0, 0, 0, 0); 
      return startOfWeek;
    })(),
    endDate: new Date(), 
  },
  {
    id: "this month",
    startDate: (() => {
      const currentDate = new Date();
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      firstDayOfMonth.setHours(0, 0, 0, 0); 
      return firstDayOfMonth;
    })(),
    endDate: new Date(), 
  },
];


export { CATEGORIES, BASE_URL, sideLinks, DASHBORD_DATES };

