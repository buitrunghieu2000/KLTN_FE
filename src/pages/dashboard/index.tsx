import React from "react";
import Chart from "../../components/chart/Chart";
import FeauturedInfo from "../../components/FeaturedInfo";
import useAuth from "../../store/auth";
import usePost from "../../store/post";
import "./style.css";
type Props = {};

const Dashboard = (props: Props) => {
  const [statePost, actionPost] = usePost();
  const [stateAuth, actionAuth] = useAuth();
  const user = {
    page: 0,
    limit: 100,
  };
  const post = {
    status: 2,
    page: 0,
    limit: 100,
  };

  React.useEffect(() => {
    (async () => {
      await actionPost.getRevanueAsync();
      await actionAuth.getAllUserAsync(user);
      await actionPost.getAllPostAsync(post);
    })();
  }, []);
  const revanue = [
    {
      name: "Jan",
      Revanue: statePost.revanue?.One,
    },
    {
      name: "Feb",
      Revanue: statePost.revanue?.Two,
    },
    {
      name: "Mar",
      Revanue: statePost.revanue?.Three,
    },
    {
      name: "Apr",
      Revanue: statePost.revanue?.Four,
    },
    {
      name: "May",
      Revanue: statePost.revanue?.Five,
    },
    {
      name: "Jun",
      Revanue: statePost.revanue?.Six,
    },
    {
      name: "Jul",
      Revanue: statePost.revanue?.Seven,
    },
    {
      name: "Agu",
      Revanue: statePost.revanue?.Eight,
    },
    {
      name: "Sep",
      Revanue: statePost.revanue?.Nine,
    },
    {
      name: "Oct",
      Revanue: statePost.revanue?.Ten,
    },
    {
      name: "Nov",
      Revanue: statePost.revanue?.Elevent,
    },
    {
      name: "Dec",
      Revanue: statePost.revanue?.Twelve,
    },
  ];

  return (
    <div>
      <FeauturedInfo
        totalRevanue={statePost.totalrevanue}
        totalPost={statePost.totalPost}
        totalUser={stateAuth.totalUser}
      />
      <Chart data={revanue} title="Revanue" grid dataKey="Revanue" />
    </div>
  );
};

export default Dashboard;
