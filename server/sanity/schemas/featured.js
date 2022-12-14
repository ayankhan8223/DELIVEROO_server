export default {
  name: "featured",
  title: "Features Menu categories",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "restaurant",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
