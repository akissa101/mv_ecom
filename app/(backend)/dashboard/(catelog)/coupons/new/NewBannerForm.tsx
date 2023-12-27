import TextInput from "@/components/ui/formInputs/TextInput";
import FormContainer from "@/components/FormContainer";
import ToggleInput from "@/components/ui/formInputs/ToggleInput";
import { addBanner } from "@/app/actions/banners/bannerActions";
import SubmitBtn from "../../../../components/SubmitBtn";
import ImageInput from "@/components/ui/formInputs/ImageInput";
import UploadImageForm from "@/components/ui/formInputs/UploadImageForm";

const NewBannerForm = () => {
  /*
        id- auto generated
        title
        link
        image
        isActive
    */

  const imageUrl = "";

  return (
    <FormContainer action={addBanner}>
      <div className="grid grid-cols-2 items-center justify-center gap-3">
        <TextInput
          type="text"
          name="title"
          label="Banner Name"
          isRequired
          className="w-full"
        />
        <TextInput
          name="link"
          label="Expiry Date"
          type="url"
          isRequired
          className="w-full"
        />
      </div>
      `` {/* Is coupon expired */}
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
