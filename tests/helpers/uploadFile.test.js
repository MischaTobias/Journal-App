import { describe, expect, test } from "vitest";
import { v2 as cloudinary } from "cloudinary";
import { uploadFile } from "../../src/helpers/uploadFile";

cloudinary.config({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
  secure: true,
});

describe("uploadFile tests", () => {
  test("should upload a file to cloudinary successfully", async () => {
    const imageUrl =
      "https://www.soy502.com/sites/default/files/styles/mobile_full_node/public/2020/Oct/01/huehuetenango_lagunashuehuetenango_guatemala_soy502.jpg";
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "testImage.jpg");

    const url = await uploadFile(file);

    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    const folder = "react-journal-app";

    const publicId = folder + "/" + imageId;

    await cloudinary.api.delete_resources([publicId]);
  });

  test("should return null if no file is provided", async () => {
    const file = new File([], "testImage.jpg");
    const url = await uploadFile(file);
    expect(url).toBe(null);
  });
});
