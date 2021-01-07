import React from 'react';
import { CardText } from 'reactstrap';

export default function Packages() {

  const SHOW = {
    WEEK_1: [
      { name: "Cara Meminum Ramune Team KIII", date: "6 Januari 2021 (Pukul 19.00 WIB)" },
      { name: "Fajar Sang Idola Team J", date: "7 Januari 2021 (Pukul 19.00 WIB)" },
      { name: "Fly! Team T! Team T", date: "8 Januari 2021 (Pukul 19.00 WIB)" },
      { name: "Fajar Sang Idola Team J", date: "9 Januari 2021 (Pukul 14.00 WIB)" },
      { name: "Pajama Drive oleh Academy Class A", date: "9 Januari 2021 (Pukul 19.00 WIB)" },
      { name: "Cara Meminum Ramune Team KIII", date: "10 Januari 2021 (Pukul 14.00 WIB)" },
      { name: "Fly! Team T!  Team T", date: "10 Januari 2021 (Pukul 19.00 WIB)" }
    ]
  }

  return (
    <>
      {SHOW.WEEK_1.map((item, idx) => (
        <CardText key={idx}>
          {item.name} - <b>{item.date}</b>
        </CardText>
      ))}
    </>
  )

}