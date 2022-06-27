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
import "./style.css";

type Props = {};

const PostDetail = (props: Props) => {
  const [statePost, actionPost] = usePost();
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

  React.useEffect(() => {
    (async () => {
      const result = await commentsApi.getComments(id);
      const { data } = result;
      setComments(data);
    })();
  }, []);

  return (
    <div className="postWrapper" style={{ marginTop: "10px" }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ImageSlider images={statePost.postDetail?.image} />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              {" "}
              <Card sx={{ minHeight: 500 }}>
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
              <Card sx={{ minHeight: 500 }}>
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
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                          <React.Fragment>
                            {
                              " — I'll be in your neighborhood doing errands this…"
                            }
                            <IconButton>
                              <Delete />
                            </IconButton>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
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
