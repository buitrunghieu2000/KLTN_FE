import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import useReport from "../../store/report";
import { IResReport } from "../../api/report/reportRes.interface";
import dayjs from "dayjs";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  close,
}: {
  open: boolean;
  close: Function;
}) {
  const [stateReport] = useReport();

  return (
    <div>
      <Modal
        open={open}
        onClose={() => close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {stateReport.reportList.length === 0 ? (
              <p>This post has no report...</p>
            ) : (
              stateReport.reportList.map((item: IResReport, index: any) => (
                <>
                  {" "}
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src={
                          item.avatar === "nope"
                            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                            : item.avatar
                        }
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.nameReporter}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {dayjs(item.createdAt).format("DD/MM/YYYY")}
                          </Typography>
                          &nbsp;{item.reason}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))
            )}
          </List>
        </Box>
      </Modal>
    </div>
  );
}
