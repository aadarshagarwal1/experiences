import { createSlice } from "@reduxjs/toolkit";

const places = createSlice({
  name: "places",
  initialState: [
    {
      id: 1,
      name: "BIT Canteen",
      description:
        "The BIT Canteen at BIT Sindri is one of the most frequented spots on the campus, beloved by students for its vibrant atmosphere and variety of food options. Located at the heart of the college, it offers a wide selection of affordable and tasty snacks, meals, and beverages that cater to the diverse tastes of students. From crispy samosas and sandwiches to filling thalis and refreshing cold drinks, the canteen has something for everyone, whether they are looking for a quick bite between classes or a relaxed meal with friends.\n\nBeyond just a place to eat, the BIT Canteen serves as a social hub where students come together to unwind, chat, and take a break from their hectic schedules. The lively environment, coupled with the friendly staff, makes it a welcoming and comfortable spot for both casual gatherings and solo study sessions. It’s also known for being a popular meeting place for group discussions and project work.\n\nThe canteen’s central location and spacious seating arrangements make it convenient for students from all departments to access. Overall, the BIT Canteen plays a vital role in enhancing the student experience at BIT Sindri, offering not just nourishment but also a space for relaxation and community building.",
      images: [
        "bitCanteen/image (1).png",
        "bitCanteen/image (2).png",
        "bitCanteen/image (3).png",
        "bitCanteen/image (4).png",
      ],
      mapLink: "https://maps.app.goo.gl/tq9WJ4hwxfiViAKK9",
      link: "/experiences/bit-canteen",
    },
    {
      id: 2,
      name: "Nescafé",
      description:
        "The BIT Canteen at BIT Sindri is one of the most frequented spots on the campus, beloved by students for its vibrant atmosphere and variety of food options. Located at the heart of the college, it offers a wide selection of affordable and tasty snacks, meals, and beverages that cater to the diverse tastes of students. From crispy samosas and sandwiches to filling thalis and refreshing cold drinks, the canteen has something for everyone, whether they are looking for a quick bite between classes or a relaxed meal with friends.\n\nBeyond just a place to eat, the BIT Canteen serves as a social hub where students come together to unwind, chat, and take a break from their hectic schedules. The lively environment, coupled with the friendly staff, makes it a welcoming and comfortable spot for both casual gatherings and solo study sessions. It’s also known for being a popular meeting place for group discussions and project work.\n\nThe canteen’s central location and spacious seating arrangements make it convenient for students from all departments to access. Overall, the BIT Canteen plays a vital role in enhancing the student experience at BIT Sindri, offering not just nourishment but also a space for relaxation and community building.",
      images: ["nescafe/image (1).png", "nescafe/image (2).png"],
      mapLink: "https://maps.app.goo.gl/5M4i7vQHENBzXoaP7",
      link: "/experiences/nescafé",
    },
    {
      id: 3,
      name: "Piya Milan Chowk",
      description:
        "Piya Milan Chowk at BIT Sindri is a notable landmark and a popular meeting point on the campus. This bustling area serves as a central hub where students and faculty frequently gather to socialize, relax, and take a break from their academic routines. The chowk, with its lively atmosphere and strategic location, is a favored spot for informal discussions, group meetings, and casual hangouts.\n\nSurrounded by a variety of food stalls and small eateries, Piya Milan Chowk offers a diverse range of snacks and refreshments, making it an ideal place to grab a quick bite or enjoy a leisurely meal with friends. The chowk’s vibrant setting and frequent foot traffic contribute to its status as a central social space, where students can unwind and engage with their peers in a relaxed environment.\n\nAdditionally, Piya Milan Chowk often hosts various student events and activities, adding to its dynamic character and making it a focal point of campus life. Its significance extends beyond just a physical location, representing a key element of the community and camaraderie at BIT Sindri.",
      images: ["pmc/image (1).png", "pmc/image (2).png"],
      mapLink: "https://maps.app.goo.gl/r6gXACU84QU9C44D7",
      link: "/experiences/piya-milan-chowk",
    },
    {
      id: 4,
      name: "Aunty Maggie",
      description:
        "Aunty Maggie's is a charming small shop nestled within the BIT Sindri campus, run by a friendly local lady. This cozy spot is a favorite among students for its comforting and affordable offerings, particularly its famous Maggi noodles, which are a popular choice for a quick and satisfying meal. Besides Maggi, the shop also stocks a variety of other packed snacks and essential items, making it a convenient stop for those in need of a snack or small grocery items.\n\nThe shop's intimate and welcoming atmosphere, combined with its homely feel, provides a delightful contrast to the more bustling areas on campus. It’s not just about the food; Aunty Maggie’s is known for its warm and personal service, making every visit a pleasant experience. The shop's location within the campus adds to its accessibility, allowing students to easily pop in between classes or during breaks.\n\nAunty Maggie's has become more than just a place to buy food; it’s a beloved part of campus life, offering a slice of comfort and community in the heart of BIT Sindri.",
      images: ["auntyMaggie/image (1).png", "auntyMaggie/image (2).png"],
      mapLink: "https://maps.app.goo.gl/rFCBAhP8PvnGhPTk7",
      link: "/experiences/aunty-maggie",
    },
    {
      id: 5,
      name: "Tiger Road",
      description:
        "Tiger Road is a prominent and well-traveled route within BIT Sindri, serving as a crucial artery connecting several key areas of the campus. This road is notable for its proximity to important facilities, including the Final Year Hostel, which provides essential accommodation for senior students. The road also houses the buildings for the Electrical Engineering, Mechanical Engineering, and Production and Industrial Engineering departments.\n\nThe presence of these significant academic and residential facilities on Tiger Road makes it a central hub of student activity and academic life. The Final Year Hostel, located along this road, is a vital resource for students in their final year, offering convenient and accessible living arrangements close to their departments.\n\nThe buildings for the Electrical Engineering, Mechanical Engineering, and Production and Industrial Engineering departments are also situated on Tiger Road, making it an important area for academic and research activities. These departments are integral to the college's engineering programs, and their presence here highlights the road's role as a focal point for technical education and innovation.\n\nOverall, Tiger Road is a key component of the BIT Sindri campus, linking essential residential and academic facilities and playing a significant role in the daily life of the college community.",
      images: [
        "tigerRoad/image (1).png",
        "tigerRoad/image (2).png",
        "tigerRoad/image (3).png",
        "tigerRoad/image (4).png",
      ],
      mapLink: "https://maps.app.goo.gl/Mfycho2v6xKK7QuJ9",
      link: "/experiences/tiger-road",
    },
    {
      id: 6,
      name: "Deshpande Auditorium",
      description:
        "Deshapande Auditorium is a grand and significant venue located on the BIT Sindri campus. This large auditorium is a central space for a variety of events and activities, making it a key part of campus life. With its spacious seating and state-of-the-art facilities, Deshapande Auditorium is used for major academic lectures, seminars, workshops, and cultural events.\n\nThe auditorium's design is both functional and impressive, providing an ideal setting for large gatherings. Its capacity to accommodate a substantial number of attendees makes it a popular choice for important functions and events that require a formal and well-equipped venue.\n\nIn addition to academic and professional events, Deshapande Auditorium often hosts student activities, including performances, debates, and conferences. Its versatile nature ensures that it serves a wide range of purposes, contributing significantly to the vibrant and dynamic environment at BIT Sindri. The auditorium not only facilitates educational and professional development but also fosters a sense of community and engagement among students and faculty.",
      images: [
        "dpa/image (1).png",
        "dpa/image (2).png",
        "dpa/image (3).png",
        "dpa/image (4).png",
        "dpa/image (5).png",
      ],
      mapLink: "https://maps.app.goo.gl/u9kogLQ3Z6ELuMXJ9",
      link: "/experiences/deshpande-auditorium",
    },
    {
      id: 7,
      name: "Baba Ka Dhaba",
      description:
        "Baba Ka Dhaba is a beloved small shop located on the BIT Sindri campus, known for its evening snacks and various packed items. This quaint shop provides a range of delicious and affordable snacks, making it a popular spot for students looking to grab a quick bite after classes or during their breaks.\n\nThe shop’s offerings include a variety of tasty treats, from savory snacks to sweet items, catering to the diverse tastes of the student community. In addition to snacks, Baba Ka Dhaba stocks a selection of packed items, providing convenience for students who need essentials or want to enjoy a light meal.\n\nThe friendly and welcoming atmosphere of Baba Ka Dhaba, combined with its convenient location on campus, makes it a favorite among students. It serves as a perfect place to unwind, socialize, and enjoy a snack in a relaxed setting. The shop's charm and its role in providing comfort food contribute to its status as a cherished part of campus life at BIT Sindri.",
      images: ["bkd/image (1).png", "bkd/image (2).png", "bkd/image (3).png"],
      mapLink: "https://maps.app.goo.gl/XYtydzSVuhf287CLA",
      link: "/experiences/baba-ka-dhaba",
    },
  ],
});
export default places;
