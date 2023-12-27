import TextInput from "@/components/ui/formInputs/TextInput";
import FormContainer from "@/components/FormContainer";
import ToggleInput from "@/components/ui/formInputs/ToggleInput";
import { addCoupon } from "@/actions/coupon/couponActions";

import { useFormStatus } from "react-dom";
import { CldImage, CldOgImage } from "next-cloudinary";
import UploadWidget from "@/components/UploadWidget";
import UploadImageForm from "@/components/ui/formInputs/UploadImageForm";
import SubmitBtn from "@/(backend)/components/SubmitBtn";

const NewBannerForm = () => {
  return (
    <FormContainer action={addCoupon}>
      <div className="grid grid-cols-2 items-center justify-center gap-3">
        <TextInput
          name="title"
          label="Coupon Name"
          isRequired
          className="w-full"
        />
        <TextInput
          name="expiryDate"
          label="Expiry Date"
          type="date"
          isRequired
          className="w-full"
        />
      </div>

      {/* Upload Image use Cloudinary */}
      <div className="border border-white">
        <UploadImageForm />
        {/* <CldOgImage width={200} height={175} src="" alt="Image" /> */}
      </div>

      {/* Is coupon expired */}
      <ToggleInput
        label="Is the coupon expired"
        name="isActive"
        trueTitle="Active"
        falseTitle="Draft"
        className="w-full col-span-2"
        isPublished
      />

      <SubmitBtn defaultClass label="Submit" />
    </FormContainer>
  );
};

export default NewBannerForm;
