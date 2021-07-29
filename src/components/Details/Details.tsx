import React from "react";
import "../Details/Details.css"

interface MarketProps {
  markets: {
    id: number;
    distanceFromZip: number;
    marketName: string
  }[],
  marketDetails: {
    street: string,
    city: string,
    state: string,
    zip: string,
    schedule: {
      dayOfWeek: string,
      time: string,
      season: string
    }[],
    products: string[],
    mapsLink: string
  }[],
  id: string;
}

const Details: React.FC<MarketProps> = ({ id, markets, marketDetails }) => {

  const marketMatch = markets.filter(market => market.id === Number(id));
  const detailsMatch = marketDetails.filter(market => { 
    let match = market.mapsLink.split('%22')[1].includes(marketMatch[0].marketName.split(' ')[0]);
    console.log(marketMatch[0].marketName)
    return match
  });
  const nameMatch = marketMatch[0].marketName;
  const detail = detailsMatch[0];
  const openSeason = `Season: ${detail.schedule[0].season}`;
  const daysAndTimes = `Open: ${detail.schedule[0].dayOfWeek} ${detail.schedule[0].time}`;
  const productList = detail.products.map(prod => {
    return <p>{prod},</p>
  });

  return (
    <section className='market-details'>
      <h1> {nameMatch} </h1>
      <p> {detail.street}, {detail.city} {detail.state}, {detail.zip} </p>
      <p> {openSeason} </p>
      <p> {daysAndTimes} </p>
      <div className='products'>
        <h4>Products available at this market:</h4>
        <p> {productList} </p>
      </div>
      <a href={detail.mapsLink}>Open in Google Maps</a>
    </section>
  );
}

export default Details;

