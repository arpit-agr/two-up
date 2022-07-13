const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes, loading) {
  let metadata = await Image(src, {
    widths: [800, 1600, null],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./public/img/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading,
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = imageShortcode;