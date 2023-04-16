import { errorResponse, successResponse } from "../../helpers";
import { Company } from "../../models";
const uuid = require("uuid");

export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    return successResponse(req, res, companies);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const saveCompany = async (req, res) => {
  try {
    const company = {
      uuid: uuid.v4(),
      code: req.body.code,
      name: req.body.name,
      website: req.body.website || "",
      phone: req.body.phone,
      description: req.body.description || "",
      created_by: parseInt(req.user.id),
    };
    const result = await Company.create(company);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const updateCompany = async (req, res) => {
  try {
    const result = await Company.findOne({ where: { id: req.params.id } });
    result.name = req.body.name;
    result.website = req.body.website;
    result.phone = req.body.phone;
    result.description = req.body.description;
    result.save();
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const deleteCompany = async (req, res) => {
  try {
    const result = await Company.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
