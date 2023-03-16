const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

const validate = require("validate.js");

/*----------------REGLER----------------*/
const constraints = {
  image_url: {
    url: {
      message: "^Sökvägen är felaktig",
    },
  },
};

async function getAll() {
  try {
    const allProduct = await db.products.findAll();
    /*Kontrollera allPosts. Om något blev fel returnera felmeddelande, om allt blev bra returnera allProduct */
    return createResponseSuccess(allProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

/*-------------CREATE------------------ */
async function create(post) {
  const invalidData = validate(post, constraints);
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newProduct = await db.products.create(post);
    return createResponseSuccess(newProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
/*-------------UPDATE------------------ */
async function update(post, id) {
  const invalidData = validate(post, constraints);
  if (!id) {
    return createResponseError(422, "id är obligatoriskt");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    await db.products.update(post, {
      where: { id },
    });
    return createResponseMessage(200, "Produkten uppdaterades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

/*-------------DELETE------------------ */
async function destroy(id) {
  if (!id) {
    return createResponseError(422, "id är obligatoriskt");
  }
  try {
    await db.products.destroy({
      where: { id },
    });
    return createResponseMessage(200, "Produkten raderades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = { getAll, create, update, destroy };
