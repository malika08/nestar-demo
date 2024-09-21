import { Box, Stack, Divider, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopPropertyCard = () => {
  return (
    <Stack className={"top-card-box"}>
      <Box
        className={"card-img"}
        style={{ backgroundImage: `url("/img/banner/types/apartment.webp")` }}
      >
        <div>$42000</div>
      </Box>
      <Box className={"info"}>
        <strong className={"title"}>Run Will Buildings</strong>
        <p className={"desc"}>Seoul Gangnam Apartments</p>
        <div className={"options"}>
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span> 3 beds</span>
          </div>

          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span> 7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span> 250 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className="bott">
          <p>rent</p>
          <div className="view-like-box">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">50</Typography>
            <IconButton color="default">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography className="view-cnt">200</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};
export default TopPropertyCard;