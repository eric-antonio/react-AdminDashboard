import { User } from "@/graphql/schema.types";
import React from "react";
interface ProjectcardProps {
  id: string;
  title: string;
  dueDate: string;
  users: {
    id: string;
    name: string;
    avatarUrl?: User["avatarUrl"];
  }[]
}
const ProjectCard = ({ id, title, dueDate, users }: ProjectcardProps) => {
  return <div>
    {title}
    <p>dsfdsf</p>
  </div>;
};

export default ProjectCard;
