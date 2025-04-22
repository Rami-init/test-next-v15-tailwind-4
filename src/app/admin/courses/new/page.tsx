import PageHeader from "@/components/PageHeader";
import { CourseForm } from "@/features/courses/components/CourseForm";

export default function NewCoursePage() {
  return (
    <div className="container mx-auto flex flex-grow my-6 flex-col gap-y-6">
      <PageHeader title="Add new Course" />
      <CourseForm />
    </div>
  );
}
