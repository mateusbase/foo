import { Button } from "@/components/Button";
import Table from "@/components/Table";

export default function HomeScreen(): JSX.Element {
  return (
    <main className="flex flex-wrap gap-4">
      <Button.Root>Click me</Button.Root>
      <Button.Root>
        <Button.Icon loading />
      </Button.Root>

      <Table
        columns={[
          {
            key: "name",
            label: "Name",
          },
          {
            key: "age",
            label: "Age",
          },
          {
            key: "email",
            label: "Email",
          },
        ]}
        rows={[
          {
            key: "1",
            name: "John Doe",
            age: 25,
            email: "",
          },
          {
            key: "2",
            name: "Jane Doe",
            age: 23,
            email: "",
          },
        ]}
      />
    </main>
  );
}
