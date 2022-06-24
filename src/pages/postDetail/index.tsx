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
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { List, Lock } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import ImageSlider from "../../components/ImageSlider";
import BasicModal from "../../components/Modal";
import usePost from "../../store/post";
import "./style.css";
import { ENUM_POST_STATUS } from "../../constant/base.constant";

type Props = {};

const PostDetail = (props: Props) => {
  const [statePost, actionPost] = usePost();
  const [open, setOpen] = React.useState(false);
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
              <Card sx={{ maxWidth: 300, height: 500 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
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
              <Card variant="outlined" style={{ zIndex: "10" }}>
                <ListShow
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    height: 400,
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
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            to Scott, Alex, Jennifer
                          </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Sandra Adams
                          </Typography>
                          {
                            " — Do you have Paris recommendations? Have you ever…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </ListShow>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostDetail;
