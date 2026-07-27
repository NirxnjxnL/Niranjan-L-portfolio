import ProjectLayout from "@/components/ProjectLayout"

type tParams = Promise<{ slug: string }>;

export default async function ProjectPage(props: { params: tParams }) {
  const { slug } = await props.params;

  return <ProjectLayout slug={slug} />;
}
