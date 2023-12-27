"use server";

export const handleUploadImage = async (formData: FormData) => {
  const image = Object.fromEntries(formData.entries());
  formData.append("file", image.profile);
  formData.append("upload_preset", "karma123");
  const uploadResponse = await fetch(
    "https://api.cloudinary.com/v1_1/djhjkbjpa/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const uploadedImageData = await uploadResponse.json();
  const imageUrl = uploadedImageData.secure_url;
  console.log("url: ", imageUrl);
  return imageUrl;
};
