const createJob = async (req, res) => {
  res.send("create");
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
