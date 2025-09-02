import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, List, Check, ArrowDownRight, SquarePen, Trash } from "lucide-react";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-4">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar Tarefa..." />
          <Button variant="default" className="cursor-pointer">
            <Plus /> Adicionar
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4" />

          <div className="flex gap-2">
            <Badge className="cursor-pointer">
              <List /> Todas
            </Badge>
            <Badge className="cursor-pointer">
              <ArrowDownRight /> Não Finalizadas
            </Badge>
            <Badge className="cursor-pointer">
              <Check /> Concluidas
            </Badge>
          </div>

          <div className="mt-4 border-b-1">

            <div className="h-14 flex justify-between items-center border-t-1">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                <SquarePen size={16} className="cursor-pointer" /> <Trash size={16} className="cursor-pointer" />{" "}
              </div>
            </div>

            <div className="h-14 flex justify-between items-center border-top-1">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                <SquarePen size={16} className="cursor-pointer" /> <Trash size={16} className="cursor-pointer" />{" "}
              </div>
            </div>

            <div className="h-14 flex justify-between items-center border-top-1">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                <SquarePen size={16} className="cursor-pointer" /> <Trash size={16} className="cursor-pointer" />{" "}
              </div>
            </div>


        




          </div>
        </CardContent>

        <div className=""></div>
      </Card>
    </main>
  );
};

export default Home;
