import TableTask from "@/components/TableTask";
import AddTask from "../components/AddTaskButton";
import TodoListForm from "../components/SearchForm";
import { Box } from "@mui/material";

import fs from "fs";
import path from "path";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ITasks } from "@/public/tasks";
import AddTaskButton from "../components/AddTaskButton";
import Modal from "@/components/Modal";
import SearchForm from "../components/SearchForm";

interface HomeProps {
  data: ITasks[];
  error?: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const dir = path.resolve(process.cwd(), "public/database.txt");
  const tmp = fs.readFileSync(dir, { encoding: "utf-8" });
  console.log(tmp);

  const parsedData = JSON.parse(tmp) as { tasks: ITasks[] };

  console.log(123, parsedData["tasks"]);

  return { props: { data: parsedData["tasks"] } };
};

export default function Home({ data, error }: HomeProps) {
  return (
    <main>
      <Box sx={{ mx: "auto", width:1750, ml:10, mt:10, backgroundColor: "lightgray" }}>
        <h1>To Do List!</h1>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          gap: 2,
          bgcolor: "background.paper",
          borderRadius: 1,
          mx: "auto",
          width: 550,
        }}
      >
        <SearchForm />
        <Box>
          <AddTaskButton />
        </Box>
      </Box>
      <Box>{error ? <p>{error}</p> : <TableTask tasks={data} />}</Box>
    </main>
  );
}
