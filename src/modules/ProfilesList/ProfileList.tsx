import { AddNewProfile, Pagination, ProfileCard, ProfileForm, Sort } from "components/index";
import styles from "./ProfileList.module.scss";
import { Loader, Typography } from "common/index";
import { useGetProfilesQuery } from "store/slices/profileSlice";
import { ProfileType } from "types/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePostProfileMutation } from "store/slices/profileSlice";

export const ProfileList: React.FC<{ DisplaySort?: boolean }> = ({ DisplaySort = true }) => {
  const { id } = useParams();
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching, isError } = useGetProfilesQuery({ id: id || "", order, search });
  const [createProfile, { error }] = usePostProfileMutation();
  const [isCreate, setIsCreate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersAmount] = useState(7);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  if (isError) {
    return <Typography variant="error-1">Error occur</Typography>;
  }

  return data ? (
    <div className={styles.profile}>
      <Typography variant="title-2" className={styles.profile__title}>
        Profiles
      </Typography>
      {DisplaySort && <Sort setSearch={setSearch} setOrder={setOrder} />}
      <div className={styles.profile__list}>
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <>
            {data
              .filter((_item, index) => index >= currentPage * usersAmount - usersAmount && index < currentPage * usersAmount)
              .map((profile: ProfileType) => (
                <div key={profile._id} className={styles.profile__item}>
                  <ProfileCard {...profile} />
                </div>
              ))}
            <div className={styles.profile__item}>
              <AddNewProfile onClick={() => setIsCreate(true)} />
            </div>
          </>
        )}
      </div>
      <Pagination
        page={currentPage}
        setPage={setCurrentPage}
        total={Math.ceil(data.length / usersAmount)}
        className={styles.profile__pagination}
      />
      {isCreate && <ProfileForm isOpen={setIsCreate} id={id as string} changeProfilesFunction={createProfile} error={error} />}
    </div>
  ) : (
    <Loader />
  );
};
