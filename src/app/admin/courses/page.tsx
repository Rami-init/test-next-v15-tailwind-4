import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="container mx-auto flex flex-grow my-6 flex-col ">
      <PageHeader title="Courses">
        <Button asChild>
          <Link href="courses/new">Add new Course</Link>
        </Button>
      </PageHeader>
    </div>
  );
}
