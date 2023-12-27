import FormHeader from "@/components/ui/formInputs/FormHeader";
import NewCouponForm from "./NewBannerForm";
import NewBannerForm from "./NewBannerForm";

type FormDataProps = {};

const NewBanner = ({}: FormDataProps) => {
  return (
    <div className="">
      <FormHeader title="New Banner" />
      <NewBannerForm />
    </div>
  );
};

export default NewBanner;
