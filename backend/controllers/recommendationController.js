import axios from "axios";

/**
 * @desc Get AI-based job recommendations
 * @route GET /api/recommendations/jobs
 */
export const recommendJobs = async (req, res) => {
  try {
    const companyName = req.user.company || "Shanker-Rana"; // Get from user profile

    const response = await axios.get("http://localhost:5001/recommend", {
      params: { company_name: companyName },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching recommendations",
        error: error.message,
      });
  }
};
// Push again
