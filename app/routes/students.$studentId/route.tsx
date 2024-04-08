import { Box } from "@chakra-ui/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: 'bkids' },
    { name: 'description', content: 'Est occaecat ex esse laboris do deserunt.' },
  ];
};

export async function loader({
  params,
}: LoaderFunctionArgs) {
  console.log('params', params);
  return {
    studentId: params.studentId,
  };
}

export default function Index() {
  const { studentId } = useLoaderData<{ studentId: string }>();

  return (
    <Box>
      <p>{studentId}</p>
    </Box>
  );
}
