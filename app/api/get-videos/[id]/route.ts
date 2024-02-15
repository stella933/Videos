import { getCategoryById } from "@/lib/action/category.action";


export async function GET({ params }: { params: { id: string } },request:Request) {
    const id = params.id;
    const res = await getCategoryById(id); 
   
    return Response.json(res);
  }