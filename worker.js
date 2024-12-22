export default {
  async fetch(request) {
    return new Response("Приффет мир!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
