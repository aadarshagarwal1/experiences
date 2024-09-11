import { createSlice } from "@reduxjs/toolkit";

const places = createSlice({
  name: "places",
  initialState: [
    {
      id: 1,
      name: "BIT Canteen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: ["nescafe/image (1).png", "nescafe/image (2).png"],
      mapLink: "https://maps.app.goo.gl/5M4i7vQHENBzXoaP7",
      link: "/experiences/place-2",
    },
    {
      id: 3,
      name: "Piya Milan Chowk",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: ["pmc/image (1).png", "pmc/image (2).png"],
      mapLink: "https://maps.app.goo.gl/r6gXACU84QU9C44D7",
      link: "/experiences/place-3",
    },
    {
      id: 4,
      name: "Aunty Maggie",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: ["auntyMaggie/image (1).png", "auntyMaggie/image (2).png"],
      mapLink: "https://maps.app.goo.gl/rFCBAhP8PvnGhPTk7",
      link: "/experiences/place-4",
    },
    {
      id: 5,
      name: "Tiger Road",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "tigerRoad/image (1).png",
        "tigerRoad/image (2).png",
        "tigerRoad/image (3).png",
        "tigerRoad/image (4).png",
      ],
      mapLink: "https://maps.app.goo.gl/Mfycho2v6xKK7QuJ9",
      link: "/experiences/place-5",
    },
    {
      id: 6,
      name: "Deshpande Auditorium",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "dpa/image (1).png",
        "dpa/image (2).png",
        "dpa/image (3).png",
        "dpa/image (4).png",
        "dpa/image (5).png",
      ],
      mapLink: "https://maps.app.goo.gl/u9kogLQ3Z6ELuMXJ9",
      link: "/experiences/place-6",
    },

    {
      id: 7,
      name: "Baba Ka Dhaba",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: ["bkd/image (1).png", "bkd/image (2).png", "bkd/image (3).png"],
      mapLink: "https://maps.app.goo.gl/XYtydzSVuhf287CLA",
      link: "/experiences/place-7",
    },
  ],
});
export default places;
