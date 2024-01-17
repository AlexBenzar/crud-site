import { AddNewProfile, ProfileCard, ProfileForm } from "components/index";
import styles from "./ProfileList.module.scss";
import { Loader, Typography } from "common/index";
import { useGetProfilesQuery } from "store/slices/profileSlice";
import { ProfileType } from "types/index";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { usePostProfileMutation } from "store/slices/profileSlice";

export const ProfileList: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProfilesQuery(id ?? "");
  const [createProfile, { error }] = usePostProfileMutation();
  const [isCreate, setIsCreate] = useState(false);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return data ? (
    <div className={styles.profile}>
      <Typography variant="title-2" className={styles.profile__title}>
        Profiles
      </Typography>
      <div className={styles.profile__list}>
        {data.map((profile: ProfileType) => (
          <div key={profile._id} className={styles.profile__item}>
            <ProfileCard {...profile} />
          </div>
        ))}
        <div className={styles.profile__item}>
          <AddNewProfile onClick={() => setIsCreate(true)} />
        </div>
      </div>
      {isCreate && <ProfileForm isOpen={setIsCreate} id={id as string} changeProfilesFunction={createProfile} error={error} />}
    </div>
  ) : (
    <Typography variant="error-1">Error occur</Typography>
  );
};
