import ProjectLayout from "@/components/ProjectLayout"
import { projectsData } from "@/data/projects"

type tParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(props: { params: tParams }) {
  const { slug } = await props.params;

  return <ProjectLayout slug={slug} />;
}
