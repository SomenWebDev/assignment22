exports.create = async (req, res) => {
  try {
    res.status(201).json({ status: "success", data: "Sub-admin created" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Sub-admin creation failed" });
  }
};

exports.read = async (req, res) => {
  try {
    res.status(200).json({ status: "success", data: "Sub-admin data" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Sub-admin retrieval failed" });
  }
};

exports.delete = async (req, res) => {
  try {
    res.status(200).json({ status: "success", message: "Sub-admin deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Sub-admin deletion failed" });
  }
};

exports.update = async (req, res) => {
  try {
    res.status(200).json({ status: "success", data: "Sub-admin updated" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Sub-admin update failed" });
  }
};
