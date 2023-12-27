import { v2 as cloudinary } from "cloudinary";

async function POST(req: Request) {
  const body = (await req.json()) as {
    paramsToSign: Record<string, string>;
  };
  const { paramsToSign } = body;
  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET as string
  );
  console.log(Response.json({ signature }));
  return Response.json({ signature });
}
