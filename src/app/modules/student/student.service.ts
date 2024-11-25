import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
  const student = new StudentModel(studentData);
  if (await student.isUserExists(studentData.id as string)) {
    throw new Error('User already exist');
  }
  const result = await student.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
const updateStudentInDB = async (id: string, updateData: Partial<Student>) => {
  const result = await StudentModel.findOneAndUpdate(
    { id }, // Filter to find the student by `id`
    updateData, // Data to update
  );
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentInDB,
};
