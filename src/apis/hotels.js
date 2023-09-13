fetch("https://hotels-com-free.p.rapidapi.com/pde/property-details/v1/hotels.com/106346?rooms=1&checkIn=2021-01-27&checkOut=2021-01-28&locale=en_US&currency=USD&include=neighborhood", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "insert-your-RapidAPI-key-here",
    "x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

/* https://www.booking.com/searchresults.es.html?ss=Loja&ssne=Loja&ssne_untouched=Loja&highlighted_hotels=7537501&hp_sbox=1&efdco=1&label=gog235jc-1DCAsoQUISY2FzYS1ib2xpdmFyLW11c2VvSApYA2hBiAEBmAEKuAEXyAEM2AED6AEB-AECiAIBqAIDuALzkb-nBsACAdICJDhjZTkzM2I4LWRlYzAtNGExOC1hYTIwLTJiZTgyMWUzNGU1M9gCBOACAQ&aid=356980&lang=es&sb=1&src_elem=sb&src=hotel&dest_id=-930353&dest_type=city&checkin=2023-08-30&checkout=2023-09-02&group_adults=2&no_rooms=2&group_children=0&sb_travel_purpose=leisure */