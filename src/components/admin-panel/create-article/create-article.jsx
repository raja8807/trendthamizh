import Layout from "@/components/layout/layout";
import CustomButton from "@/components/ui/custom-button/custom-button";
import CustomInput from "@/components/ui/form-elements/custom-input/custom-input";
import CustomSelect from "@/components/ui/form-elements/custom-select/custom_select";
import CustomTextArea from "@/components/ui/form-elements/custom-text-area/custom-text-area";
import { useFormik } from "formik";

const CreateArticle = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      heading: "",
      category: "",
      content: "",
      bannerImage: null,
      images: [
        {
          id: 0,
          src: "",
          source: "",
        },
      ],
      youtubeLink: null,
      instagramLink: null,
      tags: [],
    },

    onSubmit: (v) => console.log(v),
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      onSubmit={formik?.handleSubmit}
    >
      <CustomInput placeHolder="Title" id="title" formik={formik} /> 
      <CustomInput placeHolder="Heading" id="heading" formik={formik} />
      <CustomSelect
        options={["News", "Sports", "Trending"]}
        id="category"
        formik={formik}
      />
      <CustomTextArea placeHolder="Content" id="content" formik={formik} />

      <CustomInput
        placeHolder="Banner Image Link"
        id="bannerImage"
        formik={formik}
      />

      <div>
        {formik?.values?.images?.map((image, i) => (
          <div key={image?.id} style={{ display: "flex" }}>
            <CustomInput
              placeHolder={`Image Name ${i + 1}`}
              changeHandler={(value) => {
                const currentImages = [...formik?.values?.images];
                const thisImage = formik?.values?.images?.findIndex(
                  (img) => img?.id === image?.id
                );
                currentImages[thisImage].src = value;

                formik?.setFieldValue("images", currentImages);
              }}
            />
            {/* &nbsp; &nbsp;  */}
            <CustomInput
              placeHolder={`Image Link ${i + 1}`}
              changeHandler={(value) => {
                const currentImages = [...formik?.values?.images];
                const thisImage = formik?.values?.images?.findIndex(
                  (img) => img?.id === image?.id
                );
                currentImages[thisImage].source = value;

                formik?.setFieldValue("images", currentImages);
              }}
            />
            {/* {i !== 0 && (
              <CustomButton
                clickHandler={() => {
                  let currentImages = [...formik?.values?.images];
                  const thisImage = formik?.values?.images?.find(
                    (img) => img?.id === image?.id
                  );
                  currentImages = currentImages?.filter(
                    (img) => img?.id !== thisImage?.id
                  );
                  formik?.setFieldValue("images", currentImages);
                }}
              >
                Delete
              </CustomButton>
            )} */}
          </div>
        ))}
        <br />
        <CustomButton
          clickHandler={() => {
            formik.setFieldValue("images", [
              ...formik?.values?.images,
              {
                id: formik?.values?.images?.length,
                src: "",
                source: "",
              },
            ]);
          }}
        >
          Add Image
        </CustomButton>
      </div>

      <CustomInput
        placeHolder="Youtube Link"
        id="youtubeLink"
        formik={formik}
      />
      <CustomInput
        placeHolder="Instagram Link"
        id="instagramLink"
        formik={formik}
      />

      <CustomInput
        placeHolder="Tags"
        changeHandler={(value) => {
          const tags = value
            ?.split(",")
            .map((tag) => tag.trim().toLowerCase().split(" ").join(""))
            .filter((tag) => !!tag);
          formik?.setFieldValue("tags", tags);
        }}
      />
      <CustomButton
        clickHandler={() => {
          formik?.handleSubmit();
        }}
      >
        Create
      </CustomButton>
    </form>
  );
};

export default CreateArticle;
