import Students from "../../models/student.js";

/**
 * @desc    Get student by roll number
 * @route   GET /api/admin/student/:rollno
 * @access  Private (admin only)
 */
export const getStudentByRollno = async (req, res) => {
  try {
    const { rollno } = req.params;

    const student = await Students.findOne({ rollno })
      .select("rollno name email year semester branch cgpa backlogs");

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.status(200).json({ success: true, student });
  } catch (err) {
    console.error("Error fetching student by rollno:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @desc    Update student by roll number
 * @route   PUT /api/admin/student/:rollno
 * @access  Private (admin only)
 */
export const updateStudent = async (req, res) => {
  try {
    const { rollno } = req.params;
    const updates = req.body;

    const student = await Students.findOneAndUpdate(
      { rollno },
      { $set: updates },
      { new: true }
    ).select("rollno name email year semester branch cgpa backlogs -_id");

    if (!student)
      return res.status(404).json({ success: false, message: "Student not found" });

    res.status(200).json({ success: true, student });
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
