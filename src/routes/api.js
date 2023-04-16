import express from "express";
import validate from "express-validation";

import * as userController from "../controllers/user/user.controller";
import * as Company from "../controllers/company/company.controller";
import * as Plant from "../controllers/plant/plant.controller";
import * as Division from "../controllers/division/division.controller";
import * as Department from "../controllers/department/department.controller";
import * as Line from "../controllers/line/line.controller";
import * as Shop from "../controllers/shop/shop.controller";
import * as Cell from "../controllers/cell/cell.controller";
import * as TypeMachine from "../controllers/machine/type.controller";
import * as Machine from "../controllers/machine/machine.controller";
import * as SubMachine from "../controllers/machine/submachine.controller";
import * as SpecialTool from "../controllers/specialTool/specialTool.controller";

import * as companyValidator from "../controllers/company/company.validator";
import { saveForm } from "../controllers/plant/plant.validator";
import { divisionForm } from "../controllers/division/division.validator";
import { departmentForm } from "../controllers/department/department.validator";
import { lineForm } from "../controllers/line/line.validator";
import { shopForm } from "../controllers/shop/shop.validator";
import { cellForm } from "../controllers/cell/cell.validator";
import { typeMachineForm } from "../controllers/machine/type.validator";
import { machineForm } from "../controllers/machine/machine.validator";
import { subMachineForm } from "../controllers/machine/submachine.validator";
import { specialForm } from "../controllers/specialTool/specialTool.validator";

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get("/profile", userController.profile);

router.get("/company", Company.getCompanies);
router.post("/company", validate(companyValidator.save), Company.saveCompany);
router.put("/company/:id", Company.updateCompany);
router.delete("/company/:id", Company.deleteCompany);

router.get("/plant", Plant.getPlant);
router.post("/plant", validate(saveForm), Plant.savePlant);
router.put("/plant/:id", Plant.updatePlant);
router.delete("/plant/:id", Plant.deletePlant);

router.get("/division", Division.getDivisions);
router.post("/division", validate(divisionForm), Division.saveDivision);
router.put("/division/:id", Division.updateDivision);
router.delete("/division/:id", Division.deleteDivision);

router.get("/department", Department.getDepartment);
router.post("/department", validate(departmentForm), Department.saveDepartment);
router.put("/department/:id", Department.updateDepartment);
router.delete("/department/:id", Department.deleteDepartment);

router.get("/line", Line.getLine);
router.post("/line", validate(lineForm), Line.saveLine);
router.put("/line/:id", Line.updateLine);
router.delete("/line/:id", Line.deleteLine);

router.get("/shop", Shop.getShop);
router.post("/shop", validate(shopForm), Shop.saveShop);
router.put("/shop/:id", Shop.updateShop);
router.delete("/shop/:id", Shop.deleteShop);

router.get("/cell", Cell.getCells);
router.post("/cell", validate(cellForm), Cell.saveCell);
router.put("/cell/:id", Cell.updateCell);
router.delete("/cell/:id", Cell.deleteCell);

router.get("/type-machine", TypeMachine.getTypeMachines);
router.post(
  "/type-machine",
  validate(typeMachineForm),
  TypeMachine.saveTypeMachine
);
router.put("/type-machine/:id", TypeMachine.updateTypeMachine);
router.delete("/type-machine/:id", TypeMachine.deleteTypeMachine);

router.get("/machine", Machine.getMachines);
router.post("/machine", validate(machineForm), Machine.saveMachine);
router.put("/machine/:id", Machine.updateMachine);
router.delete("/machine/:id", Machine.deleteMachine);

router.get("/sub-machine", SubMachine.getSubMachines);
router.post(
  "/sub-machine",
  validate(subMachineForm),
  SubMachine.saveSubMachine
);
router.put("/sub-machine/:id", SubMachine.updateSubMachine);
router.delete("/sub-machine/:id", SubMachine.deleteSubMachine);

router.get("/special-tool", SpecialTool.getSpecialTools);
router.post(
  "/special-tool",
  validate(specialForm),
  SpecialTool.saveSpecialTool
);
router.put("/special-tool/:id", SpecialTool.updateSpecialTool);
router.delete("/special-tool/:id", SpecialTool.deleteSpecialTool);

module.exports = router;
