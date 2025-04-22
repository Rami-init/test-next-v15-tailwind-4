"use client";

import { RequiredLabelIcon } from "@/components/RequiredLabelIcon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { courseSchema } from "@/schema/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { createCourse } from "../actions/courses";
export function CourseForm({}) {
  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const handleSubmit = async (values: z.infer<typeof courseSchema>) => {
    const data = await createCourse(values);
    if (data.error) toast.error(data.message);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Course Name <RequiredLabelIcon />
              </FormLabel>
              <FormControl>
                <Input placeholder="Course name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Course Description <RequiredLabelIcon />
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none min-h-20"
                  placeholder="Description name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="self-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
