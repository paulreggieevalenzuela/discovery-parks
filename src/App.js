import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Navigation from './components/navigation';
import Badge from './components/badge';

import ListView from './views/list-page';

function App() {
  const routes = [
    {
      path: "/home",
      label: "Home",
      active: false,
    },
    {
      path: "/content",
      label: "Content",
      active: false,
    },
    {
      path: "/contact-us",
      label: "Contact Us",
      active: true,
    },
  ];

  const data =  [
    {
      name: 'Pambula Beach',
      state: 'Nsw',
      city: 'Pambula Beach',
      roomType: 'deluxe',
      roomName: 'deluxe 2 bedroom spa cabin',
      headCount: 5,
      price: 980,
      dateArrive: '10 Sep 20',
      dateDepart: '19 Sep 20',
      guestCount: 9,
      nights: 9,
      image: {
        url: 'https://via.placeholder.com/200x150',
        alt: 'Title of the image'
      }
    },
    {
      name: 'Secura lifestyle countryside',
      state: 'Nsw',
      city: 'Kalaru',
      roomType: 'deluxe',
      roomName: 'Large ensuite cabin',
      headCount: 4,
      price: 540,
      dateArrive: '19 Sep 20',
      dateDepart: '24 Sep 20',
      guestCount: 4,
      nights: 5,
      image: {
        url: 'https://via.placeholder.com/200x150',
        alt: 'Title of the image'
      }
    },
    {
      name: 'Riverbreese holiday park',
      state: 'Nsw',
      city: 'Maruya',
      roomType: 'deluxe',
      roomName: 'ensuite cabins',
      headCount: 5,
      price: 540,
      dateArrive: '24 Sep 20',
      dateDepart: '26 Sep 20',
      guestCount: 4,
      nights: 2,
      image: {
        url: 'https://via.placeholder.com/200x150',
        alt: 'Title of the image'
      }
    }
  ];

  return (
    <main>
      <Navigation title="Your road trip" />
      <div className="main-container">
        <a className="cta back-to-page" href="/#">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back to Delux 2 Bedroom Spa Cabin</span>
        </a>
        <ListView data={data} />
      </div>
    </main>
  );
}

export default App;
