import React from 'react';

import { TrailersItem } from './TrailersItem';
import { Button, List, Wrapper } from './TrailersList.styled';

const trailers = [
  {
    "_id": "1",
    "name": "Road Bear C 23-25",
    "price": 10000,
    "rating": 4.5,
    "location": "Ukraine, Kyiv",
    "adults": 3,
    "children": 2,
    "engine": "petrol",
    "transmission": "automatic",
    "form": "alcove",
    "length": "7.3m",
    "width": "2.65m",
    "height": "3.65m",
    "tank": "208l",
    "consumption": "30l/100km",
    "description": "Embark on an unforgettable journey with the Road Bear C 23-25, an epitome of comfort and convenience on wheels. This alcove-style motorhome is meticulously designed to cater to the needs of families and small groups, ensuring a seamless and enjoyable road trip experience. The sleek exterior houses a spacious and thoughtfully laid out interior, making it your home away from home. The Road Bear C 23-25 boasts a stylish and modern design, coupled with top-notch amenities to enhance your travel adventures. The interior is not only aesthetically pleasing but also functional, providing ample living and sleeping space. Whether you're cruising along scenic highways or parked in a picturesque campsite, this RV offers the perfect blend of functionality and comfort. Inside, you'll find a fully equipped kitchen, complete with a refrigerator, microwave, and a three-burner hob, allowing you to prepare delicious meals on the go. The bathroom is fitted with a shower and toilet, ensuring you have the convenience of home wherever your travels take you. The sleeping quarters are designed for relaxation, with three comfortable beds to accommodate both adults and children. Additional features include air conditioning, a TV, CD player, radio, and ample storage space for all your travel essentials. The Road Bear C 23-25 is equipped with a 35kg gas supply for cooking, and a water tank with a capacity of 151 liters to meet your daily needs. Fuelled by petrol and featuring an automatic transmission, this motorhome is not only easy to drive but also fuel-efficient, allowing you to focus on enjoying the journey rather than worrying about logistics. Create lasting memories with your loved ones as you navigate the roads in the Road Bear C 23-25. It's not just an RV; it's a mobile sanctuary for your adventures, promising comfort, style, and the freedom to explore at your own pace.",
    "details": {
      "airConditioner": 1,
      "bathroom": 1,
      "kitchen": 1,
      "beds": 3,
      "TV": 1,
      "CD": 1,
      "radio": 1,
      "shower": 1,
      "toilet": 1,
      "freezer": 1,
      "hob": 3,
      "microwave": 1,
      "gas": "35kg",
      "water": "151l"
    },
    "gallery": [
      "https://ftp.goit.study/img/campers-test-task/1-1.webp",
      "https://ftp.goit.study/img/campers-test-task/1-2.webp",
      "https://ftp.goit.study/img/campers-test-task/1-3.webp"
    ],
    "reviews": [
      {
        "reviewer_name": "Alice",
        "reviewer_rating": 5,
        "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
      },
      {
        "reviewer_name": "Bob",
        "reviewer_rating": 4,
        "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
      }
    ]
  },
  {
    "_id": "2",
    "name": "Cruise America C-21",
    "price": 8000,
    "rating": 4.3,
    "location": "Ukraine, Poltava",
    "adults": 2,
    "children": 2,
    "engine": "petrol",
    "transmission": "automatic",
    "form": "alcove",
    "length": "6.4m",
    "width": "2.34m",
    "height": "3.72m",
    "tank": "151l",
    "consumption": "21l/100km",
    "description": "Discover the charm of the open road with the Cruise America C-21, a compact and versatile alcove-style motorhome. Ideal for couples or small families, this motorhome combines practicality with comfort, offering an efficient and enjoyable travel experience. The Cruise America C-21 is designed to provide you with the freedom to explore while ensuring a cozy retreat at the end of the day.",
    "details": {
      "airConditioner": 1,
      "bathroom": 1,
      "kitchen": 1,
      "beds": 2,
      "TV": 0,
      "CD": 0,
      "radio": 1,
      "shower": 1,
      "toilet": 1,
      "freezer": 1,
      "hob": 3,
      "microwave": 1,
      "gas": "22kg",
      "water": "76l"
    },
    "gallery": [
      "https://ftp.goit.study/img/campers-test-task/2-1.webp",
      "https://ftp.goit.study/img/campers-test-task/2-2.webp",
      "https://ftp.goit.study/img/campers-test-task/2-3.webp"
    ],
    "reviews": [
      {
        "reviewer_name": "Alice",
        "reviewer_rating": 5,
        "comment": "The Cruise America C-21 exceeded our expectations! Compact yet spacious, it's perfect for a couple's getaway. The kitchen facilities were impressive, and the bathroom setup was convenient. Highly recommended for a cozy and memorable road trip."
      },
      {
        "reviewer_name": "Bob",
        "reviewer_rating": 3,
        "comment": "Decent motorhome for the price. The Cruise America C-21 provided a comfortable stay, but the lack of a TV and CD player was a downside for entertainment. Overall, a satisfactory experience for a short trip."
      }
    ]
  },
]

export const TrailersList = () => {
    return (
      <Wrapper>
      <List>
        {trailers.map(trailer => {
          return <TrailersItem trailer={trailer} key={trailer._id} />
        })}
      </List>
      <Button>Load more</Button>
      </Wrapper>
    );
  };