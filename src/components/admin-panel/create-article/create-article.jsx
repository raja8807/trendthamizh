import Layout from "@/components/layout/layout";
import CustomButton from "@/components/ui/custom-button/custom-button";
import CustomInput from "@/components/ui/form-elements/custom-input/custom-input";
import CustomSelect from "@/components/ui/form-elements/custom-select/custom_select";
import CustomTextArea from "@/components/ui/form-elements/custom-text-area/custom-text-area";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";

import CATEGORIES from "@/helpers/categories/categories";

const CreateArticle = () => {
  const categories = CATEGORIES.map(category => category.id);

  const [message, setMessage] = useState("");
  const [newArticle, setNewArticle] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      heading: "",
      category: categories[0],
      content: "",
      bannerImage: {
        name: "",
        src: "",
      },
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

    onSubmit: (values) => {
      // console.log(values);
      setMessage("");
      setNewArticle(null);

      const newArticle = {
        ...values,
        bannerImage:
          values?.bannerImage?.src && values?.bannerImage?.name
            ? values?.bannerImage
            : null,
        images: values.images?.filter(
          (imgObj) => imgObj?.source && imgObj?.src
        ),
      };

      const errors =
        newArticle?.images.length === 0 ||
        !newArticle?.bannerImage ||
        !newArticle?.title ||
        !newArticle?.heading ||
        !newArticle?.content ||
        !newArticle?.tags;

      if (errors) {
        setMessage("Error Please fill all the requied fields");
      } else {
        axios
          .post("/api/articles", { ...values, viewsCount: 0 })
          .then((res) => {
            setNewArticle(res?.data);
          })
          .catch((err) => {
            console.log("Error------->", err);
            setMessage("Error Something went wrong");
          });
      }
    },
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      onSubmit={formik?.handleSubmit}
    >
      <CustomInput placeHolder="Title" id="title" formik={formik} />
      <CustomInput placeHolder="Heading" id="heading" formik={formik} />
      <CustomSelect options={categories} id="category" formik={formik} />
      <CustomTextArea placeHolder="Content" id="content" formik={formik} />

      <div>
        <CustomInput
          placeHolder="Banner Image Link"
          changeHandler={(value) => {
            const bannerImage = { ...formik?.values?.bannerImage };
            bannerImage.src = value;
            bannerImage.name = value ? value : "Banner";
            formik?.setFieldValue("bannerImage", bannerImage);
          }}
          // id="bannerImage"
          // formik={formik}
        />
        {/* <CustomInput
          placeHolder="Banner Image name"
          changeHandler={(value) => {
            const bannerImage = { ...formik?.values?.bannerImage };
            formik?.setFieldValue("bannerImage", bannerImage);
          }}
        /> */}
      </div>

      <div>
        {formik?.values?.images?.map((image, i) => (
          <div key={image?.id} style={{ display: "flex" }}>
            {/* &nbsp; &nbsp;  */}
            <CustomInput
              placeHolder={`Image Link ${i + 1}`}
              changeHandler={(value) => {
                const currentImages = [...formik?.values?.images];
                const thisImage = formik?.values?.images?.findIndex(
                  (img) => img?.id === image?.id
                );
                currentImages[thisImage].src = value
                  ? value
                  : `article_img ${i + 1}`;
                currentImages[thisImage].source = `img_${i + 1}`;

                formik?.setFieldValue(
                  "images",
                  currentImages?.filter((i) => !!i.src)
                );
              }}
            />
            <br />
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
      {message}
      {newArticle && (
        <Link href={`/article/${newArticle?.title}`}>{newArticle?.title}</Link>
      )}
    </form>
  );
};

export default CreateArticle;
