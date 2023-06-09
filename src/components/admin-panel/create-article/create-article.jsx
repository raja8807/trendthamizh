import CustomButton from "@/components/ui/custom-button/custom-button";
import CustomInput from "@/components/ui/form-elements/custom-input/custom-input";
import CustomSelect from "@/components/ui/form-elements/custom-select/custom_select";
import CustomTextArea from "@/components/ui/form-elements/custom-text-area/custom-text-area";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";

import CATEGORIES from "@/helpers/categories/categories";
import { Image } from "react-bootstrap";

const BannerIamgeUploadWidget = ({ category, onSuccess, title }) => {
  useEffect(() => {
    const openWideget = () => {
      window.cloudinary?.openUploadWidget(
        {
          cloudName: "trenthamizh",
          uploadPreset: "trenIamge",
          sources: ["local,url"],
          folder: `${category}/${title}/bannerimage`,
        },
        onSuccess
      );
    };

    window.openCloudinaryWidget = openWideget;
  }, [category, onSuccess, title]);

  return null;
};

const IamgesUploadWidget = ({ category, onSuccess, title }) => {
  useEffect(() => {
    const openWideget = () => {
      window.cloudinary?.openUploadWidget(
        {
          cloudName: "trenthamizh",
          uploadPreset: "trenIamge",
          sources: ["local,url"],
          folder: `${category}/${title}`,
        },
        onSuccess
      );
    };

    window.openCloudinaryWidgetForImages = openWideget;
  }, [category, onSuccess, title]);

  return null;
};

const CreateArticle = (props) => {
  const { type, articleData } = props;

  const isUpdate = type === "update";

  const categories = CATEGORIES.map((category) => category.id);

  const [message, setMessage] = useState("");
  const [newArticle, setNewArticle] = useState(null);

  const formik = useFormik({
    initialValues: isUpdate
      ? { ...articleData }
      : {
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
      setMessage("");
      setNewArticle(null);

      const newArticleToCreate = {
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
        newArticleToCreate?.images.length === 0 ||
        !newArticleToCreate?.bannerImage ||
        !newArticleToCreate?.title ||
        !newArticleToCreate?.heading ||
        !newArticleToCreate?.content ||
        !newArticleToCreate?.tags[0];

      if (errors) {
        setMessage("Error Please fill all the requied fields");
      } else {
        if (isUpdate) {
          axios
            .put("/api/articles", { ...newArticleToCreate })
            .then((res) => {
              setNewArticle(res?.data);
            })
            .catch((err) => {
              console.log("Error------->", err);
              setMessage("Error Something went wrong");
            });
        } else {
          axios
            .post("/api/articles", { ...newArticleToCreate, viewsCount: 0 })
            .then((res) => {
              setNewArticle(res?.data);
            })
            .catch((err) => {
              console.log("Error------->", err);
              setMessage("Error Something went wrong");
            });
        }
      }
    },
  });

  const [tagsString, setTagsString] = useState(formik?.values?.tags?.join(","));

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
          value={formik?.values?.bannerImage?.src}
          changeHandler={(value) => {
            const bannerImage = { ...formik?.values?.bannerImage };
            bannerImage.src = value;
            bannerImage.name = value ? value : "Banner";
            formik?.setFieldValue("bannerImage", bannerImage);
          }}
        />
        &nbsp;
        <CustomButton
          clickHandler={() => {
            window?.openCloudinaryWidget();
          }}
        >
          Upload
        </CustomButton>
        <br />
        <br />
        <Image
          height={90}
          width={160}
          src={formik?.values?.bannerImage?.src}
          alt="bannerImage"
        />
        <BannerIamgeUploadWidget
          onSuccess={(err, res) => {
            console.log("err--->", err);
            if (res.event === "success") {
              // console.log(res.info.secure_url);
              const bannerImage = { ...formik?.values?.bannerImage };

              bannerImage.src = res.info.secure_url;
              bannerImage.name = res.info.secure_url
                ? res.info.secure_url
                : "Banner";
              formik?.setFieldValue("bannerImage", bannerImage);
            }
          }}
          title={formik?.values?.title}
          category={formik?.values?.category}
        />
      </div>

      <div>
        {formik?.values?.images?.map((image, i) => (
          <div key={i} style={{ display: "flex" }}>
            {/* &nbsp; &nbsp;  */}
            <IamgesUploadWidget
              onSuccess={(err, res) => {
                console.log("err--->", err);
                if (res.event === "success") {
                  const currentImages = [...formik?.values?.images];
                  const thisImage = formik?.values?.images?.findIndex(
                    (img) => img?.id === image?.id
                  );

                  // bannerImage.src = res.info.secure_url;
                  currentImages[thisImage].src = res.info.secure_url
                    ? res.info.secure_url
                    : `article_img ${i + 1}`;
                  currentImages[thisImage].source = `img_${i + 1}`;

                  formik?.setFieldValue(
                    "images",
                    currentImages?.filter((i) => !!i.src)
                  );
                }
              }}
              title={formik?.values?.title}
              category={formik?.values?.category}
            />
            <CustomInput
              placeHolder={`Image Link ${i + 1}`}
              value={image?.src}
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
            &nbsp;
            <CustomButton
              clickHandler={() => {
                window?.openCloudinaryWidgetForImages();
              }}
            >
              Upload
            </CustomButton>
            &nbsp; &nbsp; &nbsp;
            <Image height={45} width={80} src={image?.src} alt="bannerImage" />
          </div>
        ))}

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
        value={tagsString}
        changeHandler={(value) => {
          setTagsString(value);
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
