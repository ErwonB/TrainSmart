import React from "react";
import { useMeQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";
import { Layout } from "../components/Layout";
import { ChangeProfile } from "../components/ChangeProfile";

const Profile: React.FC<{}> = ({}) => {
  const { data: login } = useMeQuery();
  return (
    <Layout>
      <ChangeProfile profile={login?.me?.profile ? login.me.profile : null} />
    </Layout>
  );
};

export default withApollo({ ssr: false })(Profile);
