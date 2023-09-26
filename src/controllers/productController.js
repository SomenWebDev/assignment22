// Create a product
exports.create = async (req, res) => {
  try {
    res.status(201).json({ status: "success", data: "Product created" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Product creation failed" });
  }
};

// Read product information
exports.read = async (req, res) => {
  try {
    res.status(200).json({ status: "success", data: "Product data" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Product retrieval failed" });
  }
};

// Delete a product
exports.delete = async (req, res) => {
  try {
    res.status(200).json({ status: "success", message: "Product deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Product deletion failed" });
  }
};

// Update product information
exports.update = async (req, res) => {
  try {
    res.status(200).json({ status: "success", data: "Product updated" });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Product update failed" });
  }
};
