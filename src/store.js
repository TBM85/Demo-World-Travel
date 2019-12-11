import React from 'react';
import { FaPassport, FaRegCompass, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdFlight, MdHotel, MdDirectionsCar, MdSecurity } from "react-icons/md";

export const menu_items = [
  {name: 'Tourism', href: '#tourism'},
  {name: 'Services', href: '#services'},
  {name: 'Packages', href: '#packages'}
]

export const images = [
  {
    name: 'Beach Tourism', 
    class: 'small-image', 
    src: 'https://cdn.pixabay.com/photo/2017/06/28/16/48/amazing-2451315_1280.jpg'
  },
  {
    name: 'Cultural Tourism', 
    class: 'large-image', 
    src: 'https://cdn.pixabay.com/photo/2017/05/31/16/23/greece-2360857_1280.jpg'
  },
  {
    name: 'Urban Tourism', 
    class: 'large-image', 
    src: 'https://cdn.pixabay.com/photo/2018/04/10/02/07/panoramic-3306144_1280.jpg'
  },
  {
    name: 'Wildlife Tourism', 
    class: 'small-image', 
    src: 'https://cdn.pixabay.com/photo/2017/07/26/15/41/path-of-the-king-2542056_1280.jpg'
  }
]

export const services = [
  {
    icon: <MdFlight />,
    service: 'Flight Reservations',
    description: 'We offer reservations for profitable flights to all destinations. Preference for any particular airline is taken into account.'
  },
  {
    icon: <MdHotel />,
    service: 'Accommodation',
    description: 'We offer the customers a choice of their specific accommodation needs regionally, nationally and internationally.'
  },
  {
    icon: <FaRegCompass />,
    service: 'Guided Services',
    description: 'Provides assistance, information and interpretation of cultural, historical and contemporary heritage to people on organized tours and individual clients.'
  },
  {
    icon: <MdDirectionsCar />,
    service: 'Car Hire',
    description: 'We are agents of several internationally recognized car rental companies, with special rates that apply to our customers.'
  },
  {
    icon: <FaPassport />,
    service: 'Travel Documents',
    description: 'Provides advice to clients regarding visa requirements and/or any other relevant information for a specific destination.'
  },
  {
    icon: <MdSecurity />,
    service: 'Travel Insurance',
    description: 'Includes coverage for medical expenses, lost luggage, flight cancellation, airport assistance services and much more.'
  }
]

