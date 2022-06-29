import { List, Lock, Delete } from "@mui/icons-material";
import { Chip, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListShow from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import commentsApi from "../../api/comments/commentsApi";
import ImageSlider from "../../components/ImageSlider";
import BasicModal from "../../components/Modal";
import { ENUM_POST_STATUS } from "../../constant/base.constant";
import usePost from "../../store/post";
import useReport from "../../store/report";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./style.css";
import { notifyError, notifySuccess } from "../../utils/notify";

type Props = {};

const PostDetail = (props: Props) => {
  const [statePost, actionPost] = usePost();
  const [stateReport, actionReport] = useReport();
  const [open, setOpen] = React.useState(false);
  const [comments, setComments] = useState<any>([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useHistory();
  const { id } = useParams<any>();
  React.useEffect(() => {
    (async () => {
      await actionPost.getPostByIdAsync(id);
    })();
  }, []);

  const handleLockPost = (postId: string) => {
    (async () => {
      await actionPost.updatePostStatusAsync(postId, ENUM_POST_STATUS.CANCELED);
      history.push("/postlist");
    })();
  };

  const params = {
    postID: id,
  };

  React.useEffect(() => {
    (async () => {
      const result = await commentsApi.getComments(params);
      const { data } = result;
      setComments(data);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      await actionReport.getReportByIdAsync({
        page: 0,
        limit: 10,
        idPost: id,
      });
    })();
  }, []);

  const handleDeleteComment = async (commentId: string) => {
    const result = await commentsApi.deleteComments({ commentId: commentId });
    if (result.status === 200) {
      notifySuccess("Success");
    } else notifyError("Fail");
    console.log("result", result);
  };
  return (
    <div className="postWrapper" style={{ marginTop: "10px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/postlist">
          Post
        </Link>
        <Typography color="text.primary">DetailPost</Typography>
      </Breadcrumbs>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ImageSlider images={statePost.postDetail?.image} />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              {" "}
              <Card
                sx={{ minHeight: 500 }}
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      src={
                        statePost.postDetail?.avatarOfPoster === "nope"
                          ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                          : statePost.postDetail?.avatarOfPoster
                      }
                    ></Avatar>
                  }
                  title={statePost.postDetail?.nameOfPoster}
                  subheader={dayjs(statePost.postDetail?.dateStartPost).format(
                    "DD/MM/YYYY"
                  )}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={`${statePost.postDetail?.image[0]}`}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    Title: {statePost.postDetail?.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Description: {statePost.postDetail?.content}
                  </Typography>
                  <br />
                  <br />
                  <Chip label={`${statePost.postDetail?.typePost}`} />
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleLockPost(id)}
                  >
                    <Lock />
                  </IconButton>
                  <IconButton aria-label="share" onClick={handleOpen}>
                    <List />
                  </IconButton>
                  <BasicModal open={open} close={handleClose} />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{ minHeight: 500 }}
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                {comments.length === 0 ? (
                  <p style={{ textAlign: "center" }}>
                    This post has no comments yet...
                  </p>
                ) : (
                  <ListShow
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                    }}
                  >
                    {comments.map((items: any, index: any) => (
                      <>
                        {" "}
                        <ListItem alignItems="flex-start" key={index}>
                          <ListItemAvatar>
                            <Avatar
                              alt="Remy Sharp"
                              src={items.idUserComment.avatar}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <>
                                {items.idUserComment.name}{" "}
                                {dayjs(items.createdAt).format("DD/MM/YYYY")}
                              </>
                            }
                            secondary={
                              <React.Fragment>
                                {items.text}
                                <IconButton
                                  onClick={() => {
                                    handleDeleteComment(items._id);
                                  }}
                                >
                                  <Delete />
                                </IconButton>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </>
                    ))}
                  </ListShow>
                )}
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostDetail;
