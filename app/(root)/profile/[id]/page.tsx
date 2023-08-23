import { Tabs, TabsList } from "@/components/ui/tabs";

function Page() {
  return (
    <section>
      <div className="mt-0">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">WORKING!!!!</TabsList>
        </Tabs>
      </div>
    </section>
  );
}

export default Page;