export const packages = [
  {
    place: 'Paris', 
    image: 'https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg', 
    time: '3 days/3 nights | Wednesday to Friday', 
    includes: ['Flight and accommodation', 'Excursions according to the itinerary', 'Transportation by tourist bus during the excursions', 'Guidance in Spanish and English', 'All breakfast and dinners', 'Travel insurance'],
    excursions: ['Louvre Museum Timed-Entrance Ticket', 'Pere Lachaise Cemetery Guided Tour', 'Full access ticket to the Palace and Gardens of Versailles'], 
    prices: ['Double room: $1340,00', 'Single room: $1670,00', 'Children: $1180,00']
  },
  {
    place: 'Rio de Janeiro', 
    image: 'https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg', 
    time: '4 days/4 nights | Tuesday to Friday', 
    includes: ['Flight and accommodation', 'Excursions according to the itinerary', 'Transportation by tourist bus during the excursions', 'Guidance in Spanish and English', 'All breakfast and dinners', 'Travel insurance'],
    excursions: ['Full-Day Tour with Christ, Sugarloaf, Selaron and BBQ Lunch', 'Favela Santa Marta Tour with a Local Guide', 'Ilha Grande Boat Tour & Lunch'], 
    prices: ['Double room: $1870,00', 'Single room: $2150,00', 'Children: $1640,00']
  },
  {
    place: 'Mayan Riviera', 
    image: 'https://cdn.pixabay.com/photo/2015/12/15/09/19/pyramid-1093924_1280.jpg', 
    time: '6 days/5 nights | Tuesday to Sunday', 
    includes: ['Flight and accommodation', 'Excursions according to the itinerary', 'Transportation by tourist bus during the excursions', 'Guidance in Spanish and English', 'All breakfast and dinners', 'Travel insurance'],
    excursions: ['Tulum, Coba, & Cenote: Full-Day Tour', 'Xel-Ha Park: All Inclusive Full-Day Tour', 'Tickets to Rio Secreto and Lunch'], 
    prices: ['Double room: $1750,00', 'Single room: $1980,00', 'Children: $1560,00']
  },
  {
    place: 'New Zealand', 
    image: 'https://cdn.pixabay.com/photo/2019/09/22/05/26/hobbit-4495138_1280.jpg', 
    time: '5 days/4 nights | Tuesday to Saturday', 
    includes: ['Flight and accommodation', 'Excursions according to the itinerary', 'Transportation by tourist bus during the excursions', 'Guidance in Spanish and English', 'All breakfast and dinners', 'Travel insurance'],
    excursions: ['Hobbiton Movie Set Guided Tour', 'Tamaki Maori Village Evening Cultural Experience', 'Milford Sound Nature Cruise with Optional Lunch'], 
    prices: ['Double room: $2150,00', 'Single room: $2380,00', 'Children: $1850,00']
  },
  {
    place: 'Iceland', 
    image: 'https://cdn.pixabay.com/photo/2018/07/04/17/04/grundarfjorur-3516524_1280.jpg', 
    time: '4 days/4 nights | Tuesday to Friday', 
    includes: ['Flight and accommodation', 'Excursions according to the itinerary', 'Transportation by tourist bus during the excursions', 'Guidance in Spanish and English', 'All breakfast and dinners', 'Travel insurance'],
    excursions: ['Crystal Ice Cave Tour from Jökulsárlón Glacier Lagoon', 'Húsavík 3-Hour Original Whale Watching Tour', 'The Golden Circle Express Tour'], 
    prices: ['Double room: $1650,00', 'Single room: $1980,00', 'Children: $1420,00']
  },
  {
    place: 'Santorini', 
    image: 'https://cdn.pixabay.com/photo/2016/08/08/14/57/santorini-1578460_1280.jpg', 
    time: '3 days/3 nights | Wednesday to Friday', 
    includes: ['Flight and accommodation', 'Excursions according to the itinerary', 'Transportation by tourist bus during the excursions', 'Guidance in Spanish and English', 'All breakfast and dinners', 'Travel insurance'],
    excursions: ['Kayak Experience with Brunch at the Red, White & Black Beach', 'Santorini Highlights Tour with Wine Tasting', 'Volcanic Islands Cruise with Hot Springs Visit'], 
    prices: ['Double room: $1500,00', 'Single room: $1750,00', 'Children: $1300,00']
  },
  {
    place: 'Cusco', 
    image: 'https://cdn.pixabay.com/photo/2014/11/21/04/11/machu-pichu-540145_1280.jpg', 
    time: '5 days/4 nights | Tuesday to Saturday', 
    includes: ['Flight and accommodation', 'Excursions according to the itinerary', 'Transportation by tourist bus during the excursions', 'Guidance in Spanish and English', 'All breakfast and dinners', 'Travel insurance'],
    excursions: ['Machu Picchu Lost Citadel and Mountain Official Ticket', 'Full-Day Tour to Rainbow Mountain', 'Full-Day Sacred Valley Tour with Lunch'], 
    prices: ['Double room: $1890,00', 'Single room: $2100,00', 'Children: $1650,00']
  },
  {
    place: 'Rome', 
    image: 'https://cdn.pixabay.com/photo/2019/03/28/18/46/rome-4087802_1280.jpg', 
    time: '4 days/4 nights | Tuesday to Friday', 
    includes: ['Flight and accommodation', 'Excursions according to the itinerary', 'Transportation by tourist bus during the excursions', 'Guidance in Spanish and English', 'All breakfast and dinners', 'Travel insurance'],
    excursions: ['Visit a 16th-century artisanal winery', 'Colosseum, Roman Forum, Palatine Hill Priority Tickets', "Saint Peter's Basilica Guided Tour"],
    prices: ['Double room: $1580,00', 'Single room: $1760,00', 'Children: $1275,00']
  }
]

export const contact = {
  email: 'mountaintravel@gmail.com',
  phone: '+34 937376216',
  address: 'Street 10, Madrid Center, 28001 Madrid, Spain',
  socials: [
    {link: 'https://www.facebook.com/', icon: <FaFacebook />}, 
    {link: 'https://www.instagram.com/', icon: <FaInstagram />}, 
    {link: 'https://www.youtube.com/', icon: <FaYoutube />}
  ]
}