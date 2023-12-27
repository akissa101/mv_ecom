import toast, { Toast } from "react-hot-toast";

type MakePostProps = {
  setIsLoading: Function;
  endpoint: string;
  data: any;
  resourceName: string;
  reset: Function;
};
export async function makeCommunitytRequest({
  setIsLoading,
  endpoint,
  data,
  reset,
  resourceName,
}: MakePostProps) {
  //   console.log(data);
  try {
    setIsLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setIsLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      //   console.log(response);
      reset();
    } else {
      setIsLoading(false);
      if (response.status === 409) {
        toast.error("The Giving Warehouse Stock is Not Enough");
      } else {
        toast.error("something went wrong: ");
      }
    }
  } catch (err) {
    setIsLoading(false);
    console.log(err);
  }
}
