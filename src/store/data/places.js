import { createSlice } from "@reduxjs/toolkit";

const places = createSlice({
  name: "places",
  initialState: [
    {
      id: 1,
      name: "PLACE ONE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "image (2).jpg",
        "image (1).jpg",
        "image (3).jpg",
        "image (4).jpg",
        "image (5).jpg",
        "image (6).jpg",
        "image (7).jpg",
        "image (8).jpg",
      ],
      mapLink: "",
      link: "/experiences/place-1",
    },
    {
      id: 2,
      name: "PLACE TWO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "image (3).jpg",
        "image (1).jpg",
        "image (2).jpg",
        "image (4).jpg",
        "image (5).jpg",
        "image (6).jpg",
        "image (7).jpg",
        "image (8).jpg",
      ],
      mapLink: "",
      link: "/experiences/place-2",
    },
    {
      id: 3,
      name: "PLACE THREE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "image (4).jpg",
        "image (1).jpg",
        "image (2).jpg",
        "image (3).jpg",
        "image (5).jpg",
        "image (6).jpg",
        "image (7).jpg",
        "image (8).jpg",
      ],
      mapLink: "",
      link: "/experiences/place-3",
    },
    {
      id: 4,
      name: "PLACE FOUR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "image (5).jpg",
        "image (1).jpg",
        "image (2).jpg",
        "image (3).jpg",
        "image (4).jpg",
        "image (6).jpg",
        "image (7).jpg",
        "image (8).jpg",
      ],
      mapLink: "",
      link: "/experiences/place-4",
    },
    {
      id: 5,
      name: "PLACE FIVE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "image (6).jpg",
        "image (1).jpg",
        "image (2).jpg",
        "image (3).jpg",
        "image (4).jpg",
        "image (5).jpg",
        "image (7).jpg",
        "image (8).jpg",
      ],
      mapLink: "",
      link: "/experiences/place-5",
    },
    {
      id: 6,
      name: "PLACE SIX",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "image (7).jpg",
        "image (1).jpg",
        "image (2).jpg",
        "image (3).jpg",
        "image (4).jpg",
        "image (5).jpg",
        "image (6).jpg",
        "image (8).jpg",
      ],
      mapLink: "",
      link: "/experiences/place-6",
    },
    {
      id: 7,
      name: "PLACE SEVEN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, iure illum alias repudiandae provident maiores aliquid unde facilis atque nobis ut assumenda consequatur possimus dolorum vero laborum obcaecati molestiae, voluptatibus sit odit nam labore dicta.Quisquam incidunt nemo itaque, commodi nostrum ipsa doloremque non provident beatae laboriosam! Debitis aut cum molestiae nesciunt neque distinctio inventore veniam soluta incidunt consequuntur delectus ab minus magni, aliquam, ullam blanditiis reprehenderit corrupti quis ducimus corporis ex iure itaque doloribus dolorum! Magnam earum nam fuga, inventore odit suscipit libero similique non soluta totam, eum, ipsa est voluptatum aliquam! Expedita, similique quos.Deleniti alias, nemo excepturi quia eveniet quaerat corrupti? Quaerat sit nam reprehenderit molestiae cupiditate ipsa corrupti molestias nobis similique ad nihil debitis nostrum libero, a sunt illo sed, nesciunt deserunt? Sapiente harum quam commodi doloribus recusandae, magnam id qui impedit praesentium iste eaque ipsum vero iure assumenda laudantium in.Labore expedita inventore sed adipisci amet magnam ullam aliquid.Aut, maxime officia.Doloremque explicabo ad fuga sint cupiditate, aperiam similique esse sit, tempora voluptatem voluptatibus, maxime quos commodi? Aspernatur commodi quasi consequuntur animi vel ab explicabo, unde consequatur voluptas.Cumque, beatae soluta nisi fugiat quisquam eveniet quod, ea maxime ratione in aperiam repellendus doloremque! Ipsum!",
      images: [
        "image (8).jpg",
        "image (1).jpg",
        "image (2).jpg",
        "image (3).jpg",
        "image (4).jpg",
        "image (5).jpg",
        "image (6).jpg",
        "image (7).jpg",
      ],
      mapLink: "",
      link: "/experiences/place-7",
    },
  ],
});
export default places;
