import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "er8woj0o",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skvFO6MVKmZ8GZqZ4reEoxaq1oNJ227sLqR0AIA53G2aViW8V1ukRoEVmoYYMtLr0n5ZdSrXk70uglXfJCjzY3PhJQuhZDe2zSgggUN6QWaryRT59jCczYQFFjFoRg9h2OQ8O7Gnen0h1ZHX43sLYlHwGtOZASPj45kt4GM3Hy7i3O1Ku1YC",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
