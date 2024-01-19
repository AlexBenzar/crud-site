import { AddNewProfile, ProfileCard, ProfileForm, Sort } from "components/index";
import styles from "./ProfileList.module.scss";
import { Loader, Typography } from "common/index";
import { useGetProfilesQuery } from "store/slices/profileSlice";
import { ProfileType } from "types/index";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { usePostProfileMutation } from "store/slices/profileSlice";

export const ProfileList: React.FC = () => {
  const { id } = useParams();
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching } = useGetProfilesQuery({ id: id || "", order, search });
  const [createProfile, { error }] = usePostProfileMutation();
  const [isCreate, setIsCreate] = useState(false);

  return data ? (
    <div className={styles.profile}>
      <Typography variant="title-2" className={styles.profile__title}>
        Profiles
      </Typography>
      <Sort search={search} setSearch={setSearch} setOrder={setOrder} order={order} />
      <div className={styles.profile__list}>
        {!isLoading || !isFetching ? (
          data.map((profile: ProfileType) => (
            <div key={profile._id} className={styles.profile__item}>
              <ProfileCard {...profile} />
            </div>
          ))
        ) : (
          <Loader />
        )}
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
