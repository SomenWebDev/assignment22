// Create a category
exports.create = async (req, res) => {
  try {
    res.status(201).json({ status: "success", data: "Category created" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Category creation failed" });
  }
};

// Read category information
exports.read = async (req, res) => {
  try {
    res.status(200).json({ status: "success", data: "Category data" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Category retrieval failed" });
  }
};

// Delete a category
exports.delete = async (req, res) => {
  try {
    res.status(200).json({ status: "success", message: "Category deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Category deletion failed" });
  }
};

// Update category information
exports.update = async (req, res) => {
  try {
    res.status(200).json({ status: "success", data: "Category updated" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Category update failed" });
  }
};
