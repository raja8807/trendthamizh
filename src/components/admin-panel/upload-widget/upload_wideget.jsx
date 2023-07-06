import CustomButton from "@/components/ui/custom-button/custom-button";
import { useEffect, useRef } from "react";

const UploadWidget = () => {
  useEffect(() => {
    const handleSucess = (result) => {
      console.log(result);
    };

    const openWideget = () => {
      window.cloudinary?.openUploadWidget(
        {
          cloudName: "trenthamizh",
          uploadPreset: "trenIamge",
          sources: ["local,url"],
          folder: "bannerIamge",
          success: handleSucess,
        },
        (err, res) => {
          console.log("err----->", err);
          console.log("res----->", res);
        }
      );
    };

    window.openCloudinaryWidget = openWideget;
  }, []);

  return null;
};

export default UploadWidget;
