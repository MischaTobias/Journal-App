export const uploadFile = async (file) => {
  if (!file) throw new Error("No file selected");

  const cloudUrl = import.meta.env.VITE_CLOUDINARY_URL;

  const formData = new FormData();
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );
  formData.append("file", file);

  try {
    const response = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Error uploading file");

    const uploadResponse = await response.json();
    return uploadResponse.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
