// Import del framework di express
const express = require("express");

// Settiamo il router
const router = express.Router()

// Importiamo il controller della risorsa
 const prodController = require("../controllers/prodController")

// Rotte di CRUD sulla risorsa bacheca
// INDEX
router.get("/", prodController.index)

// SHOW
router.get("/:id", prodController.show)

// CREATE
router.post("/", prodController.store)

// UPDATE COMPLETO
router.put("/:id", prodController.update)

// UPDATE PARZIALE
router.patch("/:id", prodController.modify)

// DELETE
router.delete("/:id", prodController.destroy)



module.exports = router;