const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

const validate = require("validate.js");

/*----------------REGLER----------------*/
const constraints = {
  email: {
    email: {
      message: "Please enter a valid email address",
    },
  },
};

async function getAll() {
  try {
    const allUser = await db.user.findAll();
    /*Kontrollera allPosts. Om något blev fel returnera felmeddelande, om allt blev bra returnera allUser */
    return createResponseSuccess(allUser);
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
    const newUser = await db.user.create(post);
    return createResponseSuccess(newUser);
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
    await db.user.update(post, {
      where: { id },
    });
    return createResponseMessage(200, "Användaren uppdaterades");
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
    await db.user.destroy({
      where: { id },
    });
    return createResponseMessage(200, "Användaren raderades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = { getAll, create, update, destroy };
