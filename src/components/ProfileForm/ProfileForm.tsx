import { Formik, FormikHelpers } from "formik";
import styles from "./ProfileForm.module.scss";
import { Button, Checkbox, CustomForm, CustomSelect, ImgInput, TextInput, Typography } from "common/index";
import { ProfileFormType, ProfileType } from "types/index";
import { profileValidation } from "validation/index";
import { useState } from "react";

export const ProfileForm: React.FC<ProfileFormType> = ({ isOpen, refetch, id = "" }) => {
  const initialValues: ProfileType = {
    _id: "",
    photo: null,
    full_name: "",
    gender: "male",
    birthdate: "",
    city: "",
    user: "",
    __v: 0,
  };
  const [gender, setGender] = useState("male");
  function changeGender(values: ProfileType) {
    values.gender = gender === "male" ? "female" : "male";
    setGender(values.gender);
  }
  const handleSubmit = async ({ ...values }: ProfileType, { setSubmitting }: FormikHelpers<ProfileType>) => {
    console.log(values);
  };
  return (
    <div className={styles.profile}>
      <Formik initialValues={initialValues} validationSchema={profileValidation} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit, setFieldValue, values }) => (
          <CustomForm onSubmit={handleSubmit} className={styles.profile__form} onClick={(e) => e.stopPropagation()}>
            <Typography variant="title-3" className={styles.profile__title}>
              Add new profile
            </Typography>
            <ImgInput
              className={styles.profile__img}
              setFieldValue={setFieldValue}
              image={values.photo as File}
              imageName="photo"
            />
            <TextInput type="text" name="full_name" placeholder="Name" isBlack={true} className={styles.profile__input} />
            <div className={styles.profile__gender}>
              <Typography variant="body-1" className={styles.profile__text}>
                Gender
              </Typography>
              <div className={styles.profile__checkboxes}>
                <Checkbox
                  text="Male"
                  className={styles.profile__checkbox}
                  checked={gender == "male"}
                  onChange={() => changeGender(values)}
                  onBlur={() => {}}
                />
                <Checkbox
                  text="Female"
                  className={styles.profile__checkbox}
                  checked={gender == "female"}
                  onChange={() => changeGender(values)}
                  onBlur={() => {}}
                />
              </div>
            </div>
            <TextInput type="date" name="birthdate" isBlack={true} className={styles.profile__input} />
            <CustomSelect name="city" className={styles.profile__input} />
            <div className={styles.profile__buttons}>
              <Button text="Save" isBlack={true} isSubmitting={isSubmitting} className={styles.profile__button} />
              <Button text="Close" isBlack={true} onClick={() => isOpen(false)} />
            </div>
            {/* {error && "data" in error && <Typography variant="error-1">{error.data.message}</Typography>} */}
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
