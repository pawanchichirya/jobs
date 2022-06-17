import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  res.send("delete");
};

const getAllJobs = async (req, res) => {
  res.send("get all");
};

const updateJob = async (req, res) => {
  res.send("update");
};

const showStats = async (req, res) => {
  res.send("show stats");
};

export { createJob, updateJob, showStats, deleteJob, getAllJobs };
